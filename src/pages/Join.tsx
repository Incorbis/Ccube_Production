import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const departments = ["Computer Science", "Information Technology", "Electronics", "Design", "Fine Arts", "MBA", "Other"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const interests = ["Web Development", "UI/UX Design", "Mobile Apps", "AI/ML", "Creative Media", "Content Writing", "Event Management"];

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", department: "", year: "", interests: [] as string[] });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const toggleInterest = (interest: string) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest) ? f.interests.filter((i) => i !== interest) : [...f.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.department || !form.year) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding">
        <ScrollReveal>
          <div className="glass-card glow-border p-12 text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold mb-3">You're in!</h2>
            <p className="text-muted-foreground leading-relaxed">Welcome to PixelCraft, {form.name.split(" ")[0]}. Check your email for next steps and our onboarding guide.</p>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Join Us" title="Become a PixelCrafter" description="Fill out the form below and we'll get you onboarded within 48 hours." />

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 max-w-2xl mx-auto space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <input
                    type="email"
                    placeholder="you@college.edu"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Department *</label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all appearance-none"
                  >
                    <option value="">Select department</option>
                    {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Year *</label>
                  <select
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all appearance-none"
                  >
                    <option value="">Select year</option>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 active:scale-95 ${
                        form.interests.includes(interest)
                          ? "bg-primary/15 text-primary border border-primary/30"
                          : "bg-secondary text-muted-foreground border border-transparent hover:text-foreground"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" disabled={sending}>
                {sending ? "Submitting…" : <><Sparkles className="w-4 h-4" /> Submit Application</>}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Join;
