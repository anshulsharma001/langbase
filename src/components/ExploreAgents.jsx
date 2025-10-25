import React from "react";
import { PushListAnim } from "./NotificationList";

const ExploreAgents = () => {
  return (
    <div className="group text-white h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1">
      <div className="w-full h-full z-1">
        <div className="absolute px-4 py-2 inset-0 [mask-image:linear-gradient(to_top,transparent_35%,#000_70%)]">
          <PushListAnim />
        </div>
      </div>
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Explore AI Agents</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90">
          Fork thousands of open-source AI agents built by developers community.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
        <a
          href="https://langbase.com/explore"
          className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto"
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
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]"></div>
    </div>
  );
};

export default ExploreAgents;
