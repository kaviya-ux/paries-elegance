import activitiesData from "../data/activities.json";
const { neighborhoods } = activitiesData;

export default function Discover() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Discover the Heart of Paris
          </h1>
          <p className="text-muted mt-4">
            Experience the timeless elegance of the French capital, curated
            specifically for the discerning Indian traveler. From artistic
            enclaves to historic streets, find your perfect Parisian moment.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#neighborhoods"
              className="bg-ink text-cream px-5 py-2.5 rounded-card text-sm font-semibold"
            >
              Start Exploring
            </a>
          </div>
        </div>
        <div className="rounded-card overflow-hidden h-72">
          <img
            src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1200&auto=format&fit=crop"
            alt="Parisian balcony overlooking the city"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div id="neighborhoods" className="flex items-end justify-between mb-8">
        <h2 className="font-display text-2xl font-bold">
          Curated Neighborhoods
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {neighborhoods.map((n) => (
          <div
            key={n.id}
            className="relative rounded-card overflow-hidden h-72 group"
          >
            <img
              src={n.image}
              alt={n.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] w-fit uppercase tracking-wide bg-white/90 text-ink font-semibold px-2 py-1 rounded mb-2">
                {n.tag}
              </span>
              <h3 className="font-display text-xl font-bold">{n.name}</h3>
              <p className="text-sm text-white/85 mt-1">{n.blurb}</p>
              <p className="text-sm font-semibold mt-2">
                ₹{n.priceINR.toLocaleString("en-IN")}{" "}
                <span className="text-white/70 font-normal">
                  · €{n.priceEUR}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
