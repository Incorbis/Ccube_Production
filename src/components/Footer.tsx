import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-primary/20 bg-primary/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Logo + Description */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
           <img src="/logo.png" alt="C-CUBE Logo" className="w-9 h-9 object-contain" />
            <span className="text-lg font-bold tracking-tight">C-CUBE</span>
          </Link>

          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            A community of designers, developers, and creators pushing the boundaries of digital craft.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/ccube_pccoer3?igsh=MXVvdG5wbzIybDBmdg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-primary">Navigation</h4>
          <div className="space-y-2">
            {["Home", "About", "Events", "Gallery", "Team"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-primary">Get Involved</h4>
          <div className="space-y-2">
            <Link
              to="/events"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Events
            </Link>

            <a
              href="https://www.instagram.com/ccube_pccoer?igsh=MTJqOG9uYnl0OWNydQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-primary/20 mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 C-CUBE. Built with passion by the team.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;