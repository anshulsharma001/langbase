import React from "react";

// Memory API feature card with horizontal marquee rows and hover reveal CTA
export default function MemoryAPI() {
  return (
    <section className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="group relative row-span-1 col-span-4 lg:col-span-1 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu">
          {/* Scrolling rows */}
          <div className="w-full h-full z-[1]">
            <div className="  flex flex-row overflow-hidden pt-6 [--gap:1rem] [gap:var(--gap)] [--duration:20s] [mask-image:linear-gradient(to_top,transparent_12.5%,#000_100%)]">
              {/* Track 1 */}
              <div className="marquee-row flex shrink-0 w-max flex-row justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:running] hover:[animation-play-state:running]">
                {[...rows, ...rows].map((r, i) => (
                  <Figure key={`r1-${i}`} title={r.title} text={r.text} />
                ))}
              </div>
              {/* Track 2 (duplicate for seamless loop) */}
              <div className="marquee-row flex shrink-0 w-max flex-row justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:running] hover:[animation-play-state:running]">
                {[...rows, ...rows].map((r, i) => (
                  <Figure key={`r2-${i}`} title={r.title} text={r.text} />
                ))}
              </div>
              {/* Track 3 */}
              <div className="marquee-row flex shrink-0 w-max flex-row justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:running] hover:[animation-play-state:running]">
                {[...rows, ...rows].map((r, i) => (
                  <Figure key={`r3-${i}`} title={r.title} text={r.text} />
                ))}
              </div>
              {/* Track 4 */}
              <div className="marquee-row flex shrink-0 w-max flex-row justify-around [gap:var(--gap)] animate-marquee group-hover:[animation-play-state:running] hover:[animation-play-state:running]">
                {[...rows, ...rows].map((r, i) => (
                  <Figure key={`r4-${i}`} title={r.title} text={r.text} />
                ))}
              </div>
            </div>
          </div>

          {/* Title & subtitle */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">
              Memory API
            </h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90">
              50-100x in-expensive serverless RAG, vectors, files, and attributes. 97% Reduced hallucinations.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/docs/memory"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn more
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]" />
        </div>
      </div>
    </section>
  );
}

function Figure({ title, text }) {
  return (
    <figure className="relative w-[12rem] cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted p-4 transition-all duration-300 ease-out hover:border-ring/80 hover:bg-muted/30 transform-gpu">
      <div className="flex flex-row items-center gap-2 pl-1 pt-1">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-muted-foreground/80">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 pl-1 pt-0 text-xs text-muted-foreground/70">
        {text}
      </blockquote>
    </figure>
  );
}

const rows = [
  {
    title: "contract.pdf",
    text:
      "This contract outlines the terms and conditions. Please review carefully before signing. If you have any questions, contact our legal team.",
  },
  {
    title: "finances.xlsx",
    text:
      "This spreadsheet contains financial projections. Ensure all data is accurate and up-to-date. Review monthly to track progress and adjust forecasts.",
  },
  {
    title: "quickstart.md",
    text:
      "Welcome to the quick start guide. Follow these steps to get started quickly. Refer to the detailed manual for more advanced instructions.",
  },
  {
    title: "terms.txt",
    text:
      "These are the terms and conditions of our service. By using our service, you agree to these terms. Violation of these terms may result in termination of your account.",
  },
  {
    title: "faqs.md",
    text:
      "Frequently Asked Questions: Find answers to common questions here. Contact support for further assistance. Visit our website for more detailed information.",
  },
];
