
import { Building, GraduationCap, Users, TrendingUp } from "lucide-react";

const WhyPartnerSection = () => {
  const features = [
    {
      icon: Building,
      title: "All-In-One School HQ",
      description: "We run your backend operations - from admissions to attendance, so you can focus on education excellence."
    },
    {
      icon: GraduationCap,
      title: "Future-Focused Learning",
      description: "Career-ready programs including IPMAT prep, design thinking, and soft skills development for students."
    },
    {
      icon: Users,
      title: "Standby Teacher Service",
      description: "No more last-minute staff shortages. Our substitute teacher network ensures continuity in education."
    },
    {
      icon: TrendingUp,
      title: "Admissions Support",
      description: "Centralized marketing and admissions support to help grow your student base and brand recognition."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
            Why Partner With Us?
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Join the revolution that's transforming how private schools operate and scale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-brand-off-white to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">
                {feature.title}
              </h3>
              
              <p className="font-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
