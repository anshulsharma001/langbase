import React, { useState, useEffect } from "react";

export default function UnifiedAPI() {
  const [currentText, setCurrentText] = useState("API");
  const [isTyping, setIsTyping] = useState(false);
  
  const textOptions = ["API", "OpenAI", "Anthropic", "Google", "Mistral", "Llama", "Together", "Fireworks"];
  
  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeText = () => {
      const currentOption = textOptions[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentOption.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentOption.substring(0, charIndex + 1));
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentOption.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000); // Wait 2 seconds before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textOptions.length;
      }
      
      const speed = isDeleting ? 50 : 100;
      setTimeout(typeText, speed);
    };
    
    const timer = setTimeout(typeText, 1000); // Start after 1 second
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-3">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="group relative row-span-1 col-span-4 lg:col-span-3 flex  cursor-pointer flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu">
          {/* Top content strip */}
          <div className="w-full h-[230px] z-[1]">
            <div className=" z-50 flex w-full items-center justify-center overflow-hidden py-4 px-2 sm:p-10 sm:px-24 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_1%,#000_80%)] sm:[mask-image:none]">
              <div className="flex h-full w-full flex-row justify-between gap-10">
                {/* Left App/API toggle pill */}
                <div className="flex flex-col justify-center">
                  <div className="z-10 flex h-8 w-20 sm:w-24 items-center justify-center rounded-2xl bg-black p-1 sm:p-1.5 font-mono text-xs font-bold tracking-wide text-neutral-100 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none">
                    <div className="relative z-10 inline-block px-1.5 text-left">
                      <span className="inline-block text-xs">{currentText}</span> 
                    </div>
                  </div>
                </div>
                {/* Center logo */}
                <div className="flex flex-col justify-center">
                  <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    {/* Circle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="732" height="732" fill="none" viewBox="0 0 732 732" aria-hidden className="w-6 h-6">
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
                <div className="flex flex-col justify-center gap-1.5 text-muted-foreground">
                  <div className="z-10 flex h-5 w-5 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 26 26" aria-hidden="true" className="w-3 h-3">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></svg>
                  </div>
                  <div className="z-10 flex h-5 w-5 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <img width={12} height={12} className="block size-3 flex-shrink-0 align-middle" alt="Google" src="https://langbase.com/logos/google.svg" aria-hidden="true" />
                  </div>
                  <div className="z-10 flex h-5 w-5 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <img width={12} height={12} className="block size-3 flex-shrink-0 align-middle" alt="Cohere" src="   	https://langbase.com/logos/cohere.svg" aria-hidden="true" />
                  </div>
                  <div className="z-10 flex h-5 w-5 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32" fill="currentColor" aria-hidden className="w-3 h-3">
                      <path d="M32.73 0h-6.945L38.45 32h6.945L32.73 0ZM12.665 0 0 32h7.082l2.59-6.72h13.25l2.59 6.72h7.082L19.929 0h-7.264Zm-.702 19.337 4.334-11.246 4.334 11.246h-8.668Z" />
                    </svg>
                  </div>
                  <div className="z-10 flex h-5 w-5 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black p-2 shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                   	

 


 
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative connecting paths (static) */}
            {/* These are placeholders to match the visual; real positions would be dynamic in production */}
        
            <svg width="100%" height="100%" viewBox="0 0 908 353" fill="none" className="pointer-events-none absolute w-full h-full left-0 max-sm:-top-[110px] -z-1 -top-1 transform-gpu" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
