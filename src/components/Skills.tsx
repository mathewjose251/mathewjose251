
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Technical Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-4"></div>
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-slate-800 mb-3">Education</h4>
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
