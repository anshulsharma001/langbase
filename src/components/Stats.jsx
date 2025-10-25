import React from "react";

export default function Stats() {
  return (
    <section className="w-full">
      <div
        className="flex w-full py-24 sm:py-32"
        style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "translateY(-6px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">AI messages tokens (32B+/mo)</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">328 Billion</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">API Requests (50M+/mo)</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">871 Million</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Thousands of developers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">37K Devs</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
