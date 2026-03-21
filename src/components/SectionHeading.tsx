import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
    {label && (
      <span className="inline-block text-xs font-mono font-medium tracking-widest uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>}
  </ScrollReveal>
);

export default SectionHeading;
