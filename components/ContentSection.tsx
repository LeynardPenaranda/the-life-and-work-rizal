import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

type ContentSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  content: string;
  tone?: "default" | "soft";
};

export function ContentSection({
  id,
  eyebrow,
  title,
  content,
  tone = "default"
}: ContentSectionProps) {
  const sectionTone =
    tone === "soft"
      ? "bg-[linear-gradient(180deg,rgba(248,251,255,0.9),rgba(255,255,255,0.96))]"
      : "bg-white";

  return (
    <section id={id} className={`scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 ${sectionTone}`}>
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} />
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card lift-hover rounded-[2rem] p-8 sm:p-10">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">{content}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
