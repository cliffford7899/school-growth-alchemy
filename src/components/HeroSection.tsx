
import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";

const HeroSection = () => {
  const floatingShapes = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full animate-float opacity-60`}
      style={{
        width: `${3 + (i % 4) * 1.5}rem`,
        height: `${3 + (i % 4) * 1.5}rem`,
        background: i % 4 === 0 
          ? 'linear-gradient(135deg, #00B2A9, #273C75)' 
          : i % 4 === 1
          ? 'linear-gradient(135deg, #FF6600, #FFD93D)'
          : i % 4 === 2
          ? 'linear-gradient(135deg, #C8F7DC, #00B2A9)'
          : 'linear-gradient(135deg, #FFD93D, #FF6600)',
        left: `${10 + (i * 12)}%`,
        top: `${15 + (i % 3) * 25}%`,
        animationDelay: `${i * 0.7}s`,
        animationDuration: `${4 + (i % 3)}s`
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
      {/* Enhanced floating background shapes */}
      {floatingShapes}
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-brand-yellow/20 rounded-full blur-xl animate-pulse-scale" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-brand-teal/30 to-brand-mint/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-brand-navy mb-6 leading-tight">
            We Help Schools Grow{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange">Smarter</span>, Not Harder
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
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-brand-teal via-brand-navy to-brand-teal rounded-3xl shadow-2xl flex items-center justify-center animate-pulse-scale relative overflow-hidden">
              {/* Inner decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-brand-orange/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              
              <div className="text-white text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Users className="w-12 h-12" />
                </div>
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
