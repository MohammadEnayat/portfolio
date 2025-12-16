"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Send, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      window.location.href = `mailto:mohammadenayat04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammadenayat04@gmail.com",
      href: "mailto:mohammadenayat04@gmail.com",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8872166909",
      href: "tel:+918872166909",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chandigarh, India",
      href: null,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mohammad-enayat",
      href: "https://linkedin.com/in/mohammad-enayat",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="section-divider !bg-white/30" />
          </motion.div>
          <h2 className="mb-6 text-shadow">
            Get In <span className="text-primary-200">Touch</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {contact.href ? (
                      <motion.a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-6 glass-effect rounded-2xl hover:bg-white/20 transition-all duration-300 group block"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className={`bg-gradient-to-r ${contact.gradient} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-primary-200 text-sm font-medium mb-1">{contact.label}</p>
                          <p className="font-semibold text-white text-lg">{contact.value}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-4 p-6 glass-effect rounded-2xl">
                        <div className={`bg-gradient-to-r ${contact.gradient} p-4 rounded-xl`}>
                          <contact.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-primary-200 text-sm font-medium mb-1">{contact.label}</p>
                          <p className="font-semibold text-white text-lg">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-effect rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-2 rounded-lg">
                  <Clock className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold">Response Time</h4>
              </div>
              <p className="text-primary-100 leading-relaxed mb-4">
                I typically respond to inquiries within 24 hours. For urgent matters,
                please call directly.
              </p>
              <div className="flex items-center gap-2 text-accent-300">
                <CheckCircle2 size={16} />
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary-100 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-modern w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-primary-200 focus:border-primary-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary-100 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-modern w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-primary-200 focus:border-primary-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-primary-100 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-modern w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-primary-200 focus:border-primary-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary-100 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-modern w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-primary-200 focus:border-primary-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-white to-primary-50 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:from-primary-50 hover:to-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-primary-700 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

