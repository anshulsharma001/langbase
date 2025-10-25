import React from 'react';
import Marquee from 'react-fast-marquee';

const logosA = [
  { alt: 'FirstQuadrant.ai', src: 'https://langbase.com/customers/firstquadrant.svg' },
  { alt: 'Liquidweb', src: 'https://langbase.com/customers/liquidweb.svg' },
  { alt: 'Resend', src: 'https://langbase.com/customers/resend.svg' },
  { alt: 'Intel', src: 'https://langbase.com/customers/intel.svg' },
  { alt: 'Hemla', src: 'https://langbase.com/customers/hemla.svg' },
  { alt: 'Zendesk', src: 'https://langbase.com/customers/zendesk.svg' },
  { alt: 'HaveIgnition.com', src: 'https://langbase.com/customers/haveignition.svg' },
  { alt: 'Pipedream', src: 'https://langbase.com/customers/pipedream.svg' },
  { alt: 'Google', src: 'https://langbase.com/customers/google.svg' },
  { alt: 'SiteGPT.ai', src: 'https://langbase.com/customers/sitegpt.svg' },
  { alt: 'CureMD', src: 'https://langbase.com/customers/curemd.svg' },
  { alt: 'UltraMailAI', src: 'https://langbase.com/customers/ultramail.svg' },
  { alt: 'BaseAI', src: 'https://langbase.com/customers/baseai.svg' },
];

const logosB = [
  { alt: 'The Otherweb', src: 'https://langbase.com/customers/otherweb.svg' },
  { alt: 'Sourcegraph', src: 'https://langbase.com/customers/sourcegraph.svg' },
  { alt: 'ionzAI', src: 'https://langbase.com/customers/ionz.svg' },
  { alt: 'RedwoodJS', src: 'https://langbase.com/customers/redwoodjs.svg' },
  { alt: 'MelodyMindAI', src: 'https://langbase.com/customers/melmind.svg' },
  { alt: 'Couchbase', src: 'https://langbase.com/customers/couchbase.svg' },
  { alt: 'Triplai', src: 'https://langbase.com/customers/triplai.svg' },
  { alt: 'Klarna', src: 'https://langbase.com/customers/klarna.svg' },
  { alt: 'snaptapAI', src: 'https://langbase.com/customers/snaptap.svg' },
  { alt: 'Netlify', src: 'https://langbase.com/customers/netlify.svg' },
  { alt: 'realtrAI', src: 'https://langbase.com/customers/realtrai.svg' },
  { alt: 'Worwox', src: 'https://langbase.com/customers/wga.svg' },
  { alt: 'ForkAI', src: 'https://langbase.com/customers/forkai.svg' },
];

const LogoCard = ({ alt, src }) => (
  <figure className="relative w-auto overflow-hidden py-3 px-4 mx-1 sm:py-5 sm:px-10 sm:mx-2.5 opacity-80 rounded-3xl shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none">
    <img className="max-h-[20px] sm:max-h-[25px] grayscale text-foreground" alt={alt} src={src} loading="lazy" />
  </figure>
);

const LogosMarquee = () => {
  return (
    <section className="logos relative flex mb-20 w-full flex-col items-center justify-center overflow-hidden">
      <div className="mb-16 w-[350px] sm:w-full">
        <h2 className="mb-1 text-center text-foreground/80 max-w-2xl mx-auto">
          Trusted by the world's most innovative product companies and developers to build powerful AI products and serverless AI agents with best in class developer experience.
        </h2>
      </div>

      {/* Top rows - left direction */}
      <div className="w-full" style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
        <div className="group flex overflow-hidden p-1 sm:p-2 [--gap:0.5rem] sm:[--gap:1rem] [gap:var(--gap)] flex-col">
          <Marquee gradient={false} speed={30} pauseOnHover className="py-1 sm:py-2">
            <div className="flex items-center">
              {logosA.map((logo, i) => (
                <LogoCard key={`a1-${i}`} {...logo} />
              ))}
              {logosA.map((logo, i) => (
                <LogoCard key={`a1dup-${i}`} {...logo} />
              ))}
            </div>
          </Marquee>
         
        </div>
      </div>

      {/* Bottom rows - right direction */}
      <div className="w-full" style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
        <div className="group flex overflow-hidden p-1 sm:p-2 [--gap:0.5rem] sm:[--gap:1rem] [gap:var(--gap)] flex-col">
         
          <Marquee gradient={false} speed={30} direction="right" pauseOnHover className="py-1 sm:py-2">
            <div className="flex items-center">
              {/* {logosB.map((logo, i) => (
                <LogoCard key={`b3-${i}`} {...logo} />
              ))} */}
              {logosB.map((logo, i) => (
                <LogoCard key={`b3dup-${i}`} {...logo} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
 
    </section>
  );
};

export default LogosMarquee;
