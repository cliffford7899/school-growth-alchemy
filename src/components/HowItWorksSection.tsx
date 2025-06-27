
import { UserCheck, Rocket, Settings, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      number: "01",
      title: "School Signs Up",
      description: "Initial consultation and partnership agreement. We understand your school's unique needs and goals."
    },
    {
      icon: Rocket,
      number: "02", 
      title: "Pilot Onboarding",
      description: "Free pilot program to demonstrate our systems. No risk, immediate value demonstration."
    },
    {
      icon: Settings,
      number: "03",
      title: "Full HQ Support",
      description: "Complete integration of all systems - admissions, attendance, teaching support, and operations."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Growth & Success",
      description: "School sees improved efficiency, increased admissions, and enhanced student & parent satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
            How It Works
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, proven process to transform your school operations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-navy"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 border-transparent hover:border-brand-teal/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center relative z-10">
                    <span className="font-heading font-bold text-2xl text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <step.icon className="w-8 h-8 text-brand-navy mx-auto mb-4" />
                    
                    <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="font-body text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-brand-teal" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
