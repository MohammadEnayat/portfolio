"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Smartphone, Zap, Sparkles, Star } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"
          animate={floatingAnimation}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-300/10 to-accent-300/10 rounded-full blur-3xl"
          animate={floatingAnimation}
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-3 rounded-full mb-8 shadow-soft border border-primary-200/50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={18} />
            </motion.div>
            <span className="text-sm font-semibold">
              Google Recognized Flutter Developer
            </span>
            <Star className="text-accent-500" size={16} />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-shadow"
          >
            <span className="gradient-text">Mobile App Engineer</span>
            <br />
            <span className="text-neutral-900">Building Scalable Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            4+ years of expertise in Flutter, Android, iOS, and AI/ML integration.
            Transforming ideas into high-performance mobile applications that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Code className="inline mr-2" size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Zap className="inline mr-2" size={20} />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              {
                icon: Smartphone,
                text: "Cross-Platform Apps",
                description: "Flutter expertise for seamless iOS & Android",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Code,
                text: "Clean Architecture",
                description: "Scalable, maintainable code patterns",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                text: "AI/ML Integration",
                description: "Smart features with TensorFlow Lite",
                color: "from-purple-500 to-pink-500"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-modern p-6 text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`bg-gradient-to-r ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.text}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="group flex flex-col items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={24} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-primary-400 rounded-full opacity-60"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-3 h-3 bg-accent-400 rounded-full opacity-40"
        animate={floatingAnimation}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary-500 rounded-full opacity-80"
        animate={floatingAnimation}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
}

