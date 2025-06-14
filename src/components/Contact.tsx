
import { Mail, Phone, Linkedin, MapPin, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're looking for a seasoned DevOps architect, an AI transformation partner, 
            or someone who believes in making technology more human—I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Email</h3>
                <a href="mailto:Mathewjose251@gmail.com" className="text-blue-600 hover:text-blue-800">
                  Mathewjose251@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Phone</h3>
                <a href="tel:+919962603125" className="text-blue-600 hover:text-blue-800">
                  +91 99626 03125
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">WhatsApp</h3>
                <a 
                  href="https://wa.me/919962603125" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800"
                >
                  +91 99626 03125
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/mathewjose251/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  /in/mathewjose251
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Location</h3>
                <p className="text-slate-600">Chennai, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Ready to Collaborate?</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                🚀 <strong>For DevOps & Cloud Projects:</strong> Let's discuss how we can scale your infrastructure 
                and automate your deployment pipelines with enterprise-grade solutions.
              </p>
              <p>
                🤖 <strong>For AI Integration:</strong> Interested in exploring how AI can transform your 
                DevOps practices? I'm always excited to pioneer new approaches.
              </p>
              <p>
                💡 <strong>For Mentoring & Workshops:</strong> Whether it's technical training or 
                human-centered design thinking, let's create something meaningful together.
              </p>
              <p>
                🌍 <strong>For New Opportunities:</strong> Open to discussing roles that blend 
                technical excellence with human impact.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-slate-700 italic">
                "Every conversation is an opportunity to learn, grow, and create something valuable. 
                Let's build not just systems, but relationships that matter."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
