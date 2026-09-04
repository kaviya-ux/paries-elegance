import { useParams, Link } from "react-router-dom";
import activitiesData from "../data/activities.json";
const { activities } = activitiesData;

export default function ActivityDetail() {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === id);

  if (!activity) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl font-bold">Activity Not Found</h1>
        <p className="text-muted mt-4">
          Sorry, we couldn't find the activity you're looking for.
        </p>
        <Link
          to="/attractions"
          className="mt-6 inline-block bg-ink text-cream px-5 py-3 rounded-card font-semibold text-sm hover:bg-ink/90 transition-colors"
        >
          Back to Attractions
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link to="/attractions" className="hover:text-ink">Attractions</Link>
        <span>/</span>
        <span className="text-ink">{activity.title}</span>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        <div className="rounded-card overflow-hidden h-96 lg:h-[500px]">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-wide text-gold font-semibold">
            {activity.tag}
          </span>
          <h1 className="font-display text-4xl font-bold mt-2">
            {activity.title}
          </h1>
          <p className="text-sm text-muted mt-3">{activity.category}</p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Duration:</span> {activity.duration}
          </p>
          <p className="font-display text-3xl font-bold mt-6">
            ₹{activity.priceINR.toLocaleString("en-IN")}{" "}
            <span className="text-lg text-muted font-normal">
              · €{activity.priceEUR}
            </span>
          </p>
          <Link
            to="/basket"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-ink text-cream px-6 py-3 rounded-card font-semibold text-sm hover:bg-ink/90 transition-colors w-fit"
          >
            <span className="material-symbols-outlined text-base">
              shopping_bag
            </span>
            Book This Experience
          </Link>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="prose max-w-none mb-12">
        <h2 className="font-display text-2xl font-bold mb-4">About This Experience</h2>
        <p className="text-muted leading-relaxed">
          {activity.detailedDescription}
        </p>
      </div>

      {/* Key Information Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {activity.highlights && (
          <InfoCard
            icon="star"
            title="Highlights"
            items={activity.highlights}
          />
        )}
        {activity.bestFor && (
          <InfoCard
            icon="person"
            title="Best For"
            items={activity.bestFor}
          />
        )}
        {activity.whatToBring && (
          <InfoCard
            icon="backpack"
            title="What to Bring"
            items={activity.whatToBring}
          />
        )}
      </div>

      {/* Practical Information */}
      <div className="bg-cream-soft rounded-card p-8 mb-12">
        <h2 className="font-display text-2xl font-bold mb-6">Practical Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <InfoRow
            icon="location_on"
            label="Meeting Point"
            value={activity.meetingPoint}
          />
          <InfoRow
            icon="terrain"
            label="Difficulty Level"
            value={activity.difficulty}
          />
          <InfoRow
            icon="accessible"
            label="Accessibility"
            value={activity.accessibility}
          />
          <InfoRow
            icon="groups"
            label="Group Size"
            value={activity.groupSize}
          />
        </div>
      </div>

      {/* Back Button */}
      <Link
        to="/attractions"
        className="inline-flex items-center gap-2 text-sm font-semibold border border-ink rounded-card px-5 py-3 hover:bg-ink hover:text-cream transition-colors"
      >
        <span className="material-symbols-outlined text-base">
          arrow_back
        </span>
        Back to All Attractions
      </Link>
    </div>
  );
}

function InfoCard({ icon, title, items }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-gold">{icon}</span>
        <h3 className="font-display font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-muted flex items-start gap-2">
            <span className="text-gold mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-gold">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
        </p>
        <p className="text-sm mt-1">{value}</p>
      </div>
    </div>
  );
}