"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, Globe, Zap, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "Kasava",
    category: "Dashcam Companion App",
    description: "Comprehensive companion app enabling users to manage, request, and view footage from vehicle dashcams. Features remote camera diagnostics via Bluetooth/BLE, video and route playback with GPS tracking, real-time location monitoring, and support chat functionality.",
    technologies: ["Flutter", "Dart", "Kotlin", "Swift", "Google Maps", "HERE SDK", "BLE", "Bluetooth", "GPS", "Azure", "BLoC", "Provider"],
    impact: "Real-time dashcam management with AI-powered analytics for driver behavior detection",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    links: {
      ios: "https://apps.apple.com/app/id1562301152",
      android: "https://play.google.com/store/apps/details?id=io.kasava.kasava",
      website: "https://kasava.io"
    },
    highlights: ["AI/ML Integration", "Real-time GPS Tracking", "Bluetooth Communication"]
  },
  {
    name: "All Ball",
    category: "Sports Management Platform",
    description: "Comprehensive basketball management application featuring match scheduling, tournament management, team joining functionality, real-time chat integration, live streaming capabilities, past game video playback, and in-app video editing tools.",
    technologies: ["Jetpack Compose", "Kotlin", "Agora SDK", "CometChat", "Firebase", "ExoPlayer"],
    impact: "Increased user engagement by 35% with live streaming and real-time chat features",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.allballapp.android",
      ios: "https://apps.apple.com/app/id1666406171",
      website: "https://allballapp.com"
    },
    highlights: ["Live Streaming", "Real-time Chat", "Video Playback"]
  },
  {
    name: "Imotech",
    category: "E-Commerce Platform",
    description: "Built a scalable e-commerce mobile application using Flutter with Firebase backend for real-time commerce. Features include product catalog, shopping cart, secure payment processing, order tracking, and push notifications.",
    technologies: ["Flutter", "Firebase", "Stripe", "Provider", "Cloud Functions"],
    impact: "Reduced checkout time by 50% and increased conversion rates by 25%",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    links: {
      demo: "https://apkpure.net/inmotech/com.Inmotech.app"
    },
    highlights: ["Real-time Commerce", "Secure Payments", "Order Tracking"]
  },
  {
    name: "Costazoom",
    category: "Cost Management App",
    description: "Financial management application for tracking expenses and budgets. Features include expense categorization, budget planning, financial reports, and data visualization. Built with Flutter and integrated with secure cloud storage.",
    technologies: ["Flutter", "Riverpod", "SQLite", "Charts", "Cloud Storage"],
    impact: "Increased user retention by 30% with intuitive expense tracking and budget insights",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    links: {
      demo: "https://apkpure.net/costazoom/com.estatta.costazoom"
    },
    highlights: ["Expense Tracking", "Budget Planning", "Data Visualization"]
  },
  {
    name: "Janji Ku",
    category: "Task & Reminder App",
    description: "Productivity application for managing tasks, reminders, and commitments. Features include smart notifications, task prioritization, calendar integration, and progress tracking. Built with clean architecture and optimized for performance.",
    technologies: ["Flutter", "BLoC", "Local Notifications", "Calendar API", "Clean Architecture"],
    impact: "Improved task completion rates by 45% with smart reminders and prioritization",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    links: {
      demo: "https://www.janji-ku.com/"
    },
    highlights: ["Smart Notifications", "Task Prioritization", "Calendar Integration"]
  },
  {
    name: "SummeriseMe",
    category: "AI-Powered Summarization",
    description: "AI-powered application for summarizing text, documents, and articles. Utilizes on-device ML models for privacy-focused summarization. Features include multiple summary formats, export options, and offline capabilities.",
    technologies: ["Flutter", "TensorFlow Lite", "Natural Language Processing", "On-device ML"],
    impact: "Enabled 60% faster content consumption with AI-powered summarization",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    links: {
      demo: "https://summmarise-me-a-i-ewyc06.flutterflow.app"
    },
    highlights: ["AI/ML Integration", "On-device Processing", "Privacy-Focused"]
  },
  {
    name: "Schooly AI",
    category: "School Management System",
    description: "Comprehensive school management portal with AI-powered features. Includes dashboard, student/teacher/staff/parent management, classes, subjects, fees management, and announcement system. Rapid-prototyped using AI-powered development tools.",
    technologies: ["Flutter", "Web", "Figma", "Cursor", "AI Tools"],
    impact: "Streamlined school operations with 50% reduction in administrative workload",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    links: {
      demo: "https://schooly-ai.vercel.app/"
    },
    highlights: ["AI-Powered", "Comprehensive Management", "Multi-role Support"]
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-neutral-50/50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
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
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdown of projects with technical specifics and measurable business impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="highlight-card group relative overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Project Header */}
              <div className="relative h-64 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.span
                    className="inline-block bg-white/95 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.name}
                  </motion.h3>
                </div>
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </motion.div>
              </div>

              <div className="p-8">
                <p className="text-neutral-700 mb-6 leading-relaxed">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <Zap size={16} className="text-primary-600" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-full text-xs font-medium border border-neutral-200"
                        whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <motion.div
                  className="bg-gradient-to-r from-success-50 to-success-100 p-6 rounded-2xl mb-8 border border-success-200/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-success-600" size={18} />
                    <p className="text-sm font-semibold text-success-800">Business Impact</p>
                  </div>
                  <p className="text-success-700 text-sm font-medium">{project.impact}</p>
                </motion.div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 gap-3">
                  {project.links.ios && project.links.android && project.links.website ? (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.a
                          href={project.links.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-neutral-900 text-white px-6 py-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Smartphone size={18} />
                          iOS
                        </motion.a>
                        <motion.a
                          href={project.links.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-success-600 text-white px-6 py-4 rounded-xl hover:bg-success-700 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Smartphone size={18} />
                          Android
                        </motion.a>
                      </div>
                      <motion.a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary-600 text-white px-6 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe size={18} />
                        Website
                      </motion.a>
                    </>
                  ) : project.links.ios && project.links.android ? (
                    <div className="grid grid-cols-2 gap-3">
                      <motion.a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-900 text-white px-6 py-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Smartphone size={18} />
                        iOS
                      </motion.a>
                      <motion.a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-success-600 text-white px-6 py-4 rounded-xl hover:bg-success-700 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Smartphone size={18} />
                        Android
                      </motion.a>
                    </div>
                  ) : project.links.ios ? (
                    <motion.a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-neutral-900 text-white px-6 py-4 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} />
                      Download iOS App
                    </motion.a>
                  ) : project.links.android ? (
                    <motion.a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-success-600 text-white px-6 py-4 rounded-xl hover:bg-success-700 transition-all duration-300 text-center font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} />
                      Download Android App
                    </motion.a>
                  ) : (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary text-center"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} className="inline mr-2" />
                      View Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                Ready to Build Your Next Project?
              </motion.h3>
              <p className="text-primary-50 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how I can help transform your ideas into high-performance mobile applications
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

