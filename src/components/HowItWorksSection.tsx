
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HowItWorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const steps = [
    {
      number: "01",
      title: "You Partner with Clifford",
      description: "Initial consultation and partnership agreement. We understand your school's unique needs and vision.",
      cartoon: "🤝",
      bgColor: "from-kid-blue/90 to-kid-purple/90",
      bgAccent: "bg-soft-blue/40",
      textColor: "text-white"
    },
    {
      number: "02", 
      title: "We Set Up Central Operations",
      description: "Complete integration of admissions, attendance, staffing, and administrative systems for your school.",
      cartoon: "🏫",
      bgColor: "from-kid-green/90 to-kid-blue/90",
      bgAccent: "bg-gentle-mint/40",
      textColor: "text-white"
    },
    {
      number: "03",
      title: "We Provide Support & Branding",
      description: "Standby teachers, tech support, modern learning programs, and optional Clifford branding elements.",
      cartoon: "🎓",
      bgColor: "from-kid-orange/90 to-kid-pink/90",
      bgAccent: "bg-light-pink/40",
      textColor: "text-white"
    },
    {
      number: "04",
      title: "Your School Grows",
      description: "Less hassle, more impressed parents, improved efficiency, and enhanced student & parent satisfaction.",
      cartoon: "📈",
      bgColor: "from-kid-yellow/90 to-kid-orange/90",
      bgAccent: "bg-pale-yellow/40",
      textColor: "text-gray-800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-warm-cream via-white to-gentle-mint/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-kid-pink/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-kid-blue/40 rounded-full blur-xl animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-kid-purple to-kid-pink px-6 py-3 rounded-full mb-6 shadow-xl border-2 border-white">
            <span className="font-handwritten text-lg font-bold text-white drop-shadow-sm">🚀 How It Works</span>
          </div>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-800 mb-6 drop-shadow-sm">
            How 
            <span className="bg-gradient-to-r from-kid-blue to-kid-purple bg-clip-text text-transparent"> Clifford Supports</span>
            <br />Your School
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
            Simple, proven process to transform your school operations! 🌟
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`min-w-full ${step.bgAccent} relative overflow-hidden`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-95`}></div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 right-8 text-6xl animate-bounce-gentle">{step.cartoon}</div>
                    <div className="absolute bottom-8 left-8 text-4xl animate-float" style={{animationDelay: '1s'}}>✨</div>
                    <div className="absolute top-1/3 left-1/4 text-3xl animate-wiggle" style={{animationDelay: '2s'}}>🌟</div>
                  </div>

                  <div className="relative z-10 p-12 lg:p-16 text-center">
                    {/* Step number circle */}
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-8 flex items-center justify-center border-2 border-white/30 animate-bounce-gentle">
                      <span className="font-heading font-bold text-3xl text-white drop-shadow-lg">
                        {step.number}
                      </span>
                    </div>

                    <div className="text-8xl mb-8 animate-bounce-gentle drop-shadow-lg">
                      {step.cartoon}
                    </div>
                    
                    <h3 className={`font-heading font-bold text-4xl lg:text-5xl ${step.textColor} mb-6 drop-shadow-lg`}>
                      {step.title}
                    </h3>
                    
                    <p className={`font-handwritten text-xl lg:text-2xl ${step.textColor} opacity-90 leading-relaxed max-w-2xl mx-auto drop-shadow-md`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm border-2 border-kid-blue hover:bg-kid-blue hover:text-white transition-all duration-300 shadow-xl hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm border-2 border-kid-blue hover:bg-kid-blue hover:text-white transition-all duration-300 shadow-xl hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  index === currentSlide
                    ? 'bg-kid-blue border-kid-blue shadow-lg scale-125'
                    : 'bg-white border-gray-300 hover:bg-kid-blue/50 hover:border-kid-blue'
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-kid-blue to-kid-purple h-2 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${((currentSlide + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
