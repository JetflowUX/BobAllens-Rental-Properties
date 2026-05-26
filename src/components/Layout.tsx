import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isHeroHeader = isHome && !isScrolled;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const navLinks = [
    {
      name: "Properties",
      path: "/properties",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-cream/90 backdrop-blur-md border-b border-divider py-4" : isHeroHeader ? "bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-transparent py-6" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center gap-4">
          <Link to="/" className="group flex flex-col">
            <span
              className={`font-serif text-xl sm:text-2xl tracking-tight transition-colors ${isHeroHeader ? "text-cream" : "text-charcoal"}`}
            >
              Bob Allen's
            </span>
            <span
              className={`font-sans text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${isHeroHeader ? "text-cream/80 group-hover:text-cream" : "text-warmgray group-hover:text-olive"}`}
            >
              Rental Properties
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-sm uppercase tracking-widest transition-colors ${isHeroHeader ? "text-cream hover:text-cream/80" : "text-charcoal hover:text-olive"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${isHeroHeader ? "text-cream" : "text-charcoal"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-cream z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center px-6 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
          <Link
            to="/"
            className="font-serif text-3xl sm:text-4xl text-charcoal mb-6 sm:mb-8"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-3xl sm:text-4xl text-charcoal"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-cream pt-20 sm:pt-24 pb-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 sm:mb-24">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl sm:text-3xl mb-4">
              Bob Allen's
            </h3>
            <p className="font-sans text-sm text-warmgray max-w-sm leading-relaxed">
              Curating exceptional living spaces for those who appreciate the
              finer details. A standard of living, refined.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:text-olive transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-sans text-sm text-cream">
              <li>1-800-555-0199</li>
              <li>inquiries@boballens.com</li>
              <li className="text-warmgray mt-4">
                124 Luxury Lane
                <br />
                Beverly Hills, CA 90210
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-warmgray/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-xs text-warmgray tracking-wide">
            &copy; {new Date().getFullYear()} Bob Allen's Rental Properties. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="font-sans text-xs text-warmgray hover:text-cream transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-sans text-xs text-warmgray hover:text-cream transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
