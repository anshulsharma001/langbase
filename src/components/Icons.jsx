import React from "react";

export const Arrowup = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      className={`hover:bg-white rounded-full border-1 border-[rgb(39,39,42)] p-1 absolute top-10 right-10 hover:rotate-45 transition-all duration-400 ease-in-out`}
    >
      <path
        fill="none"
        stroke="rgb(80,80,85)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 7L7 17M8 7h9v9"
      />
    </svg>
  );
};
