
import { Zap, Sparkles, Activity } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* AI-Inspired Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Enhanced Headline with AI Background */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl rounded-2xl"></div>
              <h2 className="relative text-4xl font-bold text-slate-800 p-6 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50">
                <span className="flex items-center gap-3">
                  <Zap className="text-blue-600 animate-pulse" size={32} />
                  The Mentor, Maker & Mind Explorer
                  <Sparkles className="text-indigo-600 animate-pulse delay-500" size={28} />
                </span>
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100/50">
                A 22-year DevOps veteran with one foot in the cloud and the other stepping boldly into the world of AI. 
                Whether it's orchestrating Kubernetes clusters, Terraforming infrastructure, or reimagining emotional wellness on Indian beaches, 
                I'm equally at home debugging code and designing soul-touching workshops.
              </p>
              <p className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-indigo-100/50">
                I'm the kind of person who thinks deeply — about parenting, purpose, and progress. 
                From teaching kids that joy starts within, to coaching underprivileged students through Notebook 2025, 
                I blend empathy with engineering in ways few can. CKAD certified and Kubernetes expert, I thrive in container orchestration and cloud-native architectures.
              </p>
              <p className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100/50">
                With dreams rooted in India, I'm reskilling, reinventing, 
                and rewriting what "tech for good" looks like. Curious, committed, and creatively disruptive — 
                I'm not just chasing a job. I'm designing a legacy.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-200/50 relative overflow-hidden">
              {/* Floating AI Elements */}
              <div className="absolute top-4 right-4 animate-pulse">
                <Activity className="text-blue-400 opacity-60" size={20} />
              </div>
              <div className="absolute bottom-4 left-4 animate-pulse delay-1000">
                <Sparkles className="text-indigo-400 opacity-60" size={16} />
              </div>
              
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-blue-500/25 relative">
                  <span className="relative z-10">MJ</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">DevOps Architect</h3>
                <p className="text-slate-600 mb-4">Chennai, India</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50">
                    <div className="text-2xl font-bold text-blue-600">22+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200/50">
                    <div className="text-2xl font-bold text-indigo-600 flex items-center justify-center gap-1">
                      <Zap size={20} />
                      AI
                    </div>
                    <div className="text-sm text-slate-500">Future Focus</div>
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
