
import { Building, GraduationCap, Users, TrendingUp } from "lucide-react";

const WhyPartnerSection = () => {
  const features = [
    {
      icon: Building,
      title: "One HQ for All Operations",
      description: "Admissions, fee tracking, teacher replacement, and attendance management — all handled by Clifford's centralized system.",
      emoji: "🏢",
      color: "from-kid-blue to-kid-purple"
    },
    {
      icon: GraduationCap,
      title: "Modern Learning Add-ons",
      description: "Career-prep programs, workshops, and branding that help your students stand out and your school grow its reputation.",
      emoji: "🎓",
      color: "from-kid-green to-kid-blue"
    },
    {
      icon: Users,
      title: "Optional Merchandise Model",
      description: "Flexible dress code with Clifford branding options that create additional revenue streams for your school.",
      emoji: "👕",
      color: "from-kid-orange to-kid-pink"
    },
    {
      icon: TrendingUp,
      title: "Zero Extra Work for You",
      description: "We handle the backend operations so you can focus on teaching excellence and student development.",
      emoji: "📈",
      color: "from-kid-yellow to-kid-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-warm-cream to-gentle-mint relative overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-kid-pink rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-kid-blue rounded-full blur-xl animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-kid-yellow rounded-full blur-lg animate-pulse-scale"></div>
      </div>

      {/* Floating educational doodles */}
      <div className="absolute top-16 right-16 text-4xl animate-wiggle opacity-30">📚</div>
      <div className="absolute bottom-24 left-24 text-3xl animate-float opacity-40" style={{animationDelay: '1s'}}>✏️</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-bounce-gentle opacity-35" style={{animationDelay: '2s'}}>🌟</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-kid-purple to-kid-pink px-6 py-3 rounded-full mb-6 shadow-xl border-4 border-white">
            <span className="font-handwritten text-lg font-bold text-white">🤝 Partnership Benefits</span>
          </div>
          <h2 className="font-heading font-black text-5xl lg:text-6xl text-gray-800 mb-6">
            Why Partner With 
            <span className="bg-gradient-to-r from-kid-blue to-kid-purple bg-clip-text text-transparent"> Clifford?</span>
          </h2>
          <p className="font-body text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join the revolution that's transforming how private schools operate and scale! 🚀
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group text-center p-8 rounded-3xl bg-gradient-to-br ${feature.color} hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 animate-fade-in-up border-6 border-white relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle opacity-80">
                {feature.emoji}
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <feature.icon className="w-10 h-10 text-gray-700" />
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-white mb-4 drop-shadow-lg">
                  {feature.title}
                </h3>
                
                <p className="font-handwritten text-white/90 leading-relaxed text-lg drop-shadow-md">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/60 rounded-full"></div>
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/80 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
