
import { ArrowRight, DollarSign, Users, Building2 } from "lucide-react";

const BusinessModelSection = () => {
  const modelPoints = [
    {
      icon: Building2,
      title: "Partnership Model",
      description: "We partner with private schools and bring them under one scalable ecosystem, acting like the 'OYO of schools'."
    },
    {
      icon: Users,
      title: "Centralized Operations",
      description: "Our HQ handles admissions, biometric attendance, substitute teachers, fee collection, and curriculum scheduling."
    },
    {
      icon: DollarSign,
      title: "Revenue Model",
      description: "Monthly management fee per student. Asset-light model built for rapid city-by-city expansion."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-mint/30 to-brand-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-6">
            Our Business Model
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            We transform schools into efficient, scalable institutions while maintaining their unique identity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {modelPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-navy rounded-lg mb-6 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">
                {point.title}
              </h3>
              
              <p className="font-body text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-brand-navy mb-6">
                Complete Ecosystem Support
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-brand-teal mr-3" />
                  <span className="font-body text-gray-700">Future-focused student programs (IPMAT prep, career guidance)</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-brand-teal mr-3" />
                  <span className="font-body text-gray-700">Optional flexible uniforms with branded merchandise</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-brand-teal mr-3" />
                  <span className="font-body text-gray-700">Centralized academic & administrative support</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-brand-teal mr-3" />
                  <span className="font-body text-gray-700">On-demand substitute teacher network</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 rounded-2xl p-8">
              <h4 className="font-heading font-bold text-xl text-brand-navy mb-4">
                Growth Timeline
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-gray-700">Phase 1</span>
                  <span className="font-bold text-brand-navy">10-15 schools</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-gray-700">6-9 months</span>
                  <span className="font-bold text-brand-navy">50+ schools</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-gray-700">Model</span>
                  <span className="font-bold text-brand-teal">Asset-light</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
