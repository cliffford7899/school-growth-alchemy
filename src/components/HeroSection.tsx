
import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";

const HeroSection = () => {
  const floatingShapes = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-orange/20 animate-float`}
      style={{
        left: `${20 + (i * 15)}%`,
        top: `${10 + (i % 3) * 20}%`,
        animationDelay: `${i * 0.5}s`
      }}
    />
  ));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-off-white via-white to-brand-mint overflow-hidden">
      {/* Floating background shapes */}
      {floatingShapes}
      
      <div className="container mx-auto px-4 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <h1 className="font-heading font-extrabold text-4xl lg:text-6xl text-brand-navy mb-6 leading-tight">
            Transform Your School into a{" "}
            <span className="text-brand-teal">Future-Ready</span> Institution
          </h1>
          
          <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
            Centralized operations. Modern student programs. Branded school experiences.
            Join the education revolution that's helping schools scale efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-brand-teal to-brand-navy rounded-3xl shadow-2xl flex items-center justify-center animate-pulse-scale">
              <div className="text-white text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2">10,000+</h3>
                <p className="font-body text-lg opacity-90">Students Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
