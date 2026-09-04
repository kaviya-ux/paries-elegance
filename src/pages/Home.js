import { Link } from "react-router-dom";
import activitiesData from "../data/activities.json";
const { activities } = activitiesData;

export default function Home() {
  const featured = activities.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-6 pt-10">
        <div className="relative rounded-card overflow-hidden h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1769374343053-9a7a3a6d0c6c?w=1600&auto=format&fit=crop"
            alt="Eiffel Tower at dusk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-10 max-w-xl">
            <p className="text-gold-dim text-xs font-semibold uppercase tracking-widest mb-3">
              What to do in Paris
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Curated experiences for the discerning explorer.
            </h1>
            <p className="text-white/80 mt-4">
              Discover the hidden courtyards, exclusive boutiques, and rich
              culinary heritage of the City of Light, tailored specifically
              for our Indian guests.
            </p>
            <Link
              to="/attractions"
              className="mt-6 inline-flex w-fit items-center gap-2 bg-white text-ink px-5 py-3 rounded-card font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Explore Experiences
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why this site — the Indian-traveler angle */}
      <section className="max-w-[1600px] mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "currency_rupee",
            title: "Prices in INR, always",
            body: "Every experience is priced in rupees first, with the euro shown alongside — no mental math at checkout.",
          },
          {
            icon: "flight_takeoff",
            title: "Built for the India–Paris route",
            body: "Visa checklists, direct-flight notes and metro tips written specifically for travelers arriving from India.",
          },
          {
            icon: "map",
            title: "A journey planner, not a brochure",
            body: "Tell us your duration and interests and we'll assemble a real itinerary with a live cost estimate.",
          },
        ].map((f) => (
          <div key={f.title} className="p-6 border border-line rounded-card bg-white">
            <span className="material-symbols-outlined text-3xl text-gold">
              {f.icon}
            </span>
            <h3 className="font-display text-lg font-semibold mt-3">
              {f.title}
            </h3>
            <p className="text-sm text-muted mt-2">{f.body}</p>
          </div>
        ))}
      </section>

      {/* Featured activities */}
      <section className="max-w-[1600px] mx-auto px-6 mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold">
              Book an Activity
            </h2>
            <p className="text-muted mt-2">
              Handpicked tours and exclusive access for an unforgettable
              Parisian stay.
            </p>
          </div>
          <Link
            to="/attractions"
            className="self-start text-sm font-semibold border border-ink rounded-card px-4 py-2 hover:bg-ink hover:text-cream transition-colors whitespace-nowrap"
          >
            View All Activities
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((a) => (
            <FeaturedCard key={a.id} activity={a} />
          ))}
        </div>
      </section>

      {/* CTA strip for the extra feature */}
      <section className="max-w-[1600px] mx-auto px-6 mt-24">
        <div className="bg-ink text-cream rounded-card p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              New: Curate your own Parisian journey
            </h3>
            <p className="text-cream/70 mt-2 max-w-lg">
              Pick a duration, your interests and pace — get a real itinerary
              with a live INR cost estimate in seconds.
            </p>
          </div>
          <Link
            to="/plan-your-journey"
            className="bg-cream text-ink px-6 py-3 rounded-card font-semibold text-sm whitespace-nowrap hover:bg-cream/90 transition-colors"
          >
            Try the Journey Planner
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({ activity }) {
  return (
    <div className="group bg-white border border-line rounded-card overflow-hidden">
      <Link to={`/activity/${activity.id}`}>
        <div className="h-40 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wide text-gold font-semibold">
          {activity.tag}
        </p>
        <h4 className="font-display font-semibold mt-1 leading-snug">
          {activity.title}
        </h4>
        <p className="text-sm mt-2">
          ₹{activity.priceINR.toLocaleString("en-IN")}{" "}
          <span className="text-muted">· €{activity.priceEUR}</span>
        </p>
        <Link
          to={`/activity/${activity.id}`}
          className="mt-3 inline-block text-sm font-semibold text-gold hover:text-ink transition-colors"
        >
          Know More →
        </Link>
      </div>
    </div>
  );
}
