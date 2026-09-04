import { useMemo, useState } from "react";

const DEFAULT_RATE = 90.5; // 1 EUR in INR — editable by the user, see note below

const visaChecklist = [
  "Valid passport (6+ months validity beyond travel dates)",
  "Schengen visa application form, completed and signed",
  "Two recent passport-size photographs (Schengen spec)",
  "Confirmed round-trip flight itinerary",
  "Hotel bookings / proof of accommodation for full stay",
  "Travel insurance with minimum €30,000 medical coverage",
  "Bank statements (last 3–6 months) and proof of funds",
  "Cover letter stating purpose and dates of travel",
  "Employment letter / business registration (as applicable)",
];

const transportTiers = [
  { name: "Single Ticket (t+)", detail: "Valid for one journey", priceINR: 190 },
  { name: "Carnet (10 Tickets)", detail: "Ideal for a few days", priceINR: 1500 },
  { name: "Paris Visite Pass", detail: "Unlimited, 1–5 days", priceINR: 1200 },
];

const tips = [
  {
    icon: "restaurant",
    title: "Dining Hours",
    body: "Parisians dine late. Expect dinner service to start around 7:30 PM, similar to Indian dining times.",
  },
  {
    icon: "wb_sunny",
    title: "Weather & Layering",
    body: "Parisian weather can be unpredictable. Layering is key, especially moving between warm museums and crisp evening walks.",
  },
  {
    icon: "language",
    title: "Basic French",
    body: "A simple 'Bonjour' (Hello) and 'Merci' (Thank you) goes a long way toward warm service.",
  },
  {
    icon: "credit_card",
    title: "Payments",
    body: "Cards are widely accepted, but carry some euros for small purchases like a morning croissant.",
  },
  {
    icon: "water_drop",
    title: "Drinking Water",
    body: "Tap water is safe to drink in Paris. Many public fountains provide free, clean water - perfect for refilling bottles.",
  },
  {
    icon: "local_pharmacy",
    title: "Pharmacies",
    body: "Green cross signs indicate pharmacies. Many medicines available over-the-counter in India require prescriptions in France.",
  },
];

