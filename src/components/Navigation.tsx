
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Partner With Us", href: "#partner" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openForm = () => {
    // Replace this URL with your actual form link
    window.open('YOUR_FORM_LINK_HERE', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-4 border-gradient-rainbow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Fixed orientation */}
          <div className="flex items-center animate-bounce-in">
            <img 
              src="https://i.postimg.cc/CMcdHNBW/CLIFFORD-FINAL-LOGO.png" 
              alt="Clifford Logo" 
              className="h-14 w-auto object-contain hover:scale-105 transition-all duration-200"
              style={{ transform: 'scaleY(1)' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-heading font-bold text-gray-700 hover:text-kid-blue transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-kid-pink after:to-kid-blue after:transition-all after:duration-200 hover:after:w-full after:rounded-full py-2 px-3 hover:bg-warm-cream/50 rounded-full animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA - Reduced animation speed */}
          <div className="hidden md:block animate-fade-in-up">
            <Button 
              onClick={openForm}
              className="bg-gradient-to-r from-kid-orange to-kid-pink hover:from-kid-pink hover:to-kid-purple text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border-4 border-white"
            >
              🤝 Partner With Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-full hover:bg-warm-cream transition-colors bg-gradient-to-r from-kid-blue to-kid-green text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-warm-cream to-soft-lavender border-t-4 border-kid-pink py-6 rounded-b-3xl shadow-2xl animate-slide-in-left">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-heading font-bold text-gray-700 hover:text-kid-blue transition-colors duration-200 px-6 text-left py-3 rounded-2xl hover:bg-white/80 mx-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={openForm}
                className="bg-gradient-to-r from-kid-orange to-kid-pink hover:from-kid-pink hover:to-kid-purple text-white px-6 py-4 rounded-full font-bold mx-4 mt-4 shadow-xl border-4 border-white"
              >
                🤝 Partner With Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
