import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  ["AI coach chat", "Chat met een persoonlijke AI coach die je motivatie, planning en voortgang begrijpt."],
  ["Workout tracking", "Volg workouts, prestaties en consistentie zonder ingewikkelde schema's."],
  ["Voeding analyse via foto's", "Upload een maaltijd en krijg praktische feedback op basis van je doelen."],
  ["Smartwatch koppelingen", "Gebruik data van Apple Watch, Garmin en Fitbit voor betere coaching."],
  ["Herstel score", "Slaap, stress en energie worden vertaald naar een duidelijk hersteladvies."],
  ["Blessurepreventie", "Krijg techniek-uitleg en slimme waarschuwingen voordat je te hard gaat."],
];

const phoneScreens = [
  {
    title: "AI Coach",
    lines: ["Hoe voel je je vandaag?", "Beetje moe, maar wil bewegen.", "Dan maken we er 28 minuten van."],
    action: "Plan aanpassen",
  },
  {
    title: "Workout",
    lines: ["Upper Body", "Banddrukken 4 x 8", "Roeien 4 x 10", "Core & Mobility 8 min"],
    action: "Start workout",
  },
  {
    title: "Voeding",
    lines: ["1.824 kcal", "Eiwitten 108 / 130g", "Koolhydraten 190 / 250g", "Perfecte balans vandaag"],
    action: "Bekijk advies",
  },
];

const proofPoints = [
  ["30 sec", "om je training te plannen"],
  ["24/7", "AI coach beschikbaar"],
  ["1 plan", "voor training, voeding en herstel"],
];

function LogoMark() {
  return <div className="logo-mark" aria-hidden="true"><span /></div>;
}

