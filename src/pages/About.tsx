import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Lightbulb, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Serve the Community",
    desc: "We are committed to making a positive impact through social work, helping rural communities, and supporting those in need.",
    accent: "from-rose-500/20 to-red-500/10"
  },
  {
    icon: Users,
    title: "Empower Rural Students",
    desc: "We bridge the gap by providing knowledge, awareness, and opportunities to students in rural areas.",
    accent: "from-green-500/20 to-emerald-500/10"
  },
  {
    icon: Lightbulb,
    title: "Spread Awareness",
    desc: "We organize campaigns and activities that promote education, hygiene, and social responsibility.",
    accent: "from-yellow-500/20 to-orange-500/10"
  },
  {
    icon: Target,
    title: "Organize Impactful Events",
    desc: "From Engineers Day to Women's Day, we celebrate and organize events that inspire learning and unity.",
    accent: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Award,
    title: "Promote Clean & Healthy Living",
    desc: "We conduct cleanliness drives and social initiatives to create a better and healthier environment.",
    accent: "from-teal-500/20 to-green-500/10"
  },
  {
    icon: Eye,
    title: "Celebrate Together",
    desc: "Through annual functions and community gatherings, we build strong bonds and unforgettable experiences.",
    accent: "from-purple-500/20 to-pink-500/10"
  }
];

// ─── Connection Card (WebHook-style, themed) ──────────────────────────────
interface ConnectionCardProps {
  leftLabel: string;
  leftSub: string;
  rightLabel: string;
  rightSub: string;
  // Tailwind classes passed per-card for accent theming
  borderActive: string;       // e.g. "border-lime-400"
  lineBorderActive: string;   // e.g. "border-lime-400"
  ballBg: string;             // e.g. "bg-lime-400"
  boxGradient: string;        // e.g. "from-lime-500/20 to-emerald-500/10"
  glowColor: string;          // e.g. "shadow-lime-500/30"
  labelColor: string;         // e.g. "text-lime-300"
}

