import React, { useState, useEffect, useRef } from 'react';

export default function Keysets() {
  const [isHovering, setIsHovering] = useState(false);
  const [index, setIndex] = useState(0);
  const buttonsRef = useRef(null);

  const cards = [
    { name: 'OpenAI', logo: '/logos/openai.svg' },
    { name: 'Together', logo: '/logos/together.png' },
    { name: 'Anthropic', logo: '/logos/anthropic.svg' },
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Groq', logo: '/logos/groq.png' },
    { name: 'Cohere', logo: '/logos/cohere.svg' },
    { name: 'Fireworks AI', logo: '/logos/fireworks.png' },
    { name: 'Perplexity', logo: '/logos/perplexity.svg' },
    { name: 'Mistral AI', logo: '/logos/mistral.png' },
    { name: 'Deepseek', logo: '/logos/deepseek.png' },
    { name: 'OpenRouter', logo: '/logos/openrouter.png' },
    { name: 'Azure OpenAI', logo: '/logos/azure.png' },
  ];

  // Handle auto sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, [cards.length]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full z-1">
        <div className=" mt-2 mx-2 absolute top-0 inset-2 origin-top [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col absolute [--duration:20s]">
            {/* Slider Animation */}
            <div
              ref={buttonsRef}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col [animation-play-state:paused] group-hover:[animation-play-state:running]"
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem] ${
                    index === idx ? 'scale-[103%] opacity-100' : 'opacity-70'
                  }`}
                >
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img
                      width="16"
                      height="16"
                      alt={card.name}
                      src={card.logo}
                      className="size-4 align-middle block flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{card.name}</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">
                    LIVE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div
        className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10"
      >
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Keysets</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90">
          Securely store any LLM keys. RBAC controlled keysets Org, User, or Pipe level access.
        </p>
      </div>

      {/* Hover CTA */}
      <div
        className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]"
      >
        <a
          href="https://langbase.com/docs/features/keysets"
          className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto"
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
  );
}
