import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ContentSection } from "@/components/ContentSection";
import { ReadingLibrary } from "@/components/ReadingLibrary";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { pageContent, readingLibrary, works } from "@/data/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />

        <ContentSection
          id="about"
          eyebrow="Biographical Overview"
          title="About Rizal"
          content={pageContent.about}
        />

        <ContentSection
          id="childhood"
          eyebrow="Formative Years"
          title="Childhood and Early Influences"
          content={pageContent.childhood}
          tone="soft"
        />

        <ContentSection
          id="education"
          eyebrow="Scholar and Thinker"
          title="Education"
          content={pageContent.education}
        />

        <section id="works" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-900/70">
                Literary Contributions
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-sky-950 sm:text-5xl">
                Famous Works
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Rizal&apos;s most influential writings challenged oppression, inspired reflection,
                and deepened the Filipino sense of identity.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {works.map((work, index) => (
                <WorkCard key={work.title} {...work} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ContentSection
          id="dapitan"
          eyebrow="Service in Exile"
          title="Exile in Dapitan"
          content={pageContent.dapitan}
          tone="soft"
        />

        <ContentSection
          id="trial"
          eyebrow="Martyrdom"
          title="Trial and Execution"
          content={pageContent.trial}
        />

        <ContentSection
          id="legacy"
          eyebrow="Enduring Influence"
          title="Legacy"
          content={pageContent.legacy}
          tone="soft"
        />

        <ReadingLibrary items={readingLibrary} />
      </main>
      <Footer />
    </div>
  );
}
