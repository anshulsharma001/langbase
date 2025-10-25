import React, { useState } from 'react';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isProductsOpen, setIsProductsOpen] = useState(false);

     const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
     };

     const toggleProducts = () => {
         setIsProductsOpen(!isProductsOpen);
     };

    return (
        <header className="bg-black text-white border-b border-gray-800 flex justify-center">
            <nav className="flex flex-col  lg:flex-row items-center justify-between w-full max-w-[95%] sm:max-w-[95%] lg:max-w-[64rem] xl:max-w-[80rem] mx-auto py-2.5 px-4 sm:px-5 lg:pr-2.5 fixed top-0 z-[2000] lg:rounded-[25px] md:backdrop-blur-xl sm:backdrop-blur-2xl lg:backdrop-blur-[8px] lg:bg-[rgba(0,0,0,.35)] rounded-[25px] backdrop-blur-[8px] bg-[rgba(0,0,0,.65)] shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:shadow-[0_2px_3px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1),0_-1px_rgba(255,255,255,0.15)] mt-4 transition-all duration-200 ease-linear">
                <div className="w-full lg:w-max px-2 sm:px-0 flex flex-col items-left justify-between">
                    <div className="w-full lg:w-max flex justify-between items-center mr-4">
                        <div className="opacity-100">
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="691" height="137" fill="none" viewBox="0 0 691 137" className="w-[7rem] h-auto lg:w-[8rem]">
                                    <path fill="#000" d="M0 66.796C0 35.308 0 19.564 9.782 9.782 19.564 0 35.308 0 66.796 0h2.536c31.488 0 47.232 0 57.014 9.782 9.782 9.782 9.782 25.526 9.782 57.014v2.536c0 31.488 0 47.232-9.782 57.014-9.782 9.782-25.526 9.782-57.014 9.782h-2.536c-31.488 0-47.232 0-57.014-9.782C0 116.564 0 100.82 0 69.332v-2.536z"></path>
                                    <path fill="#fff" fillRule="evenodd" d="M69.332 5.566h-2.536c-15.901 0-27.267.012-35.905 1.173-8.477 1.14-13.489 3.295-17.173 6.979-3.684 3.684-5.839 8.695-6.979 17.173-1.16 8.638-1.173 20.004-1.173 35.905v2.536c0 15.901.012 27.267 1.173 35.905 1.14 8.477 3.295 13.488 6.979 17.173 3.684 3.684 8.695 5.838 17.173 6.978 8.638 1.161 20.004 1.173 35.905 1.173h2.536c15.901 0 27.267-.012 35.905-1.173 8.477-1.14 13.488-3.294 17.173-6.978 3.684-3.685 5.838-8.696 6.978-17.173 1.161-8.638 1.173-20.004 1.173-35.905v-2.536c0-15.901-.012-27.267-1.173-35.905-1.14-8.477-3.294-13.489-6.978-17.173-3.685-3.684-8.696-5.839-17.173-6.979-8.638-1.16-20.004-1.173-35.905-1.173zM9.782 9.782C0 19.564 0 35.308 0 66.796v2.536c0 31.488 0 47.232 9.782 57.014 9.782 9.782 25.526 9.782 57.014 9.782h2.536c31.488 0 47.232 0 57.014-9.782 9.782-9.782 9.782-25.526 9.782-57.014v-2.536c0-31.488 0-47.232-9.782-57.014C116.564 0 100.82 0 69.332 0h-2.536C35.308 0 19.564 0 9.782 9.782z" clipRule="evenodd"></path>
                                    <path fill="#fff" d="M93.66 26.178c-8.982 0-16.288 7.307-16.288 16.29v6.98H58.756v-6.98c0-8.983-7.307-16.29-16.289-16.29-8.982 0-16.289 7.307-16.289 16.29 0 8.981 7.307 16.288 16.29 16.288h6.98v18.616h-6.98c-8.983 0-16.29 7.306-16.29 16.288 0 8.983 7.307 16.289 16.29 16.289 8.981 0 16.288-7.306 16.288-16.288V86.68h18.616v6.98c0 8.983 7.306 16.289 16.288 16.289 8.983 0 16.289-7.306 16.289-16.288 0-8.983-7.306-16.29-16.289-16.29h-6.98V58.757h6.98c8.983 0 16.289-7.307 16.289-16.289 0-8.982-7.306-16.289-16.289-16.289zm-6.98 23.27v-6.98a6.972 6.972 0 016.98-6.982 6.971 6.971 0 016.981 6.981 6.971 6.971 0 01-6.98 6.981H86.68zm-44.213 0a6.972 6.972 0 01-6.98-6.98 6.972 6.972 0 016.98-6.982 6.972 6.972 0 016.981 6.981v6.981h-6.98zm16.289 27.924V58.756h18.616v18.616H58.756zM93.66 100.64a6.971 6.971 0 01-6.98-6.98V86.68h6.98a6.971 6.971 0 016.981 6.98 6.971 6.971 0 01-6.98 6.981zm-51.193 0a6.971 6.971 0 01-6.98-6.98 6.972 6.972 0 016.98-6.981h6.981v6.98a6.971 6.971 0 01-6.98 6.981zM167.541 20.733h19.1v73.132h41.089v16.084h-60.189V20.733z"></path>
                                    <path fill="#fff" d="M250.709 111.457c-7.121 0-12.859-1.634-17.215-4.901-4.272-3.267-6.409-7.748-6.409-13.445 0-5.78 1.801-10.304 5.404-13.57 3.602-3.352 9.172-5.781 16.712-7.289l21.738-4.272c0-8.796-3.853-13.194-11.56-13.194-6.953 0-11.058 3.225-12.314 9.675l-18.849-.88c1.257-7.371 4.566-12.942 9.927-16.711 5.361-3.854 12.44-5.78 21.236-5.78 10.053 0 17.634 2.387 22.744 7.162 5.11 4.775 7.665 11.77 7.665 20.984v22.995c0 1.843.293 3.1.879 3.77.587.67 1.55 1.005 2.891 1.005h1.884v12.943c-1.675.503-3.937.754-6.785.754-8.377 0-13.278-3.644-14.702-10.932-1.759 3.602-4.691 6.45-8.796 8.544-4.021 2.095-8.838 3.142-14.45 3.142zm4.523-12.943c4.775 0 8.587-1.382 11.435-4.146 2.848-2.765 4.272-6.534 4.272-11.31v-3.267l-15.33 3.268c-6.115 1.256-9.173 4.02-9.173 8.293 0 2.262.754 4.02 2.262 5.277 1.508 1.257 3.686 1.885 6.534 1.885zM296.875 42.597h16.963l.377 11.058c3.519-8.377 10.178-12.566 19.98-12.566 7.204 0 12.817 2.304 16.838 6.912 4.021 4.523 6.031 10.722 6.031 18.597v43.351h-18.848V72.88c0-5.696-.796-9.926-2.388-12.69-1.508-2.765-4.147-4.148-7.916-4.148-3.937 0-6.953 1.466-9.047 4.398-2.095 2.932-3.142 7.08-3.142 12.44v37.069h-18.848V42.597zM392.453 130.305c-9.215 0-16.419-1.675-21.613-5.026-5.194-3.351-8.586-7.958-10.178-13.822l19.351-1.382c.754 2.345 2.052 4.104 3.895 5.277 1.927 1.173 4.775 1.759 8.545 1.759 9.298 0 13.948-4.481 13.948-13.445v-7.162c-1.676 3.183-4.273 5.696-7.791 7.539-3.435 1.843-7.33 2.765-11.686 2.765-5.529 0-10.429-1.341-14.702-4.021-4.272-2.681-7.623-6.493-10.052-11.435-2.346-5.026-3.519-10.806-3.519-17.34 0-6.367 1.173-12.022 3.519-16.964 2.429-5.026 5.738-8.922 9.927-11.686 4.272-2.849 9.131-4.273 14.576-4.273 4.775 0 8.879 1.09 12.314 3.267 3.435 2.095 6.073 4.985 7.916 8.67V42.598h18.472v60.692c0 8.796-2.974 15.498-8.922 20.105-5.947 4.608-13.948 6.911-24 6.911zm-.126-37.445c4.356 0 7.791-1.718 10.304-5.152 2.597-3.435 3.895-8.168 3.895-14.2 0-5.696-1.298-10.22-3.895-13.57-2.597-3.351-6.031-5.026-10.304-5.026-4.44 0-7.958 1.717-10.555 5.151-2.513 3.435-3.77 8.043-3.77 13.823 0 5.78 1.299 10.387 3.896 13.822 2.597 3.434 6.073 5.152 10.429 5.152zM469.474 111.457c-4.691 0-8.796-.963-12.314-2.89-3.435-2.011-6.115-4.859-8.042-8.545l-.377 9.927h-17.969V20.733h18.849v31.414c1.843-3.267 4.481-5.906 7.916-7.916 3.518-2.095 7.497-3.142 11.937-3.142 5.613 0 10.514 1.466 14.702 4.398 4.272 2.849 7.539 6.953 9.801 12.315 2.346 5.277 3.519 11.434 3.519 18.471 0 7.037-1.173 13.236-3.519 18.597-2.262 5.278-5.529 9.383-9.801 12.315-4.188 2.848-9.089 4.272-14.702 4.272zm-5.277-14.45c4.272 0 7.665-1.844 10.178-5.53 2.513-3.685 3.77-8.754 3.77-15.204 0-6.45-1.257-11.518-3.77-15.204-2.429-3.686-5.78-5.53-10.053-5.53-4.607 0-8.209 1.844-10.806 5.53-2.597 3.602-3.895 8.67-3.895 15.204 0 6.45 1.256 11.519 3.769 15.205 2.597 3.686 6.199 5.528 10.807 5.528z"></path>
                                    <path fill="#fff" d="M520.099 111.457c-7.12 0-12.859-1.634-17.215-4.901-4.272-3.267-6.408-7.748-6.408-13.445 0-5.78 1.801-10.304 5.403-13.57 3.602-3.352 9.173-5.781 16.712-7.289l21.739-4.272c0-8.796-3.854-13.194-11.561-13.194-6.953 0-11.057 3.225-12.314 9.675l-18.848-.88c1.256-7.371 4.565-12.942 9.926-16.711 5.362-3.854 12.44-5.78 21.236-5.78 10.053 0 17.634 2.387 22.744 7.162 5.11 4.775 7.665 11.77 7.665 20.984v22.995c0 1.843.293 3.1.88 3.77.586.67 1.55 1.005 2.89 1.005h1.885v12.943c-1.676.503-3.938.754-6.786.754-8.377 0-13.277-3.644-14.702-10.932-1.759 3.602-4.691 6.45-8.795 8.544-4.021 2.095-8.838 3.142-14.451 3.142zm4.524-12.943c4.775 0 8.586-1.382 11.434-4.146 2.849-2.765 4.273-6.534 4.273-11.31v-3.267L525 83.06c-6.116 1.256-9.173 4.02-9.173 8.293 0 2.262.754 4.02 2.262 5.277 1.507 1.257 3.686 1.885 6.534 1.885z"></path>
                                    <path fill="#fff" d="M594.552 111.457c-10.052 0-17.843-2.052-23.372-6.157-5.445-4.189-8.419-9.718-8.921-16.587l19.099-.628c1.173 6.702 5.613 10.052 13.32 10.052 3.435 0 6.073-.544 7.916-1.633 1.843-1.173 2.765-2.848 2.765-5.026 0-1.508-.377-2.723-1.131-3.644-.67-.922-2.011-1.718-4.021-2.388-1.927-.754-4.775-1.424-8.545-2.01-7.12-1.173-12.691-2.597-16.712-4.273-4.021-1.759-6.869-3.937-8.545-6.534-1.675-2.597-2.513-5.906-2.513-9.927 0-6.618 2.555-11.853 7.665-15.707 5.11-3.937 12.524-5.906 22.241-5.906 9.132 0 16.252 2.095 21.362 6.283 5.194 4.189 8.21 9.801 9.047 16.838l-18.848.754c-.419-3.35-1.676-5.948-3.77-7.79-2.01-1.844-4.691-2.765-8.042-2.765-3.267 0-5.822.67-7.665 2.01-1.759 1.34-2.639 3.184-2.639 5.53 0 2.429.922 4.272 2.765 5.528 1.843 1.173 5.11 2.094 9.801 2.765 7.204 1.005 12.901 2.387 17.089 4.146 4.189 1.76 7.204 3.98 9.047 6.66 1.843 2.68 2.765 6.032 2.765 10.053 0 6.45-2.681 11.476-8.042 15.078-5.361 3.519-12.733 5.278-22.116 5.278z"></path>
                                    <path fill="#fff" d="M657.429 111.457c-6.786 0-12.734-1.424-17.844-4.272-5.11-2.932-9.089-7.037-11.937-12.315-2.764-5.361-4.147-11.56-4.147-18.597 0-7.037 1.383-13.194 4.147-18.471 2.765-5.362 6.702-9.466 11.812-12.315 5.11-2.932 11.057-4.398 17.843-4.398 6.618 0 12.398 1.466 17.34 4.398 5.027 2.932 8.88 7.163 11.561 12.692 2.681 5.445 4.021 11.895 4.021 19.35v3.77h-47.247c.168 5.194 1.55 9.131 4.147 11.812 2.597 2.68 6.157 4.021 10.681 4.021 6.534 0 10.722-2.723 12.565-8.168l18.974 1.131c-1.843 6.702-5.612 11.938-11.309 15.707-5.612 3.77-12.482 5.655-20.607 5.655zm13.57-41.718c-.251-4.775-1.591-8.419-4.021-10.932-2.429-2.513-5.654-3.77-9.675-3.77-3.937 0-7.204 1.299-9.801 3.896-2.513 2.596-4.021 6.199-4.524 10.806h28.021z"></path>
                                </svg>
                            </a>
                        </div>
                         <button 
                             type="button" 
                             className="lg:hidden inline-flex items-center justify-center py-2 rounded-md text-white"
                             onClick={toggleMenu}
                         >
                             <span className="sr-only">Open main menu</span>
                             <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                             </svg>
                         </button>
                    </div>
                </div>
                 {/* Desktop Navigation - Hidden below 1024px, visible on desktop only */}
                 <div className="hidden lg:flex items-center justify-between flex-1">
                     <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                         <div>
                             <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                                 <li className="relative group">
                                     <button 
                                         onClick={toggleProducts}
                                         onMouseEnter={() => setIsProductsOpen(true)}
                                         onMouseLeave={() => setIsProductsOpen(false)}
                                         className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background group text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background" 
                                     >
                                         Products 
                                         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                                             <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                         </svg>
                                     </button>
                                     
                                     {/* Products Dropdown */}
                                     <div 
                                         className={`absolute left-0 top-full flex justify-center z-50 transition-all duration-200 ${isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                         onMouseEnter={() => setIsProductsOpen(true)}
                                         onMouseLeave={() => setIsProductsOpen(false)}
                                     >
                                         {isProductsOpen && (
                                             <div className="origin-top-center relative mt-4 h-auto w-full overflow-hidden rounded-3xl  bg-popover text-popover-foreground animate-in zoom-in-90 md:w-[500px] shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:shadow-[0_2px_3px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1),0_-1px_rgba(255,255,255,0.15)]">
                                                 <div className="left-0 top-0 w-full animate-in fade-in">
                                                     <ul className="grid w-full gap-3 p-4 md:grid-cols-1">
                                                         <li>
                                                             <a className="flex select-none space-x-2 p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background rounded-[16px] justify-start items-center group" href="https://command.new">
                                                                 <div className="size-12 bg-white/10 flex items-center justify-center px-1 rounded-xl min-w-[40px]">
                                                                     <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                         <path d="M13 9.99989H18C18.5 8.99989 18 7.49989 18 7.49989L20.5379 7.70041C21.3806 7.76699 21.933 6.81384 21.4276 6.13617C20.385 4.73813 19.1707 3.43422 17.4966 2.91915C13.5483 1.70438 13.0654 7.49759 13 9.99989Z" fill="currentColor"></path>
                                                                         <path d="M3 10.9999C2.44772 10.9999 2 11.4476 2 11.9999C2 12.5522 2.44772 12.9999 3 12.9999H4V17.9999C4 20.209 5.79086 21.9999 8 21.9999H16C18.2091 21.9999 20 20.209 20 17.9999V12.9999H21C21.5523 12.9999 22 12.5522 22 11.9999C22 11.4476 21.5523 10.9999 21 10.9999H3Z" fill="currentColor"></path>
                                                                         <path d="M6 9.99989H11C10.7409 6.67343 9.84142 3.89667 7.94014 1.38552C7.50427 0.809827 6.62994 0.951013 6.38068 1.62871C5.43865 4.18998 5.15408 6.61621 6 9.99989Z" fill="currentColor"></path>
                                                                     </svg>
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-medium leading-none">Command <span className="font-normal text-muted-foreground/80">(Vibe code any AI agent)</span></div>
                                                                     <p className="line-clamp-2 text-sm leading-snug text-[#a1a1aa]   mt-1">Command turns prompts into prod-ready agents.</p>
                                                                 </div>
                                                             </a>
                                                         </li>
                                                         <li>
                                                             <a className="flex select-none space-x-2 p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background rounded-[16px] justify-start items-center group" href="https://langbase.com/docs/pipe">
                                                                 <div className="size-12 bg-white/10 flex items-center justify-center px-1 rounded-xl min-w-[40px]">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M2.25 4.125C2.25 3.08947 3.08947 2.25 4.125 2.25H9.375C10.4105 2.25 11.25 3.08947 11.25 4.125V17.25C11.25 19.7353 9.23528 21.75 6.75 21.75C4.26472 21.75 2.25 19.7353 2.25 17.25V4.125ZM6.75 18.375C7.37132 18.375 7.875 17.8713 7.875 17.25C7.875 16.6287 7.37132 16.125 6.75 16.125C6.12868 16.125 5.625 16.6287 5.625 17.25C5.625 17.8713 6.12868 18.375 6.75 18.375Z" fill="currentColor"></path>
                                                                         <path d="M10.719 21.75H19.8751C20.9106 21.75 21.7501 20.9105 21.7501 19.875V14.625C21.7501 13.5895 20.9106 12.75 19.8751 12.75H19.7353L10.9927 21.4926C10.9035 21.5818 10.8122 21.6676 10.719 21.75Z" fill="currentColor"></path>
                                                                         <path d="M12.7383 17.6255L19.2125 11.1512C19.9448 10.419 19.9448 9.23179 19.2125 8.49955L15.5002 4.78724C14.768 4.05501 13.5808 4.05501 12.8486 4.78724L12.7498 4.88598V17.25C12.7498 17.3761 12.7459 17.5013 12.7383 17.6255Z" fill="currentColor"></path>
                                                                     </svg>
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-medium leading-none">AI Pipes <span className="font-normal text-muted-foreground/80">(agents)</span></div>
                                                                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  mt-1">Deploy your AI agent as a serverless auto scalable API.</p>
                                                                 </div>
                                                             </a>
                                                         </li>
                                                         <li>
                                                             <a className="flex select-none space-x-2 p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background rounded-[16px] justify-start items-center group" href="https://langbase.com/docs/memory">
                                                                 <div className="size-12 bg-white/10 flex items-center justify-center px-1 rounded-xl min-w-[40px]">
                                                                     <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                         <path d="M11 2.61268L10.6567 2.49825C9.5248 2.12095 8.28356 2.26863 7.27179 2.90099L5.58454 3.95552C4.59882 4.5716 4 5.65202 4 6.81443C4 7.24607 3.79677 7.65253 3.45146 7.91152L3.4 7.95011C2.51868 8.6111 2 9.64846 2 10.7501V12.2501C2 13.3518 2.51868 14.3891 3.4 15.0501C3.77771 15.3334 4 15.778 4 16.2501V16.8374C4 18.2165 4.71048 19.4984 5.88 20.2294L7.27179 21.0992C8.28356 21.7316 9.5248 21.8793 10.6567 21.502L11 21.3875V18.2426C11 17.7122 10.7893 17.2035 10.4142 16.8284L9.51804 15.9323C9.35282 15.9764 9.17916 16 9 16C7.89543 16 7 15.1046 7 14C7 12.8954 7.89543 12 9 12C10.1046 12 11 12.8954 11 14C11 14.1792 10.9764 14.3528 10.9323 14.518L11.8284 15.4142C12.5786 16.1644 13 17.1818 13 18.2426V21.3875L13.3433 21.502C14.4752 21.8793 15.7164 21.7316 16.7282 21.0992L18.12 20.2294C19.2895 19.4984 20 18.2165 20 16.8374V16.2501C20 15.778 20.2223 15.3334 20.6 15.0501C21.4813 14.3891 22 13.3518 22 12.2501V10.7501C22 9.64846 21.4813 8.6111 20.6 7.95011L20.5485 7.91152C20.2032 7.65253 20 7.24607 20 6.81443C20 5.65202 19.4012 4.5716 18.4155 3.95552L16.7282 2.90099C15.7164 2.26863 14.4752 2.12095 13.3433 2.49825L13 2.61268V5.75736C13 6.28779 13.2107 6.7965 13.5858 7.17157L14.482 8.06774C14.6472 8.02356 14.8208 8 15 8C16.1046 8 17 8.89543 17 10C17 11.1046 16.1046 12 15 12C13.8954 12 13 11.1046 13 10C13 9.82084 13.0236 9.64718 13.0677 9.48196L12.1716 8.58579C11.4214 7.83564 11 6.81823 11 5.75736V2.61268Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path>
                                                                     </svg>
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-medium leading-none">AI Memory <span className="font-normal text-muted-foreground/80">(RAG)</span></div>
                                                                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  mt-1">Semantic RAG vector search API. Reduce hallucinations.</p>
                                                                 </div>
                                                             </a>
                                                         </li>
                                                         <li>
                                                             <a className="flex select-none space-x-2 p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background rounded-[16px] justify-start items-center group" href="/models">
                                                                 <div className="size-12 bg-white/10 flex items-center justify-center px-1 rounded-xl min-w-[40px]">
                                                                     <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M10.5292 2.67995C11.4425 2.16625 12.5575 2.16625 13.4708 2.67995L19.4708 6.05495C19.6406 6.15045 19.7987 6.26107 19.9439 6.38459L12.0006 10.8528L4.0564 6.38432C4.20152 6.26091 4.35956 6.15038 4.52922 6.05495L10.5292 2.67995ZM3.05185 8.11396C3.01768 8.2953 3 8.48122 3 8.66968V15.3303C3 16.4141 3.58459 17.4137 4.52922 17.945L10.5292 21.32C10.6814 21.4056 10.8391 21.4769 11.0006 21.534V12.585L3.05185 8.11396ZM13.0006 21.5336C13.1617 21.4766 13.319 21.4054 13.4708 21.32L19.4708 17.945C20.4154 17.4137 21 16.4141 21 15.3303V8.66968C21 8.48136 20.9823 8.29558 20.9482 8.11436L13.0006 12.585V21.5336Z" fill="currentColor"></path>
                                                                     </svg>
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-medium leading-none">LLM Models</div>
                                                                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  mt-1">Compare all the latest LLMs and their capabilities.</p>
                                                                 </div>
                                                             </a>
                                                         </li>
                                                         <li>
                                                             <a className="flex select-none space-x-2 p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background rounded-[16px] justify-start items-center group" href="/explore">
                                                                 <div className="size-12 bg-white/10 flex items-center justify-center px-1 rounded-xl min-w-[40px]">
                                                                     <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                         <path d="M8.7587 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V8.7587C2.99999 7.95374 2.99998 7.28937 3.04419 6.74818C3.09012 6.18608 3.18868 5.66937 3.43598 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43598C5.66937 3.18868 6.18608 3.09012 6.74818 3.04419C7.28937 2.99998 7.95374 2.99999 8.7587 3Z" fill="currentColor"></path>
                                                                         <path d="M17.2518 3.04419C17.8139 3.09012 18.3306 3.18868 18.816 3.43598C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66937 20.9099 6.18608 20.9558 6.74818C21 7.28937 21 7.95373 21 8.7587V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4C13 3.44772 13.4477 3 14 3H15.2413C16.0463 2.99999 16.7106 2.99998 17.2518 3.04419Z" fill="currentColor"></path>
                                                                         <path d="M3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H8.7587C7.95373 21 7.28937 21 6.74818 20.9558C6.18608 20.9099 5.66937 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43598 18.816C3.18868 18.3306 3.09012 17.8139 3.04419 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413V14Z" fill="currentColor"></path>
                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M19.8284 14.1722C18.2663 12.6101 15.7337 12.6101 14.1716 14.1722C12.6095 15.7343 12.6095 18.2669 14.1716 19.829C15.4895 21.147 17.4983 21.353 19.0322 20.447L20.2929 21.7077C20.6834 22.0982 21.3166 22.0982 21.7071 21.7077C22.0976 21.3172 22.0976 20.684 21.7071 20.2935L20.4464 19.0328C21.3524 17.4989 21.1464 15.4901 19.8284 14.1722ZM15.5858 15.5864C16.3668 14.8053 17.6332 14.8053 18.4142 15.5864C19.1953 16.3674 19.1953 17.6338 18.4142 18.4148C17.6332 19.1959 16.3668 19.1959 15.5858 18.4148C14.8047 17.6338 14.8047 16.3674 15.5858 15.5864Z" fill="currentColor"></path>
                                                                     </svg>
                                                                 </div>
                                                                 <div>
                                                                     <div className="text-sm font-medium leading-none">Explore</div>
                                                                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground  mt-1">Fork, run, build, and deploy to share with AI community.</p>
                                                                 </div>
                                                             </a>
                                                         </li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         )}
                                     </div>
                                 </li>
                                 <li>
                                     <a href="https://command.new" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background" data-radix-collection-item="">
                                         Command
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/docs" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background" data-radix-collection-item="">
                                         Docs
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/solutions" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background hidden lg:flex" data-radix-collection-item="">
                                         Solutions
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/about" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background" data-radix-collection-item="">
                                         About
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/customers" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background hidden xl:flex" data-radix-collection-item="">
                                         Customers
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/pricing" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background" data-radix-collection-item="">
                                         Pricing
                                     </a>
                                 </li>
                                 <li>
                                     <a href="/contact" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background hidden xl:flex" data-radix-collection-item="">
                                         Contact
                                     </a>
                                 </li>
                             </ul>
                         </div>
                         <div className="absolute left-0 top-full flex justify-center"></div>
                     </nav>
                     <div className="flex items-center space-x-1">
                         <a href="/login" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-full px-3 md:px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-foreground/50 [active]:text-background data-[state=open]:bg-foreground/50 data-[state=open]:text-background text-white/50 hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background transition-colors ease-in-out duration-200" data-radix-collection-item="">
                             Login
                         </a>
                         <a href="/signup" target="_blank" className="group bg-white/75 text-black hover:bg-gray-200 rounded-full text-sm font-medium flex items-center justify-center gap-1 px-3 md:px-4 py-2 transition-colors ease-in-out duration-200 bg-gradient-to-b from-black to-gray-300/80 dark:from-white dark:to-slate-900/20 hover:animate-pulse">
                             <span className="shrink-0">Start free</span>
                             <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L13.6464 10.2322C14.6228 11.2085 14.6228 12.7915 13.6464 13.7678L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L12.2322 12.3536C12.4275 12.1583 12.4275 11.8417 12.2322 11.6464L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z" fill="currentColor"></path>
                             </svg>
                         </a>
                     </div>
                 </div>

                 {/* Mobile Menu - Visible below 1024px (mobile and tablet) */}
                 <div className={`w-full max-h-[80vh] flex-col overflow-scroll px-2 py-0 lg:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
                     <div className="flex-1 mt-6 w-full flex flex-col items-start justify-start space-y-4">
                         <div className="w-full">
                             <button 
                                 onClick={toggleProducts}
                                 className="w-full text-left text-white/50 hover:text-white transition-colors ease-in-out duration-200 text-lg font-medium flex justify-between items-center py-2"
                             >
                                 Products
                                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>
                                     <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                 </svg>
                             </button>
                             
                             {/* Mobile Products Dropdown */}
                             {isProductsOpen && (
                                 <div className="mt-4 ml-4 space-y-3">
                                     <a href="https://command.new" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                         <div className="size-10 bg-white/10 flex items-center justify-center rounded-lg">
                                             <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                 <path d="M13 9.99989H18C18.5 8.99989 18 7.49989 18 7.49989L20.5379 7.70041C21.3806 7.76699 21.933 6.81384 21.4276 6.13617C20.385 4.73813 19.1707 3.43422 17.4966 2.91915C13.5483 1.70438 13.0654 7.49759 13 9.99989Z" fill="currentColor"></path>
                                                 <path d="M3 10.9999C2.44772 10.9999 2 11.4476 2 11.9999C2 12.5522 2.44772 12.9999 3 12.9999H4V17.9999C4 20.209 5.79086 21.9999 8 21.9999H16C18.2091 21.9999 20 20.209 20 17.9999V12.9999H21C21.5523 12.9999 22 12.5522 22 11.9999C22 11.4476 21.5523 10.9999 21 10.9999H3Z" fill="currentColor"></path>
                                                 <path d="M6 9.99989H11C10.7409 6.67343 9.84142 3.89667 7.94014 1.38552C7.50427 0.809827 6.62994 0.951013 6.38068 1.62871C5.43865 4.18998 5.15408 6.61621 6 9.99989Z" fill="currentColor"></path>
                                             </svg>
                                         </div>
                                         <div>
                                             <div className="text-sm font-medium">Command</div>
                                             <div className="text-xs text-white/60">Vibe code any AI agent</div>
                                         </div>
                                     </a>
                                     
                                     <a href="https://langbase.com/docs/pipe" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                         <div className="size-10 bg-white/10 flex items-center justify-center rounded-lg">
                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M2.25 4.125C2.25 3.08947 3.08947 2.25 4.125 2.25H9.375C10.4105 2.25 11.25 3.08947 11.25 4.125V17.25C11.25 19.7353 9.23528 21.75 6.75 21.75C4.26472 21.75 2.25 19.7353 2.25 17.25V4.125ZM6.75 18.375C7.37132 18.375 7.875 17.8713 7.875 17.25C7.875 16.6287 7.37132 16.125 6.75 16.125C6.12868 16.125 5.625 16.6287 5.625 17.25C5.625 17.8713 6.12868 18.375 6.75 18.375Z" fill="currentColor"></path>
                                                 <path d="M10.719 21.75H19.8751C20.9106 21.75 21.7501 20.9105 21.7501 19.875V14.625C21.7501 13.5895 20.9106 12.75 19.8751 12.75H19.7353L10.9927 21.4926C10.9035 21.5818 10.8122 21.6676 10.719 21.75Z" fill="currentColor"></path>
                                                 <path d="M12.7383 17.6255L19.2125 11.1512C19.9448 10.419 19.9448 9.23179 19.2125 8.49955L15.5002 4.78724C14.768 4.05501 13.5808 4.05501 12.8486 4.78724L12.7498 4.88598V17.25C12.7498 17.3761 12.7459 17.5013 12.7383 17.6255Z" fill="currentColor"></path>
                                             </svg>
                                         </div>
                                         <div>
                                             <div className="text-sm font-medium">AI Pipes</div>
                                             <div className="text-xs text-white/60">Deploy AI agents as APIs</div>
                                         </div>
                                     </a>
                                     
                                     <a href="https://langbase.com/docs/memory" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                         <div className="size-10 bg-white/10 flex items-center justify-center rounded-lg">
                                             <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                 <path d="M11 2.61268L10.6567 2.49825C9.5248 2.12095 8.28356 2.26863 7.27179 2.90099L5.58454 3.95552C4.59882 4.5716 4 5.65202 4 6.81443C4 7.24607 3.79677 7.65253 3.45146 7.91152L3.4 7.95011C2.51868 8.6111 2 9.64846 2 10.7501V12.2501C2 13.3518 2.51868 14.3891 3.4 15.0501C3.77771 15.3334 4 15.778 4 16.2501V16.8374C4 18.2165 4.71048 19.4984 5.88 20.2294L7.27179 21.0992C8.28356 21.7316 9.5248 21.8793 10.6567 21.502L11 21.3875V18.2426C11 17.7122 10.7893 17.2035 10.4142 16.8284L9.51804 15.9323C9.35282 15.9764 9.17916 16 9 16C7.89543 16 7 15.1046 7 14C7 12.8954 7.89543 12 9 12C10.1046 12 11 12.8954 11 14C11 14.1792 10.9764 14.3528 10.9323 14.518L11.8284 15.4142C12.5786 16.1644 13 17.1818 13 18.2426V21.3875L13.3433 21.502C14.4752 21.8793 15.7164 21.7316 16.7282 21.0992L18.12 20.2294C19.2895 19.4984 20 18.2165 20 16.8374V16.2501C20 15.778 20.2223 15.3334 20.6 15.0501C21.4813 14.3891 22 13.3518 22 12.2501V10.7501C22 9.64846 21.4813 8.6111 20.6 7.95011L20.5485 7.91152C20.2032 7.65253 20 7.24607 20 6.81443C20 5.65202 19.4012 4.5716 18.4155 3.95552L16.7282 2.90099C15.7164 2.26863 14.4752 2.12095 13.3433 2.49825L13 2.61268V5.75736C13 6.28779 13.2107 6.7965 13.5858 7.17157L14.482 8.06774C14.6472 8.02356 14.8208 8 15 8C16.1046 8 17 8.89543 17 10C17 11.1046 16.1046 12 15 12C13.8954 12 13 11.1046 13 10C13 9.82084 13.0236 9.64718 13.0677 9.48196L12.1716 8.58579C11.4214 7.83564 11 6.81823 11 5.75736V2.61268Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path>
                                             </svg>
                                         </div>
                                         <div>
                                             <div className="text-sm font-medium">AI Memory</div>
                                             <div className="text-xs text-white/60">Semantic RAG vector search</div>
                                         </div>
                                     </a>
                                     
                                     <a href="/models" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                         <div className="size-10 bg-white/10 flex items-center justify-center rounded-lg">
                                             <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M10.5292 2.67995C11.4425 2.16625 12.5575 2.16625 13.4708 2.67995L19.4708 6.05495C19.6406 6.15045 19.7987 6.26107 19.9439 6.38459L12.0006 10.8528L4.0564 6.38432C4.20152 6.26091 4.35956 6.15038 4.52922 6.05495L10.5292 2.67995ZM3.05185 8.11396C3.01768 8.2953 3 8.48122 3 8.66968V15.3303C3 16.4141 3.58459 17.4137 4.52922 17.945L10.5292 21.32C10.6814 21.4056 10.8391 21.4769 11.0006 21.534V12.585L3.05185 8.11396ZM13.0006 21.5336C13.1617 21.4766 13.319 21.4054 13.4708 21.32L19.4708 17.945C20.4154 17.4137 21 16.4141 21 15.3303V8.66968C21 8.48136 20.9823 8.29558 20.9482 8.11436L13.0006 12.585V21.5336Z" fill="currentColor"></path>
                                             </svg>
                                         </div>
                                         <div>
                                             <div className="text-sm font-medium">LLM Models</div>
                                             <div className="text-xs text-white/60">Compare latest LLMs</div>
                                         </div>
                                     </a>
                                     
                                     <a href="/explore" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                         <div className="size-10 bg-white/10 flex items-center justify-center rounded-lg">
                                             <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                 <path d="M8.7587 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V8.7587C2.99999 7.95374 2.99998 7.28937 3.04419 6.74818C3.09012 6.18608 3.18868 5.66937 3.43598 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43598C5.66937 3.18868 6.18608 3.09012 6.74818 3.04419C7.28937 2.99998 7.95374 2.99999 8.7587 3Z" fill="currentColor"></path>
                                                 <path d="M17.2518 3.04419C17.8139 3.09012 18.3306 3.18868 18.816 3.43598C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66937 20.9099 6.18608 20.9558 6.74818C21 7.28937 21 7.95373 21 8.7587V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4C13 3.44772 13.4477 3 14 3H15.2413C16.0463 2.99999 16.7106 2.99998 17.2518 3.04419Z" fill="currentColor"></path>
                                                 <path d="M3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H8.7587C7.95373 21 7.28937 21 6.74818 20.9558C6.18608 20.9099 5.66937 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43598 18.816C3.18868 18.3306 3.09012 17.8139 3.04419 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413V14Z" fill="currentColor"></path>
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M19.8284 14.1722C18.2663 12.6101 15.7337 12.6101 14.1716 14.1722C12.6095 15.7343 12.6095 18.2669 14.1716 19.829C15.4895 21.147 17.4983 21.353 19.0322 20.447L20.2929 21.7077C20.6834 22.0982 21.3166 22.0982 21.7071 21.7077C22.0976 21.3172 22.0976 20.684 21.7071 20.2935L20.4464 19.0328C21.3524 17.4989 21.1464 15.4901 19.8284 14.1722ZM15.5858 15.5864C16.3668 14.8053 17.6332 14.8053 18.4142 15.5864C19.1953 16.3674 19.1953 17.6338 18.4142 18.4148C17.6332 19.1959 16.3668 19.1959 15.5858 18.4148C14.8047 17.6338 14.8047 16.3674 15.5858 15.5864Z" fill="currentColor"></path>
                                             </svg>
                                         </div>
                                         <div>
                                             <div className="text-sm font-medium">Explore</div>
                                             <div className="text-xs text-white/60">Fork, run, and deploy</div>
                                         </div>
                                     </a>
                                 </div>
                             )}
                         </div>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="https://command.new" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Command</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/docs" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Docs</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/solutions" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Solutions</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/about" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">About</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/customers" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Customers</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/pricing" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Pricing</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                         <a href="/contact" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium py-2">Contact</a>
                         <div className="w-full h-[1px] bg-white/15"></div>
                     </div>
                     <div className="flex-1 w-full py-8 pb-6 flex flex-col items-center justify-center space-y-6">
                         <a href="/login" target="_blank" className="text-white/50 hover:text-white transition-colors ease-in-out duration-200 w-full text-lg font-medium text-center py-2">Login</a>
                         <a href="/signup" target="_blank" className="group bg-white/75 text-black hover:bg-gray-200 rounded-full text-lg font-medium flex items-center justify-center gap-1 w-full px-6 py-2.5">
                             <span className="shrink-0">Start free</span>
                             <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L13.6464 10.2322C14.6228 11.2085 14.6228 12.7915 13.6464 13.7678L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L12.2322 12.3536C12.4275 12.1583 12.4275 11.8417 12.2322 11.6464L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z" fill="currentColor"></path>
                             </svg>
                         </a>
                     </div>
                 </div>
            </nav>
        </header>
    );
};

export default Header;