
import { Activity, Zap, Sparkles } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Google Cloud", level: 90 },
        { name: "Kubernetes", level: 88 },
        { name: "Docker", level: 92 },
        { name: "Terraform", level: 85 }
      ]
    },
    {
      title: "Automation & CI/CD",
      skills: [
        { name: "Puppet", level: 95 },
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "Ansible", level: 80 },
        { name: "Python", level: 88 }
      ]
    },
    {
      title: "Systems & Languages",
      skills: [
        { name: "Linux", level: 95 },
        { name: "Shell Scripting", level: 92 },
        { name: "Python", level: 88 },
        { name: "SQL", level: 85 },
        { name: "Git", level: 90 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified SysOps Associate",
    "Puppet Certified Professional", 
    "Symantec Certified Associate (VCS-5)",
    "VMWare Certified Associate (DCV and Cloud)",
    "Sun Certified Systems Administrator (SCSA Solaris10)"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* AI-Inspired Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Headline */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-2xl rounded-3xl"></div>
          <h2 className="relative text-4xl font-bold text-slate-800 p-6 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 inline-block">
            <span className="flex items-center gap-3">
              <Activity className="text-blue-600 animate-pulse" size={32} />
              Technical Expertise
              <Zap className="text-indigo-600 animate-pulse delay-300" size={28} />
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg relative overflow-hidden">
                  {/* Floating Elements */}
                  <div className="absolute top-2 right-2 animate-pulse delay-500">
                    <Sparkles className="text-blue-400 opacity-40" size={16} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000 relative"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-8 border border-indigo-200/50 shadow-lg relative overflow-hidden">
              {/* Floating AI Elements */}
              <div className="absolute top-4 right-4 animate-pulse">
                <Activity className="text-indigo-400 opacity-60" size={20} />
              </div>
              <div className="absolute bottom-4 left-4 animate-pulse delay-1000">
                <Zap className="text-blue-400 opacity-60" size={18} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-blue-100/50">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4 animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm border border-indigo-100/50">
                <h4 className="text-lg font-bold text-slate-800 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-semibold text-slate-700">Master of Science in Information Technology</p>
                    <p className="text-slate-500 text-sm">University of Mysore</p>
                    <p className="text-slate-400 text-sm">Jan 2016 — Jun 2019</p>
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold text-slate-700">Diploma in Computer Technology</p>
                    <p className="text-slate-500 text-sm">Govt. Polytechnic College Palai</p>
                    <p className="text-slate-400 text-sm">Jun 2000 — Jan 2003</p>
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
