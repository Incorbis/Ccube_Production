import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Github } from "lucide-react";


const facultyAdvisors = [
  {
    name: "Dr. Minal Bodke ",
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

const coreTeam = [
  { name: "Aditya Divate", role: "President", dept: "", imgUrl: "/AdityaDivate.jpeg" },
  { name: "Samruddhi Achari", role: "Joint President", dept: "", imgUrl: "/" },
  { name: "Manjeet Kumar", role: "Secretary", dept: "", imgUrl: "/Manjeet.jpeg" },
  { name: "Adit Patil", role: "Joint Secretary", dept: "", imgUrl: "/AditiPatel.jpeg" },
  { name: "Siddhi Patil", role: "Treasurer", dept: "", imgUrl: "/SiddhiPatil.jpg"},
  { name: "Kanchan Garad", role: "Joint Treasurer", dept: "", imgUrl: "/Kanchan.jpeg" },
];

const teams = [
  {
    label: "Technical Team",
    members: [
      { name: "Swaroop Mane", imgUrl: "" },
      { name: "Esha Pansare", imgUrl: "" },
      { name: "Samiksha Ner", imgUrl: ""},
      { name: "Siddhi Pankhade", imgUrl: "" },
      { name: "Akash Patil", imgUrl: ""},
      { name: "Agam Kothari", imgUrl: "" },
      { name: "Krishna Kamurti", imgUrl: ""},
    ],
  },
  {
    label: "Cultural Team",
    members: [
      { name: "Hitakshi Kharag", imgUrl: "" },
      { name: "Purva Khedekar", imgUrl: "" },
      { name: "Ketaki Shivange", imgUrl: "" },
      { name: "Shravani Dinesh Joshi", imgUrl: "" },
      { name: "Ilakshi Bhosale", imgUrl: ""},
    ],
  },
  {
    label: "Anchoring & Stage Committee",
    members: [
      { name: "Shreya Kharade", imgUrl: "" },
      { name: "Arya Naik", imgUrl: "" },
      { name: "Bhumika Ladhani", imgUrl: ""},
      { name: "Parth Pramod Khade", imgUrl: "" },
      { name: "Devansh Sune", imgUrl: "" },
    ],
  },
  {
    label: "Branding Team",
    members: [
      { name: "Vijaylaxmi Katke", imgUrl: "" },
      { name: "Prajwal Ingale", imgUrl: "" },
      { name: "Swati Gaikwad", imgUrl: ""},
      { name: "Shravani Joshi", imgUrl: "" },
      { name: "Kaustubh Bag", imgUrl: "" },
      { name: "Rahul Mane", imgUrl: "" },
    ],
  },
  {
    label: "Photography & Discipline Committee",
    members: [
      { name: "Dhanshri Bendre", imgUrl: "" },
      { name: "Vaishavi Yadav", imgUrl: "" },
      { name: "Apurv Patil", imgUrl: "" },
    ],
  },
  {
    label: "Report Writing",
    members: [
      { name: "Neha Takare", imgUrl: "" },
      { name: "Gauri Jadhav", imgUrl: "" },
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

const MemberCard = ({ name, role, dept, imgUrl, delay }: MemberCardProps) => (
  <ScrollReveal delay={delay}>
    
    <div className="glass-card p-6 text-center group transition-all duration-300 h-full flex flex-col min-h-[200px]">
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

                delay={i * 0.06}
              />
            ))}
          </div>
        </div>

         {/* Our Team Section */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-center tracking-wide uppercase text-muted-foreground">
              Our Team
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/Team.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
);

export default Team; 