import React from "react";

const About = () => {
  return (
    <>
      <div
        style={{
          opacity: 1,
          filter: "blur(0px)",
          willChange: "auto",
          transform: "translateY(-6px)",
        }}
      >
        <div className="relative isolate pb-10 sm:pb-20 md:pb-32 pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-sm sm:text-base font-semibold leading-8 tracking-tight text-green-400">
                Trusted by the world’s top innovative organizations
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white ">
                What developers and founders are saying about Langbase
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-white sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="rounded-3xl bg-black sm:col-span-2 xl:col-start-2 xl:row-end-1 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                <a href="/customers/liquid-web" target="_blank">
                  <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-white sm:p-12 sm:text-lg sm:leading-8">
                    <div
                      style={{
                        opacity: 1,
                        filter: "blur(0px)",
                        willChange: "auto",
                        transform: "translateY(-6px)",
                      }}
                    >
                      <p className="text-muted-foreground">
                        <span className="text-white">“</span>
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          The real breakthrough here is how easily we can test
                          RAG via Langbase memory agents—actually seeing which
                          chunks get retrieved for specific queries
                        </span>
                        . That kind of visibility just isn't available with
                        other providers. Typically, you'd need specialized
                        vendor knowledge, framework-centric coding, or custom
                        actions to get the same result.{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          But with Langbase, there's next to no overhead
                        </span>{" "}
                        or prior expertise needed. The straightforward setup,
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          developer experience, collab features, and built-in
                          version control
                        </span>{" "}
                        instantly give it a huge plus for anyone building
                        AI-driven apps.{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          Langbase basically turned me into an Al engineer
                          overnight.
                        </span>{" "}
                        The learning curve is practically zero thanks to the
                        clear explanations and clean Ul. And being able to talk
                        directly with real engineers on their support team makes
                        the entire experience even smoother.
                        <span className="text-white">”</span>
                      </p>
                    </div>
                  </blockquote>
                  <button className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer group bg-green-800 hover:bg-green-400 dark:bg-green-900/20 dark:hover:bg-green-800 text-primary shadow-sm h-9 px-4 py-2 m-4 flex justify-center items-center gap-1 rounded-3xl mt-0">
                    <span className="hidden sm:inline">
                      Customer story: Liquid Web's 30% productivity boost with
                      Langbase
                    </span>
                    <span className="sm:hidden inline">
                      Read: Liquid Web's 30% productivity boost
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-1 size-3 text-muted-foreground transform-gpu transition-transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 rounded-3xl px-6 py-4 sm:flex-nowrap shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <img
                      alt="Stephen Gregorowicz"
                      src="/www/review/stephan.png"
                      className="h-10 w-10 flex-none rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold text-white">
                        Stephen Gregorowicz
                      </div>
                      <div className="text-muted-foreground">
                        AI R&amp;D &amp; Internal Tooling Lead, Liquid Web
                      </div>
                    </div>
                    <img
                      alt="Logo of HaveIgnition.com"
                      src="/customers/liquidweb.svg"
                      className="h-6 w-auto flex-none"
                    />
                  </figcaption>
                </a>
              </figure>
              <div className="space-y-8 xl:contents xl:space-y-0">
                <div className="xl:row-span-2 space-y-8">
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Langbase is transforming the AI market.{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Easy to use, handy integrations, and serverless AI
                            agents infra
                          </span>
                          . What else could we ask for.
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Zeno Rocha"
                        src="https://github.com/zenorocha.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Zeno Rocha</div>
                        <div className="text-gray-600">CEO of Resend.com</div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Langbase lets us manage all our LLM-related
                          infrastructure in one place,{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            quick-iteration, actionable analytics, version
                            controlled prompts
                          </span>
                          , and rapid testing of different LLM models. Read more
                          in{" "}
                          <a
                            href="/customers/first-quadrant"
                            className="underline"
                          >
                            FQ's customer story
                          </a>
                          .
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Anand Chowdhary"
                        src="https://github.com/AnandChowdhary.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Anand Chowdhary</div>
                        <div className="text-gray-600">
                          <div>CTO · FirstQuadrant AI</div>
                          <div>GitHub Star · Forbes 30U30</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          🚀 Excited to see @Langbase launch! Langbase is
                          transforming AI development with serverless AI agents
                          infrastructure, making it easy for any developer to
                          build, collaborate, and deploy AI apps.{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Think Docker containers, but for AI agents!
                          </span>{" "}
                          Proud to have supported them from the beginning.
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Feross Aboukhadijeh"
                        src="https://github.com/feross.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Feross Aboukhadijeh</div>
                        <div className="text-gray-600">CEO of Socket.dev</div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Really impressed with Langbase (we use at Ignition) -
                          it's one of the{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            most "need to have" tools i've seen in the past
                            decade
                          </span>{" "}
                          … AI is moving so quickly so{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            a serverless composable infra to
                            mix/match/test/deploy new models as they are
                            released
                          </span>{" "}
                          is the fastest way for an org to stay on the bleeding
                          edge without without vendor lock-in … seeing{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            how excited my team has been using Langbase
                          </span>
                          . Langbase is simplifying the complexity of it all.
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Nic Siegle"
                        src="https://raw.githubusercontent.com/LangbaseInc/docs-images/main/www/quotes/nic.jpeg"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Nic Siegle</div>
                        <div className="text-gray-600">
                          <div>Head of Sales · Ignition</div>
                          <div>Asana · Mixpanel · Oracle</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Langbase AI serverless dev experience is powerful and
                          unique,{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            truly designed to meet the needs of developers
                          </span>{" "}
                          building and operating LLM apps.
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Guy Podjarny"
                        src="https://github.com/guypod.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Guy Podjarny</div>
                        <div className="text-gray-600">
                          <div>Founder · Snyk</div>
                          <div>CEO of Tessl</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="xl:row-start-1 space-y-8">
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          Langbase is unique for its composable serverless AI
                          cloud that just works
                        </span>
                        . Makes AI dev dead simple for everyone, not just the ML
                        experts. I believe an{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          AI Pipe is the easiest way to build AI features you
                          can actually use
                        </span>
                        . Build, ship, and innovate with zero-config, making
                        ship happen.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Evil Rabbit"
                        src="https://github.com/evilrabbit.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Evil Rabbit</div>
                        <div className="text-gray-600">
                          <div>Founding Designer · Vercel</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “Excellent launch: Just added to the AI Development
                        Tools list.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Robert Scoble"
                        src="https://raw.githubusercontent.com/LangbaseInc/docs-images/main/www/quotes/robert.jpg"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Robert Scoble</div>
                        <div className="text-gray-600">
                          Ex Strategist · Microsoft
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “I had an opportunity to take an early look at ⌘
                        Langbase is doing is{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          groundbreaking
                        </span>{" "}
                        to help leverage AI for typical AI skeptics and
                        newcomers like myself. I'm excited to work with this
                        more to build AI-powered projects and scale them!”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Corbin Crutchley"
                        src="https://github.com/crutchcorn.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Corbin Crutchley</div>
                        <div className="text-gray-600">
                          Founding Designer · Vercel
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          If you're a developer and you're working in AI,{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            you should be using ⌘ Langbase — serverless,
                            composable, zero-config AI dev cloud
                          </span>{" "}
                          so you can focus on your product and business rather
                          than all the plumbing. Great work Ahmad and team
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Faraz Amiruddin"
                        src="https://raw.githubusercontent.com/LangbaseInc/docs-images/main/www/quotes/faraz.jpeg"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Faraz Amiruddin</div>
                        <div className="text-gray-600">
                          SSE · Netflix · Uber
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="space-y-8 xl:contents xl:space-y-0">
                <div className="xl:row-start-1 space-y-8">
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          LLM's are redefining the meaning of an application and
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Langbase is the Vercel of AI
                          </span>{" "}
                          that supercharges every developer &amp; company's
                          efforts in building for this new wave.
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Ian Livingstone"
                        src="https://github.com/ianlivingstone.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Ian Livingstone</div>
                        <div className="text-gray-600">
                          <div>CTO Manifold</div>
                          <div>Snyk · Salesforce</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “Great developer tools …{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          Langbase is shipping the LLMOps infrastructure and
                          pipelines that developers love to use
                        </span>
                        . It removes repetitive, high-friction, infra work
                        freeing you to focus leveraging the best models to build
                        use cases that matter. With AI pipes, developers can
                        adopt and iterate on AI features at high velocity.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Sanjeev Sisodiya"
                        src="https://raw.githubusercontent.com/LangbaseInc/docs-images/main/www/quotes/sanjeev.jpeg"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Sanjeev Sisodiya</div>
                        <div className="text-gray-600">
                          CSO · Postman · Persistent
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “No one does it like Ahmad. Been playing with Langbase
                        recently and if you want to get cooking with AI, this is
                        it. 10/10 platform, 100/10 landing page.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Iddo Gino"
                        src="https://github.com/iddogino.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Iddo Gino</div>
                        <div className="text-gray-600">
                          <div>Founder · RapidAPI</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “This is going to be huge 🚀 will enable such cool
                        features on Caley!”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Jeremy Scatigna"
                        src="https://github.com/jeremyscatigna.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Jeremy Scatigna</div>
                        <div className="text-gray-600">Founder Caley</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="xl:row-span-2 space-y-8">
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Ahmad is uniquely positioned to dramatically improve
                            the AI developer experience
                          </span>
                          . He has done exactly that with Langbase, building on
                          his deep expertise creating products for developers
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Logan Kilpatrick"
                        src="https://github.com/logankilpatrick.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Logan Kilpatrick</div>
                        <div className="text-gray-600">
                          Google · OpenAI · Harvard
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          We rebuilt SiteGPT v2 with our own RAG pipeline using
                          Langbase. Why? Control and accuracy.{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Each step from query to answer is now a Langbase
                            pipe
                          </span>
                          . This means granular testing,{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            precise cost measurement
                          </span>
                          , and easier optimization. Want to add or tweak a
                          step? Langbase's
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            composability makes it simple
                          </span>
                          . It's not just about better answers—it's about{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            building a system we can evolve
                          </span>
                          .
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Bhanu Teja"
                        src="https://github.com/pbteja1998.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Bhanu Teja</div>
                        <div className="text-gray-600">
                          <div>Founder · SiteGPT</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Got an early look,{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            ⌘ Langbase is shipping groundbreaking tooling to
                            leverage AI
                          </span>{" "}
                          for typical AI skeptics and newcomers like myself. I'm
                          excited to work with this more to build AI-powered
                          projects and scale them!
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Rahul Pandita"
                        src="https://github.com/rahulpandita.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Rahul Pandita</div>
                        <div className="text-gray-600">
                          <div>Staff AI PhD · GitHub Coplit</div>
                          <div>Accenture · GitHub Next</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="text-muted-foreground">
                          Composability—building complex systems from simple,
                          interchangeable parts—can transform development
                          processes. At npm, we made package management
                          composable.{" "}
                          <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                            Langbase brings this same spirit of modularity and
                            flexibility into the AI domain.
                          </span>
                        </span>
                        ”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Ahmad Nassri"
                        src="https://github.com/ahmadnassri.png"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Ahmad Nassri</div>
                        <div className="text-gray-600">
                          <div>CTO · npm</div>
                          <div>CA/VP · Kong · Telus</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <blockquote className="text-white p-6 pb-0">
                      <p>
                        “
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          Really impressive launch of serverless AI cloud by
                          Langbase!
                        </span>
                        Made it easy for developers to build complex AI agents
                        in a more{" "}
                        <span className="bg-background rounded-lg px-2 py-[2px] font-bold text-white">
                          modular and scalable
                        </span>
                        manner leveraging. Proud to be an early supporter of
                        Ahmad on his founder journey.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4 shadow-[0_2px_3px_0_theme(colors.black/85%),0_0_0_1px_theme(colors.white/3%),0_-1px_0_0_theme(colors.white/2.5%)] rounded-3xl p-3">
                      <img
                        alt="Walter Kortschak"
                        src="https://raw.githubusercontent.com/LangbaseInc/docs-images/main/www/quotes/walter.jpeg"
                        className="h-10 w-10 rounded-full bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none"
                      />
                      <div>
                        <div className="font-semibold">Walter Kortschak</div>
                        <div className="text-gray-600">
                          <div>Partner · Firestreak</div>
                          <div>SignalFire · Anthropic</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
