import Image from "next/image";

type DeveloperCardProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
};

export function DeveloperCard({ name, imageSrc, imageAlt }: DeveloperCardProps) {
  return (
    <article className="surface-card lift-hover overflow-hidden rounded-[1.75rem] md:flex md:h-[550px]">
      <div className="relative h-[360px] w-full bg-sky-950/5 md:h-full md:w-[42%]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 30vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-7 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-900/70">
          Developer
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-sky-950">
          {name}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Bachelor of Science in Information Systems student, currently in 3rd year,
          building modern academic and presentation-ready digital experiences.
        </p>
      </div>
    </article>
  );
}
