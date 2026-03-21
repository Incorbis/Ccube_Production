import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

type EventType = { title: string; date: string; location: string; category: string; description: string; past?: boolean };

const allEvents: EventType[] = [
  { title: "PixelHack 2026", date: "Apr 12–13, 2026", location: "Main Auditorium", category: "Hackathon", description: "48-hour design and code hackathon with ₹50K prize pool, industry judges, and mentorship from top startups." },
  { title: "UI/UX Masterclass", date: "Apr 20, 2026", location: "Lab 204", category: "Workshop", description: "Hands-on Figma workshop covering design systems, prototyping, and real-world product design workflows." },
  { title: "Portfolio Review Night", date: "May 3, 2026", location: "Seminar Hall", category: "Meetup", description: "Get your portfolio reviewed by working professionals and alumni. Open to all departments." },
  { title: "Frontend Bootcamp", date: "May 15–17, 2026", location: "CS Lab", category: "Workshop", description: "Three-day intensive on React, Tailwind, and modern frontend architecture. Build and deploy a project." },
  { title: "Design Jam: Campus Redesign", date: "Feb 18, 2026", location: "Library Hall", category: "Competition", description: "Teams redesigned campus signage and wayfinding. Top 3 designs presented to administration.", past: true },
  { title: "Git & GitHub Workshop", date: "Jan 28, 2026", location: "Lab 108", category: "Workshop", description: "Beginner-friendly session on version control, branching, pull requests, and open-source contribution.", past: true },
  { title: "PixelHack 2025", date: "Apr 5–6, 2025", location: "Main Auditorium", category: "Hackathon", description: "Our flagship hackathon with 80+ participants, 20 teams, and projects spanning health-tech to ed-tech.", past: true },
];

const categories = ["All", "Hackathon", "Workshop", "Meetup", "Competition"];
const categoryColors: Record<string, string> = {
  Hackathon: "bg-primary/15 text-primary",
  Workshop: "bg-accent/15 text-accent",
  Meetup: "bg-emerald-500/15 text-emerald-400",
  Competition: "bg-sky-500/15 text-sky-400",
};

const Events = () => {
  const [filter, setFilter] = useState("All");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const filtered = allEvents
    .filter((e) => (tab === "upcoming" ? !e.past : e.past))
    .filter((e) => filter === "All" || e.category === filter);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Events" title="Learn, build, and compete" description="From workshops to hackathons — there's always something happening at PixelCraft." />

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize active:scale-95 ${tab === t ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-95 ${filter === c ? "bg-primary/15 text-primary border border-primary/30" : "bg-secondary text-muted-foreground hover:text-foreground border border-transparent"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((e, i) => (
              <ScrollReveal key={e.title + e.date} delay={i * 0.08}>
                <div className="glass-card p-6 flex flex-col h-full group transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full ${categoryColors[e.category] || "bg-secondary text-muted-foreground"}`}>{e.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{e.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {e.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                  </div>
                  {!e.past && (
                    <Button variant="hero" size="sm" className="self-start">
                      Register <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p>No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
