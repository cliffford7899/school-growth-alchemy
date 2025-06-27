
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Download, Calendar } from "lucide-react";

const PartnerSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partner" className="py-20 bg-gradient-to-br from-brand-mint to-brand-off-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-6">
            Bring Clifford to Your Campus
          </h2>
          
          <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed">
            We're onboarding our first 15 schools. Let's build this future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Button>
            
            <Button 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Partner
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-brand-navy text-brand-navy hover:bg-gradient-to-r hover:from-brand-navy hover:to-brand-navy/90 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-navy/25"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
          
          <div className="mt-12 p-8 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            <h3 className="font-heading font-bold text-2xl text-brand-navy mb-4">
              Ready to Transform Your School?
            </h3>
            <p className="font-body text-gray-600 leading-relaxed">
              Join innovative school leaders who are already building the future of education with Clifford. 
              No upfront costs, no long-term contracts — just better operations and happier students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
