
import { ArrowDown, Zap, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic AI-Inspired Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        {/* Animated Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-500"></div>
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
            <line x1="33%" y1="66%" x2="75%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-300" />
            <line x1="66%" y1="75%" x2="33%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-700" />
          </svg>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 left-1/5 animate-bounce delay-1000">
            <Sparkles className="text-cyan-400 opacity-60" size={16} />
          </div>
          <div className="absolute top-3/4 right-1/5 animate-bounce delay-2000">
            <Zap className="text-blue-400 opacity-50" size={12} />
          </div>
          <div className="absolute bottom-1/5 left-2/3 animate-bounce delay-1500">
            <Sparkles className="text-indigo-400 opacity-40" size={14} />
          </div>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-4 z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I build systems—
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 animate-pulse">
              and stories—
            </span>
            <br />
            that matter.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            With 22+ years in DevOps and a new chapter in AI, I'm on a mission to make tech more meaningful. 
            From scalable infrastructure to soulful human connection, everything I do is measured not just in metrics—but in how it makes my child smile and my wife feel proud.
          </p>

          <div className="bg-gradient-to-r from-slate-800/80 to-blue-900/80 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-slate-200 italic text-lg">
              "If you do something—or everything—and your child or your partner sees no value in it, then it holds no value at all."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200"
            >
              Discover My Journey
            </a>
            <a
              href="#contact"
              className="border-2 border-cyan-400/50 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-400/10 transition-all duration-200"
            >
              Let's Connect
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
};
