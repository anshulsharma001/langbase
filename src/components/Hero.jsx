import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Video Background - Using Streamable */}
      <div className="absolute inset-0">
        <iframe
          src="https://streamable.com/e/s3xfhl?autoplay=1&nocontrols=1"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
          className="w-full h-[400px] sm:h-full object-cover"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            pointerEvents: 'none'
          }}
        ></iframe> 
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Langbase Logo Icon */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="-1 -1 287 280" 
              width="267" 
              height="260" 
              preserveAspectRatio="xMidYMid meet" 
              className="justify-center items-center mx-auto mt-10 sm:mt-0 mb-0 sm:mb-[40px] h-[230px] sm:h-[250px] sm:w-[267px]"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="9.65531%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />
                </linearGradient>
              </defs>
              <g>
                <path 
                  fill="url(#gradient)" 
                  d="M213.444 0c-27.877 0-50.555 22.678-50.555 50.556v21.666h-57.778V50.556C105.111 22.678 82.433 0 54.556 0 26.678 0 4 22.678 4 50.556c0 27.877 22.678 50.555 50.556 50.555h21.666v57.778H54.556C26.678 158.889 4 181.567 4 209.444 4 237.322 26.678 260 54.556 260c27.877 0 50.555-22.678 50.555-50.556v-21.666h57.778v21.666c0 27.878 22.678 50.556 50.555 50.556C241.322 260 264 237.322 264 209.444c0-27.877-22.678-50.555-50.556-50.555h-21.666v-57.778h21.666c27.878 0 50.556-22.678 50.556-50.555C264 22.678 241.322 0 213.444 0Zm-21.666 72.222V50.556c0-11.99 9.678-21.667 21.666-21.667 11.989 0 21.667 9.678 21.667 21.667 0 11.988-9.678 21.666-21.667 21.666h-21.666Zm-137.222 0c-11.99 0-21.667-9.678-21.667-21.666 0-11.99 9.678-21.667 21.667-21.667 11.988 0 21.666 9.678 21.666 21.667v21.666H54.556Zm50.555 86.667v-57.778h57.778v57.778h-57.778Zm108.333 72.222c-11.988 0-21.666-9.678-21.666-21.667v-21.666h21.666c11.989 0 21.667 9.678 21.667 21.666 0 11.989-9.678 21.667-21.667 21.667Zm-158.888 0c-11.99 0-21.667-9.678-21.667-21.667 0-11.988 9.678-21.666 21.667-21.666h21.666v21.666c0 11.989-9.678 21.667-21.666 21.667Z"
                />
                <path 
                  d="M213.444 0c-27.877 0-50.555 22.678-50.555 50.556v21.666h-57.778V50.556C105.111 22.678 82.433 0 54.556 0 26.678 0 4 22.678 4 50.556c0 27.877 22.678 50.555 50.556 50.555h21.666v57.778H54.556C26.678 158.889 4 181.567 4 209.444 4 237.322 26.678 260 54.556 260c27.877 0 50.555-22.678 50.555-50.556v-21.666h57.778v21.666c0 27.878 22.678 50.556 50.555 50.556C241.322 260 264 237.322 264 209.444c0-27.877-22.678-50.555-50.556-50.555h-21.666v-57.778h21.666c27.878 0 50.556-22.678 50.556-50.555C264 22.678 241.322 0 213.444 0Zm-21.666 72.222V50.556c0-11.99 9.678-21.667 21.666-21.667 11.989 0 21.667 9.678 21.667 21.667 0 11.988-9.678 21.666-21.667 21.666h-21.666Zm-137.222 0c-11.99 0-21.667-9.678-21.667-21.666 0-11.99 9.678-21.667 21.667-21.667 11.988 0 21.666 9.678 21.666 21.667v21.666H54.556Zm50.555 86.667v-57.778h57.778v57.778h-57.778Zm108.333 72.222c-11.988 0-21.666-9.678-21.666-21.667v-21.666h21.666c11.989 0 21.667 9.678 21.667 21.666 0 11.989-9.678 21.667-21.667 21.667Zm-158.888 0c-11.99 0-21.667-9.678-21.667-21.667 0-11.988 9.678-21.666 21.667-21.666h21.666v21.666c0 11.989-9.678 21.667-21.666 21.667Z" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[20px] sm:text-[20px]  font-bold mb-2">
          <span className="text-gray-300">⌘</span> Langbase – Serverless AI Agents platform
        </h1>

        {/* Subheading */}
        <div className=" text-[#a1a1aa] mt-2 text-base md:text-xl">
          <p>The most powerful serverless platform for building AI agents.</p>
          <p>Build. Deploy. Scale. AI Agents with Memory.</p>
          <p>Vibe code any AI agent with COMMAND.new.</p>
          <p className="text-gray-400">
            Agentic: ( <span className=" ">pipes</span> × <span className=" ">memory</span> × <span className=" ">tools</span> )
          </p>
        </div>

        {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6">
   <a className="font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 group bg-white text-black shadow hover:bg-primary/90 px-16 py-5 rounded-full text-xl flex gap-x-2 items-center justify-center group w-full sm:w-[270px] h-[56px] sm:h-[64px] select-none bg-gradient-to-b from-black to-gray-300/80 dark:from-white dark:to-slate-900/40 hover:animate-pulse" href="/signup"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 137 137" className="size-6"><path fill="#000" d="M0 66.796C0 35.308 0 19.564 9.782 9.782 19.564 0 35.308 0 66.796 0h2.536c31.488 0 47.232 0 57.014 9.782 9.782 9.782 9.782 25.526 9.782 57.014v2.536c0 31.488 0 47.232-9.782 57.014-9.782 9.782-25.526 9.782-57.014 9.782h-2.536c-31.488 0-47.232 0-57.014-9.782C0 116.564 0 100.82 0 69.332v-2.536z"></path><path fill="#000" fillRule="evenodd" d="M69.332 5.566h-2.536c-15.901 0-27.267.012-35.905 1.173-8.477 1.14-13.489 3.295-17.173 6.979-3.684 3.684-5.839 8.695-6.979 17.173-1.16 8.638-1.173 20.004-1.173 35.905v2.536c0 15.901.012 27.267 1.173 35.905 1.14 8.477 3.295 13.488 6.979 17.173 3.684 3.684 8.695 5.838 17.173 6.978 8.638 1.161 20.004 1.173 35.905 1.173h2.536c15.901 0 27.267-.012 35.905-1.173 8.477-1.14 13.488-3.294 17.173-6.978 3.684-3.685 5.838-8.696 6.978-17.173 1.161-8.638 1.173-20.004 1.173-35.905v-2.536c0-15.901-.012-27.267-1.173-35.905-1.14-8.477-3.294-13.489-6.978-17.173-3.685-3.684-8.696-5.839-17.173-6.979-8.638-1.16-20.004-1.173-35.905-1.173zM9.782 9.782C0 19.564 0 35.308 0 66.796v2.536c0 31.488 0 47.232 9.782 57.014 9.782 9.782 25.526 9.782 57.014 9.782h2.536c31.488 0 47.232 0 57.014-9.782 9.782-9.782 9.782-25.526 9.782-57.014v-2.536c0-31.488 0-47.232-9.782-57.014C116.564 0 100.82 0 69.332 0h-2.536C35.308 0 19.564 0 9.782 9.782z" clipRule="evenodd"></path><path fill="#fff" d="M93.66 26.178c-8.982 0-16.288 7.307-16.288 16.29v6.98H58.756v-6.98c0-8.983-7.307-16.29-16.289-16.29-8.982 0-16.289 7.307-16.289 16.29 0 8.981 7.307 16.288 16.29 16.288h6.98v18.616h-6.98c-8.983 0-16.29 7.306-16.29 16.288 0 8.983 7.307 16.289 16.29 16.289 8.981 0 16.288-7.306 16.288-16.288V86.68h18.616v6.98c0 8.983 7.306 16.289 16.288 16.289 8.983 0 16.289-7.306 16.289-16.288 0-8.983-7.306-16.29-16.289-16.29h-6.98V58.757h6.98c8.983 0 16.289-7.307 16.289-16.289 0-8.982-7.306-16.289-16.289-16.289zm-6.98 23.27v-6.98a6.972 6.972 0 016.98-6.982 6.971 6.971 0 016.981 6.981 6.971 6.971 0 01-6.98 6.981H86.68zm-44.213 0a6.972 6.972 0 01-6.98-6.98 6.972 6.972 0 016.98-6.982 6.972 6.972 0 016.981 6.981v6.981h-6.98zm16.289 27.924V58.756h18.616v18.616H58.756zM93.66 100.64a6.971 6.971 0 01-6.98-6.98v-6.98h6.98a6.971 6.971 0 016.981 6.98 6.971 6.971 0 01-6.98 6.981zm-51.193 0a6.971 6.971 0 01-6.98-6.98 6.972 6.972 0 016.98-6.981h6.981v6.98a6.971 6.971 0 01-6.98 6.981z"></path></svg><span className="text-lg flex gap-2 justify-start items-center"><span>Get started</span></span></a>

  <div className="w-full sm:w-auto"><button className="font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 cursor-pointer gap-2 group hover:text-accent-foreground px-4 py-2 gap-x-1 flex items-center justify-center w-full h-[56px] sm:h-[64px] text-lg text-muted-foreground hover:bg-transparent group ring-0 outline-none rounded-full select-none" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rh:" data-state="closed"><svg className="h-5 w-5 flex-none fill-white group-active:fill-current mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H5C4.44772 5 4 4.55228 4 4ZM2 10C2 7.79086 3.79086 6 6 6H18C20.2091 6 22 7.79086 22 10V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V10ZM10.5668 10.5987C10.9133 10.4322 11.3245 10.479 11.6247 10.7191L14.1247 12.7191C14.3619 12.9089 14.5 13.1962 14.5 13.5C14.5 13.8038 14.3619 14.0911 14.1247 14.2809L11.6247 16.2809C11.3245 16.521 10.9133 16.5678 10.5668 16.4013C10.2203 16.2348 10 15.8844 10 15.5V11.5C10 11.1156 10.2203 10.7652 10.5668 10.5987Z" fill="currentColor"></path></svg><span>Video demo</span></button></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 