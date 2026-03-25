import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Github } from "lucide-react";

const coreTeam = [
  { name: "Aditya Divate", role: "President", dept: "" },
  { name: "Samruddhi Achari", role: "Joint President", dept: "" },
  { name: "Manjeet Kumar", role: "Secretary", dept: "" },
  { name: "Adit Patil", role: "Joint Secretary", dept: "" },
  { name: "Siddhi Patil", role: "Treasurer", dept: "" },
  { name: "Kanchan Garad", role: "Joint Treasurer", dept: "" },
];

const teams = [
  {
    label: "Technical Team",
    members: [
      "Swaroop Mane", "Esha Pansare", "Samiksha Ner",
      "Siddhi Pankhade", "Akash Patil", "Agam Kothari", "Krishna Kamurti",
    ],
  },
  {
    label: "Cultural Team",
    members: [
      "Hitakshi Kharag", "Purva Khedekar", "Ketaki Shivange",
      "Shravani Dinesh Joshi", "Ilakshi Bhosale",
    ],
  },
  {
    label: "Anchoring & Stage Committee",
    members: [
      "Shreya Kharade", "Arya Naik",
      "Bhumika Ladhani", "Parth Pramod Khade", "Devansh Sune",
    ],
  },
  {
    label: "Branding Team",
    members: [
      "Vijaylaxmi Katke", "Prajwal Ingale", "Swati Gaikwad",
      "Shravani Joshi", "Kaustubh Bag", "Rahul Mane",
    ],
  },
  {
    label: "Photography & Discipline Committee",
    members: ["Dhanshri Bendre", "Vaishavi Yadav", "Apurv Patil"],
  },
  {
    label: "Report Writing",
    members: ["Neha Takare", "Gauri Jadhav"],
  },
];

const roleHints: Record<string, string> = {
  "Anchoring & Stage Committee": "Shreya Kharade — Stage Committee · Arya Naik — Anchoring",
};

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const MemberCard = ({ name, role, dept, delay }: { name: string; role: string; dept?: string; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div className="glass-card p-6 text-center group transition-all duration-300 h-full flex flex-col">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center mx-auto mb-4 text-base font-bold text-primary transition-transform duration-300 group-hover:scale-105">
        {getInitials(name)}
      </div>
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-primary text-xs font-mono mt-1">{role}</p>
      {dept && <p className="text-xs text-muted-foreground mt-1">{dept}</p>}
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
);

const Team = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding pt-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading label="Our Team" title="Meet the makers" description="A diverse group of students united by curiosity and craft." />

        {/* Core Committee */}
        <div>
          <h2 className="text-lg font-semibold mb-6 text-center tracking-wide uppercase text-muted-foreground">Core Committee</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((m, i) => (
              <MemberCard key={m.name} name={m.name} role={m.role} dept={m.dept} delay={i * 0.06} />
            ))}
          </div>
        </div>

        {/* Sub-teams */}
        {teams.map((team, ti) => (
          <div key={team.label}>
            <h2 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-muted-foreground">{team.label}</h2>
            {roleHints[team.label] && (
              <p className="text-xs text-center text-muted-foreground mb-6 font-mono">{roleHints[team.label]}</p>
            )}
            {!roleHints[team.label] && <div className="mb-6" />}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.members.map((name, i) => (
                <MemberCard key={name} name={name} role={team.label} delay={i * 0.06 + ti * 0.02} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  </div>
);

export default Team;