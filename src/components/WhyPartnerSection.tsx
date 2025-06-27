
import { Building, GraduationCap, Users, TrendingUp } from "lucide-react";

const WhyPartnerSection = () => {
  const features = [
    {
      icon: Building,
      title: "One HQ for All Operations",
      description: "Admissions, fee tracking, teacher replacement, and attendance management — all handled by Clifford's centralized system."
    },
    {
      icon: GraduationCap,
      title: "Modern Learning Add-ons",
      description: "Career-prep programs, workshops, and branding that help your students stand out and your school grow its reputation."
    },
    {
      icon: Users,
      title: "Optional Merchandise Model",
      description: "Flexible dress code with Clifford branding options that create additional revenue streams for your school."
    },
    {
      icon: TrendingUp,
      title: "Zero Extra Work for You",
      description: "We handle the backend operations so you can focus on teaching excellence and student development."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
            Why Partner With Clifford?
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
