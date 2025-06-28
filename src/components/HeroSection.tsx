
import { Button } from "@/components/ui/button";
import { Download, Users, Calendar } from "lucide-react";

const HeroSection = () => {
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 overflow-hidden pt-20">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-teal-200 to-green-200 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-35 blur-md"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-lg"></div>
      </div>
      
      {/* Floating elements inspired by the reference */}
      <div className="absolute top-32 right-32 text-4xl animate-float">🚀</div>
      <div className="absolute top-64 left-16 text-3xl animate-float" style={{animationDelay: '1s'}}>⭐</div>
      <div className="absolute bottom-48 right-16 text-2xl animate-float" style={{animationDelay: '2s'}}>✨</div>
      <div className="absolute bottom-32 left-32 text-3xl animate-float" style={{animationDelay: '0.5s'}}>🎯</div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <span className="text-sm font-medium text-gray-600">🎓 Better future for your kids</span>
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl lg:text-7xl text-gray-900 mb-6 leading-tight">
            We Help Schools{" "}
            <span className="bg-gradient-to-r from-brand-teal via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Grow Smarter
            </span>
            <br />
            Not Harder
          </h1>
          
          <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Clifford centralizes your school operations — from admissions to staffing to student enrichment — so you can focus on what matters: education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              className="bg-gradient-to-r from-brand-teal to-blue-500 hover:from-brand-teal/90 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-brand-teal/25"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            
            <Button 
              onClick={openForm}
              variant="outline"
              className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-brand-teal hover:text-brand-teal px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
          
          {/* Stats section inspired by reference */}
          <div className="flex items-center space-x-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-sm font-medium text-gray-600">15+ Schools Ready to Partner</span>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative">
            {/* Main image container with modern styling */}
            <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy kids learning with technology"
                className="w-full h-full object-cover rounded-3xl"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-teal-500/20 rounded-3xl" />
            </div>
            
            {/* Floating notification cards inspired by reference */}
            <div className="absolute -top-4 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Admissions Open</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Modern Learning</p>
                  <p className="text-xs text-gray-500">Ready to Launch</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl rotate-12 shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl -rotate-12 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
