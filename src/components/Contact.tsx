
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "586-202-4673",
      href: "tel:+15862024673"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sravan.kollapudi@gmail.com",
      href: "mailto:sravan.kollapudi@gmail.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/skallapu",
      href: "https://www.linkedin.com/in/skallapu"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Michigan, USA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to discuss digital transformation strategies, Adobe Experience Cloud implementations, 
            or leadership opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-blue-300 hover:text-blue-100 transition-colors duration-200 break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-blue-300">{contact.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Opportunities</h3>
              <p className="text-lg text-blue-200 mb-6 leading-relaxed">
                I'm always interested in discussing challenging leadership roles, consulting opportunities, 
                and innovative projects in digital transformation, Adobe Experience Cloud implementations, 
                and enterprise-scale technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="mailto:sravan.kollapudi@gmail.com">
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="https://www.linkedin.com/in/skallapu" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center text-blue-300">
              <p>&copy; 2025 Sravan Kumar Kollapudi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
