"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false);
      // Logic for successful registration would go here
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-10 text-center sm:text-left">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Create an Account
        </h1>
        <p className="text-muted">
          Join Scents to track your orders, save your favorite fragrances, and unlock exclusive rewards.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-medium text-foreground">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all shadow-sm"
              placeholder="Jane"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-medium text-foreground">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all shadow-sm"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all shadow-sm"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            minLength={8}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all shadow-sm"
            placeholder="Create a password (min. 8 characters)"
          />
        </div>

        <div className="flex items-start gap-3">
          <div className="flex items-center h-5">
            <input
              id="newsletter"
              type="checkbox"
              className="w-4 h-4 text-gold-600 bg-card border-border rounded focus:ring-gold-500 focus:ring-2 cursor-pointer"
            />
          </div>
          <label htmlFor="newsletter" className="text-sm text-muted cursor-pointer">
            I want to receive emails about new product drops, exclusive offers, and perfumery insights.
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      <div className="mt-10 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted">
          Already have an account?{" "}
          <Link 
            href="/auth/login" 
            className="font-semibold text-foreground hover:text-gold-600 dark:hover:text-gold-400 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:bg-gold-500/30"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
