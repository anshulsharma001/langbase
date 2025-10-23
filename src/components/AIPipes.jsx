import React from "react";

// AI Pipes: Serverless AI Agents section with orbiting provider icons
export default function AIPipes() {
  return (
    <section className="group h-full cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-2 row-span-2">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative  ">
          <div className="h-full w-full z-[1]">
            <div className="xl:mt-4 h-full">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
               

                {/* Inner orbit ring */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="175" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    {/* YouTube Icon */}
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "20s", "--radius": "175px", "--delay": "0s" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Middle orbit ring */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="200" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    {/* AI Icon */}
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10 [animation-direction:reverse]"
                        style={{ "--duration": "25s", "--radius": "200px", "--delay": "-5s" }}>
                        <span className="font-bold text-lg">AI</span>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Outer orbit ring */}
                <div className="h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 550 550">
                    <circle className="hidden stroke-white/10 sm:inline" cx="50%" cy="50%" r="225" fill="none" strokeDasharray="4 4" strokeWidth="1" />
                    {/* GitHub Icon */}
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "30s", "--radius": "225px", "--delay": "-15s" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </div>
                    </foreignObject>
                    {/* Tools Icon */}
                    <foreignObject x="-5%" y="-5%" width="110%" height="110%">
                      <div className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{ "--duration": "30s", "--radius": "225px", "--delay": "-5s" }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Orbit ring 3 */}
                <div className="h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 550 550"
                    aria-hidden
                  >
                    <circle
                      className="hidden stroke-white/10 sm:inline"
                      cx="50%"
                      cy="50%"
                      r="200"
                      fill="none"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <foreignObject x="-5%" y="-5%" width="100%" height="100%">
                      <div
                        className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{
                          ["--duration"]: 15,
                          ["--radius"]: "200px",
                          ["--delay"]: "-10",
                        }}
                      >
                        <svg
                          className="w-[23px]"
                          viewBox="0 0 438.549 438.549"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                          />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Orbit ring 4 */}
                <div className="h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 550 550"
                    aria-hidden
                  >
                    <circle
                      className="hidden stroke-white/10 sm:inline"
                      cx="50%"
                      cy="50%"
                      r="225"
                      fill="none"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <foreignObject x="-5%" y="-5%" width="100%" height="100%">
                      <div
                        className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] [animation-direction:reverse] dark:bg-white/10"
                        style={{
                          ["--duration"]: 15,
                          ["--radius"]: "225px",
                          ["--delay"]: "-10",
                        }}
                      >
                        <svg
                          className="w-[23px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8986 18.8987C17.4908 20.6751 15.9002 22 14 22H8C5.79086 22 4 20.2091 4 18V9C4 7.09985 5.32493 5.50915 7.10135 5.10135C7.50915 3.32493 9.09985 2 11 2H14V6C14 7.65685 15.3431 9 17 9H21V15C21 16.9002 19.6751 18.4909 17.8986 18.8987ZM7 7.26756C6.4022 7.61337 6 8.25972 6 9V18C6 19.1046 6.89543 20 8 20H14C14.7403 20 15.3866 19.5978 15.7324 19H11C8.79086 19 7 17.2091 7 15V7.26756Z"
                            fill="currentColor"
                          />
                          <path d="M16 2.58579L20.4142 7H17C16.4477 7 16 6.55228 16 6V2.58579Z" fill="currentColor" />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Orbit ring 5 */}
                <div className="h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 550 550"
                    aria-hidden
                  >
                    <circle
                      className="hidden stroke-white/10 sm:inline"
                      cx="50%"
                      cy="50%"
                      r="225"
                      fill="none"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <foreignObject x="-5%" y="-5%" width="100%" height="100%">
                      <div
                        className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{
                          ["--duration"]: 13,
                          ["--radius"]: "225px",
                          ["--delay"]: 0,
                        }}
                      >
                        <svg
                          className="w-[23px]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7ZM6.79289 7.29289C7.18342 6.90237 7.81658 6.90237 8.20711 7.29289L9.95711 9.04289C10.3476 9.43342 10.3476 10.0666 9.95711 10.4571L8.20711 12.2071C7.81658 12.5976 7.18342 12.5976 6.79289 12.2071C6.40237 11.8166 6.40237 11.1834 6.79289 10.7929L7.83579 9.75L6.79289 8.70711C6.40237 8.31658 6.40237 7.68342 6.79289 7.29289ZM11 11.5C11 10.9477 11.4477 10.5 12 10.5H14C14.5523 10.5 15 10.9477 15 11.5C15 12.0523 14.5523 12.5 14 12.5H12C11.4477 12.5 11 12.0523 11 11.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>

                 <div className="relative h-[500px] flex items-center justify-center">
        {/* Center Text */}
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-black to-gray-300/80 bg-clip-text text-center font-mono font-semibold leading-none text-transparent tracking-tighter text-[11rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Pipe
                </span>

        {/* Inner Ring */}
        <div className="absolute">
          <svg className="w-[450px] h-[450px]" viewBox="0 0 300 300">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40"
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
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 18.5c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* OpenAI Icon Container */}
            <g className="animate-rotate" style={{"--duration": "20s", "--delay": "5s"}}>
              <g transform="translate(150, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
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
          <svg className="w-[480px] h-[480px]" viewBox="0 0 400 400">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* Google Icon Container */}
            <g className="animate-rotate-reverse" style={{"--duration": "25s", "--delay": "8s"}}>
              <g transform="translate(200, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
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
          <svg className="w-[510px] h-[510px]" viewBox="0 0 500 500">
            {/* Ring Circle */}
            <circle
              className="stroke-white/40"
              cx="250"
              cy="250"
              r="220"
              fill="none"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            {/* Tools Icon Container */}
            <g className="animate-rotate" style={{"--duration": "30s"}}>
              <g transform="translate(250, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </foreignObject>
              </g>
            </g>
            {/* Cloud Icon Container */}
            <g className="animate-rotate" style={{"--duration": "30s", "--delay": "15s"}}>
              <g transform="translate(250, 30)">
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%)]">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71c.39-1.64 1.88-2.95 3.71-3.4C11.4 6.34 13.6 7 15 8.71V10h4c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2c0 1.1-.9 2-2 2z"/>
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
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">AI Pipes: Serverless AI Agents</h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90">
              Pipes are serverless AI agents with memory and tools. Pipes are serverless, composable, forkable — like Docker containers or React components. Agentic memory and self-healing tools.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
