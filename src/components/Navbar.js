import { NavLink } from "react-router-dom";
import { useBasket } from "../context/BasketContext";
import { useState } from "react";

const mainLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/discover", label: "Discover" },
  { to: "/attractions", label: "Attractions" },
  { to: "/plan-your-journey", label: "Plan Journey" },
];

const dropdownLinks = [
  { to: "/food-dining", label: "Food & Dining" },
  { to: "/shopping", label: "Shopping" },
  { to: "/seasonal-guide", label: "Seasonal Guide" },
  { to: "/budget", label: "Budget" },
  { to: "/gallery", label: "Gallery" },
  { to: "/practical", label: "Practical Info" },
];

export default function Navbar() {
  const { count } = useBasket();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-line">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/"  className="font-display text-2xl font-bold tracking-tight"
          onClick={() => setMobileMenuOpen(false)}>
          PARIS ÉLÉGANCE
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {mainLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) =>
                `pb-1 border-b-2 transition-colors whitespace-nowrap ${
                  isActive ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink" }` }>
              {l.label}
            </NavLink>
          ))}

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="pb-1 border-b-2 transition-colors whitespace-nowrap text-muted hover:text-ink flex items-center gap-1" >
              More
              <span className="material-symbols-outlined text-sm">
                {dropdownOpen ? "expand_less" : "expand_more"}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-line rounded-card shadow-lg py-2 min-w-[200px]">
                {dropdownLinks.map((l) => (
                  <NavLink key={l.to}  to={l.to} onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-cream-soft transition-colors">
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/basket"
            className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream-soft transition-colors"
            aria-label="Basket" >
            <span className="material-symbols-outlined">shopping_bag</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-ink text-cream text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {count}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/sign-in"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream-soft transition-colors"
            aria-label="Sign In"  >
            <span className="material-symbols-outlined">account_circle</span>
          </NavLink>
          <NavLink
            to="/attractions"
            className="bg-ink text-cream px-5 py-2.5 rounded-card text-sm font-semibold hover:bg-ink/90 transition-colors"  >
            Book Now
          </NavLink>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream-soft transition-colors"
          aria-label="Menu"  aria-expanded={mobileMenuOpen}  >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
          {!mobileMenuOpen && count > 0 && (
            <span className="absolute -top-1 -right-1 bg-ink text-cream text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {count}
            </span>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-cream px-6 py-4 max-h-[calc(100vh-73px)] overflow-y-auto">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            {mainLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-line ${
                    isActive ? "text-ink font-semibold" : "text-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            {dropdownLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-line ${
                    isActive ? "text-ink font-semibold" : "text-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/basket"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-line flex items-center justify-between text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  shopping_bag
                </span>
                Basket
              </span>
              {count > 0 && (
                <span className="bg-ink text-cream text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {count}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 flex items-center gap-2 text-muted"
            >
              <span className="material-symbols-outlined text-lg">
                account_circle
              </span>
              Sign In
            </NavLink>
          </nav>

          <NavLink
            to="/attractions"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block text-center bg-ink text-cream px-5 py-3 rounded-card text-sm font-semibold hover:bg-ink/90 transition-colors"
          >
            Book Now
          </NavLink>
        </div>
      )}
    </header>
  );
}
