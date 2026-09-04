import activitiesData from "../data/activities.json";
const { shoppingGuide } = activitiesData;

export default function Shopping() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Shopping Guide for Indian Travelers
          </h1>
          <p className="text-muted mt-4">
            Paris is the world's fashion capital. Discover the best shopping
            experiences from luxury brands to budget-friendly finds, with tips
            specifically for Indian travelers.
          </p>
        </div>
        <div className="rounded-card overflow-hidden h-72">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=80"
            alt="Paris shopping"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-12">
        {shoppingGuide.map((section, idx) => (
          <ShoppingSection key={idx} section={section} />
        ))}
      </div>
    </div>
  );
}

function ShoppingSection({ section }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold mb-4">{section.category}</h2>
      <p className="text-muted mb-6">{section.description}</p>

      {section.areas && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.areas.map((area, idx) => (
            <AreaCard key={idx} area={area} />
          ))}
        </div>
      )}

      {section.items && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

function AreaCard({ area }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <h3 className="font-display font-semibold mb-2">{area.name}</h3>
      <p className="text-sm text-muted mb-4">{area.description}</p>
      <div className="bg-cream-soft rounded p-3">
        <p className="text-xs font-semibold text-gold mb-1">Indian Tip</p>
        <p className="text-xs text-muted">{area.indianTip}</p>
      </div>
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <h3 className="font-display font-semibold mb-2">{item.name}</h3>
      <p className="text-sm text-muted mb-3">{item.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">{item.where}</span>
        {item.priceINR && (
          <span className="font-semibold">
            ₹{item.priceINR.toLocaleString("en-IN")}
          </span>
        )}
      </div>
    </div>
  );
}