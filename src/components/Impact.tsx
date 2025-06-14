
import { Heart, Users, Target } from "lucide-react";

export const Impact = () => {
  const impacts = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Notebook 2025",
      description: "Mentoring underprivileged students, helping them break barriers through technology education and emotional support.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Parent-Child Workshops",
      description: "Crafting emotional bonding workshops on Indian beaches, teaching families that joy and connection start from within.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-Infused DevOps",
      description: "Pioneering the integration of AI technologies with traditional DevOps practices to create more intelligent, human-centered systems.",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Making Technology Human</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Beyond code and infrastructure, I believe technology's true measure is in the lives it touches 
            and the connections it nurtures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20 
                            hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${impact.color} 
                              flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {impact.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{impact.title}</h3>
                <p className="text-slate-300 leading-relaxed">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
            <p className="text-xl text-slate-200 italic leading-relaxed">
              "Technology is only valuable if it touches lives deeply. Every system I build, 
              every workshop I design, every student I mentor—it all comes back to one simple truth: 
              if it doesn't make my child smile and my wife feel proud, then it holds no value at all."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
