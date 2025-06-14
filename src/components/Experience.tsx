
import { Calendar, MapPin } from "lucide-react";

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
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
          Professional Journey
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-slate-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-slate-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
