import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Lightbulb, Heart, Users, Award, Calendar, Sparkles } from "lucide-react";

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
             C-Cube was established as a student-driven initiative under the Computer Department with the aim of creating a platform where students can explore beyond academics. It started with organizing small technical and non-technical events and gradually grew into a community that encourages innovation, collaboration, and overall student development.
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
            
            <p className="text-muted-foreground text-sm font-semibold">And the story continues...</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;