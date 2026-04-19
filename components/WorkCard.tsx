import { Reveal } from "@/components/Reveal";

type WorkCardProps = {
  title: string;
  description: string;
  index?: number;
};

export function WorkCard({ title, description, index = 0 }: WorkCardProps) {
  return (
    <Reveal delay={index * 110}>
      <article className="surface-card lift-hover h-full rounded-[1.75rem] p-7 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-950 text-lg font-semibold text-white">
          {index + 1}
        </div>
        <h3 className="font-display mt-6 text-3xl font-semibold tracking-tight text-sky-950">
          {title}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      </article>
    </Reveal>
  );
}
