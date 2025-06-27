
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <WhyPartnerSection />
        
        <HowItWorksSection />
        
        <PartnerSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-sm">C</span>
                </div>
                <span className="font-heading font-bold text-xl">Clifford</span>
              </div>
              <p className="font-body text-gray-300 text-sm">
                Transforming schools through centralized operations and modern learning programs.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-brand-teal transition-colors">School Operations</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Student Programs</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Teacher Support</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Admissions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>hello@clifford.in</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-gray-400">
              © 2024 Clifford. All rights reserved. Building the future of education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
