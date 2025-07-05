
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
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
        
        <FeaturesCarousel />
        
        <HowItWorksSection />
        
        <PartnerSection />
        
        <ContactSection />
      </main>

      {/* Improved footer with better readability */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-24 h-24 bg-kid-yellow rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-kid-pink rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-kid-green rounded-full animate-pulse-scale"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <span className="font-heading font-black text-3xl bg-gradient-to-r from-kid-yellow to-kid-orange bg-clip-text text-transparent">
                  Clifford
                </span>
                <span className="text-2xl animate-wiggle">🎓</span>
              </div>
              <p className="font-body text-gray-300 text-lg leading-relaxed">
                Transforming schools through centralized operations and modern learning programs. 🚀
                <br /><br />
                <span className="text-kid-yellow font-semibold">
                  Developed by Avi Mohan Kr Shuklaa
                </span>
                <br />
                <span className="text-kid-green">www.avishuklaa.in</span>
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="font-heading font-bold text-2xl mb-6 text-kid-yellow">🎯 Services</h4>
              <ul className="space-y-3 text-lg">
                <li><a href="#" className="hover:text-kid-green transition-colors duration-300 flex items-center text-gray-300 hover:text-white"><span className="mr-2">🏫</span>School Operations</a></li>
                <li><a href="#" className="hover:text-kid-blue transition-colors duration-300 flex items-center text-gray-300 hover:text-white"><span className="mr-2">👥</span>Student Programs</a></li>
                <li><a href="#" className="hover:text-kid-pink transition-colors duration-300 flex items-center text-gray-300 hover:text-white"><span className="mr-2">👨‍🏫</span>Teacher Support</a></li>
                <li><a href="#" className="hover:text-kid-orange transition-colors duration-300 flex items-center text-gray-300 hover:text-white"><span className="mr-2">📝</span>Admissions</a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h4 className="font-heading font-bold text-2xl mb-6 text-kid-pink">📞 Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-lg">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-300">shushanktiwari@outlook.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="font-body text-lg text-gray-300 animate-fade-in-up">
              © 2024 <span className="text-kid-yellow font-bold">Clifford</span>. All rights reserved. 
              <span className="text-kid-green"> Building the future of education! </span>
              <span className="text-2xl animate-bounce-gentle inline-block">🌟</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
