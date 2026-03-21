import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Lightbulb, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Learn by Doing", desc: "We believe the best way to learn is by building real projects for real people." },
  { icon: Eye, title: "Design with Intent", desc: "Every pixel has purpose. We champion thoughtful, accessible, user-centered design." },
  { icon: Lightbulb, title: "Stay Curious", desc: "Technology evolves fast. We foster a culture of experimentation and lifelong learning." },
  { icon: Heart, title: "Community First", desc: "We grow together. Mentorship, collaboration, and support define who we are." },
];

const timeline = [
  { year: "2022", text: "Founded by 8 students with a shared love for design and code." },
  { year: "2023", text: "Hosted our first hackathon — PixelHack — with 80+ participants." },
  { year: "2024", text: "Won Best College Tech Club at the state-level innovation summit." },
  { year: "2025", text: "Expanded to 120+ members with 5 specialized verticals." },
];

const coordinators = [
  { name: "Dr. Meera Kapoor", role: "Faculty Advisor", dept: "Computer Science" },
  { name: "Arjun Mehta", role: "President", dept: "CSE, 4th Year" },
  { name: "Priya Nair", role: "Vice President", dept: "Design, 3rd Year" },
  { name: "Rohan Sharma", role: "Tech Lead", dept: "IT, 3rd Year" },
];

const About = () => (
  <div className="min-h-screen pt-24">
    {/* Intro */}
    <section className="section-padding pt-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="About Us" title="More than a club — a creative engine" description="PixelCraft was born from the idea that design and technology aren't separate disciplines — they're two halves of the same craft." />
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-base">
              We're a student-run community that bridges the gap between code and creativity. Whether you're a first-year exploring design for the first time or a final-year shipping production apps, PixelCraft gives you the space, mentorship, and projects to grow. We host workshops, hackathons, design sprints, and portfolio reviews — all driven by students, for students.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Values */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Our Values" title="What drives us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full group transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Our Journey" title="From idea to institution" />
        <div className="max-w-2xl mx-auto space-y-6">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.08}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-mono font-bold text-primary">{t.year}</span>
                </div>
                <div className="w-px bg-border self-stretch relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pb-4">{t.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Coordinators */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Leadership" title="The people behind the pixels" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {coordinators.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.08}>
              <div className="glass-card p-6 text-center group transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                  {c.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="font-semibold text-sm">{c.name}</h4>
                <p className="text-primary text-xs font-mono mt-1">{c.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{c.dept}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
