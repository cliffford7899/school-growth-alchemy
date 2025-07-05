
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      title: "Smart School Operations",
      description: "Streamline admissions, attendance, and daily operations with our intelligent management system",
      cartoon: "🏫",
      bgColor: "from-kid-blue/80 to-kid-purple/80",
      bgAccent: "bg-soft-blue/30",
      textColor: "text-gray-800"
    },
    {
      title: "Modern Learning Programs",
      description: "Engage students with interactive workshops, career prep, and skill-building activities",
      cartoon: "🎓",
      bgColor: "from-kid-green/80 to-kid-blue/80",
      bgAccent: "bg-gentle-mint/30",
      textColor: "text-gray-800"
    },
    {
      title: "Teacher Excellence Support",
      description: "Provide your educators with resources, training, and professional development tools",
      cartoon: "👨‍🏫",
      bgColor: "from-kid-orange/80 to-kid-pink/80",
      bgAccent: "bg-light-pink/30",
      textColor: "text-gray-800"
    },
    {
      title: "Student Success Tracking",
      description: "Monitor progress, celebrate achievements, and support every child's learning journey",
      cartoon: "⭐",
      bgColor: "from-kid-yellow/80 to-kid-orange/80",
      bgAccent: "bg-pale-yellow/30",
      textColor: "text-gray-800"
    },
    {
      title: "Parent Engagement",
      description: "Keep families connected with transparent communication and involvement opportunities",
      cartoon: "👨‍👩‍👧‍👦",
      bgColor: "from-kid-pink/80 to-kid-purple/80",
      bgAccent: "bg-soft-lavender/30",
      textColor: "text-gray-800"
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
          <div className="inline-flex items-center bg-gradient-to-r from-kid-purple/90 to-kid-pink/90 px-6 py-3 rounded-full mb-6 shadow-xl border-2 border-white">
            <span className="text-lg font-bold text-white drop-shadow-sm">✨ What We Offer</span>
          </div>
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-800 mb-6 drop-shadow-sm">
            Transform Your 
            <span className="bg-gradient-to-r from-kid-blue to-kid-purple bg-clip-text text-transparent"> School Experience</span>
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
            Discover how Clifford brings innovation and joy to education! 🌟
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-90`}></div>
                  
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
                    
                    <h3 className={`font-heading font-bold text-4xl lg:text-5xl ${feature.textColor} mb-6 drop-shadow-lg`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`font-body text-xl lg:text-2xl ${feature.textColor} opacity-90 leading-relaxed max-w-2xl mx-auto drop-shadow-md`}>
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
