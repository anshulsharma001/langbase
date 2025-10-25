import React from 'react';

const Studio = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Langbase Studio Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">⌘ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Studio</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Explore our serverless AI cloud and APIs in Studio without writing a single line of code. 
            Run agents, modify prompts, real-time collab, complete observability.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="card-enhanced card-glow overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-800 bg-gray-900/50">
              <div className="flex overflow-x-auto">
                {[
                  'Analytics', 'LangUI', 'Pipes', 'Usage', 'Memory', 'RAG Test', 
                  'Chunking', 'Experiments', 'Versioning', 'Keysets', 'Open Pipes', 
                  'Tools', 'Deploy'
                ].map((tab, index) => (
                  <button
                    key={tab}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                      index === 0 
                        ? 'border-cyan-400 text-cyan-400 bg-gray-800/50 shadow-lg shadow-cyan-400/10' 
                        : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800/30'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Active Tab Content - Analytics */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-3xl font-bold mb-6 text-glow">Analytics</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Gain valuable insights into your AI features and apps performance with comprehensive 
                    feature-level analytics. Understand how your AI features are being used, how they're 
                    performing, and how they can be improved, and how much it costs to run them with different LLMs.
                  </p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg group">
                    Analytics 
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
                
                <div className="card-enhanced p-6 animate-scaleIn" style={{animationDelay: '0.6s'}}>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold">Usage Overview</span>
                      <div className="text-sm text-gray-400">Last 30 days</div>
                    </div>
                    
                    {/* Enhanced Chart Area */}
                    <div className="h-40 bg-gray-900 rounded-lg flex items-end justify-center space-x-2 p-4 relative overflow-hidden">
                      {/* Animated bars */}
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all duration-500 hover:from-cyan-400 hover:to-blue-400 cursor-pointer animate-scaleIn"
                          style={{ 
                            height: `${height}%`, 
                            width: '12px',
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-lg pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
                      <div className="text-2xl font-bold text-cyan-400">2.4M</div>
                      <div className="text-sm text-gray-400">API Calls</div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
                      <div className="text-2xl font-bold text-green-400">$124</div>
                      <div className="text-sm text-gray-400">Cost Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chunking Section */}
        <div className="mb-24 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-12 animate-fadeInUp" style={{animationDelay: '1s'}}>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-glow">Chunking</h3>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Managed semantic document chunking so you can focus on building your AI agents instead of 
              wasting time understanding 800 different formats and their chunking strategy.
            </p>
          </div>

          <div className="card-enhanced card-glow overflow-hidden animate-scaleIn" style={{animationDelay: '1.2s'}}>
            {/* Chunking Interface Header */}
            <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h4 className="text-lg font-semibold text-white">Document Chunking</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Processing</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 svg-interactive svg-hover-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Settings Panel */}
                <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '1.4s'}}>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Chunk Size</label>
                    <div className="card-enhanced p-3">
                      <input 
                        type="range" 
                        min="512" 
                        max="4096" 
                        defaultValue="1024"
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-enhanced"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>512</span>
                        <span className="text-cyan-400 font-medium">1024</span>
                        <span>4096</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Overlap</label>
                    <div className="card-enhanced p-3">
                      <input 
                        type="range" 
                        min="0" 
                        max="512" 
                        defaultValue="128"
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-enhanced"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0</span>
                        <span className="text-purple-400 font-medium">128</span>
                        <span>512</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-full py-3 rounded-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300">
                    Process Document
                  </button>
                </div>
                
                {/* Document Preview */}
                <div className="lg:col-span-2 card-enhanced p-6 animate-fadeInUp" style={{animationDelay: '1.6s'}}>
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="font-semibold text-white">sample-document.pdf</h5>
                    <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">245 chunks generated</div>
                  </div>
                  
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-500 hover:bg-gray-800/50 transition-all duration-300 animate-fadeInUp"
                        style={{animationDelay: `${1.8 + i * 0.1}s`}}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-cyan-400 font-medium">Chunk {i + 1}</span>
                          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">1,024 chars</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                          veniam, quis nostrud exercitation...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Studio;