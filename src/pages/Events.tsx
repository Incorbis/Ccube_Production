import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

type EventType = { title: string; date: string; location: string; category: string; description: string; past?: boolean };

const allEvents: EventType[] = [
  // AY 2025-26 Upcoming
  {
    title: "SE Induction and Fresher's 2K25",
    date: "Jul 22, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A warm welcome event for newly joined SE students, featuring introductions to the department, club activities, and an exciting fresher's celebration.",
  },
  {
    title: "SPOS Expert Session",
    date: "Aug 8, 2025",
    location: "Computer Department",
    category: "Expert Session",
    description: "An expert session on System Programming and Operating Systems (SPOS) aimed at TE students to deepen their understanding of core CS concepts.",
  },
  {
    title: "C Cube Activity (Teacher's Day)",
    date: "Sep 5, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A special event organised by C-Cube students to celebrate and honour the teaching staff on Teacher's Day.",
  },
  {
    title: "C Cube Activity (Engineer's Day)",
    date: "Sep 12, 2025",
    location: "Computer Department",
    category: "Technical",
    description: "A technical celebration event for Engineer's Day, encouraging students to showcase their innovative ideas and engineering spirit.",
  },

  // AY 2024-25 Past Events
  {
    title: "CDAC Visit",
    date: "Dec 28, 2024",
    location: "CDAC, Pune",
    category: "Industrial Visit",
    description: "TE students visited CDAC (Centre for Development of Advanced Computing) gaining insights into high-performance computing, cybersecurity, AI, embedded systems, IoT, and real-world technology applications.",
    past: true,
  },
  {
    title: "Expert Session on Recent Testing Tools",
    date: "Apr 15, 2024",
    location: "Computer Department",
    category: "Expert Session",
    description: "An expert-led session for SE students covering current trends in software testing tools, automation, performance testing, and the role of AI in software development.",
    past: true,
  },
  {
    title: "Cleaning Camp at Lohagad",
    date: "Feb 26, 2025",
    location: "Lohagad Fort, Maharashtra",
    category: "Social",
    description: "TE students organised a cleanliness drive at the historic Lohagad Fort to combat environmental degradation, promoting eco-friendly tourism and social responsibility.",
    past: true,
  },
  {
    title: "Old Age Home Visit",
    date: "Feb 26, 2025",
    location: "Local Old Age Home",
    category: "Social",
    description: "TE students visited a local old age home under C-Cube, spending time with elderly residents through singing, games, and storytelling — fostering empathy and compassion.",
    past: true,
  },
  {
    title: "Farewell 2K25",
    date: "Apr 25, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A heartfelt farewell event organised for the graduating BE batch of 2025, celebrating their journey and wishing them success in their future endeavours.",
    past: true,
  },

  // Older Past Events (2022–2023)
  {
    title: "Engineer's Day Celebration",
    date: "Sep 2023",
    location: "Computer Department",
    category: "Cultural",
    description: "C-Cube celebrated Engineer's Day with engaging activities and events, recognising the spirit of engineering among students.",
    past: true,
  },
  {
    title: "Industrial Visit – CognaTech",
    date: "Mar 2, 2024",
    location: "CognaTech, Narhe, Pune",
    category: "Industrial Visit",
    description: "Students visited CognaTech for an industrial exposure experience, gaining real-world insights into the tech industry.",
    past: true,
  },
  {
    title: "Cleanliness Drive",
    date: "Sep 2023",
    location: "On Campus",
    category: "Social",
    description: "A campus cleanliness initiative organised by C-Cube to promote environmental awareness and a clean campus culture.",
    past: true,
  },
  {
    title: "Remote Teaching",
    date: "2022",
    location: "Remote Village School",
    category: "Social",
    description: "C-Cube students volunteered to teach at a remote primary school, bridging the educational gap and giving back to the community.",
    past: true,
  },
  {
    title: "Remote Teaching",
    date: "2023",
    location: "Remote Village School",
    category: "Social",
    description: "Continuing the tradition of community outreach, C-Cube students conducted teaching sessions at an underprivileged school in 2023.",
    past: true,
  },
  {
    title: "Trekking & Cleanliness Drive",
    date: "Sep 15, 2023",
    location: "Talegaon Dabhade, Maharashtra",
    category: "Social",
    description: "A combined trekking and cleanliness drive at Talegaon Dabhade, promoting fitness, teamwork, and environmental responsibility.",
    past: true,
  },
];

const categories = ["All", "Technical", "Expert Session", "Cultural", "Industrial Visit", "Social"];

const categoryColors: Record<string, string> = {
  Technical: "bg-primary/15 text-primary",
  "Expert Session": "bg-accent/15 text-accent",
  Cultural: "bg-emerald-500/15 text-emerald-600",
  "Industrial Visit": "bg-sky-500/15 text-sky-600",
  Social: "bg-orange-500/15 text-orange-600",
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
          <SectionHeading
            label="Events"
            title="Learn, grow, and give back"
            description="From expert sessions to social drives — C-Cube organises technical and non-technical events for holistic student development."
          />

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize active:scale-95 ${
                  tab === t
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
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
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-95 ${
                  filter === c
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-transparent"
                }`}
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
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full ${
                        categoryColors[e.category] || "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {e.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {e.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {e.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {e.location}
                    </span>
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