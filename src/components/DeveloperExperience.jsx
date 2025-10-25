import React from 'react'

const DeveloperExperience = () => {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8 z-10 relative">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm sm:text-base font-semibold leading-7 text-[#fad000]">
          The Developer Friendly Future of AI Infra
        </p>
        <h2 className="mt-2 text-3xl sm:text-6xl font-bold tracking-tight text-foreground">
          Obsessed with Developer Experience
        </h2>
        <div className="mt-6 text-base md:text-lg md:leading-8 text-muted-foreground">
          We are engineers who love building tools for fellow developers. Creators of{' '}
          <a
            className="underline decoration-muted-foreground/80 hover:decoration-foreground transition-colors duration-200 decoration-dotted"
            href="https://command.new"
            target="_blank"
            rel="noreferrer noopener"
          >
            Command.new
          </a>
          : Computer Human AI lets you vibe code AI agents. Our mission: AI for all. Not just ML wizards. Every. Single. Developer.
        </div>
      </div>
    </section>
  )
}

export default DeveloperExperience
