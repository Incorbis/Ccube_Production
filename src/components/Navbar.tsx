import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const toggleMenu = () => {
    console.log('Menu toggle clicked. Current state:', open, '→ New state:', !open);
    setOpen(!open);
  };

  return (
    <>
      {/* Backdrop Overlay - prevents clicks on page content */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[98] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          (scrolled || open) ? "nav-glass shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group relative z-[101]">

            {/* Left Logo */}
            <img
              src="/logo.png"
              alt="C-CUBE Logo"
              className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
            />

            {/* Text */}
            <span className="text-lg font-bold tracking-tight">
              C-CUBE
            </span>

            {/* Right Logo */}
            <img
              src="/leftlogo.png"
              alt="Left Logo"
              className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors active:scale-95 relative z-[101] touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={open}
            type="button"
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 z-[99] nav-glass border-t border-border/30 shadow-2xl animate-in slide-in-from-top-2 duration-200"
          style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
        >
          <div className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === l.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Debug indicator - REMOVE THIS AFTER TESTING */}
      {open && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg z-[999] md:hidden text-xs font-mono">
          Menu State: OPEN ✓
        </div>
      )}
    </>
  );
};

export default Navbar;