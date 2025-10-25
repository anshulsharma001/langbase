import React from "react";

// AI Pipes: Serverless AI Agents section with orbiting provider icons
export default function AIPipes() {
  return (
    <section className="group text-white h-full cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-2 row-span-2">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative  ">
          <div className="h-full w-full z-[1]">
            <div className="xl:mt-4 h-full">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
               

                {/* Inner orbit ring - YouTube */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="120" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "20s", "--radius": "120px", "--delay": "0s", transform: "rotate(0deg) translateX(120px) rotate(0deg)" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Middle orbit ring - AI */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="150" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10 [animation-direction:reverse]"
                        style={{ "--duration": "25s", "--radius": "150px", "--delay": "-5s", transform: "rotate(90deg) translateX(150px) rotate(-90deg)" }}>
                        <span className="font-bold text-lg">AI</span>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Outer orbit ring - GitHub */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="180" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "30s", "--radius": "180px", "--delay": "-15s", transform: "rotate(180deg) translateX(180px) rotate(-180deg)" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Tools orbit ring */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="210" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "35s", "--radius": "210px", "--delay": "-5s", transform: "rotate(270deg) translateX(210px) rotate(-270deg)" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>

                 <div className="relative h-[500px] flex items-center justify-center">
        {/* Center Text */}
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-gray-800 to-white bg-clip-text text-center font-mono font-semibold leading-none text-transparent tracking-tighter text-[11rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Pipe
                </span>

        {/* Inner Ring */}
        <div className="absolute">
          <svg className="sm:w-[450px] sm:h-[450px] w-[300px] h-[300px]" viewBox="0 0 300 300">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40 max-sm:opacity-0"
              cx="150"
              cy="150"
              r="120"
              fill="none"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            {/* ChatGPT Icon Container */}
            <g className="animate-rotate" style={{"--duration": "20s"}}>
              <g transform="translate(150, 30)">
                <foreignObject x="-20" y="-15" width="40" height="40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 18.5c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* OpenAI Icon Container */}
            <g className="animate-rotate-reverse" style={{"--duration": "20s", "--delay": "5s"}}>
              <g transform="translate(100, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
          </svg>
        </div>

        {/* Middle Ring */}
        <div className="absolute">
          <svg className="sm:w-[480px] sm:h-[480px] w-[350px] h-[350px]" viewBox="0 0 400 400">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40 max-sm:opacity-0"
              cx="200"
              cy="200"
              r="170"
              fill="none"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            {/* GitHub Icon Container */}
            <g className="animate-rotate-reverse" style={{"--duration": "25s"}}>
              <g transform="translate(200, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* Google Icon Container */}
            <g className="animate-rotate-reverse" style={{"--duration": "25s", "--delay": "1s"}}>
              <g transform="translate(290, 80)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-8 w-8 items-center rounded-full justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
          </svg>
        </div>

        {/* Outer Ring */}
        <div className="absolute">
          <svg className="sm:w-[510px] sm:h-[510px] w-[450px] h-[450px]" viewBox="0 0 500 500">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40 max-sm:opacity-0"
              cx="250"
              cy="250"
              r="220"
              fill="none"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            {/* Tools Icon Container */}
            <g className="animate-rotate" style={{"--duration": "30s"}}>
              <g transform="translate(30, 250)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* Database Icon Container */}
            <g className="animate-rotate" style={{"--duration": "30s", "--delay": "10s"}}>
              <g transform="translate(250, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            
          </svg>
        </div>
      </div>
            </div>
          </div>

          {/* Title/description */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">AI Pipes: Serverless AI Agents</h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90">
              Pipes are serverless AI agents with memory and tools. Pipes are serverless, composable, forkable — like Docker containers or React components. Agentic memory and self-healing tools.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center  opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/docs/pipe"
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
