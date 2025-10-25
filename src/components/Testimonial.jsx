import React from 'react';

const Testimonial = () => {
  return (
    <section className="flex w-full justify-center items-center mb-6 mt-20 md:mt-32 mx-auto px-4 sm:px-6">
      <figure className="rounded-2xl sm:rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <a href="/signup" target="_blank" rel="noreferrer">
          <blockquote className="p-5 sm:p-6 md:p-8 text-base sm:text-lg md:text-xl font-semibold leading-6 sm:leading-7 md:leading-8 tracking-tight text-white text-center sm:text-left">
            <div style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
              <p className="text-muted-foreground">
                <span className="text-white">"</span>
                <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                  if I were building GitHub for the software of today with LLMs, ⌘ Langbase is what it would look like
                </span>
                <span className="text-white">"</span>
              </p>
            </div>
          </blockquote>
          <div style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'none' }}>
            <figcaption className="flex flex-wrap items-center justify-between gap-x-3 sm:gap-x-4 gap-y-2 sm:gap-y-4 rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-3 sm:py-4 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
              <img
                alt="Tom Preston-Werner"
                src="https://github.com/mojombo.png"
                className="h-8 w-8 sm:h-10 sm:w-10 flex-none rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                loading="lazy"
              />
              <div className="flex-auto min-w-0">
                <div className="font-semibold text-sm sm:text-base text-white">Tom Preston-Werner</div>
                <div className="text-xs sm:text-sm text-muted-foreground hidden sm:flex">Co-Founder, CEO · GitHub // Early investor in ⌘ Langbase</div>
                <div className="text-xs sm:text-sm text-muted-foreground flex sm:hidden">Co-Founder, CEO · GitHub</div>
                <div className="text-xs sm:text-sm text-muted-foreground flex sm:hidden">Early investor in ⌘ Langbase</div>
              </div>
              <img
                alt="GitHub"
                src="https://github.com/github.png"
                className="hidden sm:block h-6 sm:h-8 md:h-10 w-auto flex-none select-none"
                loading="lazy"
              />
            </figcaption>
          </div>
        </a>
      </figure>
    </section>
  );
};

export default Testimonial;
