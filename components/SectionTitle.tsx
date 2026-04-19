type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-900/70">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-sky-950 sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
