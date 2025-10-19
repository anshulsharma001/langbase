import React from 'react';

const avatars = [
  'Mojombo',
  'AnandChowdhary',
  'ObaidNadeem',
  'AhmadAwais',
  'maedahbatool',
  'alexadark',
  'ahmadbilaldev',
  'saqibameen',
  'msaaddev',
  'cfjedimaster',
  'asharirfan',
  'MrOmarImtiaz',
  'pontusab',
  'w3guy',
  'dthyresson',
  'Necmttn',
  'zaidpirwani',
  'Salman-Pixel',
  'tassawarr',
  'ferpintado',
  'pbteja1998',
];

const DeveloperPics = () => {
  return (
    <section
      style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}
    >
      <div className="DeveloperPics max-sm:hidden mx-auto mb-20 max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center w-full ">
        <div className="z-10 flex -space-x-4 rtl:space-x-reverse -ml-10 sm:ml-0">
          {avatars.map((user, i) => (
            <img
              key={user}
              className="h-10 w-10 rounded-full border-2 border-border select-none"
              src={`https://github.com/${user}.png`}
              width={40}
              height={40}
              alt={`Avatar: ${i + 1}`}
              loading="lazy"
            />
          ))}
          <a
            className="flex h-10 w-full px-4 items-center justify-center rounded-full text-center text-xs font-medium text-foreground rounded-3xl shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] bg-black"
            href="/signup"
          >
            <span className="hidden lg:inline select-none">+36K developers building with ⌘ Langbase</span>
            <span className="lg:hidden inline select-none">+36K developers</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperPics;
