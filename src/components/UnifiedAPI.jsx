import React from "react";

export default function UnifiedAPI() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative row-span-1 col-span-4 lg:col-span-3 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu">
          {/* Top content strip */}
          <div className="w-full h-full z-[1]">
            <div className=" z-50 flex w-full items-center justify-center overflow-hidden py-4 px-2 sm:p-10 sm:px-24 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_1%,#000_80%)] sm:[mask-image:none] group-hover:scale-105">
              <div className="flex h-full w-full flex-row justify-between gap-10">
                {/* Left App/API toggle pill */}
                <div className="flex flex-col justify-center">
                  <div className="z-10 flex h-12 w-24 sm:w-32 items-center justify-center rounded-3xl bg-black p-1 sm:p-2 font-mono text-xs font-bold tracking-wide text-neutral-100 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] sm:text-sm select-none">
                    <div className="relative z-10 inline-block px-2 text-left">
                      <span className="inline-block">API</span>
                    </div>
                  </div>
                </div>
                {/* Center logo */}
                <div className="flex flex-col justify-center">
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-black p-5 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    {/* Circle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="732" height="732" fill="none" viewBox="0 0 732 732" aria-hidden>
                      <g filter="url(#filter0_d_4111_14)">
                        <path fill="#fff" d="M587.222 0c-77.629 0-140.778 63.149-140.778 140.778v60.333H285.556v-60.333C285.556 63.148 222.407 0 144.778 0 67.148 0 4 63.149 4 140.778c0 77.629 63.149 140.778 140.778 140.778h60.333v160.888h-60.333C67.148 442.444 4 505.593 4 583.222 4 660.851 67.149 724 144.778 724c77.629 0 140.778-63.149 140.778-140.778v-60.333h160.888v60.333c0 77.629 63.149 140.778 140.778 140.778C664.851 724 728 660.851 728 583.222c0-77.629-63.149-140.778-140.778-140.778h-60.333V281.556h60.333c77.629 0 140.778-63.149 140.778-140.778C728 63.148 664.851 0 587.222 0zm-60.333 201.111v-60.333c0-33.385 26.949-60.334 60.333-60.334 33.385 0 60.334 26.949 60.334 60.334 0 33.384-26.949 60.333-60.334 60.333h-60.333zm-382.111 0c-33.385 0-60.334-26.949-60.334-60.333 0-33.385 26.949-60.334 60.334-60.334 33.384 0 60.333 26.949 60.333 60.334v60.333h-60.333zm140.778 241.333V281.556h160.888v160.888H285.556zm301.666 201.112c-33.384 0-60.333-26.949-60.333-60.334v-60.333h60.333c33.385 0 60.334 26.949 60.334 60.333 0 33.385-26.949 60.334-60.334 60.334zm-442.444 0c-33.385 0-60.334-26.949-60.334-60.334 0-33.384 26.949-60.333 60.334-60.333h60.333v60.333c0 33.385-26.949 60.334-60.333 60.334z" />
                      </g>
                      <defs>
                        <filter id="filter0_d_4111_14" width="731.324" height="731.324" x="0.338" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="3.662" />
                          <feGaussianBlur stdDeviation="1.831" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4111_14" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_4111_14" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                {/* Right provider dots */}
                <div className="flex flex-col justify-center gap-2 text-muted-foreground">
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 26 26" aria-hidden="true">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></svg>
                  </div>
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <img width={16} height={16} className="block size-4 flex-shrink-0 align-middle" alt="Google" src="https://langbase.com/logos/google.svg" aria-hidden="true" />
                  </div>
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <img width={16} height={16} className="block size-4 flex-shrink-0 align-middle" alt="Cohere" src="   	https://langbase.com/logos/cohere.svg" aria-hidden="true" />
                  </div>
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="currentColor" aria-hidden>
                      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" />
                    </svg>
                  </div>
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                   	

    <svg xmlns="http://www.w3.org/2000/svg" fill="#0467DF" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"></path></svg>



 
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative connecting paths (static) */}
            {/* These are placeholders to match the visual; real positions would be dynamic in production */}
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2" viewBox="0 0 912 354">
              <path d="M 496,177 Q 329,177 161,177" stroke="gray" strokeWidth="0.7" strokeOpacity="0.2" strokeLinecap="round" />
              <path d="M 496,177 Q 329,177 161,177" strokeWidth="0.7" stroke="url(#grad1)" strokeOpacity="1" strokeLinecap="round" />
              <defs>
                <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="110%" x2="100%" y1="0%" y2="0%">
                  <stop stopColor="#000" stopOpacity="0" />
                  <stop stopColor="#000" />
                  <stop offset="32.5%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Title/description */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">
              One API for all LLMs – Unified Dev Experience
            </h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-muted-foreground/90 line-clamp-2 sm:line-clamp-none">
              Switch between 250+ LLMs with one standard API for OpenAI, Anthropic, Google, Mistral, Llama, Together, Fireworks.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/docs/supported-models-and-providers"
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
