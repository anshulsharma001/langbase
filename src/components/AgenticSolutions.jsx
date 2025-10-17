import React, { useRef } from 'react';

const categories = [
  {
    name: 'Legal',
    subtitle: 'Transform Legal Operations with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.0007 3C13.0007 2.44772 12.553 2 12.0007 2C11.4484 2 11.0007 2.44772 11.0007 3V4H10.2368C9.9263 4 9.62007 4.07229 9.34236 4.21115L7.76465 5H3.00072C2.44844 5 2.00072 5.44772 2.00072 6C2.00072 6.55228 2.44844 7 3.00072 7H4.11329L1.81226 13.9031C1.519 14.7829 1.86345 15.8583 2.83119 16.2857C4.63283 17.0814 6.36861 17.0814 8.17025 16.2857C9.13799 15.8583 9.48244 14.7829 9.18918 13.9031L6.88815 7H7.76465C8.07514 7 8.38137 6.92771 8.65908 6.78885L10.2368 6H11.0007V19H7.00072C6.44844 19 6.00072 19.4477 6.00072 20C6.00072 20.5523 6.44844 21 7.00072 21H17.0007C17.553 21 18.0007 20.5523 18.0007 20C18.0007 19.4477 17.553 19 17.0007 19H13.0007V6H13.7647L15.3424 6.78885C15.6201 6.92771 15.9263 7 16.2368 7H17.1133L14.8123 13.9031C14.519 14.7829 14.8635 15.8583 15.8312 16.2857C17.6328 17.0814 19.3686 17.0814 21.1702 16.2857C22.138 15.8583 22.4824 14.7829 22.1892 13.9031L19.8881 7H21.0007C21.553 7 22.0007 6.55228 22.0007 6C22.0007 5.44772 21.553 5 21.0007 5H16.2368L14.6591 4.21115C14.3814 4.07229 14.0751 4 13.7647 4H13.0007V3Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Finance',
    subtitle: 'Revolutionize Finance Processes with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H15V12.8293C16.1652 12.4175 17 11.3062 17 10C17 8.69378 16.1652 7.58254 15 7.17071V3Z" fill="currentColor"/>
        <path d="M13 21V12.829C12.8997 12.7936 12.8018 12.7529 12.7068 12.7074L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071L7 14.4142L3 18.4142V19C3 20.1046 3.89543 21 5 21H13Z" fill="currentColor"/>
        <path d="M3 15.5858V5C3 3.89543 3.89543 3 5 3H13V7.17071C11.8348 7.58254 11 8.69378 11 10C11 10.4628 11.1052 10.9016 11.2926 11.2932L9 13.5858L7.70711 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929L3 15.5858Z" fill="currentColor"/>
        <path d="M13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11C13.7236 11 13.475 10.8892 13.2929 10.7071C13.1108 10.525 13 10.2764 13 10Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Technology',
    subtitle: 'Accelerate Tech Innovation with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.73992 8.6352C4.26506 9.65805 4 10.7981 4 12C4 13.8488 4.62711 15.551 5.68021 16.9057L8.47727 14.1087C6.99489 12.5171 5.82474 10.8846 5.10603 9.4472C4.96965 9.17444 4.84662 8.90299 4.73992 8.6352ZM8.63595 4.73957C8.90364 4.84625 9.175 4.96923 9.44767 5.10556C10.8851 5.82428 12.5176 6.99443 14.1091 8.4768L16.9057 5.68021C15.551 4.62711 13.8488 4 12 4C10.7984 4 9.6586 4.26493 8.63595 4.73957ZM18.3288 4.25712C16.6049 2.84639 14.4013 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4013 2.84639 16.6049 4.25712 18.3288L3.51486 19.0711C3.12434 19.4616 3.12434 20.0948 3.51486 20.4853C3.90539 20.8758 4.53855 20.8758 4.92908 20.4853L5.67135 19.743C7.39521 21.1537 9.59877 22 12 22C14.7469 22 17.2352 20.8924 19.0425 19.0995C19.0522 19.0902 19.0619 19.0807 19.0715 19.0711C19.0812 19.0614 19.0907 19.0517 19.1001 19.0419C20.8927 17.2346 22 14.7466 22 12C22 9.59877 21.1537 7.39521 19.743 5.67135L20.4854 4.92894C20.876 4.53841 20.876 3.90525 20.4854 3.51473C20.0949 3.1242 19.4617 3.1242 19.0712 3.51473L18.3288 4.25712ZM18.3199 7.09444L15.5234 9.89101C17.0059 11.4827 18.1761 13.1153 18.8949 14.5528C19.0311 14.8252 19.154 15.0963 19.2606 15.3637C19.7351 14.3412 20 13.2015 20 12C20 10.1513 19.3729 8.44911 18.3199 7.09444ZM17.6598 17.6539C17.6613 17.6519 17.6633 17.6488 17.666 17.6439C17.6714 17.6336 17.6811 17.6121 17.6901 17.5745C17.709 17.4956 17.7213 17.3608 17.697 17.1558C17.6475 16.7383 17.4625 16.1601 17.106 15.4472C16.4978 14.2307 15.4665 12.7726 14.1082 11.3062L11.3066 14.1077C12.773 15.466 14.2311 16.4973 15.4477 17.1056C16.1605 17.462 16.7388 17.647 17.1563 17.6965C17.3613 17.7208 17.496 17.7085 17.5749 17.6896C17.6126 17.6806 17.6341 17.671 17.6443 17.6655C17.6492 17.6629 17.6524 17.6608 17.6544 17.6593C17.6562 17.6575 17.658 17.6557 17.6598 17.6539ZM15.3645 19.2602C15.0969 19.1536 14.8257 19.0307 14.5532 18.8944C13.1157 18.1757 11.4831 17.0054 9.89147 15.5229L7.09444 18.3199C8.44911 19.3729 10.1513 20 12 20C13.2018 20 14.3417 19.735 15.3645 19.2602ZM9.89243 12.6935L12.694 9.89197C11.2277 8.53384 9.76971 7.50265 8.55324 6.89442C7.84038 6.53799 7.26209 6.35295 6.84463 6.30348C6.6396 6.27918 6.50488 6.29148 6.42598 6.31036C6.38834 6.31936 6.36685 6.329 6.35657 6.33448C6.34727 6.33944 6.34427 6.34246 6.34364 6.34309C6.34301 6.34372 6.3399 6.34681 6.33495 6.35611C6.32947 6.36639 6.31982 6.38788 6.31082 6.42552C6.29194 6.50442 6.27964 6.63914 6.30394 6.84417C6.35342 7.26163 6.53845 7.83991 6.89488 8.55278C7.50311 9.76924 8.5343 11.2272 9.89243 12.6935Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Education',
    subtitle: 'Innovate Education Systems with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.4138 3.08963C12.1509 2.97012 11.8491 2.97012 11.5862 3.08963L0.586197 8.08963C0.229203 8.2519 0 8.60786 0 9C0 9.39214 0.229203 9.7481 0.586197 9.91037L11.5862 14.9104C11.8491 15.0299 12.1509 15.0299 12.4138 14.9104L22 10.553V16C22 16.5523 22.4477 17 23 17C23.5523 17 24 16.5523 24 16V9C24 8.60786 23.7708 8.2519 23.4138 8.08963L12.4138 3.08963Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12.801V16.093C4.5 16.8354 4.91119 17.5167 5.56804 17.8626L11.068 20.7592C11.6513 21.0664 12.3486 21.0664 12.9319 20.7592L18.432 17.8626C19.0888 17.5167 19.5 16.8354 19.5 16.093V12.801L12.4538 16.3891C12.1687 16.5342 11.8313 16.5342 11.5462 16.3891L4.5 12.801Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Marketing',
    subtitle: 'Boost Marketing Strategies with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H21V16C21 17.1046 20.1046 18 19 18H13.8685L14.8321 19.4453C15.1384 19.9048 15.0142 20.5257 14.5547 20.8321C14.0952 21.1384 13.4743 21.0142 13.1679 20.5547L12 18.8028L10.8321 20.5547C10.5257 21.0142 9.90483 21.1384 9.4453 20.8321C8.98577 20.5257 8.8616 19.9048 9.16795 19.4453L10.1315 18H5C3.89543 18 3 17.1046 3 16V5H2C1.44772 5 1 4.55228 1 4ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8ZM17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10V13C15 13.5523 15.4477 14 16 14C16.5523 14 17 13.5523 17 13V10ZM9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V12Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    subtitle: 'Advance Healthcare Delivery with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.17428 11.6021L9 5.82069L13.808 21.0461C14.1758 22.2109 15.8242 22.2109 16.192 21.0461L18.7329 12.9999L22 12.9999C22.5523 12.9999 23 12.5522 23 11.9999C23 11.4476 22.5523 10.9999 22 10.9999H18.7329C17.8603 10.9999 17.0885 11.5656 16.8257 12.3976L15 18.1791L10.192 2.95366C9.82415 1.78888 8.17585 1.78888 7.80802 2.95366L5.26711 10.9999H2C1.44772 10.9999 1 11.4476 1 11.9999C1 12.5522 1.44772 12.9999 2 12.9999H5.26711C6.13967 12.9999 6.91152 12.4342 7.17428 11.6021Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Customer Support',
    subtitle: 'Automate Customer Support with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 11.5C2 10.2787 2.87572 9.26198 4.03348 9.04345C4.41506 5.04041 8.00841 2 12.25 2C16.4916 2 20.0849 5.04041 20.4665 9.04345C21.6243 9.26198 22.5 10.2787 22.5 11.5V15C22.5 16.1467 21.728 17.113 20.6755 17.4077C20.2428 20.0133 17.9784 22 15.25 22H13.5C12.1193 22 11 20.8807 11 19.5V19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19V19.5C13 19.7761 13.2239 20 13.5 20H15.25C16.8355 20 18.1748 18.9457 18.6051 17.5H18.5C17.9477 17.5 17.5 17.0523 17.5 16.5V10C17.5 9.46556 17.9193 9.02904 18.4468 9.00139C18.0505 6.22822 15.4838 4 12.25 4C9.01617 4 6.44949 6.22822 6.05318 9.00139C6.58074 9.02903 7 9.46556 7 10V16.5C7 17.0523 6.55228 17.5 6 17.5H4.5C3.11929 17.5 2 16.3807 2 15V11.5Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'News and Media',
    subtitle: 'Enhance Media Production with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM13 8.5C13 7.94772 13.4477 7.5 14 7.5H17.5C18.0523 7.5 18.5 7.94772 18.5 8.5C18.5 9.05228 18.0523 9.5 17.5 9.5H14C13.4477 9.5 13 9.05228 13 8.5ZM13 12C13 11.4477 13.4477 11 14 11H17.5C18.0523 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0523 13 17.5 13H14C13.4477 13 13 12.5523 13 12ZM5.5 15.5C5.5 14.9477 5.94772 14.5 6.5 14.5H17.5C18.0523 14.5 18.5 14.9477 18.5 15.5C18.5 16.0523 18.0523 16.5 17.5 16.5H6.5C5.94772 16.5 5.5 16.0523 5.5 15.5ZM7.1585 7.74742C6.86321 7.48904 6.4441 7.42723 6.08678 7.58937C5.72947 7.7515 5.5 8.10762 5.5 8.5V12C5.5 12.5523 5.94772 13 6.5 13C7.05228 13 7.5 12.5523 7.5 12V10.7038L9.8415 12.7526C10.1368 13.011 10.5559 13.0728 10.9132 12.9106C11.2705 12.7485 11.5 12.3924 11.5 12V8.5C11.5 7.94772 11.0523 7.5 10.5 7.5C9.94772 7.5 9.5 7.94772 9.5 8.5V9.79623L7.1585 7.74742Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Administration',
    subtitle: 'Streamline Admin Operations with AI',
    icon: (
      <svg className="size-16" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8.99884 2C6.51356 2 4.49884 4.01472 4.49884 6.5C4.49884 8.98528 6.51356 11 8.99884 11C11.4841 11 13.4988 8.98528 13.4988 6.5C13.4988 4.01472 11.4841 2 8.99884 2Z" fill="currentColor"/>
        <path d="M14.9988 2C14.4466 2 13.9988 2.44772 13.9988 3C13.9988 3.55228 14.4466 4 14.9988 4C16.3796 4 17.4988 5.11929 17.4988 6.5C17.4988 7.88071 16.3796 9 14.9988 9C14.4466 9 13.9988 9.44772 13.9988 10C13.9988 10.5523 14.4466 11 14.9988 11C17.4841 11 19.4988 8.98528 19.4988 6.5C19.4988 4.01472 17.4841 2 14.9988 2Z" fill="currentColor"/>
        <path d="M8.99884 12C4.5695 12 0.73759 14.879 0.0921986 18.8433C-0.113501 20.1068 0.946961 21 1.99884 21H15.9988C17.0507 21 18.1112 20.1068 17.9055 18.8433C17.2601 14.879 13.4282 12 8.99884 12Z" fill="currentColor"/>
        <path d="M18.3327 12.5662C17.8121 12.3818 17.2406 12.6543 17.0562 13.1749C16.8718 13.6955 17.1444 14.267 17.665 14.4514C19.9125 15.2475 21.5062 16.986 21.9019 19H20.4988C19.9466 19 19.4988 19.4477 19.4988 20C19.4988 20.5522 19.9466 21 20.4988 21H21.9988C23.0506 21 24.1112 20.107 23.9055 18.8434C23.4304 15.9247 21.2129 13.5863 18.3327 12.5662Z" fill="currentColor"/>
      </svg>
    ),
  },
];

