import React from 'react'

const FutureOfAi = () => {
  return (
    <div className="w-full mx-auto px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
      <div className="grid w-full h-full auto-rows-[22rem] grid-cols-4 gap-5">
        {/* Main showcase card */}
        <div className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-lg transform-gpu col-span-4 lg:col-span-1">
          <div className="w-full h-full z-10">
            <div className="group flex overflow-hidden p-2 gap-4 flex-row absolute top-4">
              <div className="flex shrink-0 justify-around gap-4 animate-pulse flex-row">
                <figure className="relative w-48 cursor-pointer overflow-hidden rounded-2xl border p-4 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-400 transform-gpu transition-all duration-300 ease-out">
                  <div className="flex flex-row items-center gap-2 pl-1 pt-1">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium text-gray-300">
                        contract.pdf
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs pl-1 pt-0 text-gray-400">
                    This contract outlines the terms and conditions. Please review carefully before signing.
                  </blockquote>
                </figure>
                <figure className="relative w-48 cursor-pointer overflow-hidden rounded-2xl border p-4 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-400 transform-gpu transition-all duration-300 ease-out">
                  <div className="flex flex-row items-center gap-2 pl-1 pt-1">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium text-gray-300">
                        finances.xlsx
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs pl-1 pt-0 text-gray-400">
                    This spreadsheet contains financial projections. Ensure all data is accurate and up-to-date.
                  </blockquote>
                </figure>
                <figure className="relative w-48 cursor-pointer overflow-hidden rounded-2xl border p-4 border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-400 transform-gpu transition-all duration-300 ease-out">
                  <div className="flex flex-row items-center gap-2 pl-1 pt-1">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium text-gray-300">
                        quickstart.md
                      </figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs pl-1 pt-0 text-gray-400">
                    Welcome to the quick start guide. Follow these steps to get started quickly.
                  </blockquote>
                </figure>
              </div>
            </div>
            
            {/* Content area */}
            <div className="flex flex-col justify-center items-center h-full text-white p-8">
              <div className="z-10 flex h-12 items-center justify-center bg-black shadow-lg w-24 sm:w-32 font-mono text-xs p-1 sm:p-2 tracking-wide font-bold sm:text-sm rounded-3xl select-none">
                <div className="z-10 inline-block relative text-left text-neutral-100 px-2">
                  <span className="inline-block">App</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">AI Application</h3>
                <p className="text-sm text-gray-300">Experience the future of AI-powered applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-blue-900 to-purple-900 shadow-lg transform-gpu col-span-4 lg:col-span-1">
          <div className="w-full h-full z-10 flex flex-col justify-center items-center text-white p-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
            <p className="text-sm text-center text-gray-200">Advanced AI analytics for better insights</p>
          </div>
        </div>

        <div className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-green-900 to-teal-900 shadow-lg transform-gpu col-span-4 lg:col-span-1">
          <div className="w-full h-full z-10 flex flex-col justify-center items-center text-white p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-center text-gray-200">Work together with AI assistance</p>
          </div>
        </div>

        <div className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-orange-900 to-red-900 shadow-lg transform-gpu col-span-4 lg:col-span-1">
          <div className="w-full h-full z-10 flex flex-col justify-center items-center text-white p-8">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
            <p className="text-sm text-center text-gray-200">Comprehensive AI dashboard view</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FutureOfAi
