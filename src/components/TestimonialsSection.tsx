
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "In 3 months, we cut admin load by 60% and gained 35% more admission inquiries. The centralized support has been a game-changer.",
      name: "Ritu Jain",
      title: "Principal",
      school: "Scholar Valley School",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The substitute teacher network saved us countless times. Parents love the modern programs, and our enrollment is at an all-time high.",
      name: "Amit Sharma", 
      title: "Director",
      school: "Bright Future Academy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "From fee collection to student programs, everything runs seamlessly. We can finally focus on what matters most - quality education.",
      name: "Priya Mehta",
      title: "Founder",
      school: "Little Scholars International",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy/5 to-brand-teal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
            What School Partners Say
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real schools that have transformed with our ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-brand-teal" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="font-body text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-heading font-bold text-brand-navy">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    {testimonial.title}, {testimonial.school}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
