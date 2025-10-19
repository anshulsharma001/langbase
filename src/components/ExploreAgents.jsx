import React, { useEffect, useRef, useState } from "react";

export default function ExploreAgents() {
  const viewportRef = useRef(null);
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
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    setIndex(clamped);
    indexRef.current = clamped;
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
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative col-span-4 row-span-1 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu lg:col-span-1">
          <div className="h-full w-full z-[1]">
            <div className="inset-0 [mask-image:linear-gradient(to_top,transparent_35%,#000_70%)]">
              {/* Slider viewport */}
              <div
                ref={viewportRef}
                className="relative mx-auto h-[400px] min-h-[400px] max-h-[400px] w-full max-w-[32rem] overflow-y-auto no-scrollbar p-6 snap-y snap-mandatory scroll-smooth"
              >
                {/* Slider track */}
                <div className="flex w-full flex-col items-center gap-4">
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
                                  <mask id="mask0_4358_463" maskUnits="userSpaceOnUse" x="2" y="6" width="44" height="36">
                                    <path d="M44 11C44 10.2044 43.6839 9.44129 43.1213 8.87868C42.5587 8.31607 41.7956 8 41 8H7C6.20435 8 5.44129 8.31607 4.87868 8.87868C4.31607 9.44129 4 10.2044 4 11V20H44V11Z" fill="#f2f2f2" stroke="#f2f2f2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M4.11328 39.03L16.2893 26.73L22.8693 33.03L30.9113 26L35.3913 30.368" stroke="#f2f2f2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M44 18V37C44 37.7956 43.6839 38.5587 43.1213 39.1213C42.5587 39.6839 41.7956 40 41 40H12" stroke="#f2f2f2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M19.1114 14H37.1114M11.1094 14H13.1094" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M4 18V27" stroke="#f2f2f2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </mask>
                                  <g mask="url(#mask0_4358_463)">
                                    <path d="M0 0H48V48H0V0Z" fill="#f2f2f2"></path>
                                  </g>
                                </svg>
                              )}
                              {card.svg === "aws" && (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.64018 10.3791C7.64018 10.6291 7.66018 10.8291 7.71018 10.9991C7.76018 11.1191 7.83018 11.2791 7.92018 11.4591C7.96018 11.4991 7.97018 11.5591 7.97018 11.6091C7.97018 11.6791 7.93018 11.7391 7.84018 11.8091L7.42018 12.0891C7.36018 12.1291 7.30018 12.1491 7.25018 12.1491C7.18018 12.1491 7.12018 12.1091 7.05018 12.0491C6.96018 11.9491 6.88018 11.8491 6.81018 11.7391C6.75018 11.6291 6.68018 11.4991 6.61018 11.3491C6.09018 11.9591 5.44018 12.2691 4.65018 12.2691C4.09018 12.2691 3.65018 12.1091 3.32018 11.7891C3.00018 11.4691 2.83018 11.0391 2.83018 10.4991C2.83018 9.94906 3.03018 9.49906 3.43018 9.13906C3.84018 8.79906 4.38018 8.61906 5.06018 8.61906C5.29018 8.61906 5.50018 8.63906 5.77018 8.67906C6.00018 8.70906 6.27018 8.75906 6.53018 8.81906V8.33906C6.53018 7.82906 6.43018 7.49906 6.22018 7.26906C6.00018 7.05906 5.65018 6.96906 5.14018 6.96906C4.90018 6.96906 4.66018 6.99906 4.42018 7.04906C4.17018 7.10906 3.93018 7.17906 3.70018 7.27906C3.59018 7.31906 3.50018 7.34906 3.47018 7.35906C3.42018 7.37906 3.39018 7.37906 3.36018 7.37906C3.27018 7.37906 3.22018 7.31906 3.22018 7.17906V6.84906C3.22018 6.74906 3.23018 6.66906 3.27018 6.61906C3.30018 6.56906 3.36018 6.52906 3.45018 6.49906C3.69018 6.35906 3.96018 6.25906 4.29018 6.17906C4.62965 6.0903 4.97931 6.04659 5.33018 6.04906C6.12018 6.04906 6.70018 6.22906 7.07018 6.58906C7.44018 6.94906 7.62018 7.49906 7.62018 8.22906V10.3791H7.64018ZM4.94018 11.3991C5.16018 11.3991 5.38018 11.3591 5.62018 11.2791C5.86018 11.1991 6.07018 11.0491 6.25018 10.8491C6.36018 10.7191 6.44018 10.5791 6.50018 10.4191C6.50018 10.2591 6.55018 10.0691 6.55018 9.83906V9.56906C6.35018 9.49906 6.15018 9.49906 5.93018 9.44906C5.72421 9.42656 5.51734 9.41321 5.31018 9.40906C4.86018 9.40906 4.54018 9.49906 4.32018 9.67906C4.10018 9.85906 4.00018 10.1091 4.00018 10.4391C4.00018 10.7591 4.07018 10.9991 4.24018 11.1491C4.40018 11.3191 4.63018 11.3991 4.94018 11.3991ZM10.2802 12.1091C10.1834 12.112 10.0873 12.0914 10.0002 12.0491C9.97018 11.9991 9.92018 11.9091 9.88018 11.7891L8.32018 6.64906C8.28018 6.49906 8.26018 6.42906 8.26018 6.37906C8.26018 6.26906 8.31018 6.20906 8.42018 6.20906H9.07018C9.20018 6.20906 9.29018 6.22906 9.33018 6.27906C9.39018 6.31906 9.43018 6.40906 9.47018 6.53906L10.5802 10.9391L11.6202 6.53906C11.6502 6.40906 11.6902 6.31906 11.7502 6.27906C11.8002 6.23906 11.8902 6.20906 12.0002 6.20906H12.5502C12.6702 6.20906 12.7602 6.22906 12.8102 6.27906C12.8602 6.31906 12.9102 6.40906 12.9402 6.53906L14.0002 10.9991L15.1402 6.53906C15.1802 6.40906 15.2302 6.31906 15.2702 6.27906C15.3302 6.23906 15.4102 6.20906 15.5302 6.20906H16.1502C16.2602 6.20906 16.3202 6.26906 16.3202 6.37906C16.3202 6.40906 16.3102 6.44906 16.3002 6.49906C16.3002 6.49906 16.2802 6.57906 16.2602 6.64906L14.6502 11.7891C14.6102 11.9291 14.5702 11.9991 14.5002 12.0491C14.4602 12.0891 14.3702 12.1191 14.2602 12.1191H13.6902C13.5602 12.1191 13.5002 12.0991 13.4202 12.0491C13.3529 11.9778 13.3108 11.8865 13.3002 11.7891L12.2702 7.49906L11.2402 11.7791C11.2102 11.9091 11.1702 11.9991 11.1202 12.0491C11.0376 12.0941 10.944 12.1148 10.8502 12.1091H10.2802ZM18.8302 12.2891C18.5002 12.2891 18.1302 12.2491 17.8002 12.1691C17.4702 12.0891 17.2102 11.9991 17.0402 11.9091C16.9533 11.8673 16.8804 11.8013 16.8302 11.7191C16.803 11.663 16.7893 11.6014 16.7902 11.5391V11.1991C16.7902 11.0591 16.8402 10.9991 16.9402 10.9991H17.0602C17.1002 10.9991 17.1602 11.0491 17.2302 11.0791C17.4502 11.1791 17.7002 11.2591 17.9602 11.3091C18.2302 11.3591 18.5002 11.3891 18.7502 11.3891C19.1702 11.3891 19.5002 11.3191 19.7202 11.1691C19.9502 10.9991 20.0702 10.8091 20.0702 10.5391C20.0702 10.3491 20.0002 10.1991 19.8902 10.0691C19.7702 9.94906 19.5402 9.82906 19.2202 9.72906L18.2502 9.42906C17.7702 9.26906 17.4102 9.04906 17.1902 8.74906C16.9755 8.47136 16.8594 8.13008 16.8602 7.77906C16.8602 7.49906 16.9202 7.25906 17.0402 7.04906C17.1602 6.82906 17.3202 6.64906 17.5002 6.49906C17.7202 6.34906 17.9402 6.23906 18.2102 6.15906C18.4702 6.07906 18.7502 6.03906 19.0502 6.03906C19.1902 6.03906 19.3402 6.04906 19.5002 6.06906C19.6402 6.08906 19.7802 6.11906 19.9202 6.13906C20.0602 6.17906 20.1802 6.20906 20.3002 6.24906C20.4202 6.28906 20.5002 6.32906 20.5802 6.36906C20.6702 6.41906 20.7402 6.46906 20.7802 6.52906C20.8202 6.58906 20.8402 6.65906 20.8402 6.74906V7.06906C20.8402 7.20906 20.7902 7.27906 20.6902 7.27906C20.6402 7.27906 20.5502 7.24906 20.4302 7.19906C20.0602 7.02906 19.6302 6.93906 19.1602 6.93906C18.7802 6.93906 18.5002 6.99906 18.2702 7.12906C18.0702 7.24906 17.9602 7.44906 17.9602 7.71906C17.9602 7.90906 18.0302 8.06906 18.1602 8.18906C18.2902 8.31906 18.5402 8.43906 18.8902 8.55906L19.8402 8.85906C20.3202 8.99906 20.6602 9.21906 20.8702 9.49906C21.0702 9.76906 21.1702 10.0791 21.1702 10.4291C21.1702 10.7091 21.1102 10.9691 21.0002 11.1991C20.8802 11.4191 20.7202 11.6191 20.5002 11.7791C20.3102 11.9491 20.0602 12.0691 19.7802 12.1591C19.5002 12.2491 19.1602 12.2891 18.8302 12.2891ZM20.0802 15.5291C17.8902 17.1391 14.7102 17.9991 12.0002 17.9991C8.15018 17.9991 4.70018 16.5791 2.09018 14.2291C1.88018 14.0391 2.07018 13.7891 2.32018 13.9391C5.14018 15.5691 8.61018 16.5591 12.2102 16.5591C14.6402 16.5591 17.3102 16.0591 19.7602 14.9991C20.1302 14.8491 20.4402 15.2591 20.0802 15.5291ZM21.0002 14.4991C20.7102 14.1291 19.1402 14.3191 18.4302 14.3991C18.2202 14.4291 18.1902 14.2391 18.3802 14.0991C19.6302 13.2291 21.6902 13.4991 21.9202 13.7691C22.1602 14.0691 21.8602 16.1291 20.6902 17.1091C20.5002 17.2591 20.3302 17.1791 20.4102 16.9991C20.6802 16.3191 21.2702 14.8391 21.0002 14.4991Z" fill="#f2f2f2"></path>
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

          {/* Title & description */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Explore AI Agents</h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90">Fork thousands of open-source AI agents built by developers community.</p>
          </div>

          {/* Hover CTA */}
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

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]" />
        </div>
      </div>
    </section>
  );
}
