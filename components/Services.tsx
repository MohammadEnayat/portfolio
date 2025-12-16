"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, Code, Zap, Palette, Shield, Rocket, Check, Star, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform App Development",
    description: "Build native-quality apps for Android and iOS using Flutter, reducing development time by 40% with hot-reload feature. Single codebase, multiple platforms.",
    features: ["Flutter Development", "Native Android/iOS", "Responsive Design", "App Store Deployment"],
    price: "Starting at $3,000",
    highlight: "Most Popular",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Architect scalable applications with clean architecture, MVVM patterns, and modern state management. Optimized for performance and maintainability.",
    features: ["Clean Architecture", "State Management (BLoC, Provider)", "API Integration", "Performance Optimization"],
    price: "Starting at $4,000",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "AI/ML Integration",
    description: "Integrate TensorFlow Lite and YOLO models for on-device inference, computer vision, and smart analytics. Real-time object detection and behavior analysis.",
    features: ["TensorFlow Lite", "YOLO Models", "Computer Vision", "On-device Inference"],
    price: "Starting at $5,000",
    highlight: "Premium",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design & Development",
    description: "Create intuitive, modern interfaces using Figma and Flutter. Custom widgets, animations, and seamless user experiences that drive engagement.",
    features: ["Figma Design", "Custom UI Components", "Animations", "User Experience Optimization"],
    price: "Starting at $2,500",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Security & Authentication",
    description: "Implement enterprise-grade security with biometric authentication, SSL pinning, encryption, and secure storage. Protect user data with industry best practices.",
    features: ["Biometric Auth", "SSL Pinning", "Encryption", "Secure Storage"],
    price: "Starting at $2,000",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Rocket,
    title: "Consultation & Maintenance",
    description: "Expert consultation on architecture decisions, code reviews, performance optimization, and ongoing maintenance. Reduce technical debt by 50%.",
    features: ["Architecture Consultation", "Code Reviews", "Performance Tuning", "Ongoing Support"],
    price: "$150/hour",
    gradient: "from-teal-500 to-blue-500"
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
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
            <div className="section-divider" />
          </motion.div>
          <h2 className="mb-6">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobile and web development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="highlight-card group relative"
              whileHover={{ y: -8 }}
            >
              {service.highlight && (
                <motion.div
                  className={`absolute -top-3 left-6 bg-gradient-to-r ${service.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <Star className="inline w-3 h-3 mr-1" />
                  {service.highlight}
                </motion.div>
              )}

              <div className="mb-6">
                <motion.div
                  className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="text-neutral-700 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 + i * 0.1 }}
                  >
                    <div className={`bg-gradient-to-r ${service.gradient} p-1 rounded-full`}>
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6 border-t border-neutral-200/50">
                <p className="text-2xl font-bold gradient-text mb-6">{service.price}</p>
                <motion.a
                  href="#contact"
                  className="btn-primary w-full text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="highlight-card max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">
              Why Choose My Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-glow">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold gradient-text mb-2">40%</p>
                <p className="text-neutral-700 font-medium">Faster Development with Flutter Hot-Reload</p>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-success-500 to-success-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-glow">
                  <Shield className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold text-success-600 mb-2">90%</p>
                <p className="text-neutral-700 font-medium">Reduction in Upload Failure Rates</p>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-glow-accent">
                  <Star className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold text-accent-600 mb-2">4+</p>
                <p className="text-neutral-700 font-medium">Years of Proven Expertise</p>
              </motion.div>
            </div>
            <motion.div
              className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-200/50"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-neutral-700 italic text-lg leading-relaxed">
                "Reduce app development time by 40% using Flutter's hot-reload feature.
                Optimize performance and achieve 90% reduction in upload failure rates with
                enterprise-grade solutions backed by 4+ years of expertise."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

