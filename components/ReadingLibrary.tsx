"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type ReadingItem = {
  title: string;
  format: string;
  language: string;
  description: string;
  embedType: "pdf" | "html";
  embedSrc: string;
  openSrc: string;
  downloadSrc: string;
  sourceLabel: string;
};

type ReadingLibraryProps = {
  items: readonly ReadingItem[];
};

export function ReadingLibrary({ items }: ReadingLibraryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <section id="read" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-900/70">
            Reading Library
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-sky-950 sm:text-5xl">
            Read Rizal&apos;s Works Online
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            This section embeds public-domain editions directly in the site so visitors can
            read without leaving the page.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="surface-card rounded-[2rem] p-4 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`button-transition rounded-full px-4 py-2 text-sm font-semibold ${
                      isActive
                        ? "bg-sky-950 text-white"
                        : "bg-sky-950/5 text-slate-700 hover:bg-sky-950/10"
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.33fr_0.67fr]">
              <div className="rounded-[1.5rem] border border-sky-950/10 bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-sky-950 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white uppercase">
                    {activeItem.format}
                  </span>
                  <span className="text-sm text-slate-500">{activeItem.language}</span>
                </div>

                <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-sky-950">
                  {activeItem.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{activeItem.description}</p>
                <p className="mt-4 text-sm text-slate-500">{activeItem.sourceLabel}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={activeItem.openSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="button-transition inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Open Full Reader
                  </a>
                  <a
                    href={activeItem.downloadSrc}
                    download
                    className="inline-flex items-center justify-center rounded-full border border-sky-950/15 px-5 py-2.5 text-sm font-semibold text-sky-950 transition hover:bg-sky-950/5"
                  >
                    Download File
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-sky-950/10 bg-white">
                {activeItem.embedType === "pdf" ? (
                  <object
                    data={activeItem.embedSrc}
                    type="application/pdf"
                    className="h-[75vh] min-h-[640px] w-full"
                  >
                    <div className="flex h-[75vh] min-h-[640px] items-center justify-center p-8 text-center">
                      <div>
                        <p className="text-base text-slate-600">
                          This browser could not display the PDF inline.
                        </p>
                        <a
                          href={activeItem.openSrc}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
                        >
                          Open the PDF
                        </a>
                      </div>
                    </div>
                  </object>
                ) : (
                  <iframe
                    src={activeItem.embedSrc}
                    title={activeItem.title}
                    className="h-[75vh] min-h-[640px] w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
