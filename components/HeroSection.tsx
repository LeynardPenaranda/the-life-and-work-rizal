import { mediaAssets } from "@/data/content";

export function HeroSection() {
  const timelineItems = [
    "1861: Born in Calamba, Laguna",
    "1887: Published Noli Me Tangere",
    "1891: Published El Filibusterismo",
    "1892: Exiled to Dapitan",
    "1896: Executed at Bagumbayan"
  ];

  return (
    <section id="home" className="scroll-mt-28 px-4 pb-18 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="hero-panel mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-sky-950/10 bg-white px-6 py-10 shadow-[0_30px_80px_-45px_rgba(8,47,73,0.32)] sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
        <div className="max-w-3xl">
          <p className="motion-fade text-sm font-semibold uppercase tracking-[0.32em] text-sky-900/70">
            National Hero of the Philippines
          </p>
          <h1 className="font-display motion-float mt-5 text-5xl font-semibold leading-tight tracking-tight text-sky-950 sm:text-6xl lg:text-7xl">
            The Life and Works of Dr. Jose Rizal
          </h1>
          <p className="motion-fade-delay mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            National Hero, Writer, Reformer, and Patriot
          </p>
          <p className="motion-fade-delay mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Dr. Jose Rizal is one of the most important figures in Philippine history.
            Through his writings, intellect, and courage, he inspired Filipinos to
            fight injustice and value national identity.
          </p>
          <div className="motion-fade-delay-2 mt-10">
            <a
              href="#about"
              className="button-transition inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="motion-fade-delay rounded-[2rem] border border-sky-950/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.05),rgba(14,116,144,0.14))] p-6 sm:p-8">
          <div className="space-y-5">
            <div className="surface-card overflow-hidden rounded-[1.75rem]">
              <div className="relative">
                <img
                  src={mediaAssets.rizalPortrait.src}
                  alt={mediaAssets.rizalPortrait.alt}
                  className="h-[320px] w-full object-cover object-top sm:h-[380px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent px-5 py-6 text-white">
                  <p className="font-display text-2xl font-semibold tracking-tight">Dr. Jose Rizal</p>
                  <p className="mt-1 text-sm text-white/85">Writer, reformer, patriot, and national hero.</p>
                </div>
              </div>
            </div>

            <div className="surface-card flex items-center gap-4 rounded-[1.75rem] p-4 sm:p-5">
              <img
                src={mediaAssets.philippineFlag.src}
                alt={mediaAssets.philippineFlag.alt}
                className="h-14 w-21 rounded-md border border-sky-950/10 object-cover shadow-sm"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-900/70">
                  National Symbol
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                  The Philippine flag reflects the nation Rizal helped awaken through thought,
                  sacrifice, and reform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-card rounded-[1.75rem] p-6 sm:p-8 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-900/70">
            Timeline Snapshot
          </p>
          <div className="mt-6 overflow-x-auto pb-2">
            <div className="flex min-w-max items-start gap-4 sm:gap-5">
              {timelineItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="min-w-[210px] rounded-2xl border border-sky-950/10 bg-white/85 px-4 py-4 sm:min-w-[220px]">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-900" />
                      <p className="text-sm leading-7 text-slate-700 sm:text-base">{item}</p>
                    </div>
                  </div>
                  {index < timelineItems.length - 1 ? (
                    <span className="mt-0.5 hidden h-px w-8 bg-sky-900/30 sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
