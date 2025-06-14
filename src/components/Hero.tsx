
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="text-center max-w-5xl mx-auto px-4 z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            I build systems—
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              and stories—
            </span>
            <br />
            that matter.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            With 22+ years in DevOps and a new chapter in AI, I'm on a mission to make tech more meaningful. 
            From scalable infrastructure to soulful human connection, everything I do is measured not just in metrics—but in how it makes my child smile and my wife feel proud.
          </p>

          <div className="bg-slate-100 border-l-4 border-blue-500 p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-slate-700 italic text-lg">
              "If you do something—or everything—and your child or your partner sees no value in it, then it holds no value at all."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Discover My Journey
            </a>
            <a
              href="#contact"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              Let's Connect
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={32} />
        </div>
      </div>
    </section>
  );
};
