
import { Button } from "@/components/ui/button";
import { Download, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  // Reduced floating shapes from 8 to 4
  const floatingShapes = Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full animate-float opacity-40`}
      style={{
        width: `${4 + (i % 3) * 2}rem`,
        height: `${4 + (i % 3) * 2}rem`,
        background: i % 2 === 0 
          ? 'linear-gradient(135deg, #00B2A9, #273C75)' 
          : 'linear-gradient(135deg, #FF6600, #FFD93D)',
        left: `${15 + (i * 20)}%`,
        top: `${20 + (i % 2) * 30}%`,
        animationDelay: `${i * 1.2}s`,
        animationDuration: `${5 + (i % 2)}s`
      }}
    />
  ));

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
      
      {/* Reduced floating background shapes */}
      {floatingShapes}
      
      <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-brand-navy mb-6 leading-tight">
            We Help Schools Grow{" "}
            <span className="text-brand-navy">Smarter</span>, Not Harder
          </h1>
          
          <p className="font-body text-xl text-gray-700 mb-8 leading-relaxed">
            Clifford centralizes your school operations — from admissions to staffing to student enrichment — so you can focus on what matters: education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gradient-to-r from-brand-teal to-brand-teal/90 hover:from-brand-teal/90 hover:to-brand-teal text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-teal/25"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#partner')}
              variant="outline"
              className="border-2 border-brand-orange text-brand-orange hover:bg-gradient-to-r hover:from-brand-orange hover:to-brand-orange/90 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-orange/25"
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-brand-navy text-brand-navy hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-navy/90 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-navy/25"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Junior school learning with tech image */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-brand-teal via-brand-navy to-brand-teal rounded-3xl shadow-2xl flex items-center justify-center animate-pulse-scale relative overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
