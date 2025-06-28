
import { Zap, Settings, FileText, Shield, Heart, Star } from "lucide-react";

const SupportSection = () => {
  const supportPoints = [
    {
      icon: Zap,
      title: "Complete Equipment Package",
      description: "We supply energy-generating gym cycles bundled with useful devices like lamps, power banks, and fans — ready for use or resale."
    },
    {
      icon: Settings,
      title: "Plug-and-Play Setup",
      description: "Quick and simple to install. No technical background needed."
    },
    {
      icon: FileText,
      title: "Branding & Technical Support",
      description: "From brochures to pitch decks, we help you present Clifford professionally."
    },
    {
      icon: Shield,
      title: "Reliable Backup Energy",
      description: "Ideal for rural or power-unstable areas — ensures learning never stops."
    },
    {
      icon: Heart,
      title: "Student Fitness + Sustainability",
      description: "Encourages physical activity while teaching energy responsibility."
    },
    {
      icon: Star,
      title: "Early Partner Advantage",
      description: "Be among the first to access Clifford innovations, pilots, and features."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
            How Clifford Supports You
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Complete support system designed for school owners and partners
          </p>
        </div>
        
        {/* Support Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {supportPoints.map((point, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-4 text-center">
                  {point.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-gray-600 leading-relaxed text-center">
                  {point.description}
                </p>
              </div>
              
              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
