import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar, Trophy, Users, Zap, Code, Palette, Camera } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "120+", label: "Active Members" },
  { icon: Calendar, value: "35", label: "Events Hosted" },
  { icon: Trophy, value: "12", label: "Awards Won" },
  { icon: Zap, value: "4", label: "Years Running" },
];

const events = [
  { title: "PixelHack 2026", date: "Apr 12, 2026", category: "Hackathon", description: "48-hour design + code hackathon with industry mentors and ₹50K prize pool." },
  { title: "UI/UX Masterclass", date: "Apr 20, 2026", category: "Workshop", description: "Hands-on Figma workshop with a senior product designer from a leading startup." },
  { title: "Portfolio Review Night", date: "May 3, 2026", category: "Meetup", description: "Get your portfolio reviewed by working professionals and alumni." },
];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-primary/15 text-primary",
  Workshop: "bg-accent/15 text-accent",
  Meetup: "bg-emerald-500/15 text-emerald-400",
};

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono tracking-wide text-primary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Now recruiting for 2026-27
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Where pixels
            <br />
            meet <span className="gradient-text">purpose</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            PixelCraft is a community of designers, developers, and creators at the intersection of art and technology.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/join">
              <Button variant="hero" size="xl">
                Join Now <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="hero-outline" size="xl">Explore Events</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="glass-card p-6 text-center group transition-all duration-300">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-bold font-mono tracking-tight">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="What We Do" title="Craft, Create, Collaborate" description="From hackathons to design jams, we build skills that matter." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Code, title: "Development", desc: "Build real-world projects with modern web technologies, from React apps to full-stack platforms." },
            { icon: Palette, title: "Design", desc: "Master UI/UX design thinking, Figma workflows, and visual storytelling for digital products." },
            { icon: Camera, title: "Creative Media", desc: "Explore motion graphics, photography, and content creation for brands and campaigns." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass-card p-8 group transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Events */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Upcoming" title="Featured Events" description="Mark your calendars — here's what's coming up next." />
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.1}>
              <div className="glass-card p-6 flex flex-col h-full group transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${categoryColors[e.category]}`}>{e.category}</span>
                  <span className="text-xs text-muted-foreground font-mono">{e.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{e.description}</p>
                <Link to="/events" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="glass-card glow-border p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 relative">Ready to build something great?</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8 relative">Join 120+ students who are shaping the future of digital creativity at our college.</p>
            <div className="flex flex-wrap gap-4 justify-center relative">
              <Link to="/join"><Button variant="hero" size="lg">Become a Member</Button></Link>
              <Link to="/contact"><Button variant="hero-outline" size="lg">Get in Touch</Button></Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Index;
