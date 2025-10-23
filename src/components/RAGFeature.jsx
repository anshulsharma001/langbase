import React, { useState, useEffect, useRef } from 'react'

const RAGFeature = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [typingText, setTypingText] = useState('')
  const sectionRef = useRef(null)

  const fullResponse = "According to our employee handbook, employees are allowed to work remotely up to two days per week, provided they have manager approval. These remote workdays need to be scheduled in advance and documented in the company's HR system. During remote workdays, employees are expected to be available during standard working hours and maintain productivity levels consistent with in-office work. For security and compliance, it is required to use company equipment, such as laptops and phones, for all remote work activities."

  // Intersection Observer to trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Start chat animation after a delay
          setTimeout(() => setShowChat(true), 1000)
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

  // Typing animation for the AI response
  useEffect(() => {
    if (showChat) {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          setTypingText(fullResponse.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 20) // Adjust speed as needed

      return () => clearInterval(typingInterval)
    }
  }, [showChat])

  return (
    <>
      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, 20px);
          }
        }
      `}</style>
      <div ref={sectionRef} className="group text-white h-full cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-2 row-span-2">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'grid-move 20s linear infinite'
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'grid-move 30s linear infinite reverse'
            }}
          ></div>
        </div>
      
      <div className="w-full h-full z-1 relative">
        <div className="flex flex-col p-2 mt-[16px] w-full">
          <div className="flex mx-auto mt-16 justify-center relative h-48 xw-60">
            <div className={`absolute h-[11.25rem] px-1 w-60 cursor-pointer overflow-hidden rounded-3xl shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] bg-muted transition-all duration-1000 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{ transformOrigin: 'center top', willChange: 'auto', right: '36px', top: '15px', zIndex: 3, transform: 'none' }}>
              <div className="flex items-center justify-between font-medium leading-6 text-foreground my-2 px-5 opacity-100">
                <h3 className="text-xs font-semibold leading-6 text-foreground">employee-handbook.pdf</h3>
              </div>
              <div className="px-[6px] pb-[6px]">
                <div className="text-xs whitespace-pre-wrap rounded-2xl shadow-sm text-muted-foreground/80 border border-border ring-0 dark:border-none px-4 py-4 bg-background">
                  Welcome to [Company Name]. We are excited to have you as part of our team. This handbook is designed to familiarize you with our company policies, procedures, and benefits....
                </div>
              </div>
            </div>
            <div className={`absolute h-[11.25rem] px-1 w-60 cursor-pointer overflow-hidden rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transition-all duration-1000 ease-out delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{ transformOrigin: 'center top', willChange: 'auto', right: '-164px', top: '-25px', zIndex: 2, transform: 'scale(0.99)' }}>
              <div className="flex items-center justify-between font-medium leading-6 text-foreground my-2 px-5 opacity-65">
                <h3 className="text-xs font-semibold leading-6 text-foreground">finances.xlsx</h3>
              </div>
              <div className="px-[6px] pb-[6px]">
                <div className="text-xs whitespace-pre-wrap rounded-2xl shadow-sm text-muted-foreground/80 border border-border ring-0 dark:border-none px-4 py-4 bg-background">
                  This spreadsheet contains financial projections and details of companies. We ensure all data is accurate and up-to-date. Monthly reviews to track progress and adjust forecasts....
                </div>
              </div>
            </div>
            <div className={`absolute h-[11.25rem] px-1 w-60 cursor-pointer overflow-hidden rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transition-all duration-1000 ease-out delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{ transformOrigin: 'center top', willChange: 'auto', right: '-364px', top: '-65px', zIndex: 1, transform: 'scale(0.98)' }}>
              <div className="flex items-center justify-between font-medium leading-6 text-foreground my-2 px-5 opacity-65">
                <h3 className="text-xs font-semibold leading-6 text-foreground">documentation.md</h3>
              </div>
              <div className="px-[6px] pb-[6px]">
                <div className="text-xs whitespace-pre-wrap rounded-2xl shadow-sm text-muted-foreground/80 border border-border ring-0 dark:border-none px-4 py-4 bg-background">
                  CRM Product Documentation:
                  1. User Onboarding: New users can be added by navigating to the 'Admin' section and clicking on 'Add User'. Fill in the required details...
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-4 flex flex-col w-full justify-center items-center transition-all duration-1000 ease-out delay-600 ${showChat ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mt-1 p-2 rounded-xl flex items-center w-[95%] bg-muted shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
              <div className="mr-2 p-2 rounded-xl bg-background flex-shrink-0">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM12.0002 20C9.76181 20 7.73814 19.0807 6.28613 17.5991C7.61787 16.005 9.60491 15 12.0002 15C14.3955 15 16.3825 16.005 17.7143 17.5991C16.2623 19.0807 14.2386 20 12.0002 20Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="prose prose-zinc text-muted-foreground font-medium break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-sm">
                  What are the guidelines for remote work?
                </div>
              </div>
            </div>
            <div className="mt-2 p-2 rounded-2xl flex items-start w-[95%] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
              <div className="mr-2 p-2 rounded-xl bg-muted flex-shrink-0">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM10 10V14H14V10H10ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="prose prose-zinc break-words text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-sm">
                  <span>
                    <span>{typingText}</span>
                    {showChat && typingText.length < fullResponse.length && (
                      <div className="inline-block h-0 w-0 translate-y-1 bg-muted-foreground animate-pulse" style={{ willChange: 'opacity' }}></div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">RAG - Talk to your Data & Internet Access</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90 line-clamp-2 sm:line-clamp-none">Pipes x Memory x Tools. A managed search engine as an API for developers. Our long-term memory solution has the ability to acquire, process, retain, and later retrive information.</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
        <a href="https://langbase.com/docs/memory/quickstart" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto">
          Learn more
          <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted-foreground/[.03]"></div>
      </div>
    </>
  )
}

export default RAGFeature