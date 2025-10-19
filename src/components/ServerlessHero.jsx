import React from "react";

export default function ServerlessHero() {
  return (
    <section className="w-full">
      {/* Top logo + masked background */}
      <div style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
        <div style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
          <div className="flex flex-col items-center justify-center h-full w-full px-1" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="133" height="30" fill="none" viewBox="0 0 133 30" className="z-20 flex max-w-xl relative w-full h-[4rem] md:h-[7rem] -mb-32">
              <path fill="#000" stroke="#fff" d="M12 2.5h2c2.843 0 4.924.001 6.517.215 1.578.212 2.602.626 3.372 1.396.77.77 1.184 1.794 1.396 3.372.214 1.593.215 3.674.215 6.517v2c0 2.843-.001 4.924-.215 6.517-.212 1.578-.626 2.602-1.396 3.372-.77.77-1.794 1.184-3.372 1.396-1.593.214-3.674.215-6.517.215h-2c-2.843 0-4.924-.001-6.517-.215-1.578-.212-2.602-.626-3.372-1.396-.77-.77-1.184-1.794-1.396-3.372C.501 20.924.5 18.843.5 16v-2c0-2.843.001-4.924.215-6.517.212-1.578.626-2.602 1.396-3.372.77-.77 1.794-1.184 3.372-1.396C7.076 2.501 9.157 2.5 12 2.5z"></path>
              <g filter="url(#filter0_d_4174_4)"><path fill="#fff" d="M17.889 7a3.114 3.114 0 00-3.111 3.111v1.333h-3.556v-1.333A3.115 3.115 0 008.112 7 3.115 3.115 0 005 10.111a3.114 3.114 0 003.111 3.111h1.333v3.556H8.111A3.114 3.114 0 005 19.888 3.115 3.115 0 008.111 23a3.115 3.115 0 003.111-3.111v-1.333h3.556v1.333A3.115 3.115 0 0017.888 23 3.115 3.115 0 0021 19.889a3.115 3.115 0 00-3.111-3.111h-1.333v-3.556h1.333A3.115 3.115 0 0021 10.112 3.115 3.115 0 0017.889 7zm-1.333 4.444v-1.333c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333-.595 1.333-1.333 1.333h-1.333zm-8.445 0a1.332 1.332 0 01-1.333-1.333c0-.738.595-1.333 1.333-1.333s1.333.595 1.333 1.333v1.333H8.111zm3.111 5.334v-3.556h3.556v3.556h-3.556zm6.667 4.444a1.331 1.331 0 01-1.333-1.333v-1.333h1.333c.738 0 1.333.595 1.333 1.333s-.595 1.333-1.333 1.333zm-9.778 0a1.332 1.332 0 01-1.333-1.333c0-.738.595-1.333 1.333-1.333h1.333v1.333c0 .738-.595 1.333-1.333 1.333z"></path></g>
              <path fill="#fff" d="M32 5.96h3.648v13.968h7.848V23H32V5.96zm15.885 17.328c-1.36 0-2.456-.312-3.288-.936-.816-.624-1.224-1.48-1.224-2.568 0-1.104.344-1.968 1.032-2.592.688-.64 1.752-1.104 3.192-1.392l4.152-.816c0-1.68-.736-2.52-2.208-2.52-1.328 0-2.112.616-2.352 1.848l-3.6-.168c.24-1.408.872-2.472 1.896-3.192 1.024-.736 2.376-1.104 4.056-1.104 1.92 0 3.368.456 4.344 1.368.976.912 1.464 2.248 1.464 4.008v4.392c0 .352.056.592.168.72.112.128.296.192.552.192h.36V23c-.32.096-.752.144-1.296.144-1.6 0-2.536-.696-2.808-2.088-.336.688-.896 1.232-1.68 1.632-.768.4-1.688.6-2.76.6zm.864-2.472c.912 0 1.64-.264 2.184-.792.544-.528.816-1.248.816-2.16v-.624l-2.928.624c-1.168.24-1.752.768-1.752 1.584 0 .432.144.768.432 1.008.288.24.704.36 1.248.36zm7.953-10.68h3.24l.072 2.112c.672-1.6 1.944-2.4 3.816-2.4 1.376 0 2.448.44 3.216 1.32.768.864 1.152 2.048 1.152 3.552V23h-3.6v-7.08c0-1.088-.152-1.896-.456-2.424-.288-.528-.792-.792-1.512-.792-.752 0-1.328.28-1.728.84-.4.56-.6 1.352-.6 2.376V23h-3.6V10.136zm18.255 16.752c-1.76 0-3.135-.32-4.127-.96-.992-.64-1.64-1.52-1.945-2.64l3.697-.264c.144.448.392.784.744 1.008.368.224.912.336 1.632.336 1.776 0 2.663-.856 2.663-2.568v-1.368c-.32.608-.816 1.088-1.487 1.44-.656.352-1.4.528-2.233.528-1.055 0-1.992-.256-2.807-.768-.816-.512-1.456-1.24-1.92-2.184-.449-.96-.673-2.064-.673-3.312 0-1.216.224-2.296.672-3.24.465-.96 1.096-1.704 1.897-2.232.816-.544 1.744-.816 2.784-.816.912 0 1.695.208 2.352.624.656.4 1.16.952 1.511 1.656v-1.992h3.529v11.592c0 1.68-.569 2.96-1.704 3.84-1.136.88-2.665 1.32-4.585 1.32zm-.023-7.152c.832 0 1.487-.328 1.968-.984.495-.656.743-1.56.743-2.712 0-1.088-.248-1.952-.743-2.592-.496-.64-1.153-.96-1.969-.96-.848 0-1.52.328-2.016.984-.48.656-.72 1.536-.72 2.64s.248 1.984.745 2.64c.496.656 1.16.984 1.992.984zm14.734 3.552c-.896 0-1.68-.184-2.352-.552a3.982 3.982 0 01-1.536-1.632L85.708 23h-3.432V5.96h3.6v6a4.033 4.033 0 011.512-1.512c.672-.4 1.432-.6 2.28-.6 1.072 0 2.008.28 2.808.84.816.544 1.44 1.328 1.872 2.352.448 1.008.672 2.184.672 3.528 0 1.344-.224 2.528-.672 3.552-.432 1.008-1.056 1.792-1.872 2.352-.8.544-1.736.816-2.808.816zm-1.008-2.76c.816 0 1.464-.352 1.944-1.056.48-.704.72-1.672.72-2.904s-.24-2.2-.72-2.904c-.464-.704-1.104-1.056-1.92-1.056-.88 0-1.568.352-2.064 1.056-.496.688-.744 1.656-.744 2.904 0 1.232.24 2.2.72 2.904.496.704 1.184 1.056 2.064 1.056zm10.678 2.76c-1.36 0-2.456-.312-3.288-.936-.816-.624-1.224-1.48-1.224-2.568 0-1.104.344-1.968 1.032-2.592.688-.64 1.751-1.104 3.191-1.392l4.153-.816c0-1.68-.736-2.52-2.208-2.52-1.329 0-2.112.616-2.353 1.848l-3.6-.168c.24-1.408.873-2.472 1.897-3.192 1.023-.736 2.376-1.104 4.056-1.104 1.92 0 3.368.456 4.344 1.368.976.912 1.464 2.248 1.464 4.008v4.392c0 .352.056.592.168.72.112.128.296.192.552.192h.36V23c-.32.096-.752.144-1.296.144-1.6 0-2.536-.696-2.808-2.088-.336.688-.896 1.232-1.68 1.632-.768.4-1.688.6-2.76.6zm.864-2.472c.912 0 1.64-.264 2.184-.792.544-.528.816-1.248.816-2.16v-.624l-2.928.624c-1.168.24-1.752.768-1.752 1.584 0 .432.143.768.431 1.008.288.24.704.36 1.249.36zm13.356 2.472c-1.92 0-3.408-.392-4.464-1.176-1.04-.8-1.608-1.856-1.704-3.168l3.648-.12c.224 1.28 1.072 1.92 2.544 1.92.656 0 1.16-.104 1.512-.312.352-.224.528-.544.528-.96 0-.288-.072-.52-.216-.696-.128-.176-.384-.328-.768-.456-.368-.144-.912-.272-1.632-.384-1.36-.224-2.424-.496-3.192-.816-.768-.336-1.312-.752-1.632-1.248-.32-.496-.48-1.128-.48-1.896 0-1.264.488-2.264 1.464-3 .976-.752 2.392-1.128 4.248-1.128 1.744 0 3.104.4 4.08 1.2.992.8 1.568 1.872 1.728 3.216l-3.6.144c-.08-.64-.32-1.136-.72-1.488-.384-.352-.896-.528-1.536-.528-.624 0-1.112.128-1.464.384-.336.256-.504.608-.504 1.056 0 .464.176.816.528 1.056.352.224.976.4 1.872.528 1.376.192 2.464.456 3.264.792.8.336 1.376.76 1.728 1.272.352.512.528 1.152.528 1.92 0 1.232-.512 2.192-1.536 2.88-1.024.672-2.432 1.008-4.224 1.008zm12.009 0c-1.296 0-2.432-.272-3.408-.816a5.867 5.867 0 01-2.28-2.352c-.528-1.024-.792-2.208-.792-3.552 0-1.344.264-2.52.792-3.528.528-1.024 1.28-1.808 2.256-2.352.976-.56 2.112-.84 3.408-.84 1.264 0 2.368.28 3.312.84.96.56 1.696 1.368 2.208 2.424.512 1.04.768 2.272.768 3.696v.72h-9.024c.032.992.296 1.744.792 2.256.496.512 1.176.768 2.04.768 1.248 0 2.048-.52 2.4-1.56l3.624.216c-.352 1.28-1.072 2.28-2.16 3-1.072.72-2.384 1.08-3.936 1.08z"></path>
              <defs>
                <filter id="filter0_d_4174_4" width="16.451" height="16.451" x="4.775" y="7" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="0.225" />
                  <feGaussianBlur stdDeviation="0.113" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4174_4" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_4174_4" result="shape" />
                </filter>
              </defs>
            </svg>

            {/* Masked area with canvas */}
            <div className="w-full flex flex-col items-center justify-center overflow-hidden z-10 bg-transparent h-[27rem] sm:h-[40rem] -mt-[80px] sm:-mt-[300px]">
              <div className="w-full h-40 relative">
                <div className="opacity-0 w-full h-full" style={{ opacity: 1, willChange: "auto" }}>
                  <div id="footer" className="h-full w-full">
                    <canvas data-generated="true" style={{ width: "100%", height: "100%", pointerEvents: "none" }} aria-hidden="true" width={1326} height={320} />
                  </div>
                </div>
                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Headline + CTAs */}
      <div className="w-full px-4 sm:px-0 mx-auto sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] z-10 space-y-10 -mt-[11rem]">
        <div className="flex flex-col items-center gap-y-2 sm:gap-y-8 mb-1 sm:mb-20">
          <div className="mt-0" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
            <span className="flex flex-col text-[1.4rem] text-white sm:text-[1.7rem] md:text-[2.5rem] lg:text-[3rem] font-medium tracking-tight leading-tight text-center mx-auto max-w-2xl ">
              <span className="text-muted-foreground">The only and most powerful</span>
              Serverless Developer Platform
              <span className="text-muted-foreground">for building AI products.</span>
            </span>
          </div>
        </div>
        <div style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
          <div className="flex flex-col-reverse w-full sm:flex-col md:flex-row justify-center items-center gap-y-4 sm:gap-y-2 md:gap-y-0 md:gap-x-2">
            {/* Start free */}
            <div className="w-full sm:w-auto" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
              <a className="font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group bg-white text-black shadow hover:bg-primary/90 px-16 py-5 rounded-full text-xl flex gap-x-2 items-center justify-center w-full sm:w-[270px] h-[56px] sm:h-[64px] select-none" href="/signup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 137 137" className="size-6">
                  <path fill="#000" d="M0 66.796C0 35.308 0 19.564 9.782 9.782 19.564 0 35.308 0 66.796 0h2.536c31.488 0 47.232 0 57.014 9.782 9.782 9.782 9.782 25.526 9.782 57.014v2.536c0 31.488 0 47.232-9.782 57.014-9.782 9.782-25.526 9.782-57.014 9.782h-2.536c-31.488 0-47.232 0-57.014-9.782C0 116.564 0 100.82 0 69.332v-2.536z"></path>
                  <path fill="#000" fillRule="evenodd" d="M69.332 5.566h-2.536c-15.901 0-27.267.012-35.905 1.173-8.477 1.14-13.489 3.295-17.173 6.979-3.684 3.684-5.839 8.695-6.979 17.173-1.16 8.638-1.173 20.004-1.173 35.905v2.536c0 15.901.012 27.267 1.173 35.905 1.14 8.477 3.295 13.488 6.979 17.173 3.684 3.684 8.695 5.838 17.173 6.978 8.638 1.161 20.004 1.173 35.905 1.173h2.536c15.901 0 27.267-.012 35.905-1.173 8.477-1.14 13.488-3.294 17.173-6.978 3.684-3.685 5.838-8.696 6.978-17.173 1.161-8.638 1.173-20.004 1.173-35.905v-2.536c0-15.901-.012-27.267-1.173-35.905-1.14-8.477-3.294-13.489-6.978-17.173-3.685-3.684-8.696-5.839-17.173-6.979-8.638-1.16-20.004-1.173-35.905-1.173zM9.782 9.782C0 19.564 0 35.308 0 66.796v2.536c0 31.488 0 47.232 9.782 57.014 9.782 9.782 25.526 9.782 57.014 9.782h2.536c31.488 0 47.232 0 57.014-9.782 9.782-9.782 9.782-25.526 9.782-57.014v-2.536c0-31.488 0-47.232-9.782-57.014C116.564 0 100.82 0 69.332 0h-2.536C35.308 0 19.564 0 9.782 9.782z" clipRule="evenodd"></path>
                  <path fill="#fff" d="M93.66 26.178c-8.982 0-16.288 7.307-16.288 16.29v6.98H58.756v-6.98c0-8.983-7.307-16.29-16.289-16.29-8.982 0-16.289 7.307-16.289 16.29 0 8.981 7.307 16.288 16.29 16.288h6.98v18.616h-6.98c-8.983 0-16.29 7.306-16.29 16.288 0 8.983 7.307 16.289 16.29 16.289 8.981 0 16.288-7.306 16.288-16.288V86.68h18.616v6.98c0 8.983 7.306 16.289 16.288 16.289 8.983 0 16.289-7.306 16.289-16.288 0-8.983-7.306-16.29-16.289-16.29h-6.98V58.757h6.98c8.983 0 16.289-7.307 16.289-16.289 0-8.982-7.306-16.289-16.289-16.289zm-6.98 23.27v-6.98a6.972 6.972 0 016.98-6.982 6.971 6.971 0 016.981 6.981 6.971 6.971 0 01-6.98 6.981H86.68zm-44.213 0a6.972 6.972 0 01-6.98-6.98 6.972 6.972 0 016.98-6.982 6.972 6.972 0 016.981 6.981v6.981h-6.98zm16.289 27.924V58.756h18.616v18.616H58.756zM93.66 100.64a6.971 6.971 0 01-6.98-6.98v-6.98h6.98a6.971 6.971 0 016.981 6.98 6.971 6.971 0 01-6.98 6.981zm-51.193 0a6.971 6.971 0 01-6.98-6.98 6.972 6.972 0 016.98-6.981h6.981v6.98a6.971 6.971 0 01-6.98 6.981z"></path>
                </svg>
                <span className="text-lg flex gap-2 justify-start items-center">
                  <span>Start free</span>
                </span>
              </a>
            </div>

            {/* Book a demo */}
            <div className="w-full sm:w-auto" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}>
              <a className="rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group hover:text-accent-foreground px-4 py-2 gap-x-1 hidden sm:flex items-center justify-center w-full h-[56px] sm:h-[64px] text-lg text-muted-foreground hover:bg-transparent select-none" target="_blank" href="/sales">
                <span>Book a demo</span>
              </a>
              <a className="font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group border border-input bg-transparent shadow-sm hover:bg-foreground hover:text-background flex sm:hidden gap-x-2 items-center justify-center rounded-full text-lg px-8 py-6 w-full h-[56px] sm:h-[64px] select-none" target="_blank" href="/sales">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
