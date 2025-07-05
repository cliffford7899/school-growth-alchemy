
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openForm = () => {
    // Replace this URL with your actual form link
    window.open('YOUR_FORM_LINK_HERE', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white via-warm-cream to-gentle-mint/20 overflow-hidden pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-16 w-20 h-20 bg-kid-yellow/40 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-48 right-24 w-24 h-24 bg-kid-pink/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-64 left-32 w-16 h-16 bg-kid-blue/40 rounded-full animate-pulse-scale"></div>
        <div className="absolute bottom-32 right-40 w-20 h-20 bg-kid-green/30 rounded-full animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Wave background pattern with reduced opacity */}
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      {/* Floating educational elements */}
      <div className="absolute top-40 right-20 text-4xl md:text-5xl animate-wiggle hidden sm:block opacity-50">📚</div>
      <div className="absolute top-56 left-24 text-3xl md:text-4xl animate-float hidden sm:block opacity-50" style={{animationDelay: '1s'}}>🎓</div>
      <div className="absolute bottom-48 right-32 text-2xl md:text-3xl animate-bounce-gentle hidden sm:block opacity-50" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute bottom-40 left-20 text-3xl md:text-4xl animate-wiggle hidden sm:block opacity-50" style={{animationDelay: '0.5s'}}>🌟</div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center bg-gradient-to-r from-kid-blue to-kid-green px-6 py-3 rounded-full mb-8 shadow-xl border-2 border-white animate-bounce-in">
            <span className="text-lg font-bold text-white drop-shadow-sm">🎓 Reimagining Schools back to Scholé</span>
          </div>
          
          <div className="space-y-4 mb-8">
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight drop-shadow-sm">
              WE HELP BUILD
            </h1>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-kid-blue via-kid-purple to-kid-pink bg-clip-text text-transparent leading-tight">
              EFFICIENT SCHOOLS
            </h1>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight drop-shadow-sm">
              POWER PROGRESS
            </h1>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-kid-green via-kid-yellow to-kid-orange bg-clip-text text-transparent leading-tight">
              POWER LEARNING
            </h1>
          </div>

          <p className="font-body text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl drop-shadow-sm">
            Clifford centralizes your school operations from admissions to staffing to student enrichment so you can focus on what matters: 
            <span className="font-bold text-kid-blue"> education</span> ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button 
              className="bg-gradient-to-r from-kid-blue to-kid-purple hover:from-kid-purple hover:to-kid-pink text-white px-10 py-6 rounded-full font-bold text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-white"
              size="lg"
            >
              <Download className="mr-3 h-6 w-6" />
              🚀 Get Started
            </Button>
            
            <Button 
              onClick={openForm}
              className="bg-gradient-to-r from-kid-orange to-kid-yellow hover:from-kid-yellow hover:to-kid-green text-white px-10 py-6 rounded-full font-bold text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-white"
              size="lg"
            >
              <Calendar className="mr-3 h-6 w-6" />
              📞 Schedule a Call
            </Button>
          </div>
          
          {/* Fun stats section */}
          <div className="flex items-center justify-center lg:justify-start space-x-8 animate-fade-in-up">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-kid-purple to-kid-pink rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-kid-blue to-kid-green rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-kid-yellow to-kid-orange rounded-full border-4 border-white shadow-lg"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-kid-green to-kid-blue rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-kid-blue drop-shadow-sm">15+ Schools</div>
              <div className="text-lg text-gray-600">Ready to Partner! 🎉</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center relative animate-fade-in-up">
          <div className="relative">
            {/* Main image container */}
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white to-soft-blue/20 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy kids learning with technology"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-kid-blue/5 via-transparent to-kid-pink/5 rounded-2xl" />
            </div>
            
            {/* Floating notification cards */}
            <div className="absolute -top-2 -left-3 md:-top-4 md:-left-6 bg-gradient-to-r from-kid-green to-kid-blue rounded-2xl p-3 md:p-4 shadow-2xl border-2 border-white animate-bounce-gentle">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-kid-yellow rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-bold text-white drop-shadow-sm">Onboardings Open! 🎉</span>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-r from-kid-orange to-kid-pink rounded-2xl p-3 md:p-4 shadow-2xl border-2 border-white animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-kid-yellow to-kid-green rounded-xl flex items-center justify-center animate-wiggle">
                  <span className="text-white text-sm md:text-lg">✅</span>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-white drop-shadow-sm">Modern Learning</p>
                  <p className="text-xs text-white/90">Ready to Launch! 🚀</p>
                </div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-kid-yellow to-kid-orange rounded-3xl rotate-12 shadow-xl animate-wiggle opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-kid-purple to-kid-pink rounded-2xl -rotate-12 shadow-xl animate-bounce-gentle opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
