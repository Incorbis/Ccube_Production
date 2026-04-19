import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => setOpen(false), [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-[98] md:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        ref={menuRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled || open ? "nav-glass shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-[101]">
            <img
              src="/logo.png"
              alt="C-CUBE Logo"
              className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
            />
            <span className="text-lg font-bold tracking-tight">C-CUBE</span>
            <img
              src="/leftlogo.png"
              alt="Left Logo"
              className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors active:scale-95 relative z-[101] touch-manipulation"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            <span
              className={cn(
                "block transition-all duration-300",
                open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"
              )}
            >
              <Menu className="w-5 h-5" />
            </span>
            <span
              className={cn(
                "block transition-all duration-300",
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"
              )}
            >
              <X className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Mobile Dropdown — lives INSIDE <nav> so ref catches it */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/20",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 py-3 space-y-1 pb-5">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium",
                  "transition-all duration-300",
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors",
                    location.pathname === l.to ? "bg-primary" : "bg-border"
                  )}
                />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;