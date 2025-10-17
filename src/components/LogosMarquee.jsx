import React from 'react';
import Marquee from 'react-fast-marquee';

const DEMO_LOGO_URL = 'https://langbase.com/customers/firstquadrant.svg';

const logosA = [
  { alt: 'FirstQuadrant.ai', src: '/customers/firstquadrant.svg' },
  { alt: 'Liquidweb', src: '/customers/liquidweb.svg' },
  { alt: 'Resend', src: '/customers/resend.svg' },
  { alt: 'Intel', src: '/customers/intel.svg' },
  { alt: 'Hemla', src: '/customers/hemla.svg' },
  { alt: 'Zendesk', src: '/customers/zendesk.svg' },
  { alt: 'HaveIgnition.com', src: '/customers/haveignition.svg' },
  { alt: 'Pipedream', src: '/customers/pipedream.svg' },
  { alt: 'Google', src: '/customers/google.svg' },
  { alt: 'SiteGPT.ai', src: '/customers/sitegpt.svg' },
  { alt: 'CureMD', src: '/customers/curemd.svg' },
  { alt: 'UltraMailAI', src: '/customers/ultramail.svg' },
  { alt: 'BaseAI', src: '/customers/baseai.svg' },
];

const logosB = [
  { alt: 'The Otherweb', src: '/customers/otherweb.svg' },
  { alt: 'Sourcegraph', src: '/customers/sourcegraph.svg' },
  { alt: 'ionzAI', src: '/customers/ionz.svg' },
  { alt: 'RedwoodJS', src: '/customers/redwoodjs.svg' },
  { alt: 'MelodyMindAI', src: '/customers/melmind.svg' },
  { alt: 'Couchbase', src: '/customers/couchbase.svg' },
  { alt: 'Triplai', src: '/customers/triplai.svg' },
  { alt: 'Klarna', src: '/customers/klarna.svg' },
  { alt: 'snaptapAI', src: '/customers/snaptap.svg' },
  { alt: 'Netlify', src: '/customers/netlify.svg' },
  { alt: 'realtrAI', src: '/customers/realtrai.svg' },
  { alt: 'Worwox', src: '/customers/wga.svg' },
  { alt: 'ForkAI', src: '/customers/forkai.svg' },
];

const LogoCard = ({ alt }) => (
  <figure className="relative w-auto overflow-hidden py-5 px-10 mx-2.5 opacity-80 rounded-3xl shadow-[0_2px_3px_0_theme(colors.black/65%),0_0_0_1px_theme(colors.white/10%),0_-1px_0_0_theme(colors.white/15%)] select-none">
    <img className="max-h-[25px] grayscale text-foreground" alt={alt} src={DEMO_LOGO_URL} loading="lazy" />
  </figure>
);

const LogosMarquee = () => {
  return (
    <section className="logos relative flex mb-20 w-full flex-col items-center justify-center overflow-hidden">
      <div className="mb-16 w-[350px] sm:w-full">
        <h2 className="mb-1 text-center text-foreground/80 max-w-2xl mx-auto">
          Trusted by the world’s most innovative product companies and developers to build powerful AI products and serverless AI agents with best in class developer experience.
        </h2>
      </div>

      {/* Top rows - left direction */}
      <div className="w-full" style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto', transform: 'translateY(-6px)' }}>
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col">
          <Marquee gradient={false} speed={50} pauseOnHover className="py-2">
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
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col">
         
          <Marquee gradient={false} speed={50} direction="right" pauseOnHover className="py-2">
            <div className="flex items-center">
              {logosB.map((logo, i) => (
                <LogoCard key={`b3-${i}`} {...logo} />
              ))}
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
