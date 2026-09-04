import { useMemo, useState } from "react";
import itineraryData from "../data/itineraryItems.json";
const { interestOptions, itineraryPool } = itineraryData;

const DURATIONS = [3, 5, 7];
const PACES = [
  { id: "relaxed", label: "Relaxed", perDay: 2, multiplier: 0.9 },
  { id: "balanced", label: "Balanced", perDay: 3, multiplier: 1 },
  { id: "intense", label: "Intense", perDay: 4, multiplier: 1.15 },
];
const DAILY_BASE_COST_INR = 6000; // hotel + local transport baseline per day

function buildItinerary(duration, interests, pace) {
  const paceConfig = PACES.find((p) => p.id === pace);
  const pool =
    interests.length === 0
      ? itineraryPool
      : itineraryPool.filter((i) => interests.includes(i.interest));
  const source = pool.length > 0 ? pool : itineraryPool;

  const days = [];
  let cursor = 0;

  for (let d = 1; d <= duration; d++) {
    const stops = [];
    for (let s = 0; s < paceConfig.perDay; s++) {
      stops.push(source[cursor % source.length]);
      cursor++;
    }
    days.push({ day: d, stops });
  }
  return days;
}

function estimateCost(duration, days, pace) {
  const paceConfig = PACES.find((p) => p.id === pace);
  const activitiesCost = days.reduce(
    (sum, day) => sum + day.stops.reduce((s, item) => s + item.costINR, 0),
    0
  );
  const baseCost = DAILY_BASE_COST_INR * duration;
  return Math.round((activitiesCost + baseCost) * paceConfig.multiplier);
}

export default function PlanJourney() {
  const [duration, setDuration] = useState(5);
  const [interests, setInterests] = useState(["heritage", "culinary"]);
  const [pace, setPace] = useState("balanced");
  const [saved, setSaved] = useState(false);

  const itinerary = useMemo(
    () => buildItinerary(duration, interests, pace),
    [duration, interests, pace]
  );
  const estimatedCost = useMemo(
    () => estimateCost(duration, itinerary, pace),
    [duration, itinerary, pace]
  );

  function toggleInterest(id) {
    setSaved(false);
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold">
        Curate Your Parisian Journey
      </h1>
      <p className="text-muted mt-3 max-w-2xl">
        Design an itinerary that reflects your personal taste. Select your
        interests and duration to generate a bespoke plan — with a live cost
        estimate in rupees — tailored for the discerning Indian traveler.
      </p>

      <div className="grid lg:grid-cols-[320px_1fr] gap-10 mt-10">
        {/* Controls */}
        <aside className="border border-line rounded-card p-6 h-fit bg-white lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-bold mb-5">
            Trip Preferences
          </h2>

          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
            Duration
          </p>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDuration(d);
                  setSaved(false);
                }}
                className={`py-2 rounded-card text-sm font-semibold border transition-colors ${
                  duration === d
                    ? "bg-ink text-cream border-ink"
                    : "border-line hover:bg-cream-soft"
                }`}
              >
                {d} Days
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
            Interests
          </p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {interestOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => toggleInterest(opt.id)}
                className={`py-2 px-2 rounded-card text-sm font-medium border transition-colors ${
                  interests.includes(opt.id)
                    ? "bg-gold-container border-gold-container text-ink"
                    : "border-line hover:bg-cream-soft"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
            Pace
          </p>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {PACES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPace(p.id);
                  setSaved(false);
                }}
                className={`py-2 rounded-card text-sm font-semibold border transition-colors ${
                  pace === p.id
                    ? "bg-ink text-cream border-ink"
                    : "border-line hover:bg-cream-soft"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="border-t border-line pt-4">
            <p className="text-xs text-muted">Estimated Cost</p>
            <p className="font-display text-2xl font-bold">
              ₹{estimatedCost.toLocaleString("en-IN")}
            </p>
            <p className="text-[11px] text-muted">
              Per person, excl. international flights
            </p>
          </div>

          <button
            onClick={() => setSaved(true)}
            className="mt-5 w-full bg-ink text-cream py-2.5 rounded-card text-sm font-semibold flex items-center justify-center gap-2 hover:bg-ink/90 transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              bookmark
            </span>
            Save This Plan
          </button>
          {saved && (
            <p className="text-xs text-green-700 mt-2 text-center">
              Saved locally for this session ✓
            </p>
          )}
        </aside>

        {/* Generated itinerary */}
        <div className="space-y-10">
          {itinerary.map((day) => (
            <div key={day.day}>
              <h3 className="font-display text-xl font-bold flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-gold">
                  radio_button_checked
                </span>
                Day {day.day}
              </h3>
              <div className="space-y-4">
                {day.stops.map((stop, idx) => (
                  <div
                    key={`${day.day}-${idx}`}
                    className="border border-line rounded-card p-5 bg-white flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                        {stop.slot} · {stop.time}
                      </p>
                      <h4 className="font-display font-semibold mt-1">
                        {stop.title}
                      </h4>
                      <p className="text-sm text-muted mt-1 max-w-xl">
                        {stop.description}
                      </p>
                      <span className="inline-block text-[11px] bg-cream-soft px-2 py-1 rounded mt-2 capitalize">
                        {stop.interest}
                      </span>
                    </div>
                    <p className="font-semibold whitespace-nowrap">
                      ₹{stop.costINR.toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
