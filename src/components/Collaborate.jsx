import React from 'react'

const Collaborate = () => {
  return (
    <div className="group text-white h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-1">
      <div className="w-full h-full z-1">
        <div className="w-full absolute select-none">
          <div className="relative" style={{ cursor: 'none' }}>
            <div className="w-full relative h-64">
              <div className="h-4 w-4 user-1 rounded-full absolute z-50 top-8 right-4 left-8 animate-subtle-movement">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 16 16" className="h-6 w-6 text-muted transform -rotate-[70deg] -translate-x-[12px] -translate-y-[0px] stroke-indigo-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
                </svg>
                <div className="px-2 py-2 flex gap-2 items-center bg-background text-primary whitespace-nowrap min-w-max text-xs rounded-2xl tracking-wider shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <img src="https://github.com/AhmadAwais.png" height="20" width="20" alt="Ahmad" className="rounded-full border-2 border-indigo-600" />
                  AA
                </div>
              </div>
              <div className="h-4 w-4 rounded-full absolute z-50 top-16 left-32 animate-subtle-movement delay-1000">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 16 16" className="h-6 w-6 text-muted transform -rotate-[70deg] -translate-x-[12px] translate-y-[0px] stroke-[#fad000]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
                </svg>
                <div className="px-2 py-2 flex gap-2 items-center bg-background text-primary whitespace-nowrap min-w-max text-xs rounded-2xl tracking-wider shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                  <img src="https://github.com/MaedahBatool.png" height="20" width="20" alt="Maedah" className="rounded-full border-2 border-[#FAD000]" />
                  Maedah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Collaborate</h3>
        <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90">Collaborate on AI like GitHub. Your team or dev community. Open pipes = truly "Open" AI.</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
        <a href="https://langbase.com/docs/features/open-pipes" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto">
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

export default Collaborate