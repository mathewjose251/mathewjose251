
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              The Mentor, Maker & Mind Explorer
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                A 22-year DevOps veteran with one foot in the cloud and the other stepping boldly into the world of AI. 
                Whether it's Terraforming infrastructure or reimagining emotional wellness on Indian beaches, 
                I'm equally at home debugging code and designing soul-touching workshops.
              </p>
              <p>
                I'm the kind of person who thinks deeply — about parenting, purpose, and progress. 
                From teaching kids that joy starts within, to coaching underprivileged students through Notebook 2025, 
                I blend empathy with engineering in ways few can.
              </p>
              <p>
                With dreams rooted in India, I'm reskilling, reinventing, 
                and rewriting what "tech for good" looks like. Curious, committed, and creatively disruptive — 
                I'm not just chasing a job. I'm designing a legacy.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  MJ
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">DevOps Architect</h3>
                <p className="text-slate-600 mb-4">Chennai, India</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">22+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">AI</div>
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
