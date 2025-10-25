import React from 'react'

const Keysets = () => {
  return (
    <section className="group text-white h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1">
      <div className="w-full h-full z-1">
        <div className="absolute mt-2 mx-2 top-0 inset-2 origin-top [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col absolute [--duration:20s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col [animation-play-state:paused] group-hover:[animation-play-state:running]">
              <div>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 26 26" className="size-4 align-middle block flex-shrink-0" aria-hidden="true">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                    </svg>
                    <span>OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Together" src="https://langbase.com/logos/together.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Together</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" className="size-4 align-middle block flex-shrink-0" viewBox="0 0 46 32" fill="currentColor">
                      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" fill="currentColor"></path>
                    </svg>
                    <span>Anthropic</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Google" src="https://langbase.com/logos/google.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Google</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Groq" src="https://langbase.com/logos/groq.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Groq</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Cohere" src="https://langbase.com/logos/cohere.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Cohere</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Fireworks AI" src="https://langbase.com/logos/fireworks.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Fireworks AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Perplexity" src="https://langbase.com/logos/perplexity.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Perplexity</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Mistral AI" src="https://langbase.com/logos/mistral.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Mistral AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="xAI" src="https://langbase.com/logos/xai.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>xAI</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Deepseek" src="https://langbase.com/logos/deepseek.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Deepseek</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="OpenRouter" src="https://langbase.com/logos/openrouter.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>OpenRouter</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Azure OpenAI" src="https://langbase.com/logos/azure.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Azure OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
              </div>
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col [animation-play-state:paused] group-hover:[animation-play-state:running]">
              <div>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 26 26" className="size-4 align-middle block flex-shrink-0" aria-hidden="true">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                    </svg>
                    <span>OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Together" src="https://langbase.com/logos/together.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Together</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" className="size-4 align-middle block flex-shrink-0" viewBox="0 0 46 32" fill="currentColor">
                      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" fill="currentColor"></path>
                    </svg>
                    <span>Anthropic</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Google" src="https://langbase.com/logos/google.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Google</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Groq" src="https://langbase.com/logos/groq.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Groq</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Cohere" src="https://langbase.com/logos/cohere.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Cohere</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Fireworks AI" src="https://langbase.com/logos/fireworks.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Fireworks AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Perplexity" src="https://langbase.com/logos/perplexity.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Perplexity</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Mistral AI" src="https://langbase.com/logos/mistral.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Mistral AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="xAI" src="https://langbase.com/logos/xai.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>xAI</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Deepseek" src="https://langbase.com/logos/deepseek.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Deepseek</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="OpenRouter" src="https://langbase.com/logos/openrouter.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>OpenRouter</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Azure OpenAI" src="https://langbase.com/logos/azure.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Azure OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
              </div>
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col [animation-play-state:paused] group-hover:[animation-play-state:running]">
              <div>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 26 26" className="size-4 align-middle block flex-shrink-0" aria-hidden="true">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                    </svg>
                    <span>OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Together" src="https://langbase.com/logos/together.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Together</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" className="size-4 align-middle block flex-shrink-0" viewBox="0 0 46 32" fill="currentColor">
                      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" fill="currentColor"></path>
                    </svg>
                    <span>Anthropic</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Google" src="https://langbase.com/logos/google.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Google</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Groq" src="https://langbase.com/logos/groq.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Groq</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Cohere" src="https://langbase.com/logos/cohere.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Cohere</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Fireworks AI" src="https://langbase.com/logos/fireworks.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Fireworks AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Perplexity" src="https://langbase.com/logos/perplexity.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Perplexity</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Mistral AI" src="https://langbase.com/logos/mistral.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Mistral AI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="xAI" src="https://langbase.com/logos/xai.svg" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>xAI</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Deepseek" src="https://langbase.com/logos/deepseek.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Deepseek</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="OpenRouter" src="https://langbase.com/logos/openrouter.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>OpenRouter</span>
                  </span>
                  <div className="text-muted-foreground/80 bg-muted ring-border transition-colors flex-none rounded-[.5rem] px-2 py-1 font-medium ring-1 ring-inset text-xs uppercase">Add key</div>
                </button>
                <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group border border-input text-foreground hover:bg-foreground h-14 hover:text-background group w-full mt-2 px-4 py-6 shadow-inner bg-muted rounded-[1rem]">
                  <span className="w-full flex space-x-2 items-center text-left text-sm select-none">
                    <img width="16" height="16" alt="Azure OpenAI" src="https://langbase.com/logos/azure.png" className="size-4 align-middle block flex-shrink-0" aria-hidden="true" />
                    <span>Azure OpenAI</span>
                  </span>
                  <div className="text-green-600 bg-green-600/10 ring-green-600/30 dark:text-green-400 dark:bg-green-400/10 dark:ring-green-400/30 flex-none rounded-[.5rem] px-2 py-1 text-[.75rem] font-medium ring-1 ring-inset group-hover:bg-green-900 transition-colors">LIVE</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Keysets</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90">Securely store any LLM keys. RBAC controlled keysets Org, User, or Pipe level access.</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
        <a href="https://langbase.com/docs/features/keysets" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto">
          Learn more
          <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]"></div>
    </section>
  )
}

export default Keysets