import React from "react";

// AI Pipes: Serverless AI Agents section with orbiting provider icons
export default function AIPipes() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative col-span-4 row-span-2 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu lg:col-span-2">
          <div className="h-full w-full z-[1]">
            <div className="xl:mt-4 h-full">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-mono font-semibold leading-none text-transparent tracking-tighter text-[11rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Pipe
                </span>

                {/* Orbit ring 1 (base) */}
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
                      r="175"
                      fill="none"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                    />
                    <foreignObject x="-5%" y="-5%" width="100%" height="100%">
                      <div
                        className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] dark:bg-white/10"
                        style={{
                          ["--duration"]: 20,
                          ["--radius"]: "175px",
                          ["--delay"]: "-20",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 26 26"
                          className="w-[23px]"
                          aria-hidden="true"
                        >
                          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66z" />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Orbit ring 2 (reverse) */}
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
                        className="absolute left-1/2 top-1/2 flex h-[45px] w-[45px] transform-gpu animate-orbit items-center justify-center rounded-full border border-none bg-transparent shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] [animation-direction:reverse] dark:bg-white/10"
                        style={{
                          ["--duration"]: 17,
                          ["--radius"]: "200px",
                          ["--delay"]: "-20",
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
                            d="M11 2.61268L10.6567 2.49825C9.5248 2.12095 8.28356 2.26863 7.27179 2.90099L5.58454 3.95552C4.59882 4.5716 4 5.65202 4 6.81443C4 7.24607 3.79677 7.65253 3.45146 7.91152L3.4 7.95011C2.51868 8.6111 2 9.64846 2 10.7501V12.2501C2 13.3518 2.51868 14.3891 3.4 15.0501C3.77771 15.3334 4 15.778 4 16.2501V16.8374C4 18.2165 4.71048 19.4984 5.88 20.2294L7.27179 21.0992C8.28356 21.7316 9.5248 21.8793 10.6567 21.502L11 21.3875V18.2426C11 17.7122 10.7893 17.2035 10.4142 16.8284L9.51804 15.9323C9.35282 15.9764 9.17916 16 9 16C7.89543 16 7 15.1046 7 14C7 12.8954 7.89543 12 9 12C10.1046 12 11 12.8954 11 14C11 14.1792 10.9764 14.3528 10.9323 14.518L11.8284 15.4142C12.5786 16.1644 13 17.1818 13 18.2426V21.3875L13.3433 21.502C14.4752 21.8793 15.7164 21.7316 16.7282 21.0992L18.12 20.2294C19.2895 19.4984 20 18.2165 20 16.8374V16.2501C20 15.778 20.2223 15.3334 20.6 15.0501C21.4813 14.3891 22 13.3518 22 12.2501V10.7501C22 9.64846 21.4813 8.6111 20.6 7.95011L20.5485 7.91152C20.2032 7.65253 20 7.24607 20 6.81443C20 5.65202 19.4012 4.5716 18.4155 3.95552L16.7282 2.90099C15.7164 2.26863 14.4752 2.12095 13.3433 2.49825L13 2.61268V5.75736C13 6.28779 13.2107 6.7965 13.5858 7.17157L14.482 8.06774C14.6472 8.02356 14.8208 8 15 8C16.1046 8 17 8.89543 17 10C17 11.1046 16.1046 12 15 12C13.8954 12 13 11.1046 13 10C13 9.82084 13.0236 9.64718 13.0677 9.48196L12.1716 8.58579C11.4214 7.83564 11 6.81823 11 5.75736V2.61268Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
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
