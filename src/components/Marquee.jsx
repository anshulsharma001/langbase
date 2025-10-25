import React, { useState, useEffect } from 'react';
import MarqueeLib from 'react-fast-marquee';

const Marquee = () => {
  const text = '⌘ Langbase — Serverless AI Cloud for developers · Command.new - Vibe code any AI agent ·';
  const [scrollSpeed, setScrollSpeed] = useState(100); // Start with slow movement
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down'); // Track scroll direction

  useEffect(() => {
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Calculate scroll speed based on scroll position
      const scrollY = window.scrollY;
      const speed = Math.min(Math.max(scrollY * 0.5, 0), 100); // Scale scroll to speed (0-300)
      setScrollSpeed(speed);
      
      // Determine scroll direction
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }
      lastScrollY = scrollY;
      
      // Clear timeout and reset after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setScrollSpeed(100); // Continue moving slowly when user stops scrolling
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section className="relative w-full max-w-screen flex flex-col items-center justify-center py-16 overflow-hidden">
      <div
        className="absolute inset-0 size-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:4px_4px] z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Row 1 - Direction based on scroll */}
      <div className="w-full relative z-10">
        <MarqueeLib 
          gradient={false} 
          speed={scrollSpeed} 
          direction={scrollDirection === 'down' ? 'left' : 'right'}
          pauseOnHover={false}
        >
          <div className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-muted-foreground/50 md:text-7xl md:leading-[5rem] pr-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`lib-r1-${i}`} className="mr-6">{text}</span>
            ))}
          </div>
        </MarqueeLib>
      </div>

      {/* Row 2 - Opposite direction */}
      <div className="w-full mt-6 relative z-10">
        <MarqueeLib 
          gradient={false} 
          speed={scrollSpeed} 
          direction={scrollDirection === 'down' ? 'right' : 'left'}
          pauseOnHover={false}
        >
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
