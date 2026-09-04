import { useState } from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

export default function ActivityCard({ activity }) {
  const { addItem } = useBasket();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(activity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="bg-white border border-line rounded-card overflow-hidden flex flex-col">
      <div className="relative h-48">
        <img src={activity.image}  alt={activity.title}
          className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-cream text-ink text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded">
          {activity.tag}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold leading-snug">
          {activity.title}
        </h3>
        <p className="text-sm text-muted mt-2 flex-1">
          {activity.description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-line">
          <span className="text-xs text-muted flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              schedule
            </span>
            {activity.duration}
          </span>
          <div className="text-right">
            <p className="text-[11px] text-muted">Starting from</p>
            <p className="font-semibold">
              ₹{activity.priceINR.toLocaleString("en-IN")}{" "}
              <span className="text-muted font-normal">
                €{activity.priceEUR}
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleAdd}
            className={`flex-1 py-2.5 rounded-card text-sm font-semibold transition-colors ${
              added
                ? "bg-gold-container text-ink"
                : "bg-ink text-cream hover:bg-ink/90"
            }`}
          >
            {added ? "Added ✓" : "Add"}
          </button>
          <Link  to={`/activity/${activity.id}`}
            className="flex-1 py-2.5 rounded-card text-sm font-semibold border border-ink text-ink hover:bg-ink hover:text-cream transition-colors text-center"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
