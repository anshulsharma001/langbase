import React from 'react';

const ComposableAI = () => {
  return (
    <section className="w-full hidden lg:block">
      {/* Heading block */}
      <div style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
        <div className="px-6 py-24 sm:py-32 lg:px-8 z-10 relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-7 text-[#9C88FF]">But how does Composable AI work?</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Serverless AI Composable AI</h2>
            <div className="mt-6 text-lg leading-8 text-muted-foreground">
              A serverless composable AI Email Agent pipeline: Classifies, summarizes, and responds to non spam emails. Swap any AI models, agent pipes, and reason with mutliple RAG memory stores. Learn more about
              {' '}
              <a
                className="underline decoration-muted-foreground/80 hover:decoration-foreground transition-colors duration-200 decoration-dotted"
                href="https://langbase.com/docs/composable-ai"
                target="_blank"
                rel="noreferrer"
              >
                Composable AI
              </a>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Diagram block */}
      <div className="flex w-full h-[800px] flex-col justify-center">
        <div className="w-full mx-auto sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] h-full rounded-3xl relative shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] bg-background/40">
          {/* SVG Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto-start-reverse">
                <polyline points="0,0 12,6 0,12 0,0" style={{ fill: 'rgb(177,177,183)' }} />
              </marker>
            </defs>
            {/* Top to mid path */}
            <path d="M160,220 C160,270 160,270 160,320" className="animated-line" stroke="rgb(177,177,183)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
            {/* Bottom up path */}
            <path d="M160,620 C160,553 160,553 160,485" className="animated-line" stroke="rgb(177,177,183)" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
          </svg>

          {/* Nodes (absolute positioned) */}
          <div className="absolute" style={{ transform: 'translate(40px, 108px)' }}>
            <div className="w-60">
              <textarea
                readOnly
                rows={4}
                className="block rounded-lg border-0 py-1.5 text-foreground ring-1 ring-inset ring-ring/5 sm:text-sm sm:leading-6 shadow-inner bg-muted focus:ring-1 focus:ring-inset focus:ring-muted-foreground/25 placeholder:text-muted-foreground/50 w-full resize-none text-xs"
                defaultValue={
                  "I'm stuck and frustrated because the billing API isn't working and the API documentation is outdated."
                }
              />
            </div>
          </div>

          <div className="absolute" style={{ transform: 'translate(40px, 324px)' }}>
            <div className="w-60">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group bg-primary text-primary-foreground shadow hover:bg-primary/90 border border-transparent px-4 py-2 w-full h-full animate-pulse">
                Send valid email
              </button>
            </div>
          </div>

          <div className="absolute" style={{ transform: 'translate(40px, 444px)' }}>
            <div className="w-60">
              <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group bg-primary text-primary-foreground shadow hover:bg-primary/90 border border-transparent px-4 py-2 w-full h-full animate-pulse">
                Send spam email
              </button>
            </div>
          </div>

          <div className="absolute" style={{ transform: 'translate(40px, 624px)' }}>
            <div className="w-60">
              <textarea
                readOnly
                rows={3}
                className="block rounded-lg border-0 py-1.5 text-foreground ring-1 ring-inset ring-ring/5 sm:text-sm sm:leading-6 shadow-inner bg-muted focus:ring-1 focus:ring-inset focus:ring-muted-foreground/25 placeholder:text-muted-foreground/50 w-full resize-none text-xs"
                defaultValue={
                  'Congratulations! You have been selected as the winner of a $100 million lottery!'
                }
              />
            </div>
          </div>

          {/* Overlay CTA */}
          <div className="absolute top-52 right-24 font-semibold text-2xl">
            <img
              alt="Send a demo request to understand composable AI"
              src="https://langbase.com/www/click-to-play.svg"
              className="mx-auto sm:h-[2rem] md:h-[3.5rem] w-auto select-none"
            />
            <img
              alt="arrow"
              src="https://langbase.com/www/arrow.svg"
              className="mx-auto sm:h-[5rem] md:h-[10rem] w-auto absolute top-20 -left-10 select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComposableAI;
