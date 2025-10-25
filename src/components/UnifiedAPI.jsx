import React, { useState, useEffect } from "react";
import { BeamAnim } from "./NerveAnim";

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
    <section className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-end overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-3">
      <div className="mx-auto w-full max-w-7xl ">
        <BeamAnim
          icons={CustomIcons}
          beamColor="white"
          beamSpeed={2}
          className="absolute top-0 h-full pb-10 ransition-all duration-500 group-hover:scale-110  "
        />
        <div className="group relative row-span-1 col-span-4 lg:col-span-3 flex  cursor-pointer flex-col justify-between  !bg-transparent  transform-gpu">
          {/* Title/description */}
          <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold text-[#FAFAFA]">
              One API for all LLMs - Unified Dev Experience
            </h3>
            <p className="mt-1 max-w-lg pr-[1rem] text-sm text-muted-foreground/90 line-clamp-2 sm:line-clamp-none">
              Switch between 250+ LLMs with one standard API for OpenAI, Anthropic, Google, Mistral, Llama, Together,
              Fireworks.
            </p>
          </div>

          {/* Hover CTA */}
          <div className="pointer-events-none absolute bottom-0 z-[999] flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="https://langbase.com/docs/supported-models-and-providers"
              className="pointer-events-auto text-white inline-flex h-8 cursor-pointer select-none items-center justify-center gap-2 rounded-lg px-3 text-xs font-medium transition-colors  grouphover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn more
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z"
                  fill="white"
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

const CustomIcons = {
 
  image2: () => (
   <svg className="" xmlns="http://www.w3.org/2000/svg" width="700" height="732" fill="none" viewBox="0 0 732 732"><g filter="url(#filter0_d_4111_14)"><path fill="#fff" d="M587.222 0c-77.629 0-140.778 63.149-140.778 140.778v60.333H285.556v-60.333C285.556 63.148 222.407 0 144.778 0 67.148 0 4 63.149 4 140.778c0 77.629 63.149 140.778 140.778 140.778h60.333v160.888h-60.333C67.148 442.444 4 505.593 4 583.222 4 660.851 67.149 724 144.778 724c77.629 0 140.778-63.149 140.778-140.778v-60.333h160.888v60.333c0 77.629 63.149 140.778 140.778 140.778C664.851 724 728 660.851 728 583.222c0-77.629-63.149-140.778-140.778-140.778h-60.333V281.556h60.333c77.629 0 140.778-63.149 140.778-140.778C728 63.148 664.851 0 587.222 0zm-60.333 201.111v-60.333c0-33.385 26.949-60.334 60.333-60.334 33.385 0 60.334 26.949 60.334 60.334 0 33.384-26.949 60.333-60.334 60.333h-60.333zm-382.111 0c-33.385 0-60.334-26.949-60.334-60.333 0-33.385 26.949-60.334 60.334-60.334 33.384 0 60.333 26.949 60.333 60.334v60.333h-60.333zm140.778 241.333V281.556h160.888v160.888H285.556zm301.666 201.112c-33.384 0-60.333-26.949-60.333-60.334v-60.333h60.333c33.385 0 60.334 26.949 60.334 60.333 0 33.385-26.949 60.334-60.334 60.334zm-442.444 0c-33.385 0-60.334-26.949-60.334-60.334 0-33.384 26.949-60.333 60.334-60.333h60.333v60.333c0 33.385-26.949 60.334-60.333 60.334z"></path></g><defs><filter id="filter0_d_4111_14" width="731.324" height="731.324" x="0.338" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="3.662"></feOffset><feGaussianBlur stdDeviation="1.831"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4111_14"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_4111_14" result="shape"></feBlend></filter></defs></svg>
  ),
  image3: () => <img src="https://i.ibb.co/GfYmb3Hb/chatgpt.png" className="invert" alt="React Logo" width={24} height={24} />,
  image4: () => (
    <img
      src="https://langbase.com/logos/cohere.svg"
      alt="Twitter"
      width={24}
      height={24}
    />
  ),
  image5: () => (
    <img
      src="https://w7.pngwing.com/pngs/36/959/png-transparent-meta-logo-facebook-social-media-chat-message-communication-icon-thumbnail.png"
    className="invert"
      alt="Netflix"
      width="24"
      height="24"
    />
  ),
  image6: () => (
    <img
      src="https://langbase.com/logos/google.svg"
      className="invert"
      alt="Robinhood"
      width={34}
      height={34}
    />
  ),
  image7: () => (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/14/Anthropic.png"
      alt="Facebook"
      
      width={24}
      height={24}
    />
  ),
};
