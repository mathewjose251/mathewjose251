
import { Calendar, MapPin, Zap, Activity } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "MTS Software Engineer, Cloud Engineering",
      company: "PAYPAL",
      location: "Chennai",
      period: "May 2021 — Present",
      highlights: [
        "Design, Performance Tuning, and engineering development of Configuration Management tools",
        "Automation and configuration management of applications and infrastructure using Open Source Puppet, Python, Jenkins, Git, Artifactory, Jira, splunk, helm, ruby and cloud services AWS, Google, KUBE, Azure, OCP.",
        "Lead the strategy and execution for creating a best-in-class CI/CD pipeline for Configuration management.",
        "Integrated Git repositories with CI/CD pipelines for seamless code promotion through the development lifecycle.",
        "Building the Infrastructure management framework for New Data centers using puppet, Docker images, Google Kubernetes Engine, Terraform enterprise and Google cloud IP."
      ]
    },
    {
      title: "Senior Automation Engineer",
      company: "Standard Chartered Bank",
      location: "Chennai", 
      period: "Mar 2020 — May 2022",
      highlights: [
        "Designed and implemented automation frameworks for Unix, Cloud, DevOps, compliance, and applications.",
        "Collaborated with cross-functional teams within the Digital Transformation Center of Excellence (CoE).",
        "Architected continuous delivery pipelines for Puppet Enterprise, PuppetDB APIs, Hiera lookups, and Power BI reporting.",
        "Developed Puppet modules, tasks, custom facts, and providers for environment setup and application onboarding.",
        "Performed system hardening and security best practices to ensure the integrity and confidentiality of data."
      ]
    },
    {
      title: "Senior Principal IT Infrastructure Specialist",
      company: "Symantec, Chennai",
      location: "Chennai",
      period: "Jan 2015 — Mar 2020",
      highlights: [
        "Worked as DevOps/SRE/ AWS sysOps, automation and release engineer for Email Security products.",
        "Developed continuous integration and continuous Delivery Pipelines using Jenkins, Puppet, CVS, GIT, Python and Shell script",
        "Worked on SCM tools using GitHub, Artifactory, Jenkins, SQL, MySQL",
        "Responsible for deployment and maintenance of highly available Dev, QA & Production environments in AWS cloud"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* AI-Inspired Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Headline */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-2xl rounded-3xl"></div>
          <h2 className="relative text-4xl font-bold text-slate-800 p-6 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 inline-block">
            <span className="flex items-center gap-3">
              <Activity className="text-blue-600 animate-pulse" size={32} />
              Professional Journey
              <Zap className="text-indigo-600 animate-pulse delay-500" size={28} />
            </span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-200/50 relative overflow-hidden group">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <Zap className="text-blue-400 animate-pulse" size={20} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-slate-500 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-slate-500 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-100/50">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start p-3 bg-white/40 backdrop-blur-sm rounded-lg border border-blue-100/30">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{ animationDelay: `${idx * 200}ms` }}></div>
                    <span className="text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