<path d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101" stroke="url(#paint0_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 288.166C689.563 288.166 591.673 250.811 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 288.166C689.563 288.166 591.673 250.811 493.784 176.101" stroke="url(#paint1_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 232.133C689.563 232.133 591.673 213.456 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 232.133C689.563 232.133 591.673 213.456 493.784 176.101" stroke="url(#paint2_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 176.101C689.563 176.101 591.673 176.101 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 176.101C689.563 176.101 591.673 176.101 493.784 176.101" stroke="url(#paint3_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 120.069C689.563 120.069 591.673 138.746 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 120.069C689.563 120.069 591.673 138.746 493.784 176.101" stroke="url(#paint4_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 64.0368C689.563 64.0368 591.673 101.392 493.784 176.101" stroke="#808080" stroke-opacity="0.2" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>
<path d="M787.453 64.0368C689.563 64.0368 591.673 101.392 493.784 176.101" stroke="url(#paint5_linear_1_26)" stroke-width="0.5" stroke-linecap="round" className="sm:stroke-[0.7]"/>

{/* 5 synchronized pulse dots starting from left */}
<circle r="2" fill="white" opacity="0.8" className="pulse-dot sm:r-[3]">
  <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
    <mpath href="#path1"/>
  </animateMotion>
</circle>
<circle r="2" fill="white" opacity="0.8" className="pulse-dot sm:r-[3]">
  <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
    <mpath href="#path2"/>
  </animateMotion>
</circle>
<circle r="2" fill="white" opacity="0.8" className="pulse-dot sm:r-[3]">
  <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
    <mpath href="#path3"/>
  </animateMotion>
</circle>
<circle r="2" fill="white" opacity="0.8" className="pulse-dot sm:r-[3]">
  <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
    <mpath href="#path4"/>
  </animateMotion>
</circle>
<circle r="2" fill="white" opacity="0.8" className="pulse-dot sm:r-[3]">
  <animateMotion dur="8s" repeatCount="indefinite" begin="0s">
    <mpath href="#path5"/>
  </animateMotion>
</circle>

{/* Paths: Left -> Center -> Icon -> Left */}
<path id="path1" d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101 M493.784 176.101C689.563 288.166 591.673 250.811 787.453 288.166 M787.453 288.166C591.673 250.811 689.563 288.166 493.784 176.101 M493.784 176.101C382.553 176.101 271.323 176.101 160.092 176.101" fill="none"/>
<path id="path2" d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101 M493.784 176.101C689.563 232.133 591.673 213.456 787.453 232.133 M787.453 232.133C591.673 213.456 689.563 232.133 493.784 176.101 M493.784 176.101C382.553 176.101 271.323 176.101 160.092 176.101" fill="none"/>
<path id="path3" d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101 M493.784 176.101C689.563 176.101 591.673 176.101 787.453 176.101 M787.453 176.101C591.673 176.101 689.563 176.101 493.784 176.101 M493.784 176.101C382.553 176.101 271.323 176.101 160.092 176.101" fill="none"/>
<path id="path4" d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101 M493.784 176.101C689.563 120.069 591.673 138.746 787.453 120.069 M787.453 120.069C591.673 138.746 689.563 120.069 493.784 176.101 M493.784 176.101C382.553 176.101 271.323 176.101 160.092 176.101" fill="none"/>
<path id="path5" d="M160.092 176.101C271.323 176.101 382.553 176.101 493.784 176.101 M493.784 176.101C689.563 64.0368 591.673 101.392 787.453 64.0368 M787.453 64.0368C591.673 101.392 689.563 64.0368 493.784 176.101 M493.784 176.101C382.553 176.101 271.323 176.101 160.092 176.101" fill="none"/>
<defs>
<linearGradient id="paint0_linear_1_26" x1="nan" y1="nan" x2="nan" y2="nan" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1_26" x1="-9.95872" y1="2.47955e-05" x2="0.0412851" y2="2.47955e-05" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_1_26" x1="-8.86317" y1="-2.17983e-06" x2="1.13683" y2="-2.17983e-06" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_1_26" x1="nan" y1="nan" x2="nan" y2="nan" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_1_26" x1="14.3855" y1="2.04359e-06" x2="24.3855" y2="2.04359e-06" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_1_26" x1="-8.77196" y1="2.04359e-06" x2="1.22804" y2="2.04359e-06" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.325" stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

          </div>

          {/* Title/description */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold text-[#FAFAFA]">
              One API for all LLMs – Unified Dev Experience
            </h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-sm text-muted-foreground/90 line-clamp-2 sm:line-clamp-none">
              Switch between 250+ LLMs with one standard API for OpenAI, Anthropic, Google, Mistral, Llama, Together, Fireworks.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/docs/supported-models-and-providers"
              className="pointer-events-auto inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium transition-colors group-hover:bg-accent grouphover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
