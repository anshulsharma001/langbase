import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Langbase is transforming the AI market. Easy to use, handy integrations, and serverless AI agents infra. What else could we ask for.",
      author: "Zeno Rocha",
      role: "CEO of Resend.com",
      avatar: "ZR"
    },
    {
      quote: "Langbase lets us manage all our LLM-related infrastructure in one place, quick-iteration, actionable analytics, version controlled prompts, and rapid testing of different LLM models.",
      author: "Anand Chowdhary",
      role: "CTO · FirstQuadrant AI GitHub Star · Forbes 30U30",
      avatar: "AC"
    },
    {
      quote: "🚀 Excited to see @Langbase launch! Langbase is transforming AI development with serverless AI agents infrastructure, making it easy for any developer to build, collaborate, and deploy AI apps.",
      author: "Feross Aboukhadijeh",
      role: "CEO of Socket.dev",
      avatar: "FA"
    },
    {
      quote: "Really impressed with Langbase (we use at Ignition) - it's one of the most \"need to have\" tools i've seen in the past decade … AI is moving so quickly so a serverless composable infra to mix/match/test/deploy new models as they are released is the fastest way for an org to stay on the bleeding edge.",
      author: "Nic Siegle",
      role: "Head of Sales · Ignition Asana · Mixpanel · Oracle",
      avatar: "NS"
    },
    {
      quote: "Langbase AI serverless dev experience is powerful and unique, truly designed to meet the needs of developers building and operating LLM apps.",
      author: "Guy Podjarny",
      role: "Founder · Snyk CEO of Tessl",
      avatar: "GP"
    },
    {
      quote: "Langbase is unique for its composable serverless AI cloud that just works. Makes AI dev dead simple for everyone, not just the ML experts.",
      author: "Evil Rabbit",
      role: "Founding Designer · Vercel",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Trusted by developers
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who are building the future of AI applications with Langbase
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-enhanced card-glow p-8 hover:scale-105 transition-all duration-300 animate-fadeInUp group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={`https://picsum.photos/48/48?random=${index + 20}`}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/30 group-hover:ring-cyan-400/50 transition-all duration-300"
                />
                <div>
                  <h4 className="font-semibold text-white text-lg">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 animate-scaleIn"
                    style={{animationDelay: `${(index * 0.2) + (i * 0.1)}s`}}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Story Highlight */}
        <div className="card-enhanced card-glow p-12 text-center animate-fadeInUp" style={{animationDelay: '1.5s'}}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-glow">
              "Langbase is transforming the AI market"
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Easy to use, handy integrations, and serverless AI agents infra. What else could we ask for.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://picsum.photos/64/64?random=100"
                alt="Zeno Rocha"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-cyan-500/50"
              />
              <div className="text-left">
                <div className="font-semibold text-white text-lg">Zeno Rocha</div>
                <div className="text-gray-400">CEO of Resend.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;