import activitiesData from "../data/activities.json";
const { budgetBreakdown } = activitiesData;

export default function Budget() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h1 className="font-display text-4xl font-bold">
            Budget Planning for Indian Travelers
          </h1>
          <p className="text-muted mt-4">
            Plan your Paris trip with our detailed budget breakdown. Compare
            costs with Indian equivalents and make informed decisions about your
            travel expenses.
          </p>
        </div>
        <div className="rounded-card overflow-hidden h-72">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop"
            alt="Paris budget planning"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid gap-8">
        {budgetBreakdown.map((item, idx) => (
          <BudgetItem key={idx} item={item} />
        ))}
      </div>

      <div className="mt-12 bg-ink text-cream rounded-card p-8">
        <h2 className="font-display text-2xl font-bold mb-4">
          Sample 5-Day Budget (Mid-Range)
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Accommodation (5 nights)</span>
            <span>₹40,000</span>
          </div>
          <div className="flex justify-between">
            <span>Food (5 days)</span>
            <span>₹17,500</span>
          </div>
          <div className="flex justify-between">
            <span>Local Transport</span>
            <span>₹2,500</span>
          </div>
          <div className="flex justify-between">
            <span>Activities & Attractions</span>
            <span>₹50,000</span>
          </div>
          <div className="flex justify-between">
            <span>Miscellaneous</span>
            <span>₹10,000</span>
          </div>
          <div className="border-t border-cream/30 pt-3 flex justify-between font-bold text-lg">
            <span>Total (per person)</span>
            <span>₹120,000</span>
          </div>
        </div>
        <p className="text-sm text-cream/70 mt-4">
          *Excludes international flights and visa costs. Prices are estimates
          and subject to change.
        </p>
      </div>
    </div>
  );
}

function BudgetItem({ item }) {
  return (
    <div className="border border-line rounded-card p-6 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            {item.category}
          </span>
          <h3 className="font-display text-lg font-semibold mt-1">
            {item.budget}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-bold">
            ₹{item.amountINR.toLocaleString("en-IN")}
          </p>
          <p className="text-sm text-muted">€{item.amountEUR}</p>
        </div>
      </div>
      <p className="text-sm text-muted mb-3">{item.description}</p>
      <div className="bg-cream-soft rounded p-3">
        <p className="text-xs font-semibold text-gold mb-1">Indian Equivalent</p>
        <p className="text-xs text-muted">{item.indianEquivalent}</p>
      </div>
    </div>
  );
}