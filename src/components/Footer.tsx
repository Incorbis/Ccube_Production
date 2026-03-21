import { Link } from "react-router-dom";
import { Sparkles, Instagram, Linkedin, Mail, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">PixelCraft</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            A community of designers, developers, and creators pushing the boundaries of digital craft.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
              { icon: Mail, href: "mailto:pixelcraft@college.edu" },
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Navigation</h4>
          <div className="space-y-2">
            {["Home", "About", "Events", "Team", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4">Get Involved</h4>
          <div className="space-y-2">
            <Link to="/join" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Join the Club</Link>
            <Link to="/events" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Upcoming Events</Link>
            <a href="mailto:pixelcraft@college.edu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Email Us</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 PixelCraft Club. Built with passion by the team.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
