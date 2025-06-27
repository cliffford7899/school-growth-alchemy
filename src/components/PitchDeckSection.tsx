
import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart3 } from "lucide-react";

const PitchDeckSection = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Revenue Model",
      description: "Detailed breakdown of our scalable revenue streams"
    },
    {
      icon: FileText,
      title: "Market Analysis", 
      description: "Comprehensive education sector insights and opportunities"
    },
    {
      icon: Download,
      title: "Growth Strategy",
      description: "Our proven approach to rapid market expansion"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal/10 to-brand-navy/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-6">
              See the Vision Behind the Brand
            </h2>
            <p className="font-body text-xl text-gray-600 mb-12">
              Download our comprehensive pitch deck to understand our revenue model, growth strategy, and partnership opportunities in detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-navy rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-brand-navy mb-2">
                  {highlight.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl animate-fade-in-up">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3 text-left">
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-brand-navy mb-4">
                  Complete Business Overview
                </h3>
                <p className="font-body text-gray-600 text-lg mb-6">
                  Our detailed pitch deck includes financial projections, market analysis, competitive landscape, and our proven track record of transforming educational institutions.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>25 pages • PDF format • Updated quarterly</span>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <Button 
                  className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full lg:w-auto"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchDeckSection;
