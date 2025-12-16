"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Briefcase, GraduationCap, Linkedin, Mail, Phone, MapPin, Calendar, CheckCircle, Star, Trophy, Target } from "lucide-react";

const skills = [
  "Flutter", "Dart", "Kotlin", "Java", "Jetpack Compose",
  "BLoC", "Provider", "Riverpod", "MVVM", "Clean Architecture",
  "TensorFlow Lite", "YOLO", "Firebase", "Azure", "GCP", "AWS",
  "Google Maps", "Stripe", "Agora", "CometChat"
];

const achievements = [
  {
    title: "Finalist - Build Fest '25 Hackathon",
    description: "FlutterFlow & Google Cloud",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Google Cloud Agentic AI Day",
    description: "Recognized for Initiative & Contribution",
    icon: Star,
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "Google Flutter App UI Study",
    description: "Selected participant in invite-only research",
    icon: Target,
    gradient: "from-green-400 to-green-600"
  },
  {
    title: "Certified Impaakt Rater",
    description: "Assessing companies' social and environmental impacts",
    icon: Award,
    gradient: "from-purple-400 to-purple-600"
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Software Engineer with 4+ years building high-performance, scalable mobile applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="highlight-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-white" size={16} />
                </div>
                Professional Summary
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Passionate software engineer with 4+ years building and maintaining applications for Android, 
                  iOS, and web across diverse domains including fintech, Bluetooth/BLE, maps & GPS, video processing, 
                  e-commerce, and AI-based features. Specialized in Flutter and native Android development using 
                  Kotlin and Jetpack Compose with clean architecture patterns.
                </p>
                <p>
                  Expert in designing systems that scale, reduce technical debt, and improve reliability. Proven track 
                  record in hardware communication, biometric authentication, payment integrations, live streaming, 
                  media optimization, and AI/ML model integration (TFLite, YOLO). Recognized by Google for contributions 
                  to Flutter's ecosystem and commitment to delivering production-ready solutions aligned with industry best practices.
                </p>
              </div>
            </div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="highlight-card"
            >
              <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                <Star className="text-primary-600" size={20} />
                Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact & Education */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="highlight-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={16} />
                </div>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:mohammadenayat04@gmail.com"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-600 text-sm font-medium">Email</p>
                    <p className="text-neutral-900 font-semibold">mohammadenayat04@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918872166909"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-success-500 to-success-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-600 text-sm font-medium">Phone</p>
                    <p className="text-neutral-900 font-semibold">+91-8872166909</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 glass-effect rounded-xl">
                  <div className="bg-gradient-to-r from-neutral-500 to-neutral-600 p-3 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-600 text-sm font-medium">Location</p>
                    <p className="text-neutral-900 font-semibold">Chandigarh, India</p>
                  </div>
                </div>

                <motion.a
                  href="https://linkedin.com/in/mohammad-enayat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-600 text-sm font-medium">LinkedIn</p>
                    <p className="text-neutral-900 font-semibold">linkedin.com/in/mohammad-enayat</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Education Card */}
            <div className="highlight-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-neutral-900 font-semibold text-lg">
                  Bachelor of Technology in Computer Science and Engineering
                </p>
                <p className="text-neutral-700 font-medium">
                  Punjab Technical University
                </p>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Calendar size={16} />
                  <span className="font-medium">2016 - 2020</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">CGPA: 7.43</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-12 flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-10 h-10 rounded-xl flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            Professional Experience
          </h3>
          <div className="space-y-8">
            {[
              {
                company: "Kasava AI",
                role: "Software Engineer",
                period: "Feb 2025 - Nov 2025",
                highlights: [
                  "Architected companion dashcam app from ground up using Flutter with clean architecture",
                  "Integrated Google Maps and HERE Maps SDK with GPS-based live location tracking",
                  "Implemented enterprise-grade biometric security with FaceID and Fingerprint authentication",
                  "Developed custom Bluetooth/BLE communication modules for offline mobile-dashcam integration",
                  "Integrated AI/ML models (YOLO, TensorFlow Lite) for real-time on-device inference"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                company: "SoftProdigy System Solutions",
                role: "Associate Software Engineer",
                period: "June 2022 - Feb 2025",
                highlights: [
                  "Developed production mobile applications using Flutter and Jetpack Compose",
                  "Optimized background media upload service achieving 90% reduction in upload failure rates",
                  "Implemented comprehensive state management using Provider, Riverpod, GetX, and BLoC",
                  "Built secure fintech applications with SSL pinning and end-to-end encryption"
                ],
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="highlight-card relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.gradient}`} />
                <div className="pl-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-neutral-900 mb-1">{exp.role}</h4>
                      <p className="gradient-text font-semibold text-lg">{exp.company}</p>
                      <div className="flex items-center gap-4 text-neutral-600 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="text-sm font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="text-neutral-700 flex items-start gap-3"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 + i * 0.1 }}
                      >
                        <div className={`bg-gradient-to-r ${exp.gradient} p-1 rounded-full mt-1`}>
                          <CheckCircle className="text-white" size={12} />
                        </div>
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-12 flex items-center gap-3">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-10 h-10 rounded-xl flex items-center justify-center">
              <Award className="text-white" size={20} />
            </div>
            Achievements & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="highlight-card group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${achievement.gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 mb-1">{achievement.title}</h4>
                    <p className="text-neutral-600 font-medium">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

