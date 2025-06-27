
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PitchDeckSection from "@/components/PitchDeckSection";
import InvestorsSection from "@/components/InvestorsSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="why-partner">
          <WhyPartnerSection />
        </div>
        
        <div id="business-model">
          <BusinessModelSection />
        </div>
        
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <PitchDeckSection />
        
        <div id="investors">
          <InvestorsSection />
        </div>
        
        <FinalCTASection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-sm">E</span>
                </div>
                <span className="font-heading font-bold text-xl">EduScale</span>
              </div>
              <p className="font-body text-gray-300 text-sm">
                Transforming schools into future-ready institutions through centralized operations and modern learning programs.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-brand-teal transition-colors">School Operations</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Student Programs</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Teacher Support</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Admissions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-brand-teal transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>hello@eduscale.in</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-gray-400">
              © 2024 EduScale. All rights reserved. Building the future of education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
