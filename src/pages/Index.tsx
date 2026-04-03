import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Calendar, Trophy, Users, Zap, Code, Palette, Camera, BookOpen, Sparkles, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Ballpit from "@/components/ui/Ballbit";


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

    {/* Vision & Mission */}
   <section className="section-padding relative z-10 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <SectionHeading label="Our Purpose" title="Vision & Mission" description="Driving holistic growth and empowering the student community." />
    
    <div className="relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Central Animated Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
        {/* Gradient Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        {/* Animated Dots flowing along the line */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"
            style={{ left: '-4px' }}
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'linear',
            }}
          />
        ))}

        {/* Central Icon Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-shift flex items-center justify-center border-4 border-background shadow-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-7 h-7 text-white" />
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">

        {/* Vision - Left Side */}
        <ScrollReveal delay={0.1}>
          <div className="relative group flex flex-col">
            {/* Floating particles around the card */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Main Card */}
            <div className="relative glass-card p-10 transition-all duration-500 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)] overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Animated Icon Container */}
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20 shadow-lg backdrop-blur-sm group-hover:border-primary/40 transition-all duration-700">
                    <motion.div 
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.05, 1],
                      }} 
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Target className="w-9 h-9 text-primary drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Orbiting Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/20 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-5xl font-bold tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
                    Vision
                  </h3>
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>

                <div className="space-y-4">
                  {[
                    "To provide students opportunities for holistic growth through extracurricular & co-curricular activities so that they can sail through their years in the department."
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10 group-hover:border-primary/20 backdrop-blur-sm transition-all duration-500"
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent mt-2 flex-shrink-0 shadow-[0_0_12px_rgba(var(--primary),0.7)]"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">
                          {text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 🔥 Bottom Branding Section — fills space below Vision card */}
            <div className="mt-8 flex flex-col items-center justify-center text-center relative">
              {/* Glow Background */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-96 h-40 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl opacity-60" />
              </div>
              {/* Logos */}
              <div className="relative flex items-center gap-6 mb-6">
                
                <motion.img
                  src="/leftlogo.png"
                  alt="Left Logo"
                  className="w-36 h-36 object-contain drop-shadow-xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <motion.img
                  src="/logo.png"
                  alt="Logo"
                  className="w-36 h-36 object-contain drop-shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <motion.img
                  src="/rightlogo.png"
                  alt="Right Logo"
                  className="w-36 h-36 object-contain drop-shadow-xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              {/* Department Text */}
              <motion.h4
                className="text-2xl md:text-3xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Department of Computer Engineering
              </motion.h4>
              {/* Underline animation */}
              <motion.div
                className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1 }}
              />
            </div>

          </div>
        </ScrollReveal>

        {/* Mission - Right Side */}
        <ScrollReveal delay={0.2}>
          <div className="relative group">
            {/* Floating particles around the card */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-accent"
                  style={{
                    top: `${Math.random() * 100}%`,
                    right: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Main Card */}
            <div className="relative glass-card p-10 h-full transition-all duration-500 hover:shadow-[0_20px_60px_hsl(var(--accent)/0.15)] overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-br-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Animated Icon Container */}
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center border border-accent/20 shadow-lg backdrop-blur-sm group-hover:border-accent/40 transition-all duration-700">
                    <motion.div 
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.05, 1],
                      }} 
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut",
                        delay: 1.5 
                      }}
                    >
                      <Rocket className="w-9 h-9 text-accent drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Orbiting Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-accent/20 rounded-2xl"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                  />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-5xl font-bold tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent to-primary">
                    Mission
                  </h3>
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>

                <div className="space-y-4">
                  {[
                    "To engage students in active co-curricular learning.",
                    "To Provide holistic learning experiences for all students.",
                    "To build supportive and inclusive student communities.",
                    "To develop soft skills in preparation for graduation and lifelong success."
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      className="relative p-5 rounded-2xl bg-gradient-to-bl from-accent/5 via-accent/3 to-transparent border border-accent/10 group-hover:border-accent/20 backdrop-blur-sm transition-all duration-500"
                      whileHover={{ x: -4 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-3 h-3 rounded-full bg-gradient-to-br from-accent to-primary mt-2 flex-shrink-0 shadow-[0_0_12px_rgba(var(--accent),0.7)]"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">
                          {text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </div>
</section>
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