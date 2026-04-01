import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar, Trophy, Users, Zap, Code, Palette, Camera, BookOpen, Sparkles} from "lucide-react";
import { motion } from "framer-motion";
import Ballpit from "@/components/ui/Ballbit";
import CubeModel from "../components/Cubemodel"; // adjust path

const stats = [
  { icon: Users, value: "120+", label: "Active Members" },
  { icon: Calendar, value: "35", label: "Events Hosted" },
  { icon: Trophy, value: "12", label: "Awards Won" },
  { icon: Zap, value: "4", label: "Years Running" },
];
// Faculty Advisors Data
const facultyAdvisors = [
  {
    name: "Dr. Minal Bodke",
    role: "Faculty Advisor",
    dept: "Department of Computer Engineering",
    imgUrl: "https://www.pccoer.com/computer/images/Teach/photo_minal_bhondave.png",
  },
  {
    name: "Prof. Trupti Kherde",
    role: "Faculty Co-Advisor",
    dept: "Department of Computer Engineering",
    imgUrl: "https://www.pccoer.com/computer/images/Teach/trupti.png",
  },
];

const events = [
  { title: "SE Induction and Fresher's 2K25", date: "Jul 22, 2025", category: "Cultural", description: "A warm welcome event for newly joined SE students, featuring introductions to the department, club activities, and an exciting fresher's celebration.", icon: Users },
  { title: "SPOS Expert Session", date: "Aug 8, 2025", category: "Expert Session", description: "An expert session on System Programming and Operating Systems (SPOS) aimed at TE students to deepen their understanding of core CS concepts.", icon: BookOpen },
  { title: "C Cube Activity (Engineer's Day)", date: "Sep 12, 2025", category: "Technical", description: "A technical celebration event for Engineer's Day, encouraging students to showcase their innovative ideas and engineering spirit.", icon: Code },
  { title: "CDAC Visit", date: "Dec 28, 2024", category: "Industrial Visit", description: "TE students visited CDAC gaining insights into high-performance computing, cybersecurity, AI, embedded systems, IoT, and real-world technology applications.", icon: Camera },
  { title: "Cleaning Camp at Lohagad", date: "Feb 26, 2025", category: "Social", description: "TE students organised a cleanliness drive at the historic Lohagad Fort to combat environmental degradation, promoting eco-friendly tourism and social responsibility.", icon: Sparkles },
];

const categoryColors: Record<string, string> = {
  Cultural: "bg-purple-500/15 text-purple-600",
  "Expert Session": "bg-blue-500/15 text-blue-600",
  Technical: "bg-orange-500/15 text-orange-600",
  "Industrial Visit": "bg-cyan-500/15 text-cyan-600",
  Social: "bg-emerald-500/15 text-emerald-600",
};

const categoryGradients: Record<string, string> = {
  Cultural: "from-purple-500/10 to-pink-500/10",
  "Expert Session": "from-blue-500/10 to-indigo-500/10",
  Technical: "from-orange-500/10 to-amber-500/10",
  "Industrial Visit": "from-cyan-500/10 to-blue-500/10",
  Social: "from-emerald-500/10 to-green-500/10",
};

const Index = () => (
  <div className="min-h-screen">

    {/* ── Hero ──────────────────────────────────────────────────────── */}
    {/*
      Layering order (bottom → top):
        0  Ballpit canvas   (absolute, fills wrapper)
        1  Dark overlay     (absolute, rgba scrim)
        2  Glow decorations (absolute, pointer-events none)
        3  Hero text/CTA    (relative, normal flow inside wrapper)
    */}
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>

      {/* Z=0 · Ballpit */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          className="w-full h-full"
        />
      </div>

      {/* Z=1 · Scrim — tones down the balls so text is readable */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }} />

      {/* Z=2 · Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" style={{ zIndex: 2, pointerEvents: "none" }} />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" style={{ zIndex: 2, animationDelay: "1.5s", pointerEvents: "none" }} />

      {/* Z=3 · Hero content */}
      <div
        className="section-padding pt-32"
        style={{ position: "relative", zIndex: 3, minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
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
              Lead the 
             <span className="gradient-text"> Change</span><br></br>Serve the <span className="gradient-text">Society.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
       We learn by serving — empowering communities through rural education, cleanliness drives, and impactful social initiatives.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/events">
                <Button variant="hero" size="xl">
                Explore Events <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>



          </div>
          
        </div>
         
      </div>
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

    </div>



 <div className="w-full min-h-screen bg-white">
        <div className="w-full md:w-[100%] h-[500px]">
          <CubeModel />
        </div>
    </div>


    {/* What we do */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="What We Do" title="Craft, Create, Collaborate" description="From hackathons to design jams, we build skills that matter." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
  {
    icon: Users,
    title: "Community Service",
    desc: "We actively engage in social work, supporting rural communities through education, awareness drives, and meaningful initiatives that create real impact."
  },
  {
    icon: BookOpen,
    title: "Rural Education",
    desc: "Empowering students in rural areas by teaching essential skills, spreading knowledge, and guiding them towards better opportunities and brighter futures."
  },
  {
    icon: Sparkles,
    title: "Events & Initiatives",
    desc: "Organizing impactful events like Engineers Day, Teachers Day, Women's Day, cleanliness drives, and annual functions to inspire, celebrate, and bring communities together."
  }
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
        
        {/* Carousel Layout */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...events, ...events].map((e, i) => (
              <motion.div
                key={`${e.title}-${i}`}
                className={`glass-card p-6 w-80 flex-shrink-0 group transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${categoryGradients[e.category]}`}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-22 h-12 rounded-xl bg-gradient-to-br ${categoryGradients[e.category]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <e.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono px-3 py-1 rounded-full ${categoryColors[e.category]} font-semibold`}>{e.category}</span>
                      <span className="text-sm text-muted-foreground font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {e.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{e.description}</p>
                    <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group-hover:text-accent">
                      View Gallery <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

<div className="section-padding">
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold mb-2">
      Faculty Advisors
    </h2>
    <p className="text-muted-foreground text-sm mb-10">
      Guiding our mission of social impact, education, and community service
    </p>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 gap-8">
      {facultyAdvisors.map((m, i) => (
        <ScrollReveal key={m.name} delay={i * 0.1}>
          
          <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Avatar */}
            <div className="relative z-10 w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:scale-105 transition">
              {m.imgUrl ? (
                <img src={m.imgUrl} alt={m.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/20 text-xl font-bold text-primary">
                  {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="relative z-10 text-center">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{m.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.dept}</p>
            </div>

           

          </div>

        </ScrollReveal>
      ))}
    </div>

  </div>
</div>

  </div>
);

export default Index;