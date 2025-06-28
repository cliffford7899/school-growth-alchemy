
import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-brand-off-white via-white to-brand-mint overflow-hidden">
      {/* Dotted white background pattern inspired by Tata ClassEdge */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Subtle kids-themed decorative elements */}
      <div className="absolute top-10 left-10 text-brand-yellow text-4xl opacity-15">⭐</div>
      <div className="absolute top-32 right-20 text-brand-orange text-3xl opacity-15">🎨</div>
      <div className="absolute bottom-40 left-20 text-brand-teal text-4xl opacity-15">📚</div>
      <div className="absolute bottom-20 right-40 text-brand-yellow text-2xl opacity-15">✨</div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-brand-navy mb-6 leading-tight">
            We Help Schools Grow{" "}
            <span className="text-brand-navy bg-gradient-to-r from-brand-teal to-brand-navy bg-clip-text text-transparent">Smarter</span>, Not Harder
          </h1>
          
          <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
            Clifford centralizes your school operations — from admissions to staffing to student enrichment — so you can focus on what matters: education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-teal/25"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#partner')}
              variant="outline"
              className="border-2 border-brand-orange text-brand-orange hover:bg-gradient-to-r hover:from-brand-orange hover:to-brand-orange/90 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-orange/25"
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Junior school learning with tech image - static, no animation */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-brand-teal via-brand-navy to-brand-teal rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Junior school students learning with technology"
                className="w-full h-full object-cover rounded-3xl opacity-90"
              />
              
              {/* Overlay with branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent rounded-3xl" />
              
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-heading font-bold text-2xl mb-2">Building</h3>
                <p className="font-body text-lg opacity-90">The Future of Education</p>
              </div>
            </div>
            
            {/* Playful kids-themed corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-brand-yellow rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-orange rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-teal rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-brand-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
