import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Github } from "lucide-react";

const team = [
  { name: "Arjun Mehta", role: "President", bio: "Full-stack developer with a passion for clean architecture and open-source.", dept: "CSE, 4th Year" },
  { name: "Priya Nair", role: "Vice President", bio: "Product designer focused on accessibility and inclusive design systems.", dept: "Design, 3rd Year" },
  { name: "Rohan Sharma", role: "Tech Lead", bio: "React enthusiast and hackathon veteran. Ships fast, iterates faster.", dept: "IT, 3rd Year" },
  { name: "Ananya Das", role: "Design Lead", bio: "Illustrator turned UI designer. Believes in the power of visual storytelling.", dept: "Fine Arts, 3rd Year" },
  { name: "Karthik Reddy", role: "Events Head", bio: "Organized 15+ tech events. Loves logistics almost as much as code.", dept: "ECE, 3rd Year" },
  { name: "Sneha Iyer", role: "Content Lead", bio: "Writer, editor, and social media strategist for the club's digital presence.", dept: "English, 2nd Year" },
  { name: "Vikram Singh", role: "DevOps Lead", bio: "Infrastructure nerd. Runs the club's servers, CI/CD, and deployment pipelines.", dept: "CSE, 4th Year" },
  { name: "Fatima Khan", role: "Outreach Lead", bio: "Connects PixelCraft with industry partners, sponsors, and alumni networks.", dept: "MBA, 1st Year" },
];

const Team = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding pt-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Our Team" title="Meet the makers" description="A diverse group of students united by curiosity and craft." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 0.06}>
              <div className="glass-card p-6 text-center group transition-all duration-300 h-full flex flex-col">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center mx-auto mb-5 text-xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-primary text-xs font-mono mt-1">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-1 mb-3">{m.dept}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.bio}</p>
                <div className="flex justify-center gap-2 mt-4">
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
