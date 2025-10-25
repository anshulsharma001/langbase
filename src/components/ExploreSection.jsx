const Explore = () => {
  return (
    <>
      <div className="flex w-full text-white flex-col items-center rounded-lg mt-12 mx-auto">
        <div className="w-full flex flex-col items-center gap-10 px-4 md:px-0">
          <div
            style={{
              opacity: 1,
              filter: "blur(0px)",
              willChange: "auto",
              transform: "translateY(-6px)",
            }}
          >
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm sm:text-base font-semibold leading-7 text-indigo-400">
                Fork, run, and deploy serverless AI pipes
              </p>
              <h2 className="mt-2 text-3xl sm:text-6xl font-bold tracking-tight text-foreground">
                Explore AI pipes
              </h2>
            </div>
          </div>
          <div className="w-full flex flex-col items-center relative">
            <div className="w-full flex justify-center items-center overflow-hidden">
              <div className="pointer-events-none absolute h-[200%] overflow-hidden [perspective:120px] opacity-70 w-full mb-[10%] md:mb-[5%] hidden md:block">
                <div className="absolute inset-0 [transform:rotateX(30deg)]">
                  <div className="animate-grid w-full [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [transform-origin:100%_0_0] [width:100%] [background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]" />
                </div>
              </div>
            </div>
            <div className="flex w-full lg:w-3/4 items-center justify-center relative">
              <div className="relative rounded-lg border border-border shadow-inner bg-background w-full md:w-2/3 z-10">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  aria-hidden="true"
                >
                  <svg
                    className="size-4 text-muted-foreground"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.5509 17.3199 15.9056L20.7072 19.2929C21.0977 19.6834 21.0977 20.3166 20.7072 20.7071C20.3166 21.0976 19.6835 21.0976 19.2929 20.7071L15.9057 17.3198C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  className="w-full rounded-lg text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:cursor-pointer ring-1 ring-inset ring-ring/5 sm:text-sm sm:leading-6 shadow-inner focus:ring-1 focus:ring-inset focus:ring-muted-foreground/25 placeholder:text-muted-foreground bg-transparent block border-0 py-2 pl-9 text-sm md:text-md select-none"
                  id="search"
                  placeholder="Search by name, description or labels"
                  type="text"
                  defaultValue=""
                  name="search"
                />
                <a
                  className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 absolute right-[1.5px] top-[1.5px] invisible"
                  type="submit"
                  target="_blank"
                  href="/explore?q="
                />
              </div>
            </div>
            <div className="flex justify-center gap-y-2 flex-wrap w-full lg:w-2/4 text-sm z-10 mt-8 sm:mt-12">
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:All"
              >
                <div className="flex items-center justify-center space-x-1 border border-border rounded-lg px-3 py-1 cursor-pointer hover:bg-foreground hover:text-background text-background bg-muted-foreground">
                  All
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Legal"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Legal
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Finance"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Finance
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Summarizer"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Summarizer
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Education"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Education
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Marketing"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Marketing
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Software"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Software
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Healthcare"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Healthcare
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:News & Media"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  News &amp; Media
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Customer Support"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Customer Support
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Administration"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Administration
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Content"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Content
                </div>
              </a>
              <a
                target="_blank"
                className="inline-block mr-2 last:mr-0 select-none"
                href="/explore?q=label:Entertainment"
              >
                <div className="flex items-center text-white font-normal justify-center space-x-1 border border-border rounded-lg px-3 py-1 bg-muted cursor-pointer hover:bg-foreground hover:text-background">
                  Entertainment
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full mx-auto max-w-6xl sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] mt-8 sm:mt-12 px-4">
          <div className="pb-16 relative max-w-6xl sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] xl:-mx-16">
            <div className="pb-4 md:pb-16 md:px-12 max-w-6xl sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] mx-auto overflow-x-auto">
              <div className="relative bg-transparent grid grid-flow-col pt-12">
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/ai-chatbot"
                              >
                                <span className="line-clamp-1">ai-chatbot</span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/ai-chatbot/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          PIPE: An AI Chatbot assistant like ChatGPT with any
                          LLM i.e. GPT, Gemini, Mistral, Llama, Cohere, Claude,
                          etc.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>chatbot</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ai</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>assistant</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center text-white font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/ai-chatbot"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-3">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-3)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,20.47L1.505,20.489L2.011,20.212L2.516,20.465L3.021,20.814L3.527,20.608L4.032,21.413L4.537,21.455L5.043,20.682L5.548,20.602L6.053,21.273L6.559,21.001L7.064,21.188L7.569,20.96L8.075,20.808L8.58,20.954L9.085,20.349L9.591,20.201L10.096,20.357L10.601,20.487L11.107,19.582L11.612,19.461L12.117,19.923L12.623,19.813L13.128,19.384L13.633,19.483L14.139,19.574L14.644,19.409L15.149,19.321L15.655,19.279L16.16,19.648L16.665,19.483L17.171,18.782L17.676,18.853L18.181,18.985L18.687,19.197L19.192,18.628L19.698,18.559L20.203,18.43L20.708,18.468L21.214,17.723L21.719,17.899L22.224,18.699L22.73,18.952L23.235,18.443L23.74,18.267L24.246,17.948L24.751,17.984L25.256,18.108L25.762,17.998L26.267,17.959L26.772,17.816L27.278,17.528L27.783,17.8L28.288,17.921L28.794,18.124L29.299,18.124L29.804,18.08L30.31,18.696L30.815,18.614L31.32,18.457L31.826,18.306L32.331,18.058L32.836,18.094L33.342,17.915L33.847,17.981L34.352,17.514L34.858,17.415L35.363,17.25L35.868,17.497L36.374,17.195L36.879,17.343L37.384,17.379L37.89,17.434L38.395,17.385L38.9,17.426L39.406,17.126L39.911,17.176L40.416,17.22L40.922,17.275L41.427,16.521L41.932,16.403L42.438,16.263L42.943,16.018L43.448,15.589L43.954,15.561L44.459,15.8L44.964,15.55L45.47,15.658L45.975,15.715L46.48,15.655L46.986,15.839L47.491,15.553L47.996,15.795L48.502,15.842L49.007,16.064L49.512,15.259L50.018,15.014L50.523,14.802L51.028,14.734L51.534,14.701L52.039,14.45L52.544,14.313L53.05,14.145L53.555,14.217L54.06,14.17L54.566,13.853L55.071,14.098L55.577,13.485L56.082,13.625L56.587,13.647L57.093,13.647L57.598,13.906L58.103,14.087L58.609,13.606L59.114,13.345L59.619,12.679L60.125,12.751L60.63,12.963L61.135,12.974L61.641,12.487L62.146,12.231L62.651,12.143L63.157,11.895L63.662,12.187L64.167,12.091L64.673,12.561L65.178,12.633L65.683,12.599L66.189,12.547L66.694,12.718L67.199,12.836L67.705,11.791L68.21,11.519L68.715,11.384L69.221,11.192L69.726,10.933L70.231,10.754L70.737,10.279L71.242,10.031L71.747,9.652L72.253,9.393L72.758,9.748L73.263,9.929L73.769,9.269L74.274,9.41L74.779,9.162L75.285,9.352L75.79,8.769L76.295,8.667L76.801,8.136L77.306,7.999L77.811,7.826L78.317,7.782L78.822,7.922L79.327,7.996L79.833,7.575L80.338,7.798L80.843,7.616L81.349,7.773L81.854,7.625L82.359,7.837L82.865,8.233L83.37,8.233L83.875,8.367L84.381,8.257L84.886,7.875L85.391,8.076L85.897,7.234L86.402,6.995L86.907,6.371L87.413,6.621L87.918,6.03L88.423,5.774L88.929,5.612L89.434,5.752L89.94,5.254L90.445,5.153L90.95,5.029L91.456,5.24L91.961,5.238L92.466,5.254L92.972,5.485L93.477,5.276L93.982,4.306L94.488,4.322L94.993,4.154L95.498,3.997L96.004,3.717L96.509,3.943L97.014,4.011L97.52,3.833L98.025,4.196L98.53,4.407L99.036,4.017L99.541,3.838L100.046,3.926L100.552,4.102L101.057,4.075L101.562,4.303L102.068,4.27L102.573,4.46L103.078,4.151L103.584,4.421L104.089,3.555L104.594,3.824L105.1,4.3L105.605,4.534L106.11,4.124L106.616,4.38L107.121,4.663L107.626,4.792L108.132,4.63L108.637,4.801L109.142,4.812L109.648,4.721L110.153,4.069L110.658,4.011L111.164,4.333L111.669,4.6L112.174,4.636L112.68,4.523L113.185,4.96L113.69,5.164L114.196,4.27L114.701,4.435L115.206,4.902L115.712,5.084L116.217,4.006L116.722,4.041L117.228,3.954L117.733,4.069L118.238,3.865L118.744,4.083L119.249,4.066L119.754,3.965L120.26,4.036L120.765,3.923L121.27,4.289L121.776,4.399L122.281,4.52L122.786,4.407L123.292,4.781L123.797,4.919L124.302,5.301L124.808,5.331L125.313,4.949L125.819,5.062L126.324,5.491L126.829,5.532L127.335,5.711L127.84,5.62L128.345,4.954L128.851,5.227L129.356,5.205L129.861,5.04L130.367,4.377L130.872,4.363L131.377,3.687L131.883,3.522L132.388,3.175L132.893,3.2L133.399,2.804L133.904,2.903L134.409,2.177L134.915,1.99L135.42,2.331L135.925,2.471L136.431,1.693L136.936,1.55L137.441,1.6L137.947,1.58L138.452,1.52L138.957,1.369L139.463,1.195L139.968,1.195L140.473,1.393L140.979,1.421L141.484,1.913L141.989,1.833L142.495,1.795L143,1.921L143,23L142.495,23L141.989,23L141.484,23L140.979,23L140.473,23L139.968,23L139.463,23L138.957,23L138.452,23L137.947,23L137.441,23L136.936,23L136.431,23L135.925,23L135.42,23L134.915,23L134.409,23L133.904,23L133.399,23L132.893,23L132.388,23L131.883,23L131.377,23L130.872,23L130.367,23L129.861,23L129.356,23L128.851,23L128.345,23L127.84,23L127.335,23L126.829,23L126.324,23L125.819,23L125.313,23L124.808,23L124.302,23L123.797,23L123.292,23L122.786,23L122.281,23L121.776,23L121.27,23L120.765,23L120.26,23L119.754,23L119.249,23L118.744,23L118.238,23L117.733,23L117.228,23L116.722,23L116.217,23L115.712,23L115.206,23L114.701,23L114.196,23L113.69,23L113.185,23L112.68,23L112.174,23L111.669,23L111.164,23L110.658,23L110.153,23L109.648,23L109.142,23L108.637,23L108.132,23L107.626,23L107.121,23L106.616,23L106.11,23L105.605,23L105.1,23L104.594,23L104.089,23L103.584,23L103.078,23L102.573,23L102.068,23L101.562,23L101.057,23L100.552,23L100.046,23L99.541,23L99.036,23L98.53,23L98.025,23L97.52,23L97.014,23L96.509,23L96.004,23L95.498,23L94.993,23L94.488,23L93.982,23L93.477,23L92.972,23L92.466,23L91.961,23L91.456,23L90.95,23L90.445,23L89.94,23L89.434,23L88.929,23L88.423,23L87.918,23L87.413,23L86.907,23L86.402,23L85.897,23L85.391,23L84.886,23L84.381,23L83.875,23L83.37,23L82.865,23L82.359,23L81.854,23L81.349,23L80.843,23L80.338,23L79.833,23L79.327,23L78.822,23L78.317,23L77.811,23L77.306,23L76.801,23L76.295,23L75.79,23L75.285,23L74.779,23L74.274,23L73.769,23L73.263,23L72.758,23L72.253,23L71.747,23L71.242,23L70.737,23L70.231,23L69.726,23L69.221,23L68.715,23L68.21,23L67.705,23L67.199,23L66.694,23L66.189,23L65.683,23L65.178,23L64.673,23L64.167,23L63.662,23L63.157,23L62.651,23L62.146,23L61.641,23L61.135,23L60.63,23L60.125,23L59.619,23L59.114,23L58.609,23L58.103,23L57.598,23L57.093,23L56.587,23L56.082,23L55.577,23L55.071,23L54.566,23L54.06,23L53.555,23L53.05,23L52.544,23L52.039,23L51.534,23L51.028,23L50.523,23L50.018,23L49.512,23L49.007,23L48.502,23L47.996,23L47.491,23L46.986,23L46.48,23L45.975,23L45.47,23L44.964,23L44.459,23L43.954,23L43.448,23L42.943,23L42.438,23L41.932,23L41.427,23L40.922,23L40.416,23L39.911,23L39.406,23L38.9,23L38.395,23L37.89,23L37.384,23L36.879,23L36.374,23L35.868,23L35.363,23L34.858,23L34.352,23L33.847,23L33.342,23L32.836,23L32.331,23L31.826,23L31.32,23L30.815,23L30.31,23L29.804,23L29.299,23L28.794,23L28.288,23L27.783,23L27.278,23L26.772,23L26.267,23L25.762,23L25.256,23L24.751,23L24.246,23L23.74,23L23.235,23L22.73,23L22.224,23L21.719,23L21.214,23L20.708,23L20.203,23L19.698,23L19.192,23L18.687,23L18.181,23L17.676,23L17.171,23L16.665,23L16.16,23L15.655,23L15.149,23L14.644,23L14.139,23L13.633,23L13.128,23L12.623,23L12.117,23L11.612,23L11.107,23L10.601,23L10.096,23L9.591,23L9.085,23L8.58,23L8.075,23L7.569,23L7.064,23L6.559,23L6.053,23L5.548,23L5.043,23L4.537,23L4.032,23L3.527,23L3.021,23L2.516,23L2.011,23L1.505,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,20.47L1.505,20.489L2.011,20.212L2.516,20.465L3.021,20.814L3.527,20.608L4.032,21.413L4.537,21.455L5.043,20.682L5.548,20.602L6.053,21.273L6.559,21.001L7.064,21.188L7.569,20.96L8.075,20.808L8.58,20.954L9.085,20.349L9.591,20.201L10.096,20.357L10.601,20.487L11.107,19.582L11.612,19.461L12.117,19.923L12.623,19.813L13.128,19.384L13.633,19.483L14.139,19.574L14.644,19.409L15.149,19.321L15.655,19.279L16.16,19.648L16.665,19.483L17.171,18.782L17.676,18.853L18.181,18.985L18.687,19.197L19.192,18.628L19.698,18.559L20.203,18.43L20.708,18.468L21.214,17.723L21.719,17.899L22.224,18.699L22.73,18.952L23.235,18.443L23.74,18.267L24.246,17.948L24.751,17.984L25.256,18.108L25.762,17.998L26.267,17.959L26.772,17.816L27.278,17.528L27.783,17.8L28.288,17.921L28.794,18.124L29.299,18.124L29.804,18.08L30.31,18.696L30.815,18.614L31.32,18.457L31.826,18.306L32.331,18.058L32.836,18.094L33.342,17.915L33.847,17.981L34.352,17.514L34.858,17.415L35.363,17.25L35.868,17.497L36.374,17.195L36.879,17.343L37.384,17.379L37.89,17.434L38.395,17.385L38.9,17.426L39.406,17.126L39.911,17.176L40.416,17.22L40.922,17.275L41.427,16.521L41.932,16.403L42.438,16.263L42.943,16.018L43.448,15.589L43.954,15.561L44.459,15.8L44.964,15.55L45.47,15.658L45.975,15.715L46.48,15.655L46.986,15.839L47.491,15.553L47.996,15.795L48.502,15.842L49.007,16.064L49.512,15.259L50.018,15.014L50.523,14.802L51.028,14.734L51.534,14.701L52.039,14.45L52.544,14.313L53.05,14.145L53.555,14.217L54.06,14.17L54.566,13.853L55.071,14.098L55.577,13.485L56.082,13.625L56.587,13.647L57.093,13.647L57.598,13.906L58.103,14.087L58.609,13.606L59.114,13.345L59.619,12.679L60.125,12.751L60.63,12.963L61.135,12.974L61.641,12.487L62.146,12.231L62.651,12.143L63.157,11.895L63.662,12.187L64.167,12.091L64.673,12.561L65.178,12.633L65.683,12.599L66.189,12.547L66.694,12.718L67.199,12.836L67.705,11.791L68.21,11.519L68.715,11.384L69.221,11.192L69.726,10.933L70.231,10.754L70.737,10.279L71.242,10.031L71.747,9.652L72.253,9.393L72.758,9.748L73.263,9.929L73.769,9.269L74.274,9.41L74.779,9.162L75.285,9.352L75.79,8.769L76.295,8.667L76.801,8.136L77.306,7.999L77.811,7.826L78.317,7.782L78.822,7.922L79.327,7.996L79.833,7.575L80.338,7.798L80.843,7.616L81.349,7.773L81.854,7.625L82.359,7.837L82.865,8.233L83.37,8.233L83.875,8.367L84.381,8.257L84.886,7.875L85.391,8.076L85.897,7.234L86.402,6.995L86.907,6.371L87.413,6.621L87.918,6.03L88.423,5.774L88.929,5.612L89.434,5.752L89.94,5.254L90.445,5.153L90.95,5.029L91.456,5.24L91.961,5.238L92.466,5.254L92.972,5.485L93.477,5.276L93.982,4.306L94.488,4.322L94.993,4.154L95.498,3.997L96.004,3.717L96.509,3.943L97.014,4.011L97.52,3.833L98.025,4.196L98.53,4.407L99.036,4.017L99.541,3.838L100.046,3.926L100.552,4.102L101.057,4.075L101.562,4.303L102.068,4.27L102.573,4.46L103.078,4.151L103.584,4.421L104.089,3.555L104.594,3.824L105.1,4.3L105.605,4.534L106.11,4.124L106.616,4.38L107.121,4.663L107.626,4.792L108.132,4.63L108.637,4.801L109.142,4.812L109.648,4.721L110.153,4.069L110.658,4.011L111.164,4.333L111.669,4.6L112.174,4.636L112.68,4.523L113.185,4.96L113.69,5.164L114.196,4.27L114.701,4.435L115.206,4.902L115.712,5.084L116.217,4.006L116.722,4.041L117.228,3.954L117.733,4.069L118.238,3.865L118.744,4.083L119.249,4.066L119.754,3.965L120.26,4.036L120.765,3.923L121.27,4.289L121.776,4.399L122.281,4.52L122.786,4.407L123.292,4.781L123.797,4.919L124.302,5.301L124.808,5.331L125.313,4.949L125.819,5.062L126.324,5.491L126.829,5.532L127.335,5.711L127.84,5.62L128.345,4.954L128.851,5.227L129.356,5.205L129.861,5.04L130.367,4.377L130.872,4.363L131.377,3.687L131.883,3.522L132.388,3.175L132.893,3.2L133.399,2.804L133.904,2.903L134.409,2.177L134.915,1.99L135.42,2.331L135.925,2.471L136.431,1.693L136.936,1.55L137.441,1.6L137.947,1.58L138.452,1.52L138.957,1.369L139.463,1.195L139.968,1.195L140.473,1.393L140.979,1.421L141.484,1.913L141.989,1.833L142.495,1.795L143,1.921"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/ascii-software-architect"
                              >
                                <span className="line-clamp-1">
                                  ascii-software-architect
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/ascii-software-architect/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          Your code's blueprint, drawn in ASCII precision
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>education</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>software</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>technology</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ascii-uml-bot</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ascii-art-uml</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/ascii-software-architect"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts4-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-6">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-6)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/pi-anonymizer"
                              >
                                <span className="line-clamp-1">
                                  pi-anonymizer
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/pi-anonymizer/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          AI assistant that automates detection and removal of
                          personally identifiable information.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>pii-redact-bot</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>software</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>technology</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ascii-uml-bot</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ascii-art-uml</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/pi-anonymizer"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts7-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-9">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-9)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/cs-tickets-to-faq-summarizer"
                              >
                                <span className="line-clamp-1">
                                  cs-tickets-to-faq-summarizer
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/cs-tickets-to-faq-summarizer/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          Summarize customer support tickets into FAQs to put
                          inside documentation
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>customer-support</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>pipe</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>gpt</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/cs-tickets-to-faq-summarizer"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts10-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-12">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-12)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/software-engineer-hiring"
                              >
                                <span className="line-clamp-1">
                                  software-engineer-hiring
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/software-engineer-hiring/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          Shortlist and hire candidates for Software Engineering
                          roles with specific skills
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>software</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>recruitment</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/software-engineer-hiring"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts13-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-15">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-15)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/onboarding-ai-assistant"
                              >
                                <span className="line-clamp-1">
                                  onboarding-ai-assistant
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/onboarding-ai-assistant/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          AI Assistant that completes the hardware and software
                          setup checklist with newly hired employee. Call
                          support for in case of failure. Help troubleshoot
                          basic setup problem.
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>software</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>employee-onboarding</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ai-onboarding-bot</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>support</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/onboarding-ai-assistant"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts16-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-18">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-18)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[37rem] relative duration-200 hover:translate-y-[-2rem] ml-[-330px] first:ml-0 h-full overflow-hidden rounded-xl md:hover:first:translate-x-0 md:hover:-translate-x-32 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <div className="rounded-xl p-6 border border-border flex flex-col justify-between gap-6 w-full h-full bg-black">
                    <div className="min-w-0 flex-auto">
                      <div className="grid grid-cols-6 w-full">
                        <div className="col-span-5 flex flex-col md:flex-row md:items-center gap-2">
                          <img
                            src="https://jekmqviitjabovoitjty.supabase.co/storage/v1/object/public/avatars/7829092a-a190-4c42-b1be-69bb2b8085a0"
                            alt="examples"
                            className="h-6 w-6 flex-none rounded-full select-none"
                          />
                          <h2 className="min-w-0 text-sm font-semibold leading-6 text-foreground">
                            <span className="flex flex-col md:flex-row gap-x-2">
                              <div className="space-x-2">
                                <a className="hover:underline" href="/examples">
                                  <span>examples</span>
                                </a>
                                <span className="text-muted-foreground">/</span>
                              </div>
                              <a
                                className="hover:underline"
                                href="/examples/campaign-analysis-summarizer"
                              >
                                <span className="line-clamp-1">
                                  campaign-analysis-summarizer
                                </span>
                              </a>
                            </span>
                          </h2>
                        </div>
                        <div className="col-span-1 flex md:items-center justify-end w-full">
                          <a
                            className="justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:bg-accent hover:text-accent-foreground h-9 w-9 flex flex-col items-center p-2 ml-2 gap-y-2"
                            href="/examples/campaign-analysis-summarizer/fork"
                          >
                            <svg
                              className="size-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 5.5C3 3.567 4.567 2 6.5 2C8.433 2 10 3.567 10 5.5C10 7.08551 8.94574 8.42479 7.5 8.85506V11H11C11.3643 11 11.7058 11.0974 12 11.2676C12.2942 11.0974 12.6357 11 13 11H16.5V8.85506C15.0543 8.42479 14 7.08551 14 5.5C14 3.567 15.567 2 17.5 2C19.433 2 21 3.567 21 5.5C21 7.08551 19.9457 8.42479 18.5 8.85506V11C18.5 12.1046 17.6046 13 16.5 13H13V15.1449C14.4457 15.5752 15.5 16.9145 15.5 18.5C15.5 20.433 13.933 22 12 22C10.067 22 8.5 20.433 8.5 18.5C8.5 16.9145 9.55426 15.5752 11 15.1449V13H7.5C6.39543 13 5.5 12.1046 5.5 11V8.85506C4.05426 8.42479 3 7.08551 3 5.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-2 gap-x-2.5 text-xs leading-5 text-muted-foreground truncate-description">
                        <div className="col-span-5">
                          Summarize customer feedback and campaign performance
                          data to derive actionable insights
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6">
                        <div className="col-span-6 text-xs flex flex-wrap gap-y-2">
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>marketing</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>analysis</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 border border-border rounded-lg pl-3 py-1 mr-2 last:mr-0 bg-muted pr-3">
                            <span>ai</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:grid md:grid-cols-6">
                        <div className="col-span-4 flex flex-col md:flex-row md:items-center">
                          <a
                            className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background h-8 rounded-lg px-3 text-xs group select-none"
                            target="_blank"
                            href="/examples/campaign-analysis-summarizer"
                          >
                            <svg
                              className="size-4 mr-1 text-muted-foreground group-hover:text-muted"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M16 1.5C16.5523 1.5 17 1.94772 17 2.5V4H18C20.2091 4 22 5.79086 22 8V16C22 18.2091 20.2091 20 18 20H17V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V2.5C15 1.94772 15.4477 1.5 16 1.5Z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 8C2 5.79086 3.79086 4 6 4H13V20H6C3.79086 20 2 18.2091 2 16V8ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L10.2071 12.7071C10.5976 12.3166 10.5976 11.6834 10.2071 11.2929L7.70711 8.79289Z"
                                fill="currentColor"
                              />
                            </svg>
                            Open Pipe Playground
                          </a>
                        </div>
                        <div className="hidden col-span-2 md:flex justify-end items-center w-full">
                          <div className="h-6 w-36 opacity-50">
                            <div
                              className="recharts-responsive-container h-full w-full"
                              style={{
                                width: "100%",
                                height: "100%",
                                minWidth: 0,
                              }}
                            >
                              <div
                                className="recharts-wrapper"
                                style={{
                                  position: "relative",
                                  cursor: "default",
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: 24,
                                  maxWidth: 144,
                                }}
                              >
                                <svg
                                  className="recharts-surface"
                                  width={144}
                                  height={24}
                                  viewBox="0 0 144 24"
                                  style={{ width: "100%", height: "100%" }}
                                >
                                  <title />
                                  <desc />
                                  <defs>
                                    <clipPath id="recharts19-clip">
                                      <rect
                                        x={1}
                                        y={1}
                                        height={22}
                                        width={142}
                                      />
                                    </clipPath>
                                  </defs>
                                  <defs>
                                    <linearGradient
                                      className="text-green-500 dark:text-green-500"
                                      id="green"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        offset="5%"
                                        stopColor="currentColor"
                                        stopOpacity="0.4"
                                      />
                                      <stop
                                        offset="95%"
                                        stopColor="currentColor"
                                        stopOpacity={0}
                                      />
                                    </linearGradient>
                                  </defs>
                                  <g className="recharts-layer recharts-area stroke-green-500 dark:stroke-green-500">
                                    <g className="recharts-layer">
                                      <defs>
                                        <clipPath id="animationClipPath-recharts-area-21">
                                          <rect
                                            x={1}
                                            y={0}
                                            width={142}
                                            height={25}
                                          />
                                        </clipPath>
                                      </defs>
                                      <g
                                        className="recharts-layer"
                                        clipPath="url(#animationClipPath-recharts-area-21)"
                                      >
                                        <g className="recharts-layer">
                                          <path
                                            className="recharts-curve recharts-area-area"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            fill="url(#green)"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            stroke="none"
                                            d="M1,6.5L143,20.25L143,23L1,23Z"
                                          />
                                          <path
                                            className="recharts-curve recharts-area-curve"
                                            strokeOpacity={1}
                                            name="versionsToChart"
                                            stroke=""
                                            fill="none"
                                            strokeWidth={2}
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            fillOpacity="0.6"
                                            width={142}
                                            height={22}
                                            d="M1,6.5L143,20.25"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
