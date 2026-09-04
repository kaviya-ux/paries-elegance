import { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess(false);
      return;
    }
    // This is a course/demo project — there is no real backend here.
    // In a production app this would call an authentication API.
    setError("");
    setSuccess(true);
  }

  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <h1 className="font-display text-3xl font-bold text-center">
        Welcome Back
      </h1>
      <p className="text-muted text-center mt-2">
        Sign in to manage your Parisian itineraries and bookings.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 bg-white border border-line rounded-card p-6"
      >
        <div>
          <label className="text-sm font-medium">Email address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="mt-1 w-full border border-line rounded-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink/20"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="mt-1 w-full border border-line rounded-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink/20"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && (
          <p className="text-sm text-green-700">
            Signed in successfully (demo only — no account was actually
            created).
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-ink text-cream py-3 rounded-card font-semibold text-sm hover:bg-ink/90 transition-colors"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-muted mt-6">
        This is a student project — sign-in is simulated and no data is sent
        anywhere.
      </p>
    </div>
  );
}
