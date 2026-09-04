import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext(null);
const STORAGE_KEY = "paris-elegance-basket";

export function BasketProvider({ children }) {
  // Lazy-init from localStorage so the basket survives a page refresh.
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(activity) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === activity.id);
      if (existing) {
        return prev.map((i) =>
          i.id === activity.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...activity, qty: 1 }];
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) return removeItem(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  const subtotalINR = items.reduce((sum, i) => sum + i.priceINR * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <BasketContext.Provider
      value={{ items, addItem, removeItem, updateQty, subtotalINR, count }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) throw new Error("useBasket must be used within a BasketProvider");
  return ctx;
}
