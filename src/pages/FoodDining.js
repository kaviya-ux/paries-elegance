import activitiesData from "../data/activities.json";
const { indianFriendlyFood } = activitiesData;

export default function FoodDining() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Food & Dining Guide for Indian Travelers
          </h1>
          <p className="text-muted mt-4">
            Discover Paris's culinary scene with options that suit Indian
            palates. From vegetarian restaurants to authentic Indian cuisine and
            French dishes that will remind you of home.
          </p>
        </div>
        <div className="rounded-card overflow-hidden h-72">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop&q=80"
            alt="French cuisine"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-12">
        {indianFriendlyFood.map((section) => (
          <FoodSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

function FoodSection({ section }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
      <p className="text-muted mb-6">{section.description}</p>

      {section.places && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.places.map((place, idx) => (
            <PlaceCard key={idx} place={place} />
          ))}
        </div>
      )}

      {section.dishes && (
        <div className="grid sm:grid-cols-2 gap-6">
          {section.dishes.map((dish, idx) => (
            <DishCard key={idx} dish={dish} />
          ))}
        </div>
      )}
    </section>
  );
}

function PlaceCard({ place }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-semibold">{place.name}</h3>
        <span className="text-xs bg-cream-soft px-2 py-1 rounded">{place.type}</span>
      </div>
      <p className="text-sm text-muted mb-3">{place.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">{place.area}</span>
        <span className="font-semibold">
          ₹{place.priceINR.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
}

function DishCard({ dish }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <h3 className="font-display font-semibold mb-2">{dish.name}</h3>
      <p className="text-sm text-muted mb-3">{dish.description}</p>
      <p className="text-xs text-muted">
        <span className="font-semibold">Where to try:</span> {dish.where}
      </p>
    </div>
  );
}