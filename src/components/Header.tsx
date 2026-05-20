"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", href: "/#hero" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Pourquoi faire un bilan ?", href: "/#bilan" },
  { label: "Les prises en charge", href: "/#prises-en-charge" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Contact", href: "/#contact" },
  { label: "Qu'est-ce que le TDA/H ?", href: "/le-saviez-vous" },
  { label: "Thérapie de relaxation", href: "/therapie-relaxation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      {/* Top bar — logo, collapses on scroll */}
      <div
        className={`hidden lg:block transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Link
            href="/"
            className="block text-center font-heading text-teal-dark text-2xl font-semibold tracking-tight hover:text-teal transition-colors"
          >
            Jeanne Gontier Neuropsychologue
          </Link>
        </div>
      </div>

      {/* Nav bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-11">
          {/* Logo — visible only when scrolled (compact) on desktop, always on mobile */}
          <Link
            href="/"
            className={`font-heading text-teal-dark font-semibold tracking-tight hover:text-teal transition-all duration-500 shrink-0 ${
              scrolled
                ? "lg:opacity-100 lg:w-auto lg:mr-6 text-base"
                : "lg:opacity-0 lg:w-0 lg:mr-0 lg:overflow-hidden text-lg"
            }`}
          >
            <span className="lg:hidden">Jeanne Gontier Neuropsychologue</span>
            <span className="hidden lg:inline">JG Neuropsychologue</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 text-[13px] rounded-md transition-colors whitespace-nowrap hover:bg-sand-light hover:text-teal-dark ${
                  pathname === item.href
                    ? "text-teal-dark font-medium"
                    : "text-text-light"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-sand-light transition-colors"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg
              className="w-6 h-6 text-teal-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-sm border-t border-sand px-4 pb-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm text-text-light hover:text-teal-dark hover:bg-sand-light rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
