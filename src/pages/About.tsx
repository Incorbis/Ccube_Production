import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Lightbulb, Heart, Users, Award, Calendar, Sparkles } from "lucide-react";

const values = [
  { icon: Target, title: "Learn by Doing", desc: "We believe the best way to learn is by building real projects for real people.", accent: "from-blue-500/20 to-cyan-500/10" },
  { icon: Eye, title: "Design with Intent", desc: "Every pixel has purpose. We champion thoughtful, accessible, user-centered design.", accent: "from-purple-500/20 to-pink-500/10" },
  { icon: Lightbulb, title: "Stay Curious", desc: "Technology evolves fast. We foster a culture of experimentation and lifelong learning.", accent: "from-amber-500/20 to-orange-500/10" },
  { icon: Heart, title: "Community First", desc: "We grow together. Mentorship, collaboration, and support define who we are.", accent: "from-rose-500/20 to-red-500/10" },
  { icon: Users, title: "Collaborate Fearlessly", desc: "Great ideas emerge from diverse perspectives. We celebrate bold contributions and constructive feedback.", accent: "from-indigo-500/20 to-violet-500/10" },
  { icon: Award, title: "Ship with Pride", desc: "We don't just build for the classroom. Every project is a portfolio piece worth shipping to the world.", accent: "from-teal-500/20 to-cyan-500/10" },
];

const timeline = [
  { 
    year: "2022", 
    text: "Founded by 8 students with a shared love for design and code.",
    milestone: "The Birth",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  { 
    year: "2023", 
    text: "Hosted our first hackathon — PixelHack — with 80+ participants.",
    milestone: "First Impact",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
  { 
    year: "2024", 
    text: "Won Best College Tech Club at the state-level innovation summit.",
    milestone: "Recognition",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1540575467063-178aa50ab817?w=600&h=400&fit=crop"
  },
  { 
    year: "2025", 
    text: "Expanded to 120+ members with 5 specialized verticals.",
    milestone: "Scaling Up",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  { 
    year: "2025 Q2", 
    text: "Launched international partnerships with tech communities across 3 continents.",
    milestone: "Going Global",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  { 
    year: "2025 Q3", 
    text: "Opened Innovation Lab with state-of-the-art facilities for student projects.",
    milestone: "Future Ready",
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
];



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
            {/* Left side - Description */}
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                PixelCraft was born in late 2022 when eight students — designers, developers, and dreamers — 
                gathered in a college computer lab with a shared frustration: traditional tech clubs felt either 
                too code-heavy or too design-isolated. We wanted a space where pixels met logic, where aesthetics 
                informed algorithms, and where students could learn both craft and code without choosing sides.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                What started as informal design critiques and weekend coding sessions quickly grew into something 
                bigger. With the support of visionary faculty members and the energy of curious students, PixelCraft 
                became an official college club — a creative engine that now empowers over 120 members to build, 
                ship, and showcase work that matters.
              </p>
            </div>

            {/* Right side - Logo placeholder */}
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

    {/* Vision & Mission - Side by Side */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Vision & Mission" title="Our purpose and path forward" />
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <ScrollReveal>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                To be the leading student community where design and technology converge — a launchpad for 
                creative technologists who don't just build products, but craft experiences that matter. 
                We envision a future where every PixelCraft member graduates not just with a degree, but 
                with a portfolio of real-world projects, a network of mentors and peers, and the confidence 
                to shape the digital landscape.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Build Real Projects</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Move beyond classroom theory. Every semester, members work on live projects for 
                    startups, NGOs, and campus initiatives — solving real problems for real users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bridge Disciplines</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Break down silos between design, development, and product thinking. Our workshops 
                    and sprints teach students to speak both languages fluently.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Foster Community</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create a supportive ecosystem of mentorship, collaboration, and growth. Seniors 
                    guide juniors, alumni stay connected, and everyone learns from each other.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Core Values - Redesigned with 6 items in 3x2 grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Our Values" title="What drives us" />
        
        {/* Grid layout: 2 columns on desktop, 1 on mobile */}
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
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <v.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Connected Timeline Section */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Our Journey" title="From idea to institution" />
        
        {/* Vertical Connected Timeline */}
        <div className="relative mt-12">
          {/* Central gradient line connecting all dots */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgb(59, 130, 246), rgb(168, 85, 247), rgb(168, 85, 247), rgb(59, 130, 246))',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)',
            }}
          />
          
          {/* Animated glow effect */}
          <style>{`
            @keyframes slideInLine {
              from {
                opacity: 0;
                transform: scaleX(0);
              }
              to {
                opacity: 1;
                transform: scaleX(1);
              }
            }
            
            .timeline-connector {
              animation: slideInLine 0.8s ease-out forwards;
              transform-origin: center;
            }
          `}</style>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 0.1}>
                <div className={`flex gap-8 items-stretch ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="glass-card p-8 h-full relative overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105">
                      {/* Background Image - Faded */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-10 blur-md"
                        style={{
                          backgroundImage: `url('${t.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          zIndex: 0
                        }}
                      />
                      
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/40 to-background/60 z-[1]" />

                      {/* Accent line on left/right based on position */}
                      <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b ${t.color}`} />

                      {/* Content */}
                      <div className="relative z-[2]">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${t.color}`}>
                            {t.milestone}
                          </span>
                        </div>
                        
                        <h3 className={`text-5xl font-black mb-3 bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                          {t.year}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {t.text}
                        </p>

                        {/* Decorative element */}
                        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} blur-lg`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot with Connectors */}
                  <div className="flex items-center justify-center flex-shrink-0 relative">
                    {/* Horizontal line to dot (left) */}
                    {i % 2 === 0 && (
                      <div 
                        className="absolute right-full h-1 bg-gradient-to-r from-transparent to-blue-400"
                        style={{
                          width: '32px',
                          animation: 'slideInLine 0.8s ease-out forwards',
                          animationDelay: `${i * 0.1 + 0.3}s`
                        }}
                      />
                    )}
                    
                    {/* Horizontal line to dot (right) */}
                    {i % 2 !== 0 && (
                      <div 
                        className="absolute left-full h-1 bg-gradient-to-l from-transparent to-blue-400"
                        style={{
                          width: '32px',
                          animation: 'slideInLine 0.8s ease-out forwards',
                          animationDelay: `${i * 0.1 + 0.3}s`
                        }}
                      />
                    )}
                    
                    <div className="relative">
                      {/* Outer glow circle */}
                      <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${t.color} opacity-20 blur-lg`} />
                      
                      {/* Main dot */}
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-125 cursor-pointer group/dot`}>
                        {/* Inner circles */}
                        <div className="w-14 h-14 rounded-full bg-background/80 flex items-center justify-center">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} transition-all duration-300 group-hover/dot:scale-125`} />
                        </div>
                      </div>

                      {/* Pulse animation on hover */}
                      <style>{`
                        @keyframes pulse-glow-${i} {
                          0% { box-shadow: 0 0 0 0 rgba(var(--glow-color), 0.7); }
                          70% { box-shadow: 0 0 0 15px rgba(var(--glow-color), 0); }
                          100% { box-shadow: 0 0 0 0 rgba(var(--glow-color), 0); }
                        }
                      `}</style>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom flourish */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mx-auto mb-3 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <p className="text-muted-foreground text-sm font-semibold">And the story continues...</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;