const AgenticSolutions = () => {
  const scrollerRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-full pb-20">
      {/* Heading */}
      <div style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
        <div className="px-6 py-24 sm:py-32 lg:px-8 z-10 relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm sm:text-base font-semibold leading-7 text-[#00f6fa]">Pre-built AI solutions for every industry</p>
            <h2 className="mt-2 text-3xl sm:text-6xl font-bold tracking-tight text-foreground">Agentic AI solutions</h2>
            <div className="mt-6 text-base md:text-lg md:leading-8 text-muted-foreground">
              Explore AI solutions to boost productivity, enhance efficiency, and unlock new ROI. Our customers are building AI-powered customer service, knowledge management, AI translation, content generation, and more.
            </div>
          </div>
        </div>
      </div>

      {/* Cards scroller */}
      <div className="relative w-full">
        <div
          ref={scrollerRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto py-4 md:py-20 scroll-smooth [scrollbar-width:none]"
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-background to-transparent" />
          <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
            {categories.map((c) => (
              <div key={c.name} className="last:pr-[5%] md:last:pr-[33%] rounded-3xl">
                <button className="group rounded-3xl bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 hover:ring-white/20 hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)]">
                  {/* Pixel noise background */}
                  <div aria-hidden className="absolute inset-0 z-20 opacity-20 group-hover:opacity-40 transition-opacity [background-image:radial-gradient(rgba(16,185,129,0.5)_1px,transparent_1px)] [background-size:6px_6px] [background-position:0_0] pointer-events-none" />
                  <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                  <div className="relative flex h-full flex-col items-center justify-center z-40 p-8">
                    <div>
                      <div className="text-primary flex flex-col justify-center items-center gap-4 text-sm md:text-base font-medium font-sans">
                        <div>{c.icon}</div>
                        <div className="select-none" style={{ willChange: 'auto', fontSize: '1rem' }}>{c.name}</div>
                      </div>
                      <p className="text-primary text-xl md:text-3xl font-semibold max-w-xs [text-wrap:balance] -translate-y-4 group-hover:translate-y-0 font-sans opacity-0 group-hover:opacity-100 mt-2 transition-all duration-300 ease-out select-none">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50"
            onClick={() => scrollByAmount(-320)}
            aria-label="Scroll left"
          >
            <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M11.0607 18.5607C10.4749 19.1464 9.52513 19.1464 8.93934 18.5607L3.43934 13.0607C3.15804 12.7794 3 12.3978 3 12C3 11.6022 3.15803 11.2207 3.43934 10.9394L8.93934 5.43934C9.52512 4.85355 10.4749 4.85355 11.0607 5.43934C11.6464 6.02512 11.6464 6.97487 11.0607 7.56066L8.12131 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H8.12133L11.0607 16.4393C11.6464 17.0251 11.6464 17.9749 11.0607 18.5607Z" fill="currentColor"></path></svg>
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-primary flex items-center justify-center disabled:opacity-50"
            onClick={() => scrollByAmount(320)}
            aria-label="Scroll right"
          >
            <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.9393 5.43934C13.5251 4.85355 14.4749 4.85355 15.0607 5.43934L20.5607 10.9393C20.842 11.2206 21 11.6022 21 12C21 12.3978 20.842 12.7793 20.5607 13.0606L15.0607 18.5607C14.4749 19.1464 13.5251 19.1464 12.9393 18.5607C12.3536 17.9749 12.3536 17.0251 12.9393 16.4393L15.8787 13.5H4.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5H15.8787L12.9393 7.56066C12.3536 6.97488 12.3536 6.02513 12.9393 5.43934Z" fill="currentColor"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgenticSolutions;