export default function Practical() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold">
        Practical Information
      </h1>
      <p className="text-muted mt-3 max-w-2xl">
        Essential details for a seamless Parisian experience, curated for the
        modern Indian traveler.
      </p>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-10">
        <div className="space-y-14">
          {/* Getting to Paris */}
          <section>
            <h2 className="font-display text-2xl font-bold flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-gold">
                flight_takeoff
              </span>
              Getting to Paris
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <InfoCard
                icon="flight"
                title="By Air"
                body="Direct flights from major Indian cities (Delhi, Mumbai) arrive at Charles de Gaulle Airport (CDG). The RoissyBus or RER B train offers direct connections to the city center."
              />
              <InfoCard
                icon="train"
                title="By Train"
                body="Arriving from elsewhere in Europe? The Eurostar arrives at Gare du Nord, a central hub with easy access to all parts of Paris via the Metro network."
              />
            </div>
          </section>

          {/* Public Transport */}
          <section>
            <h2 className="font-display text-2xl font-bold flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-gold">
                directions_subway
              </span>
              Public Transport
            </h2>
            <div className="border border-line rounded-card p-6 bg-white">
              <p className="text-sm text-muted mb-5">
                The Paris Metro is efficient and extensive. We recommend a
                Navigo card for longer stays, or a pack of t+ tickets for
                shorter visits.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {transportTiers.map((t) => (
                  <div
                    key={t.name}
                    className="border border-line rounded-card p-4 text-center"
                  >
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted mt-1">{t.detail}</p>
                    <p className="font-display text-lg font-bold mt-2">
                      ₹{t.priceINR.toLocaleString("en-IN")}*
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-4">
                *Prices are approximate and subject to exchange rate
                fluctuations.
              </p>
            </div>
          </section>

          {/* Visa checklist — interactive */}
          <section>
            <h2 className="font-display text-2xl font-bold flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-gold">
                fact_check
              </span>
              Schengen Visa Checklist for Indian Passport Holders
            </h2>
            <p className="text-sm text-muted mb-5">
              Tick items off as you prepare your application. This is general
              guidance, not legal advice — always confirm current
              requirements with the{" "}
              <a
                href="https://www.vfsglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                official visa application center
              </a>
              .
            </p>
            <VisaChecklist />
          </section>

          {/* Tips */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-5">
              Top Tips for Indian Travelers
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {tips.map((t) => (
                <div key={t.title} className="flex gap-3">
                  <span className="material-symbols-outlined text-gold">
                    {t.icon}
                  </span>
                  <div>
                    <p className="font-semibold">{t.title}</p>
                    <p className="text-sm text-muted mt-1">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Indian-Specific Practical Info */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-5">
              Essential Information for Indian Travelers
            </h2>
            <div className="space-y-6">
              <div className="border border-line rounded-card p-6 bg-white">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gold">
                    sim_card
                  </span>
                  SIM Cards & Connectivity
                </h3>
                <p className="text-sm text-muted mb-3">
                  Prepaid SIM cards are available at CDG airport. Major carriers
                  include Orange, SFR, and Bouygues. Expect to pay €20-40 for a
                  tourist SIM with data. Indian roaming can be expensive, so a
                  local SIM is recommended.
                </p>
                <p className="text-xs text-muted">
                  <span className="font-semibold">Tip:</span> Your phone must be
                  unlocked to use a French SIM. Check with your Indian provider
                  before traveling.
                </p>
              </div>

              <div className="border border-line rounded-card p-6 bg-white">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gold">
                    electrical_services
                  </span>
                  Power & Electronics
                </h3>
                <p className="text-sm text-muted mb-3">
                  France uses Type E plugs (2 round pins) with 230V voltage.
                  Indian travelers need a universal travel adapter. Most modern
                  Indian devices (laptops, phone chargers) support 220-240V, but
                  check older appliances.
                </p>
                <p className="text-xs text-muted">
                  <span className="font-semibold">Tip:</span> Bring a power bank
                  - you'll be taking lots of photos and using maps frequently.
                </p>
              </div>

              <div className="border border-line rounded-card p-6 bg-white">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gold">
                    restaurant_menu
                  </span>
                  Food Preferences
                </h3>
                <p className="text-sm text-muted mb-3">
                  Vegetarian options are widely available, especially in Indian
                  restaurants and Middle Eastern cuisine. Many French dishes can
                  be modified for vegetarians. Halal food is available in areas
                  with significant Muslim populations.
                </p>
                <p className="text-xs text-muted">
                  <span className="font-semibold">Tip:</span> Learn to say "Je
                  suis végétarien" (I am vegetarian) in French - it's very
                  helpful!
                </p>
              </div>

              <div className="border border-line rounded-card p-6 bg-white">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gold">
                    location_city
                  </span>
                  Indian Community in Paris
                </h3>
                <p className="text-sm text-muted mb-3">
                  Paris has a vibrant Indian community concentrated in areas
                  like La Chapelle (18th arrondissement) and parts of the 13th
                  arrondissement. You'll find Indian grocery stores,
                  restaurants, and cultural centers. The Indian Embassy is
                  located in the 16th arrondissement.
                </p>
                <p className="text-xs text-muted">
                  <span className="font-semibold">Tip:</span> Visit La Chapelle
                  for authentic Indian groceries and familiar ingredients when
                  you're craving home cooking.
                </p>
              </div>

              <div className="border border-line rounded-card p-6 bg-white">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gold">
                    payments
                  </span>
                  Money Matters
                </h3>
                <p className="text-sm text-muted mb-3">
                  While cards are widely accepted, it's wise to carry some euros
                  for small vendors, markets, and tips. ATMs are widely
                  available. Inform your Indian bank about your travel dates to
                  avoid card blocks. Currency exchange services are available at
                  airports and major train stations.
                </p>
                <p className="text-xs text-muted">
                  <span className="font-semibold">Tip:</span> Avoid exchanging
                  money at hotels - rates are usually unfavorable. Use bank ATMs
                  or authorized exchange offices.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: currency converter + embassy */}
        <aside className="space-y-6 h-fit lg:sticky lg:top-24">
          <CurrencyConverter />

          <div className="border border-line rounded-card p-6 bg-white">
            <h3 className="font-display font-bold flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-gold">
                emergency
              </span>
              Indian Embassy, Paris
            </h3>
            <p className="text-sm text-muted">
              15 Rue Alfred Dehodencq, 75016 Paris
            </p>
            <p className="text-sm text-muted mt-1">
              Emergency line: +33 1 40 50 70 70
            </p>
            <p className="text-sm text-muted mt-1">
              General emergencies in France: 112
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, body }) {
  return (
    <div className="border border-line rounded-card p-5 bg-white">
      <p className="font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-gold">{icon}</span>
        {title}
      </p>
      <p className="text-sm text-muted mt-2">{body}</p>
    </div>
  );
}

function VisaChecklist() {
  const [checked, setChecked] = useState(() => new Set());

  function toggle(item) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  }

  const progress = Math.round((checked.size / visaChecklist.length) * 100);

  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold">Document progress</p>
        <p className="text-sm font-semibold">{progress}%</p>
      </div>
      <div className="h-2 bg-cream-soft rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-gold transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <ul className="space-y-3">
        {visaChecklist.map((item) => (
          <li key={item}>
            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={checked.has(item)}
                onChange={() => toggle(item)}
                className="mt-0.5 accent-[#1b1c19]"
              />
              <span className={checked.has(item) ? "line-through text-muted" : ""}>
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CurrencyConverter() {
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [amount, setAmount] = useState(100);
  const [direction, setDirection] = useState("EUR_TO_INR");

  const converted = useMemo(() => {
    const value = Number(amount) || 0;
    return direction === "EUR_TO_INR" ? value * rate : value / rate;
  }, [amount, rate, direction]);

  function swap() {
    setDirection((d) => (d === "EUR_TO_INR" ? "INR_TO_EUR" : "EUR_TO_INR"));
  }

  const fromLabel = direction === "EUR_TO_INR" ? "EUR" : "INR";
  const toLabel = direction === "EUR_TO_INR" ? "INR" : "EUR";

  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <h3 className="font-display font-bold flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-gold">
          currency_exchange
        </span>
        Currency Converter
      </h3>

      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label className="text-xs text-muted">{fromLabel}</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-line rounded-card px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-ink/20"
          />
        </div>
        <button
          onClick={swap}
          aria-label="Swap currencies"
          className="mt-5 w-9 h-9 flex items-center justify-center rounded-full border border-line hover:bg-cream-soft"
        >
          <span className="material-symbols-outlined text-lg">swap_horiz</span>
        </button>
        <div className="flex-1">
          <label className="text-xs text-muted">{toLabel}</label>
          <div className="w-full border border-line rounded-card px-3 py-2 text-sm mt-1 bg-cream-soft font-semibold">
            {converted.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs text-muted">
          Exchange rate (1 EUR = ? INR)
        </label>
        <input
          type="number"
          min="1"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value) || 0)}
          className="w-full border border-line rounded-card px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-ink/20"
        />
        <p className="text-[11px] text-muted mt-1">
          Editable estimate — check a live source like{" "}
          <a
            href="https://www.google.com/finance/quote/EUR-INR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Finance
          </a>{" "}
          before exchanging money.
        </p>
      </div>
    </div>
  );
}
