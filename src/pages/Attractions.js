import { useMemo, useState } from "react";
import activitiesData from "../data/activities.json";
import ActivityCard from "../components/ActivityCard";

const { activities } = activitiesData;

const categories = [...new Set(activities.map((a) => a.category))];

export default function Attractions() {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");

  function toggleCategory(cat) {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const matchesCategory =
        selected.length === 0 || selected.includes(a.category);
      const matchesQuery = a.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selected, query]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold">Curated Experiences</h1>
      <p className="text-muted mt-3 max-w-2xl">
        Discover the soul of Paris through our handpicked selection of guided
        tours, museum entries and exclusive river cruises — tailored for the
        discerning traveler.
      </p>

      <div className="grid md:grid-cols-[260px_1fr] gap-10 mt-10">
        {/* Filters */}
        <aside className="border border-line rounded-card p-5 h-fit bg-white">
          <h2 className="font-semibold mb-4">Refine Search</h2>

          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Search
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search activities…"
            className="mt-2 w-full border border-line rounded-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ink/20"
          />

          <p className="text-xs font-semibold uppercase tracking-wide text-muted mt-5 mb-2">
            Categories
          </p>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="rounded border-line accent-[#1b1c19]"
                />
                {cat}
              </label>
            ))}
          </div>

          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="mt-5 w-full border border-ink rounded-card py-2 text-sm font-semibold hover:bg-ink hover:text-cream transition-colors"
            >
              Clear Filters
            </button>
          )}
        </aside>

        {/* Results */}
        <div>
          <p className="text-sm text-muted mb-4">
            {filtered.length} experience{filtered.length !== 1 && "s"} found
          </p>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <ActivityCard key={a.id} activity={a} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-muted text-center py-16">
              No experiences match your filters. Try clearing them.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
