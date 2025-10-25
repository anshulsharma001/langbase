import React, { useState, useEffect, useRef } from 'react'

const SmartCosts = () => {
  const [openaiCount, setOpenaiCount] = useState(0)
  const [opensourceCount, setOpensourceCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer to trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps
      
      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        
        // OpenAI counter (21739)
        const openaiProgress = currentStep / steps
        const openaiValue = Math.floor(21739 * openaiProgress)
        setOpenaiCount(openaiValue)
        
        // Open-source counter (238)
        const opensourceProgress = currentStep / steps
        const opensourceValue = Math.floor(238 * opensourceProgress)
        setOpensourceCount(opensourceValue)
        
        if (currentStep >= steps) {
          clearInterval(interval)
          setOpenaiCount(21739)
          setOpensourceCount(238)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className="group text-white h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1">
      <div className="w-full h-full z-1">
        <div className="absolute top-4 px-4 inset-2 transition-all duration-300 ease-out group-hover:scale-105">
          <div className="flex flex-col bg-background mt-2 rounded-2xl py-4 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
            <div className="flex flex-col justify-start items-center text-muted-foreground gap-1">
              <div className="flex justify-center items-center gap-1">
                <svg className="size-4 opacity-50 text-green-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 11.0357C3 13.72 4.16641 16.1313 6.01723 17.786L4.61255 22H19.3874L17.9827 17.786C19.8336 16.1313 21 13.72 21 11.0357C21 6.04963 16.9748 2 12 2C7.02524 2 3 6.04963 3 11.0357ZM7.72073 19L7.3874 20H16.6125L16.2792 19H7.72073ZM12.375 7.375C12.8116 6.93838 13 6 13 6C13 6 13.1884 6.93838 13.625 7.375C14.0616 7.81162 15 8 15 8C15 8 14.0616 8.18838 13.625 8.625C13.1884 9.06162 13 10 13 10C13 10 12.8116 9.06162 12.375 8.625C11.9384 8.18838 11 8 11 8C11 8 11.9384 7.81162 12.375 7.375ZM15.5 9C15.5 9 15.2645 10.173 14.7188 10.7188C14.173 11.2645 13 11.5 13 11.5C13 11.5 14.173 11.7355 14.7188 12.2812C15.2645 12.827 15.5 14 15.5 14C15.5 14 15.7355 12.827 16.2812 12.2812C16.827 11.7355 18 11.5 18 11.5C18 11.5 16.827 11.2645 16.2812 10.7188C15.7355 10.173 15.5 9 15.5 9Z" fill="currentColor"></path>
                </svg>
                <span className="text-green-500 font-normal">Cost Prediction</span>
              </div>
              <div className="whitespace-pre-wrap mt-2 text-2xl font-extrabold tracking-tighter text-white">
                <span className="text-muted-foreground/50 text-base font-normal">OpenAI: $</span>
                <span className="inline-block tabular-nums tracking-tighter text-2xl font-mono">
                  {openaiCount.toLocaleString()}
                </span>
                <span className="text-base tracking-normal text-muted-foreground/50 font-normal">/M reqs</span>
                <div className="text-base font-normal text-muted-foreground/50 tracking-tight">
                  Open-source LLMs: <span className="text-xs">$</span>
                  <span className="inline-block tabular-nums tracking-tighter font-mono text-muted-foreground/50">
                    {opensourceCount}
                  </span>/M
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Smart Costs Predictions</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90">Customers saw 60-90% LLM cost savings. LLMOps: run logs & pipeline traces.</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
        <a href="https://langbase.com/docs/features/usage#usage-prediction" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto">
          Learn more
          <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]"></div>
    </div>
  )
}

export default SmartCosts
