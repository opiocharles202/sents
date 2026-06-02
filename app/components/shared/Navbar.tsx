"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      router.push(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const isDarkHeader = pathname === "/" || pathname === "/about";
  const isTransparentDark = !scrolled && isDarkHeader && !searchOpen && !menuOpen;

  // Dynamic colors based on scroll and route
  const linkColor = isTransparentDark ? "text-cream-200 hover:text-white" : "text-muted hover:text-foreground";
  const iconColor = isTransparentDark ? "text-cream-200" : "text-muted";
  const btnHover = isTransparentDark ? "hover:bg-white/10" : "hover:bg-cream-100 dark:hover:bg-cream-900";
  const signInBorder = isTransparentDark ? "border-cream-700/50 text-cream-100" : "border-border text-foreground";

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || searchOpen || menuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between relative">
          {/* Logo */}
          <Link href="/" id="logo" className={`flex items-center gap-2 group transition-opacity duration-300 ${searchOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"}`}>
            <div className="relative">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center shadow-lg group-hover:shadow-gold-400/30 transition-shadow duration-300">
                <span className="text-white font-serif font-bold text-lg leading-none">S</span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-400/20 to-transparent blur-sm group-hover:from-gold-400/40 transition-all duration-300" />
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isTransparentDark ? "text-white" : "text-foreground"}`}>
              <span className="text-gradient-gold">Scents</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            {[
              { label: "Collections", href: "/collections" },
              { label: "Bestsellers", href: "/collections?bestsellers=true" },
              { label: "Fragrances", href: "/collections" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 relative">
            {/* Search Input Overlay */}
            <div className={`absolute right-full mr-2 sm:mr-4 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out origin-right ${searchOpen ? 'scale-x-100 opacity-100 pointer-events-auto' : 'scale-x-0 opacity-0 pointer-events-none'}`}>
              <form onSubmit={handleSearch} className="flex">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search fragrances..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={(e) => {
                    // Slight delay to allow submit click
                    setTimeout(() => setSearchOpen(false), 150);
                  }}
                  className="w-[200px] sm:w-[320px] px-5 py-2.5 rounded-full border border-gold-300 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold-500/50 shadow-lg shadow-gold-900/5"
                />
              </form>
            </div>

            {/* Search Toggle */}
            <button
              id="search-btn"
              className={`p-2 rounded-full transition-colors z-10 ${searchOpen ? 'bg-cream-100 dark:bg-cream-900' : btnHover}`}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? "Close search" : "Search"}
            >
              <svg className={`w-5 h-5 ${searchOpen ? 'text-foreground' : iconColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {searchOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                )}
              </svg>
            </button>

            {/* Cart */}
            <button
              id="cart-btn"
              className={`relative p-2 rounded-full transition-colors ${btnHover}`}
              aria-label="Cart"
            >
              <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent text-[10px] font-bold text-white flex items-center justify-center">
                3
              </span>
            </button>

            {/* Account */}
            <Link
              href="/auth/login"
              id="account-btn"
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${signInBorder} ${btnHover}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Sign In
            </Link>

            {/* Mobile menu toggle */}
            <button
              id="menu-toggle"
              className={`md:hidden p-2 rounded-full transition-colors ${btnHover}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 pb-4" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {[
              { label: "Collections", href: "/collections" },
              { label: "Bestsellers", href: "/collections?bestsellers=true" },
              { label: "Fragrances", href: "/collections" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-cream-100 dark:hover:bg-cream-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
