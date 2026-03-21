import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Mail, MapPin, Instagram, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll get back to you soon.");
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Contact" title="Let's connect" description="Have questions, ideas, or want to collaborate? Reach out." />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-4">Get in touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:pixelcraft@college.edu" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
                      pixelcraft@college.edu
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"><MapPin className="w-4 h-4 text-primary" /></div>
                      Room 305, CS Block, University Campus
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Follow us</h3>
                  <div className="flex gap-3">
                    {[Instagram, Linkedin, Github].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 active:scale-95">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                {[
                  { label: "Name", key: "name" as const, type: "text", placeholder: "Your name" },
                  { label: "Email", key: "email" as const, type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-sm font-medium mb-2 block">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      maxLength={f.key === "email" ? 255 : 100}
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    placeholder="Tell us what's on your mind…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all resize-none"
                  />
                </div>
                <Button variant="hero" className="w-full" disabled={sending}>
                  {sending ? "Sending…" : <><Send className="w-4 h-4" /> Send Message</>}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
