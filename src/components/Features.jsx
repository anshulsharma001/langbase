import React from 'react';

const Features = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Developer Experience Section */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Obsessed with<br />
            <span className="text-gradient-enhanced">
              Developer Experience
            </span>
          </h2>
        </div>

        {/* Memory API Section */}
        <div className="mb-24 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Memory API</h3>
              <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                50-100x in-expensive serverless RAG, vectors, files, and attributes. 97% Reduced hallucinations.
              </p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg group">
                Learn more 
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            
            <div className="card-enhanced card-glow p-8">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-800 rounded-lg p-4 h-24 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 animate-scaleIn"
                    style={{animationDelay: `${i * 0.1}s`}}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* One API for all LLMs Section */}
        <div className="mb-24 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
                One API for all LLMs – Unified Dev Experience
              </h3>
              <p className="text-gray-400 text-xl mb-8 leading-relaxed">
                Switch between 250+ LLMs with one standard API for OpenAI, Anthropic, Google, Mistral, Llama, Together, Fireworks.
              </p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg group">
                Learn more 
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            
            <div className="lg:order-1 card-enhanced card-glow p-8">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-gradient-enhanced">Pipe</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['OpenAI', 'Anthropic', 'Google', 'Mistral'].map((provider, index) => (
                    <div 
                      key={provider} 
                      className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-all duration-300 animate-scaleIn"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mb-2 animate-pulse"></div>
                      <div className="text-sm font-medium">{provider}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Pipes Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              AI Pipes: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serverless AI Agents</span>
            </h3>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Pipes are serverless AI agents with memory and tools. Pipes are serverless, composable, 
              forkable — like Docker containers or React components. Agentic memory and self-healing tools.
            </p>
          </div>
          
          {/* Pipe Interface Mockup */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold">⚡ Pipe</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-cyan-400 font-medium">Command.new</span>
                    </div>
                    <div className="text-gray-300">Vibe Code AI Agents</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-400 font-medium">Tools</span>
                    </div>
                    <div className="text-gray-300">Function calling & structured output</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 font-medium">Generate</span>
                    </div>
                    <div className="text-gray-300">Single completion endpoint</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-400 font-medium">Chat</span>
                    </div>
                    <div className="text-gray-300">Conversational interface</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-yellow-400 font-medium">Prompt Engineering</span>
                    </div>
                    <div className="text-gray-300">Advanced prompt optimization</div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-pink-400 font-medium">Versioning</span>
                    </div>
                    <div className="text-gray-300">Complete version control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Memory Section with Documents */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Memory</h3>
            <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Serverless zero-config semantic RAG with industry leading accuracy in retrieval, 
              augmentation, and semantic chunking.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PDF</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-2">employee-handbook.pdf</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Welcome to [Company Name]. We are excited to have you as part of our team. 
                      This handbook is designed to familiarize you with our company policies, procedures, and benefits...
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">XLS</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-2">finances.xlsx</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      This spreadsheet contains financial projections and details of companies. 
                      We ensure all data is accurate and up-to-date. Monthly reviews to track progress...
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MD</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-2">documentation.md</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      CRM Product Documentation: 1. User Onboarding: New users can be added by 
                      navigating to the 'Admin' section and clicking on 'Add User'...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-gray-400 text-sm">What are the guidelines for remote work?</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                    <span className="text-cyan-400 text-sm">AI Assistant</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    According to our employee handbook, employees are allowed to work remotely up to two days 
                    per week with manager approval. Remote work requests should be submitted 48 hours in advance...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;