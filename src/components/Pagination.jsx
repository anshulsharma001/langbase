import React, { useEffect, useState } from "react";
import { workTabs, Tabs } from "../components/Helper";
import { Arrowup } from "../components/Icons";

const Pagination = () => {
  const [activeTab, setActiveTab] = useState("Analytics");
  const [activeTabindex, setActiveTabindex] = useState(0);

  return (
    <section className={`bg-[hsl(0deg,0%,0%)] w-full`}>
      <div
        className={`flex flex-col items-center justify-center max-w-[672px] mx-auto py-32 px-5 sm:px-0`}
      >
        <p
          className={`text-sm sm:text-base font-inter font-semibold leading-7 text-indigo-400`}
        >
          Making AI accessible to everyone
        </p>
        <h2 className="mt-2 text-3xl sm:text-6xl font-inter font-bold tracking-tight text-foreground text-white">
          ⌘ Langbase Studio
        </h2>
        <p className="mt-6 text-base md:text-lg font-inter text-center md:leading-8 text-gray-500">
          Explore our serverless AI cloud and APIs in Studio without writing a
          single line of code. Run agents, modify prompts, real-time collab,
          complete observability. From developers to CxOs, everyone's in the
          loop. Developers x Stakeholders.
        </p>
      </div>

      <div
        className={`max-w-304 mx-auto py-7 px-5 xl:px-0 overflow-x-scroll whitespace-nowrap tab-button`}
      >
        {workTabs.map((obj, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setActiveTabindex(i);
                setActiveTab(obj.name);
                setclikedtab(true);
              }}
              className={`${
                activeTab == obj.name ? "bg-white/20" : "bg-transparent"
              } px-4 py-2 text-base hover:opacity-90 cursor-pointer font-inter hover:bg-white/20 rounded-full text-white transition-all duration-300 ease-in-out`}
            >
              {obj.name}
            </button>
          );
        })}
      </div>

      {/* Tabs */}

      <div className={`relative h-[800px] mx-7 md:mx-15 lg:mx-20 tabsbox`}>
        {Tabs.map((obj, index) => {
          return (
            <div
              key={index}
              className={`border-1 border-white/30 rounded-2xl p-5 md:p-8 lg:p-10 w-full max-w-[1216px] overflow-hidden ${
                index == activeTabindex
                  ? "z-3 scale-105 top-30 md:top-20 animate-scale"
                  : "z-2 top-15 md:top-10"
              }   absolute left-[50%] -translate-x-[50%] bg-[hsl(0deg,0%,0%)] transition-all duration-500 linear `}
            >
              <Arrowup className={`right-5 top-5 absolute`} />
              <div>
                <h1
                  className={`font-inter text-white text-3xl lg:text-4xl font-bold`}
                >
                  {obj.Tabname}
                </h1>
                <p
                  className={`max-w-[850px] w-full text-white font-inter mt-2 group text-sm sm:text-base md:text-lg font-normal`}
                >
                  {obj.Tabpara1}
                  <span className="group-hover:hidden text-xl">...</span>
                  <span className="group-hover:block hidden">
                    {obj.Tabpara2}
                  </span>
                </p>
              </div>
              <img
                src={obj.Tabimg}
                className={`!object-cover object-top w-[1136px] rounded-xl mt-8 h-[400px] md:h-[581px] -mb-40`}
              />
            </div>
          );
        })}

        <div
          className={` absolute left-[50%] top-4 -translate-x-[50%] z-1 bg-[hsl(0deg,0%,0%)] border-1 border-white/30 rounded-2xl p-5 h-40 md:p-8 lg:p-10 w-full max-w-[1216px] scale-95`}
        >
          <Arrowup className={`right-5 top-5 absolute`} />
          <h1
            className={`font-inter text-white text-3xl lg:text-4xl font-bold`}
          >
            Lang UI
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
