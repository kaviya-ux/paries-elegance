import activitiesData from "../data/activities.json";
const { seasonalGuide } = activitiesData;

export default function SeasonalGuide() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Best Time to Visit Paris from India
          </h1>
          <p className="text-muted mt-4">
            Plan your Paris trip with our seasonal guide tailored for Indian
            travelers. Compare temperatures with Indian cities and discover what
            each season offers.
          </p>
        </div>
        <div className="rounded-card overflow-hidden h-72">
          <img
            src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=1200&auto=format&fit=crop"
            alt="Paris seasons"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {seasonalGuide.map((season, idx) => (
          <SeasonCard key={idx} season={season} />
        ))}
      </div>
    </div>
  );
}

function SeasonCard({ season }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-bold">{season.season}</h2>
        <span className="text-sm font-semibold bg-cream-soft px-3 py-1 rounded">
          {season.temperature}
        </span>
      </div>
      <p className="text-sm text-muted mb-4">{season.description}</p>

      <div className="bg-cream-soft rounded p-3 mb-4">
        <p className="text-xs font-semibold text-gold mb-1">Indian Comparison</p>
        <p className="text-xs text-muted">{season.indianComparison}</p>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
          Highlights
        </p>
        <ul className="space-y-1">
          {season.highlights.map((highlight, idx) => (
            <li key={idx} className="text-sm text-muted flex items-start gap-2">
              <span className="text-gold mt-1">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
          Packing List
        </p>
        <div className="flex flex-wrap gap-2">
          {season.packing.map((item, idx) => (
            <span
              key={idx}
              className="text-xs bg-white border border-line px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-ink/5 rounded p-3">
        <p className="text-xs font-semibold text-ink mb-1">Indian Tips</p>
        <p className="text-xs text-muted">{season.indianTips}</p>
      </div>
    </div>
  );
}