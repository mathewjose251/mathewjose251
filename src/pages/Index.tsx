
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Impact />
      <Contact />
    </div>
  );
};

export default Index;
