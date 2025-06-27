
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users2 } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-mint to-brand-teal/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-teal/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-brand-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-brand-navy/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-brand-navy mb-6">
            Let's Build the Future of{" "}
            <span className="text-brand-teal">Education</span> Together
          </h2>
          
          <p className="font-body text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the revolution that's transforming how schools operate, scale, and deliver exceptional education experiences. Your students deserve the future we're building.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              size="lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Schedule a Demo
              <Building className="ml-2 h-6 w-6" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-teal rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">50+</h3>
              <p className="font-body text-gray-600">Schools Ready to Partner</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-navy rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">10K+</h3>
              <p className="font-body text-gray-600">Students Impacted</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-orange rounded-lg mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">90%</h3>
              <p className="font-body text-gray-600">Efficiency Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
