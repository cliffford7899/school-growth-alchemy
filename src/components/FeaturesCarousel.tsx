
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      title: "One Centralized HQ",
      description: "We manage admissions, attendance, substitute teachers, and more — from one expert team.",
      cartoon: "🏢",
      bgColor: "from-kid-blue/90 to-kid-purple/90",
      bgAccent: "bg-soft-blue/40"
    },
    {
      title: "Future-Ready Curriculum", 
      description: "Introduce optional programs like aptitude prep, design thinking, and entrepreneurship.",
      cartoon: "💡",
      bgColor: "from-kid-green/90 to-kid-blue/90",
      bgAccent: "bg-gentle-mint/40"
    },
    {
      title: "Branded Student Experience",
      description: "Offer students the option to wear school merchandise instead of rigid uniforms.",
      cartoon: "👕",
      bgColor: "from-kid-orange/90 to-kid-pink/90",
      bgAccent: "bg-light-pink/40"
    },
    {
      title: "Instant Teacher Backup",
      description: "No more panic when a teacher is absent — our trained interns step in on-demand.",
      cartoon: "👨‍🏫",
      bgColor: "from-kid-yellow/90 to-kid-orange/90",
      bgAccent: "bg-pale-yellow/40"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream via-white to-gentle-mint/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-kid-pink/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-kid-blue/40 rounded-full blur-xl animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-kid-purple to-kid-pink px-6 py-3 rounded-full mb-6 shadow-xl border-2 border-white">
            <span className="font-handwritten text-lg font-bold text-white drop-shadow-sm">✨ What We Offer</span>
          </div>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-800 mb-6 drop-shadow-sm">
            Amazing 
            <span className="bg-gradient-to-r from-kid-blue to-kid-purple bg-clip-text text-transparent"> Features</span>
            <br />Just for You!
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
            Discover all the wonderful things we can do for your school! 🌟
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
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`min-w-full ${feature.bgAccent} relative overflow-hidden`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-95`}></div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 right-8 text-6xl animate-bounce-gentle">{feature.cartoon}</div>
                    <div className="absolute bottom-8 left-8 text-4xl animate-float" style={{animationDelay: '1s'}}>✨</div>
                    <div className="absolute top-1/3 left-1/4 text-3xl animate-wiggle" style={{animationDelay: '2s'}}>🌟</div>
                  </div>

                  <div className="relative z-10 p-12 lg:p-16 text-center">
                    <div className="text-8xl mb-8 animate-bounce-gentle drop-shadow-lg">
                      {feature.cartoon}
                    </div>
                    
                    <h3 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    
                    <p className="font-handwritten text-xl lg:text-2xl text-white opacity-90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                      {feature.description}
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
            {features.map((_, index) => (
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
              style={{ width: `${((currentSlide + 1) / features.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
