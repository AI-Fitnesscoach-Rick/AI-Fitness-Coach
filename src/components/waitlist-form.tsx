"use client";

import { track } from "@vercel/analytics";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      if (!formspreeEndpoint) {
        throw new Error("Het formulier is nog niet gekoppeld aan Formspree.");
      }

      const params = new URLSearchParams(window.location.search);
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email,
          website,
          bron: params.get("utm_source") || "landing",
          utm_source: params.get("utm_source") || "",
          utm_medium: params.get("utm_medium") || "",
          utm_campaign: params.get("utm_campaign") || "",
          utm_content: params.get("utm_content") || "",
          referrer: document.referrer || "",
          pagina: window.location.href,
        }),
      });
      const data = (await response.json().catch(() => null)) as { errors?: { message?: string }[] } | null;

      if (!response.ok) {
        throw new Error(data?.errors?.[0]?.message || "Aanmelden lukt nu niet. Probeer het zo opnieuw.");
      }

      track("waitlist_conversion", { location: "landing_waitlist" });
      setStatus("success");
      setMessage("Je staat op de lijst. We houden je op de hoogte.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Aanmelden lukt nu niet. Probeer het zo opnieuw.");
    }
  }

  return (
    <form className="waitlist-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="email">E-mailadres</label>
      <input
        id="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Jouw e-mailadres"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label className="sr-only" htmlFor="website">Website</label>
      <input
        id="website"
        className="honeypot"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Bezig..." : "Ontvang Early Access"}
        <span aria-hidden="true">&rarr;</span>
      </button>
      <p className={`form-message ${status === "error" ? "form-error" : ""}`} aria-live="polite">
        {message || "Geen spam. Alleen updates over ontwikkeling en early access."}
      </p>
    </form>
  );
}
