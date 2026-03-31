import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, MapPin } from "lucide-react";

import img1 from "../assets/Events/Events/SEInduction/1.png"
import img2 from "../assets/Events/Events/SposExpertSession/1.jpg"
import img3 from "../assets/Events/Events/engineerDay/1.jpg"
import img4 from "../assets/Events/Events/TeacherDay/5.jpg"
import img5 from "../assets/Events/Events/CDAC/1.jpg"
import img6 from "../assets/Events/Events/TestingTools/1.png"
import img7 from "../assets/Events/Events/OldAgeVisit/1.jpg"
import img8 from "../assets/Events/Events/Farewell/1.jpg"
import img9 from "../assets/Events/Events/engineerDay/2.jpg"
import img10 from "../assets/Events/Events/CleaningCampLohagad/1.jpg"
import img11 from "../assets/Events/Events/TrekkingCleaning/2.jpg"

import img14 from "../assets/Events/Events/TrekkingCleaning/1.jpg"
type EventType = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  image?: string;
};

const allEvents: EventType[] = [
  {
    title: "SE Induction and Fresher's 2K25",
    date: "Jul 22, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A warm welcome event for newly joined SE students, featuring introductions to the department, club activities, and an exciting fresher's celebration.",
    image: img1, // 👈 Add your URL or path here
  },
  {
    title: "SPOS Expert Session",
    date: "Aug 8, 2025",
    location: "Computer Department",
    category: "Expert Session",
    description: "An expert session on System Programming and Operating Systems (SPOS) aimed at TE students to deepen their understanding of core CS concepts.",
    image: img2,
  },
  {
    title: "C Cube Activity (Teacher's Day)",
    date: "Sep 5, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A special event organised by C-Cube students to celebrate and honour the teaching staff on Teacher's Day.",
    image: img4,
  },
  {
    title: "C Cube Activity (Engineer's Day)",
    date: "Sep 12, 2025",
    location: "Computer Department",
    category: "Technical",
    description: "A technical celebration event for Engineer's Day, encouraging students to showcase their innovative ideas and engineering spirit.",
    image: img3,
  },
  {
    title: "CDAC Visit",
    date: "Dec 28, 2024",
    location: "CDAC, Pune",
    category: "Industrial Visit",
    description: "TE students visited CDAC gaining insights into high-performance computing, cybersecurity, AI, embedded systems, IoT, and real-world technology applications.",
    image: img5,
  },
  {
    title: "Expert Session on Recent Testing Tools",
    date: "Apr 15, 2024",
    location: "Computer Department",
    category: "Expert Session",
    description: "An expert-led session for SE students covering current trends in software testing tools, automation, performance testing, and the role of AI in software development.",
    image: img6,
  },
  {
    title: "Cleaning Camp at Lohagad",
    date: "Feb 26, 2025",
    location: "Lohagad Fort, Maharashtra",
    category: "Social",
    description: "TE students organised a cleanliness drive at the historic Lohagad Fort to combat environmental degradation, promoting eco-friendly tourism and social responsibility.",
    image: img10,
  },
  {
    title: "Old Age Home Visit",
    date: "Feb 26, 2025",
    location: "Local Old Age Home",
    category: "Social",
    description: "TE students visited a local old age home under C-Cube, spending time with elderly residents through singing, games, and storytelling — fostering empathy and compassion.",
    image: img7,
  },
  {
    title: "Farewell 2K25",
    date: "Apr 25, 2025",
    location: "Computer Department",
    category: "Cultural",
    description: "A heartfelt farewell event organised for the graduating BE batch of 2025, celebrating their journey and wishing them success in their future endeavours.",
    image: img8,
  },
  {
    title: "Engineer's Day Celebration",
    date: "Sep 2023",
    location: "Computer Department",
    category: "Cultural",
    description: "C-Cube celebrated Engineer's Day with engaging activities and events, recognising the spirit of engineering among students.",
    image: img9,
  },
  {
    title: "Industrial Visit – CognaTech",
    date: "Mar 2, 2024",
    location: "CognaTech, Narhe, Pune",
    category: "Industrial Visit",
    description: "Students visited CognaTech for an industrial exposure experience, gaining real-world insights into the tech industry.",
    image: "",
  },
  {
    title: "Cleanliness Drive",
    date: "Sep 2023",
    location: "On Campus",
    category: "Social",
    description: "A campus cleanliness initiative organised by C-Cube to promote environmental awareness and a clean campus culture.",
    image: img11,
  },
  {
    title: "Remote Teaching",
    date: "2022",
    location: "Remote Village School",
    category: "Social",
    description: "C-Cube students volunteered to teach at a remote primary school, bridging the educational gap and giving back to the community.",
    image: "",
  },
  {
    title: "Remote Teaching",
    date: "2023",
    location: "Remote Village School",
    category: "Social",
    description: "Continuing the tradition of community outreach, C-Cube students conducted teaching sessions at an underprivileged school in 2023.",
    image: "",
  },
  {
    title: "Trekking & Cleanliness Drive",
    date: "Sep 15, 2023",
    location: "Talegaon Dabhade, Maharashtra",
    category: "Social",
    description: "A combined trekking and cleanliness drive at Talegaon Dabhade, promoting fitness, teamwork, and environmental responsibility.",
    image: img14,
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

// Fallback placeholder shown when no image is provided
const PLACEHOLDER = "https://placehold.co/600x300?text=Photo+Coming+Soon";

const Events = () => {
  const [filter, setFilter] = useState("All");

  const filtered = allEvents.filter((e) => filter === "All" || e.category === filter);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Events"
            title="Learn, grow, and give back"
            description="From expert sessions to social drives — C-Cube organises technical and non-technical events for holistic student development."
          />

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
                <div className="glass-card overflow-hidden flex flex-col h-full group transition-all duration-300">

                  {/* Event Photo */}
                  <div className="w-full h-48 overflow-hidden bg-secondary">
                    <img
                      src={e.image || PLACEHOLDER}
                      alt={e.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
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
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {e.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {e.location}
                      </span>
                    </div>
                  </div>

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