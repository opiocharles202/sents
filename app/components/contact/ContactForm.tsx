"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
      // Reset form (in a real app, we'd use a form library or ref)
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-xl shadow-gold-900/5">
      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
        Send us a message
      </h3>
      <p className="text-sm text-muted mb-8">
        We typically reply within 24 hours.
      </p>

      {isSuccess ? (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center animate-fade-in-up">
          <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h4 className="font-semibold text-foreground mb-1">Message Sent!</h4>
          <p className="text-sm text-muted">
            Thank you for reaching out. One of our concierges will be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium text-foreground">First name</label>
              <input
                type="text"
                id="first-name"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium text-foreground">Last name</label>
              <input
                type="text"
                id="last-name"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
              placeholder="jane@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
            <select
              id="subject"
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all cursor-pointer"
            >
              <option>General Inquiry</option>
              <option>Order Status</option>
              <option>Fragrance Consultation</option>
              <option>Wholesale & Partnerships</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all resize-none"
              placeholder="How can we help you today?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
