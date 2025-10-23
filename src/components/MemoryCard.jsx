import React from "react";

export default function MemoryCard() {
  return (
    <section className="group h-full cursor-pointer relative row-span-1 flex flex-col justify-between overflow-hidden rounded-[2.25rem] bg-black shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] transform-gpu col-span-4 lg:col-span-2">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="group relative  ">
          <div className="w-full h-full z-[1]">
            <div className=" inset-0 top-5 origin-top transition-all duration-300 ease-out group-hover:scale-105 flex justify-center items-center w-full">
              <div className="relative flex w-full mt-1 mx-6 h-3/5 flex-col items-center justify-center overflow-hidden rounded-3xl bg-white dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)]">
                <span className="pointer-events-none mt-4 text-[5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
                  Memory
                </span>
                <div className="mx-auto w-max mt-5 h-[50px] p-2 flex items-end gap-3 rounded-2xl">
                  <div className="flex p-2.5 aspect-square cursor-pointer items-center justify-center rounded-xl bg-black" style={{ width: 45 }}>
                    <svg className="h-6 w-6 opacity-60 text-[#f2f2f2]" width="100%" height="100%" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9258 0.298828C10.3992 0.298828 8.8875 0.599518 7.47709 1.18373C6.06668 1.76794 4.78515 2.62423 3.70566 3.70371C1.52555 5.88382 0.300781 8.84069 0.300781 11.9238C0.300781 17.0621 3.63716 21.4215 8.25228 22.9676C8.83353 23.0606 9.01953 22.7002 9.01953 22.3863V20.4217C5.79941 21.1192 5.11353 18.864 5.11353 18.864C4.57878 17.5155 3.82316 17.1551 3.82316 17.1551C2.76528 16.4343 3.90453 16.4576 3.90453 16.4576C5.06703 16.539 5.68316 17.655 5.68316 17.655C6.69453 19.422 8.40341 18.8988 9.06603 18.6198C9.17066 17.8642 9.47291 17.3527 9.79841 17.0621C7.21766 16.7715 4.50903 15.7717 4.50903 11.3426C4.50903 10.0522 4.95078 9.01758 5.70641 8.1922C5.59016 7.90158 5.18328 6.69258 5.82266 5.1232C5.82266 5.1232 6.79916 4.80933 9.01953 6.30895C9.93791 6.0532 10.9377 5.92533 11.9258 5.92533C12.9139 5.92533 13.9137 6.0532 14.832 6.30895C17.0524 4.80933 18.0289 5.1232 18.0289 5.1232C18.6683 6.69258 18.2614 7.90158 18.1452 8.1922C18.9008 9.01758 19.3425 10.0522 19.3425 11.3426C19.3425 15.7833 16.6223 16.7598 14.0299 17.0505C14.4484 17.4108 14.832 18.12 14.832 19.2011V22.3863C14.832 22.7002 15.018 23.0722 15.6109 22.9676C20.226 21.4098 23.5508 17.0621 23.5508 11.9238C23.5508 10.3972 23.2501 8.88554 22.6659 7.47513C22.0817 6.06472 21.2254 4.78319 20.1459 3.70371C19.0664 2.62423 17.7849 1.76794 16.3745 1.18373C14.9641 0.599518 13.4524 0.298828 11.9258 0.298828Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="flex p-2.5 aspect-square cursor-pointer items-center justify-center rounded-xl bg-black" style={{ width: 45 }}>
                    <svg className="h-6 w-6 opacity-60 text-[#f2f2f2]" width="100%" height="100%" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.97584 1.47745L12.4154 9.1657L4.84189 22.2893L0.402344 14.6023L7.97584 1.47745ZM10.7502 14.6023H25.9023L21.4628 22.2893H6.31197L10.7502 14.6023ZM16.2876 13.3273L8.71279 0.201172H17.5919L25.1654 13.3273H16.2876Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="flex p-2.5 aspect-square cursor-pointer items-center justify-center rounded-xl bg-black" style={{ width: 45 }}>
                    <svg className="h-6 w-6 opacity-60 text-[#f2f2f2]" width="100%" height="100%" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.40989 21.2667L0.975953 18.1265C0.461565 17.4692 0.198629 16.7546 0.203183 15.8953L0.216449 2.77979C0.216449 2.61585 0.228724 2.44954 0.257434 2.28877C0.373458 1.6538 0.774791 1.25781 1.42223 1.19822L4.62716 0.94835L9.73342 0.571766L14.6165 0.210625C15.479 0.142515 16.2237 0.380702 16.9251 0.89113C18.363 1.93753 19.8277 2.9469 21.2858 3.96399C21.6477 4.21683 21.8039 4.53323 21.8031 4.98564L21.7962 20.0068V20.2048C21.7784 21.1213 21.3368 21.6155 20.4225 21.689C19.3955 21.7718 18.3661 21.8252 17.3374 21.8878L11.141 22.262L5.63495 22.5901C4.82218 22.6441 4.18246 22.3905 3.73619 21.6922C3.64412 21.5466 3.52671 21.4168 3.40989 21.2667ZM4.67824 12.1605V18.791L4.67982 20.0276C4.69052 20.5822 4.96216 20.8584 5.51655 20.8901C5.65574 20.8978 5.79651 20.8931 5.93649 20.8845L10.5779 20.6109L19.4411 20.1043C19.9935 20.0734 20.2487 19.8312 20.3003 19.2838C20.3104 19.1854 20.3073 19.0858 20.3073 18.9868L20.3081 6.22073C20.3081 6.14648 20.3104 6.07223 20.3059 5.99798C20.2726 5.48993 20.0544 5.28263 19.5496 5.30956L14.9816 5.57269C12.8421 5.69716 10.7026 5.82243 8.56308 5.94849L5.35419 6.14113C4.94514 6.16727 4.76021 6.34368 4.69844 6.74363C4.68381 6.8497 4.67732 6.95673 4.67903 7.06378L4.67824 12.1605ZM15.9979 1.72092C15.6105 1.51065 15.1897 1.44096 14.7565 1.46492C14.0907 1.50135 13.4248 1.55619 12.7588 1.6043L3.26516 2.29411C2.97826 2.3149 2.68979 2.33569 2.40666 2.38697C2.31162 2.404 2.19164 2.49983 2.16233 2.58655C2.14055 2.64753 2.23658 2.77069 2.30687 2.838C2.43695 2.96234 2.58683 3.06669 2.72859 3.17895C3.06499 3.44426 3.42296 3.68621 3.73163 3.97944C4.3171 4.5354 4.9984 4.6639 5.77889 4.60747L11.9236 4.22218L18.5386 3.8254C18.599 3.82243 18.6594 3.80382 18.7922 3.77907C18.6709 3.65295 18.6004 3.55632 18.5085 3.48821C18.1844 3.24887 17.8573 3.01377 17.5271 2.78296C17.0197 2.42552 16.51 2.0715 15.9979 1.72092Z" fill="currentColor"></path>
                      <path d="M13.7523 12.1624L15.5159 14.8486V8.87312L14.5839 8.77017C14.3958 8.75948 14.3633 8.67295 14.3881 8.51594C14.4392 8.19024 14.693 7.91028 15.0276 7.88632L18.1066 7.69922C18.2242 8.24964 18.0951 8.45556 17.58 8.55911C17.0703 8.66127 17.0703 8.66127 17.0703 9.17704L17.0765 17.9878C17.0772 18.1881 17.0163 18.2949 16.8375 18.3529L15.8073 18.6807C15.2474 18.8007 14.7492 18.653 14.4115 18.1679C13.9374 17.4856 13.4751 16.7951 13.0247 16.0969L9.96175 11.3148C9.94017 11.2807 9.91542 11.249 9.86275 11.1764V17.6237L11.1954 17.9276C11.1398 18.3414 10.9171 18.5948 10.5033 18.6631C10.1877 18.7148 9.86374 18.7225 9.54339 18.7419L7.10648 18.8819C6.99897 18.5378 7.13578 18.2685 7.45534 18.1743L8.17604 17.9709V9.39919L7.11796 9.30871C6.98194 8.82996 7.27893 8.36824 7.76996 8.3233C8.43442 8.26132 9.10186 8.22351 9.76771 8.17718C10.1296 8.15243 10.4932 8.14312 10.8537 8.10372C11.0176 8.0859 11.1052 8.13065 11.1939 8.26607L13.7523 12.1624Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="flex p-2.5 aspect-square cursor-pointer items-center justify-center rounded-xl bg-black" style={{ width: 45 }}>
                    <svg className="h-6 w-6 opacity-60 text-[#f2f2f2]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H9ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9ZM9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H9Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none flex transform-gpu z-10 flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <h3 className="text-[1.1rem] sm:text-[1.25rem] font-semibold text-[#FAFAFA]">Memory</h3>
            <p className="mt-1 pr-[1rem] max-w-lg text-muted-foreground/90 line-clamp-2 sm:line-clamp-none">
              Serverless zero-config semantic RAG with industry leading accuracy in retrieval, augmentation, and semantic chunking.
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[999]">
            <a
              href="https://langbase.com/docs/memory"
              className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring-muted-foreground/25 focus:ring-1 focus:ring-muted-foreground/25 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer gap-2 group hover:bg-accent hover:text-accent-foreground h-8 rounded-lg px-3 text-xs pointer-events-auto"
            >
              Learn more
              <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
      </div>
    </section>
  );
}
