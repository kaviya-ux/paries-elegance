import { Link } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

export default function Basket() {
  const { items, removeItem, updateQty, subtotalINR } = useBasket();
  const taxes = Math.round(subtotalINR * 0.18); // GST-style 18% shown for realism
  const total = subtotalINR + taxes;

  if (items.length === 0) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 py-24 text-center">
        <span className="material-symbols-outlined text-5xl text-muted">
          shopping_bag
        </span>
        <h1 className="font-display text-3xl font-bold mt-4">
          Your basket is empty
        </h1>
        <p className="text-muted mt-2">
          Browse our curated experiences and add something for your trip.
        </p>
        <Link
          to="/attractions"
          className="inline-block mt-6 bg-ink text-cream px-6 py-3 rounded-card font-semibold text-sm"
        >
          Explore Activities
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="font-display text-4xl font-bold mb-10">Your Basket</h1>

      <div className="grid md:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border border-line rounded-card p-4 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-card flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-display font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted hover:text-ink"
                    aria-label="Remove"
                  >
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
                <p className="text-sm text-muted mt-1">
                  {item.category} · {item.duration}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-line rounded-card">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)} className="px-3 py-1 text-lg"
                      aria-label="Decrease quantity">
                      −
                    </button>
                    <span className="px-3 text-sm font-medium">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 text-lg"
                      aria-label="Increase quantity">
                      +
                    </button>
                  </div>
                  <p className="font-semibold">
                    ₹{(item.priceINR * item.qty).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-line rounded-card p-6 h-fit bg-white sticky top-24">
          <h2 className="font-display text-xl font-bold mb-5">
            Order Summary
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Subtotal</span>
              <span>₹{subtotalINR.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Taxes & Fees (18%)</span>
              <span>₹{taxes.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <div className="flex justify-between mt-5 pt-5 border-t border-line">
            <span className="font-display text-lg font-bold">Total</span>
            <div className="text-right">
              <p className="font-display text-lg font-bold">
                ₹{total.toLocaleString("en-IN")}
              </p>
              <p className="text-[11px] text-muted">All prices in INR</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-ink text-cream py-3 rounded-card font-semibold text-sm flex items-center justify-center gap-2 hover:bg-ink/90 transition-colors">
            Proceed to Checkout
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
          <p className="text-center text-xs text-muted mt-3 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">lock</span>
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
}
