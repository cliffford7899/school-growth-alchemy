
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-off-white to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-brand-navy mb-4">
              Get in Touch
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your school? Let's discuss how Clifford can help you grow smarter, not harder.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-6">
                Let's Start the Conversation
              </h3>
              <p className="font-body text-gray-600 mb-8 leading-relaxed">
                We're excited to partner with forward-thinking schools. Reach out to learn more about our pilot program and how we can support your institution's growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-navy rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-brand-navy">Email</p>
                    <p className="font-body text-gray-600">shushanktiwari@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-brand-navy">Phone</p>
                    <p className="font-body text-gray-600">+91 70704 53403</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-mint to-brand-teal rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-brand-navy">Location</p>
                    <p className="font-body text-gray-600">Ranchi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-in-up">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">
                    Thank You!
                  </h3>
                  <p className="font-body text-gray-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-semibold text-brand-navy mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-brand-teal rounded-lg px-4 py-3"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-body font-semibold text-brand-navy mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-brand-teal rounded-lg px-4 py-3"
                      placeholder="your.email@school.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-body font-semibold text-brand-navy mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 focus:border-brand-teal rounded-lg px-4 py-3"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-body font-semibold text-brand-navy mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-2 border-gray-200 focus:border-brand-teal rounded-lg px-4 py-3"
                      placeholder="Tell us about your school and how we can help..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
