export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl font-bold leading-tight">
            PARIS
            <br />
            ÉLÉGANCE
          </p>
          <p className="text-xs text-cream/60 mt-4">
            © {new Date().getFullYear()} Paris Élégance. Tailored for the
            Indian Explorer. All prices in INR.
          </p>
        </div>
        <div>
          <p className="text-gold-dim text-xs font-semibold uppercase tracking-wide mb-3">
            Company
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>About Us</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <p className="text-gold-dim text-xs font-semibold uppercase tracking-wide mb-3">
            Support
          </p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <p className="text-gold-dim text-xs font-semibold uppercase tracking-wide mb-3">
            Connect
          </p>
          <p className="text-sm text-cream/80">
            Subscribe for curated Parisian insights, built for Indian
            travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}
