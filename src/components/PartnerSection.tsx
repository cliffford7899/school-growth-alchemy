
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Download, Calendar } from "lucide-react";

const PartnerSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openForm = () => {
    // Replace this URL with your actual form link
    window.open('YOUR_FORM_LINK_HERE', '_blank');
  };

  return (
    <section id="partner" className="py-20 bg-gradient-to-br from-brand-mint to-brand-off-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-teal-200 to-green-200 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg border border-white/20">
            <span className="text-lg font-semibold text-brand-teal">🚀 Join the Future of Education</span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-gray-900 mb-6">
            Bring Clifford to Your Campus
          </h2>
          
          <p className="font-body text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            We're onboarding our first 15 schools. Let's build this future together and transform education for the next generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              className="bg-gradient-to-r from-brand-teal to-blue-500 hover:from-brand-teal/90 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              size="lg"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Pitch Deck
            </Button>
            
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              size="lg"
            >
              <Users className="mr-3 h-6 w-6" />
              Become a Partner
            </Button>
            
            <Button 
              onClick={openForm}
              variant="outline"
              className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-brand-teal hover:text-brand-teal px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              size="lg"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Schedule a Call
            </Button>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl">🎓</div>
              <div className="absolute top-4 right-4 text-4xl">📚</div>
              <div className="absolute bottom-4 left-4 text-3xl">✨</div>
              <div className="absolute bottom-4 right-4 text-5xl">🚀</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-6">
                Ready to Transform Your School?
              </h3>
              <p className="font-body text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join innovative school leaders who are already building the future of education with Clifford. 
                No upfront costs, no long-term contracts — just better operations, happier students, and a brighter tomorrow for education.
              </p>
              
              {/* Trust indicators */}
              <div className="flex justify-center items-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal">15+</div>
                  <div className="text-sm text-gray-500">Partner Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal">100%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-teal">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