const ConnectionCard = ({
  leftLabel,
  leftSub,
  rightLabel,
  rightSub,
  borderActive,
  lineBorderActive,
  ballBg,
  boxGradient,
  glowColor,
  labelColor,
}: ConnectionCardProps) => {
  const [hovered, setIsHovered] = useState(false);

  const boxShared = `z-10 flex h-20 w-full sm:h-24 sm:w-36 md:w-40 flex-col items-center justify-center
    rounded-xl border-2 backdrop-blur-sm text-center px-3 transition-all duration-500 select-none`;

  const boxIdle = `${boxShared} border-white/10 bg-gradient-to-br ${boxGradient}`;
  const boxActive = `${boxShared} bg-background/90 ${borderActive} shadow-lg ${glowColor}`;

  return (
    /* Mobile: vertical stack  |  sm+: horizontal row */
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 w-full">

      {/* Left Box */}
      <div
        className={`${hovered ? boxActive : boxIdle} cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`text-sm font-bold leading-tight transition-colors duration-300 ${hovered ? labelColor : "text-foreground"}`}>
          {leftLabel}
        </span>
        <span className="text-xs text-muted-foreground mt-1">{leftSub}</span>
      </div>

      {/* Connector — vertical on mobile, horizontal on sm+ */}
      <div className="relative flex sm:block items-center justify-center">
        {/* Horizontal line (sm+) */}
        <div
          className={`hidden sm:block w-16 md:w-24 border-t-2 transition-all duration-500 ${
            hovered ? `border-solid ${lineBorderActive}` : "border-dashed border-white/15"
          }`}
        />
        {/* Vertical line (mobile) */}
        <div
          className={`sm:hidden h-6 border-l-2 transition-all duration-500 ${
            hovered ? `border-solid ${lineBorderActive}` : "border-dashed border-white/15"
          }`}
        />

        {/* Animated ball — moves down on mobile, right on sm+ */}
        <div
          className={`
            absolute z-20 h-4 w-4 rounded-full transition-all duration-500 ease-in-out ring-2 ring-white/20
            sm:top-1/2 sm:-translate-y-1/2 sm:left-0
            top-0 left-1/2 -translate-x-1/2
            ${hovered
              ? `${ballBg} ring-0 scale-125 sm:translate-x-[52px] md:translate-x-[80px] translate-y-[16px] sm:translate-y-[-50%]`
              : "bg-white/15 sm:translate-x-0 translate-y-0"
            }
          `}
        />
      </div>

      {/* Right Box */}
      <div className={hovered ? boxActive : boxIdle}>
        <span className={`text-sm font-bold leading-tight transition-colors duration-300 ${hovered ? labelColor : "text-foreground"}`}>
          {rightLabel}
        </span>
        <span className="text-xs text-muted-foreground mt-1">{rightSub}</span>
      </div>

    </div>
  );
};

// ─── Connection data ───────────────────────────────────────────────────────
const connections = [
  {
    leftLabel: "Students",
    leftSub: "Curious minds",
    rightLabel: "Industry",
    rightSub: "Real-world skills",
    borderActive: "border-lime-400",
    lineBorderActive: "border-lime-400",
    ballBg: "bg-lime-400",
    boxGradient: "from-lime-500/20 to-emerald-500/10",
    glowColor: "shadow-lime-500/30",
    labelColor: "text-lime-300",
    cardAccent: "from-lime-500/10 to-emerald-500/5",
    desc: "We connect students directly with industry knowledge through workshops, talks, and live projects — bridging the gap between classroom and career.",
  },
  {
    leftLabel: "Rural Youth",
    leftSub: "Untapped potential",
    rightLabel: "Opportunity",
    rightSub: "Awareness & growth",
    borderActive: "border-cyan-400",
    lineBorderActive: "border-cyan-400",
    ballBg: "bg-cyan-400",
    boxGradient: "from-cyan-500/20 to-blue-500/10",
    glowColor: "shadow-cyan-500/30",
    labelColor: "text-cyan-300",
    cardAccent: "from-cyan-500/10 to-blue-500/5",
    desc: "C-Cube travels beyond campus walls, reaching rural students with mentorship drives and career awareness programs.",
  },
  {
    leftLabel: "Ideas",
    leftSub: "Raw creativity",
    rightLabel: "Events",
    rightSub: "Memorable impact",
    borderActive: "border-rose-400",
    lineBorderActive: "border-rose-400",
    ballBg: "bg-rose-400",
    boxGradient: "from-rose-500/20 to-pink-500/10",
    glowColor: "shadow-rose-500/30",
    labelColor: "text-rose-300",
    cardAccent: "from-rose-500/10 to-pink-500/5",
    desc: "Every idea that walks through our door gets a stage — hackathons, cultural nights, tech fests, and more.",
  },
  {
    leftLabel: "Community",
    leftSub: "People & purpose",
    rightLabel: "Change",
    rightSub: "Lasting impact",
    borderActive: "border-yellow-400",
    lineBorderActive: "border-yellow-400",
    ballBg: "bg-yellow-400",
    boxGradient: "from-yellow-500/20 to-orange-500/10",
    glowColor: "shadow-yellow-500/30",
    labelColor: "text-yellow-300",
    cardAccent: "from-yellow-500/10 to-orange-500/5",
    desc: "Our cleanliness drives and social campaigns remind us that engineering is not just about code — it's about people.",
  },
];

// ─── About Page ────────────────────────────────────────────────────────────
const About = () => (
  <div className="min-h-screen pt-24">

    {/* Formation Story */}
    <section className="section-padding pt-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Us"
          title="More than a club — a creative engine"
          description="Born from passion, built by students, sustained by community"
        />
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                C-Cube was established as a student-driven initiative under the Computer Department with the aim of creating a platform where students can explore beyond academics. It started with organizing small technical and non-technical events and gradually grew into a community that encourages innovation, collaboration, and overall student development.
              </p>
            </div>
            <div className="glass-card p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="./logo.png"
                  alt="PixelCraft Club Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Our Values" title="What drives us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="glass-card overflow-hidden group cursor-pointer h-full">
                <div className={`
                  relative p-8 md:p-10 h-full
                  bg-gradient-to-br ${v.accent}
                  transition-all duration-500 ease-out
                  group-hover:scale-[1.02]
                `}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <v.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── NEW: Bridges We Build ── */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="How We Connect"
          title="Bridges we build"
          description="Hover each connection to see what C-Cube links together"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connections.map((conn, i) => (
            <ScrollReveal key={conn.leftLabel} delay={i * 0.1}>
              <div className="glass-card overflow-hidden group cursor-default h-full">
                <div className={`relative p-5 sm:p-8 h-full bg-gradient-to-br ${conn.cardAccent} transition-all duration-500`}>
                  {/* Decorative orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                  <div className="relative flex flex-col items-center gap-6">
                    <ConnectionCard
                      leftLabel={conn.leftLabel}
                      leftSub={conn.leftSub}
                      rightLabel={conn.rightLabel}
                      rightSub={conn.rightSub}
                      borderActive={conn.borderActive}
                      lineBorderActive={conn.lineBorderActive}
                      ballBg={conn.ballBg}
                      boxGradient={conn.boxGradient}
                      glowColor={conn.glowColor}
                      labelColor={conn.labelColor}
                    />
                    <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-sm">
                      {conn.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default About;