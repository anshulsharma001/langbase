import React from 'react';
import MarqueeLib from 'react-fast-marquee';

const Marquee = () => {
  const text = '⌘ Langbase — Serverless AI Cloud for developers · Command.new - Vibe code any AI agent ·';

  return (
    <section className="relative w-full max-w-screen flex flex-col items-center justify-center py-16 overflow-hidden">
      <div
        className="absolute inset-0 size-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:4px_4px] z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Row 1 */}
      <div className="w-full relative z-10">
        <MarqueeLib gradient={false} speed={200} pauseOnHover={false}>
          <div className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-muted-foreground/70 md:text-7xl md:leading-[5rem] pr-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`lib-r1-${i}`} className="mr-6">{text}</span>
            ))}
          </div>
        </MarqueeLib>
      </div>

      {/* Row 2 (reverse) */}
      <div className="w-full mt-6 relative z-10">
        <MarqueeLib gradient={false} speed={200} direction="right" pauseOnHover={false}>
          <div className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-muted-foreground/50 md:text-7xl md:leading-[5rem] pr-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`lib-r2-${i}`} className="mr-6">{text}</span>
            ))}
          </div>
        </MarqueeLib>
      </div>
    </section>
  );
};

export default Marquee;
