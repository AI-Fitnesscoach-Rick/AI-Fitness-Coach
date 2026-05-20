import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CampaignTracker } from "@/components/campaign-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ai-fitness-coach.vercel.app"),
  title: "AI Fitness Coach | Sport consistenter met persoonlijke AI coaching",
  description:
    "Een premium AI fitness app voor jongeren en jongvolwassenen die workouts, voeding en herstel persoonlijk afstemt op je doelen, energie en smartwatch data.",
  openGraph: {
    title: "AI Fitness Coach",
    description: "Persoonlijke AI coaching voor workouts, voeding, herstel en consistentie.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fitness Coach",
    description: "Sport consistenter met persoonlijke AI coaching voor workouts, voeding en herstel.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <CampaignTracker />
        <Analytics />
      </body>
    </html>
  );
}
