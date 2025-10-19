import React, { useEffect, useRef, useState } from "react";

export default function ExploreAgents() {
  const viewportRef = useRef(null);
  const sectionRef = useRef(null);  // Reference for the section
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  const cards = [
    { title: "Market Analyst", svg: "market" },
    { title: "AWS Guru", svg: "aws" },
    { title: "Legal Chatbot", svg: "legal" },
    { title: "Documentation QA", svg: "doc" },
    { title: "Sales Email Agent", svg: "sales" },
    { title: "Support Ticket Bot", svg: "support" },
  ];

  const snapTo = (i) => {
    const vp = viewportRef.current;
    if (!vp) return;

    const items = vp.querySelectorAll('[data-snap-item="true"]');
    if (!items.length) return;

    const clamped = Math.max(0, Math.min(i, items.length - 1));
    const target = items[clamped];

    // Smoothly scroll the target item into view
    target.scrollIntoView({ behavior: "smooth", block: "center" });

    setIndex(clamped);
    indexRef.current = clamped;

    // Smoothly scroll the entire page to the section (without causing any URL change or redirection)
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start"  // Aligns the section to the top
      });
    }
  };

  useEffect(() => {
    const init = setTimeout(() => snapTo(0), 200);
    const id = setInterval(() => {
      const vp = viewportRef.current;
      if (!vp) return;
      const items = vp.querySelectorAll('[data-snap-item="true"]');
      if (!items.length) return;
      const nextIdx = (indexRef.current + 1) % items.length;
      snapTo(nextIdx);
    }, 3000);
    return () => {
      clearTimeout(init);
      clearInterval(id);
    };
  }, []);

  return (
    <section   className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative col-span-4 row-span-1 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu lg:col-span-1">
          <div className="h-full w-full z-[1]">
            <div className="inset-0  [mask-image:linear-gradient(to_top,transparent_35%,#000_70%)]">
              <div 
                className="relative mx-auto h-[400px] min-h-[400px] max-h-[400px] w-full max-w-[32rem] overflow-y-auto no-scrollbar p-6 snap-y snap-mandatory scroll-smooth"
              >
                <div className="flex  w-full flex-col items-center gap-4">
                  {cards.map((card, i) => (
                    <div key={i} className="mx-auto w-full snap-center" data-snap-item="true" data-idx={i}>
                      <figure
                        className={`relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl bg-background p-4 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transition-all duration-300 transform-gpu dark:bg-transparent dark:backdrop-blur-md ${
                          index === i ? "scale-[103%] opacity-100" : "opacity-70"
                        }`}
                      >
                        <div className="flex flex-row items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ backgroundColor: "rgb(0,0,0)" }}>
                            <span className="text-lg">
                              {card.svg === "market" && (
                                <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  {/* SVG content */}
                                </svg>
                              )}
                              {card.svg === "aws" && (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  {/* SVG content */}
                                </svg>
                              )}
                            </span>
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-primary">
                              <span className="text-sm">{card.title}</span>
                            </figcaption>
                            <p className="text-xs font-normal text-muted-foreground">Langbase Pipe</p>
                          </div>
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Explore AI Agents</h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90">Fork thousands of open-source AI agents built by developers community.</p>
          </div>

          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/explore"
              className="pointer-events-auto inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn more
              <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]" />
        </div>
      </div>
    </section>
  );
}
