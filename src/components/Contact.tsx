
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';
import Aurora from '@/components/motion/Aurora';

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
    <section id="contact" className="relative py-24 bg-slate-950 text-white overflow-hidden bg-grain">
      <Aurora />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-300 mb-3">
            Contact
          </span>
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
                className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 hover:border-indigo-400/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-violet-300">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
                {contact.href !== "#" ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-200 break-all"
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
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8 overflow-hidden">
              <div className="absolute -top-24 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="relative text-2xl font-bold mb-4">Professional Opportunities</h3>
              <p className="relative text-lg text-slate-300 mb-6 leading-relaxed">
                I'm always interested in discussing challenging leadership roles, consulting opportunities,
                and innovative projects in digital transformation, Adobe Experience Cloud implementations,
                and enterprise-scale technology solutions.
              </p>
              <div className="relative flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3 text-lg shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-105"
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
