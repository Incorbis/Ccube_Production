import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
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

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "nav-glass shadow-sm" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="CUBE Logo" className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105 group-active:scale-95" />
          <span className="text-lg font-bold tracking-tight">CUBE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                location.pathname === l.to ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors active:scale-95">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-glass border-t border-border/30 px-6 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                location.pathname === l.to ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;