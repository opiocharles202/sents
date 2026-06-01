import ContactForm from "@/app/components/contact/ContactForm";
import Newsletter from "@/app/components/landing-page/Newsletter";

export const metadata = {
  title: "Contact Us | Scents — Luxury Perfume",
  description: "Get in touch with our perfume concierges for consultations, order inquiries, or wholesale partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream-50 dark:bg-[#0c0a09]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-4 animate-fade-in-up">
            Here for you
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Whether you need help finding your signature scent or have a question about an order, our concierges are ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-12 animate-slide-in-right">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Fill out the form to send us a direct message, or reach out using the contact details below. For the fastest response to order inquiries, please include your order number.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Email */}
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 dark:bg-gold-950/50 border border-gold-200/50 dark:border-gold-800/30 text-gold-600 dark:text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <a href="mailto:concierge@scents.com" className="text-sm text-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                    concierge@scents.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 dark:bg-gold-950/50 border border-gold-200/50 dark:border-gold-800/30 text-gold-600 dark:text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.265-3.965-6.861-6.861l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <a href="tel:+33123456789" className="text-sm text-muted hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                  <p className="text-[11px] text-muted mt-1">Mon-Fri, 9am-6pm CET</p>
                </div>

                {/* Location */}
                <div className="sm:col-span-2">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 dark:bg-gold-950/50 border border-gold-200/50 dark:border-gold-800/30 text-gold-600 dark:text-gold-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Flagship Boutique</h4>
                  <p className="text-sm text-muted mb-2">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors group">
                    Get Directions
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
