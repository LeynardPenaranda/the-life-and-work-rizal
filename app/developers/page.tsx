import Link from "next/link";
import { DeveloperCard } from "@/components/DeveloperCard";
import { Reveal } from "@/components/Reveal";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-sky-950/15 px-5 py-2.5 text-sm font-semibold text-sky-950 transition hover:bg-sky-950/5"
          >
            Back to Home
          </Link>
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-900/70">
            Developer Page
          </p>
          <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-sky-950 sm:text-6xl">
            Project Developers
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We are the developers of this website, Leynard M. Peñaranda, Jerson
            D. Jaba-an, Edhel John L. Zamora, and Rea B. Gilhang. We are 3rd
            year Bachelor of Science in Information Systems students who want
            to help contribute to Dr. Jose Rizal.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <section className="surface-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-900/70">
              Program Description
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-sky-950">
              Bachelor of Science in Information Systems
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The Bachelor of Science in Information Systems is a degree program focused
              on the design, development, and management of information technology
              solutions that support organizations and communities. It combines business
              understanding, systems analysis, database concepts, web technologies, and
              software development to prepare students for building efficient, user-centered
              digital systems.
            </p>
          </section>
        </Reveal>

        <section className="mx-auto mt-12 grid w-full max-w-[70vw] gap-6">
          <Reveal>
            <DeveloperCard
              name="Rea B. Gilhang"
              imageSrc="/Rea B. Gilhang.png"
              imageAlt="Portrait of Rea B. Gilhang"
            />
          </Reveal>
          <Reveal delay={120}>
            <DeveloperCard
              name="Leynard M. Peñaranda"
              imageSrc="/Leynard M. Penaranda.png"
              imageAlt="Portrait of Leynard M. Peñaranda"
            />
          </Reveal>
          <Reveal delay={240}>
            <DeveloperCard
              name="Jerson D. Jaba-an"
              imageSrc="/Jerson D. Jaba-an.png"
              imageAlt="Portrait of Jerson D. Jaba-an"
            />
          </Reveal>
          <Reveal delay={360}>
            <DeveloperCard
              name="Edhel John L. Zamora"
              imageSrc="/Edhel John L. Zamora.png"
              imageAlt="Portrait of Edhel John L. Zamora"
            />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
