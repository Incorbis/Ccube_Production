import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Github } from "lucide-react";


const facultyAdvisors = [
  {
    name: "Dr. Minal Bodke ",
    role: "Faculty Advisor",
    dept: "Department of Computer Engineering",
    imgUrl: "",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Prof. Trupti Kherde",
    role: "Faculty Co-Advisor",
    dept: "Department of Computer Engineering",
    imgUrl: "",
    linkedin: "#",
    github: "#",
  },
];

const coreTeam = [
  { name: "Aditya Divate", role: "President", dept: "", imgUrl: "", linkedin: "#", github: "#" },
  { name: "Samruddhi Achari", role: "Joint President", dept: "", imgUrl: "", linkedin: "#", github: "#" },
  { name: "Manjeet Kumar", role: "Secretary", dept: "", imgUrl: "", linkedin: "#", github: "#" },
  { name: "Adit Patil", role: "Joint Secretary", dept: "", imgUrl: "", linkedin: "#", github: "#" },
  { name: "Siddhi Patil", role: "Treasurer", dept: "", imgUrl: "", linkedin: "#", github: "#" },
  { name: "Kanchan Garad", role: "Joint Treasurer", dept: "", imgUrl: "", linkedin: "#", github: "#" },
];

const teams = [
  {
    label: "Technical Team",
    members: [
      { name: "Swaroop Mane", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Esha Pansare", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Samiksha Ner", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Siddhi Pankhade", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Akash Patil", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Agam Kothari", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Krishna Kamurti", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
  {
    label: "Cultural Team",
    members: [
      { name: "Hitakshi Kharag", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Purva Khedekar", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Ketaki Shivange", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Shravani Dinesh Joshi", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Ilakshi Bhosale", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
  {
    label: "Anchoring & Stage Committee",
    members: [
      { name: "Shreya Kharade", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Arya Naik", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Bhumika Ladhani", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Parth Pramod Khade", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Devansh Sune", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
  {
    label: "Branding Team",
    members: [
      { name: "Vijaylaxmi Katke", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Prajwal Ingale", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Swati Gaikwad", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Shravani Joshi", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Kaustubh Bag", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Rahul Mane", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
  {
    label: "Photography & Discipline Committee",
    members: [
      { name: "Dhanshri Bendre", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Vaishavi Yadav", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Apurv Patil", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
  {
    label: "Report Writing",
    members: [
      { name: "Neha Takare", imgUrl: "", linkedin: "#", github: "#" },
      { name: "Gauri Jadhav", imgUrl: "", linkedin: "#", github: "#" },
    ],
  },
];

const roleHints: Record<string, string> = {
  "Anchoring & Stage Committee": "Shreya Kharade — Stage Committee · Arya Naik — Anchoring",
};

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

interface MemberCardProps {
  name: string;
  role: string;
  dept?: string;
  imgUrl?: string;
  linkedin?: string;
  github?: string;
  delay: number;
}

const MemberCard = ({ name, role, dept, imgUrl, linkedin = "#", github = "#", delay }: MemberCardProps) => (
  <ScrollReveal delay={delay}>
    
    <div className="glass-card p-6 text-center group transition-all duration-300 h-full flex flex-col min-h-[280px]">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center text-base font-bold text-primary">
            {getInitials(name)}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="text-primary text-xs font-mono mt-1">{role}</p>
          {dept && <p className="text-xs text-muted-foreground mt-1">{dept}</p>}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-2 mt-5">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const Team = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding pt-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          label="Our Team"
          title="Meet the makers"
          description="A diverse group of students united by curiosity and craft."
        />

        {/* Faculty Advisors */}
        <div>
          <h2 className="text-lg font-semibold mb-6 text-center tracking-wide uppercase text-muted-foreground">
            Faculty Advisors
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {facultyAdvisors.map((m, i) => (
              <MemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                dept={m.dept}
                imgUrl={m.imgUrl}
                linkedin={m.linkedin}
                github={m.github}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>

        {/* Core Committee */}
        <div>
          <h2 className="text-lg font-semibold mb-6 text-center tracking-wide uppercase text-muted-foreground">
            Core Committee
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((m, i) => (
              <MemberCard
                key={m.name}
                name={m.name}
                role={m.role}
                dept={m.dept}
                imgUrl={m.imgUrl}
                linkedin={m.linkedin}
                github={m.github}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>

        {/* Sub-teams */}
        {teams.map((team, ti) => (
          <div key={team.label}>
            <h2 className="text-lg font-semibold mb-2 text-center tracking-wide uppercase text-muted-foreground">
              {team.label}
            </h2>
            {roleHints[team.label] ? (
              <p className="text-xs text-center text-muted-foreground mb-6 font-mono">
                {roleHints[team.label]}
              </p>
            ) : (
              <div className="mb-6" />
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.members.map((member, i) => (
                <MemberCard
                  key={member.name}
                  name={member.name}
                  role={team.label}
                  imgUrl={member.imgUrl}
                  linkedin={member.linkedin}
                  github={member.github}
                  delay={i * 0.06 + ti * 0.02}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Team; 