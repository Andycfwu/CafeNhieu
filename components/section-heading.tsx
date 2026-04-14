type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker mb-3">{eyebrow}</p>
      <h2 className="font-heading text-4xl font-semibold leading-none text-sage-500 md:text-6xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-sage-500/80 md:text-lg">{description}</p> : null}
    </div>
  );
}