function PhoneMockup({ screen, large = false }: { screen: (typeof phoneScreens)[number]; large?: boolean }) {
  return (
    <div className={large ? "phone phone-large" : "phone"}>
      <div className="phone-speaker" />
      <div className="phone-status"><span>10:09</span><span>5G</span></div>
      <div className="phone-title">{screen.title}</div>
      <div className="phone-stack">
        {screen.lines.map((line, index) => (
          <div className={index === 0 ? "app-card app-card-hero" : "app-card"} key={line}>{line}</div>
        ))}
      </div>
      <button className="app-action">{screen.action}</button>
      <div className="phone-nav"><span /><span /><span /><span /></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="AI Fitness Coach"><LogoMark /><span>AI Fitness Coach</span></a>
        <nav aria-label="Hoofdnavigatie">
          <a href="#features">Functies</a>
          <a href="#coach">AI coaching</a>
          <a href="#integraties">Smartwatch</a>
          <a href="#waitlist">Early Access</a>
        </nav>
        <a className="header-cta" href="#waitlist">Ontvang Early Access</a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <h1>Sport consistenter met een AI coach <span>die met je meebeweegt</span></h1>
          <p>Voor jongeren en jongvolwassenen die wel willen sporten, maar vastlopen op motivatie, structuur en te veel fitnessadvies tegelijk.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#waitlist">Ontvang Early Access <span aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="trust-row" aria-label="Productbeloftes">
            <span>Gebouwd voor jouw ritme</span>
            <span>Geen hardcore fitnessdruk</span>
            <span>Early access opent binnenkort</span>
          </div>
          <div className="proof-grid" aria-label="Waarom aanmelden">
            {proofPoints.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
        <div className="hero-visual" aria-label="AI Fitness Coach app voorbeelden">
          <PhoneMockup screen={phoneScreens[0]} large />
          <PhoneMockup screen={phoneScreens[1]} large />
        </div>
      </section>

      <section className="mockups section-shell" aria-labelledby="mockups-title">
        <h2 id="mockups-title">Alles wat je nodig hebt in een app</h2>
        <div className="mockup-row">{phoneScreens.map((screen) => <PhoneMockup key={screen.title} screen={screen} />)}</div>
      </section>

      <section className="features section-shell" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <h2 id="features-title">Ontworpen voor jouw consistentie</h2>
          <p>De app haalt ruis weg en geeft je elke dag een helder plan dat past bij je echte leven.</p>
        </div>
        <div className="feature-grid">
          {features.map(([title, text]) => <article className="feature-item" key={title}><div className="feature-dot" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="coach section-shell" id="coach" aria-labelledby="coach-title">
        <div className="section-heading align-left">
          <h2 id="coach-title">AI coaching die <span>meebeweegt</span> met jou</h2>
          <p>De AI past workouts, voeding en herstel automatisch aan op basis van doelen, planning, energie, voortgang en smartwatch data.</p>
          <ul className="check-list">
            <li>AI personal trainer chat</li>
            <li>Persoonlijke workouts per week</li>
            <li>Techniek uitleg bij oefeningen</li>
            <li>AI feedback op basis van prestaties</li>
          </ul>
        </div>
        <div className="orbit" aria-label="AI signalen">
          <div className="orbit-core"><LogoMark /></div>
          <div className="signal signal-1">Slaap 7u 45m</div>
          <div className="signal signal-2">Stress laag</div>
          <div className="signal signal-3">Herstel 85%</div>
          <div className="signal signal-4">Energie goed</div>
        </div>
      </section>

      <section className="wearables section-shell" id="integraties" aria-labelledby="wearables-title">
        <div className="section-heading align-left">
          <h2 id="wearables-title">Naadloze koppeling met je smartwatch</h2>
          <p>Verbind Apple Watch, Garmin of Fitbit. AI gebruikt slaap, stress en activiteit om je trainingsplan slimmer te maken.</p>
        </div>
        <div className="watch-row">
          {["Apple Watch", "Garmin", "Fitbit"].map((name, index) => <div className={index === 1 ? "watch round-watch" : "watch"} key={name}><span>{name}</span><strong>{index === 0 ? "45/60 min" : index === 1 ? "Herstel goed" : "12.345 stappen"}</strong><div className="watch-bars"><i /><i /><i /></div></div>)}
        </div>
      </section>

      <section className="nutrition section-shell" id="voeding" aria-labelledby="nutrition-title">
        <div className="meal-card" aria-label="Voeding analyse voorbeeld">
          <div className="meal-photo"><div className="plate"><span /><span /><span /></div></div>
          <div className="macro-card"><h3>Voedingsanalyse</h3><p><span>Kcal</span><strong>632 kcal</strong></p><p><span>Eiwitten</span><strong>42g</strong></p><p><span>Koolhydraten</span><strong>58g</strong></p><p><span>Vetten</span><strong>22g</strong></p><em>Perfecte balans.</em></div>
        </div>
        <div className="section-heading align-left"><h2 id="nutrition-title">Voeding analyse via <span>foto's</span></h2><p>Maak een foto van je maaltijd en krijg direct inzicht in voedingswaarden en praktische aanbevelingen.</p></div>
      </section>

      <section className="waitlist section-shell" id="waitlist" aria-labelledby="waitlist-title">
        <h2 id="waitlist-title">Blijf op de hoogte van <span>de ontwikkelingen</span></h2>
        <p>AI Fitness Coach is bijna klaar. Laat je e-mailadres achter, krijg updates en ontvang als eerste toegang wanneer de beta opent.</p>
        <WaitlistForm />
      </section>

      <footer className="footer section-shell">
        <a href="#top" className="brand" aria-label="AI Fitness Coach"><LogoMark /><span>AI Fitness Coach</span></a>
        <nav aria-label="Footer navigatie"><a href="#features">Functies</a><a href="#coach">AI coaching</a><a href="#integraties">Smartwatch</a><a href="#waitlist">Early Access</a></nav>
        <p>&copy; 2026 AI Fitness Coach. Alle rechten voorbehouden.</p>
      </footer>
    </main>
  );
}
