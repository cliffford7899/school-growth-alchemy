
import { Building2, Lightbulb, Users2, Calendar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Building2,
      title: "One Centralized HQ",
      description: "We manage admissions, attendance, substitute teachers, and more — from one expert team."
    },
    {
      icon: Lightbulb,
      title: "Future-Ready Curriculum Add-Ons", 
      description: "Introduce optional programs like aptitude prep, design thinking, and entrepreneurship."
    },
    {
      icon: Users2,
      title: "Branded Student Experience",
      description: "Offer students the option to wear school merchandise instead of rigid uniforms."
    },
    {
      icon: Calendar,
      title: "Instant Teacher Backup",
      description: "No more panic when a teacher is absent — our trained interns step in on-demand."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-mint/30 via-white to-brand-off-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">📚</div>
        <div className="absolute top-32 right-16 text-4xl">💡</div>
        <div className="absolute bottom-20 left-20 text-5xl">🎨</div>
        <div className="absolute bottom-32 right-32 text-3xl">⭐</div>
        <div className="absolute top-1/2 left-1/4 text-2xl">✨</div>
      </div>
      
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,178,169,0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-6">
            🚀 What Makes Clifford Different
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another education platform — we're your school's growth partner
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 border-2 border-transparent hover:border-brand-teal/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Floating icon background */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-navy rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="font-body text-gray-600 leading-relaxed text-center text-sm">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-brand-yellow rounded-full opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-brand-orange rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
