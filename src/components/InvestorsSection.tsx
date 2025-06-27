
const InvestorsSection = () => {
  const partners = [
    { name: "Education Ventures", logo: "EV" },
    { name: "Future Schools Fund", logo: "FSF" },
    { name: "Tech4Education", logo: "T4E" },
    { name: "Learning Innovation", logo: "LI" },
    { name: "EdTech Partners", logo: "EP" },
    { name: "School Growth Capital", logo: "SGC" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-brand-navy mb-4">
            Trusted by Investors & Industry Leaders
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
            Backed by leading education investors and supported by industry pioneers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-brand-teal/10 group-hover:to-brand-navy/10 transition-all duration-300 group-hover:scale-105">
                <span className="font-heading font-bold text-lg text-gray-600 group-hover:text-brand-navy transition-colors duration-300">
                  {partner.logo}
                </span>
              </div>
              <p className="font-body text-sm text-gray-500 text-center group-hover:text-gray-700 transition-colors duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <span className="font-body">Featured in:</span>
            <span className="font-semibold text-brand-navy">EdTech Review</span>
            <span className="font-semibold text-brand-navy">Education Today</span>
            <span className="font-semibold text-brand-navy">School Business</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
