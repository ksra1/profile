
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "sravan.kollapudi@gmail.com",
    href: "mailto:sravan.kollapudi@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "586-202-4673",
    href: "tel:+15862024673"
  },
  {
    icon: <LinkedinIcon className="w-6 h-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/skk1",
    href: "https://www.linkedin.com/in/skk1/"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Michigan, USA",
    href: "#"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss digital transformation strategies, Adobe Experience Cloud implementations,
            or leadership opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
            style={{ perspective: 1200 }}
          >
            {contactInfo.map((contact, index) => (
              <TiltCard
                key={index}
                className="rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
              >
                <div className="text-slate-300 mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
                {contact.href !== "#" ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-sky-400 hover:text-sky-300 transition-colors duration-200 break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-slate-300">{contact.value}</span>
                )}
              </TiltCard>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Opportunities</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm always interested in discussing challenging leadership roles, consulting opportunities,
                and innovative projects in digital transformation, Adobe Experience Cloud implementations,
                and enterprise-scale technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 text-lg shadow-lg shadow-sky-900/30 transition-all duration-300 hover:scale-105"
                >
                  <a href="mailto:sravan.kollapudi@gmail.com">Send Email</a>
                </Button>
              </div>
            </div>

            <div className="text-center text-slate-400">
              <p>&copy; 2026 Sravan Kumar Kollapudi. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
