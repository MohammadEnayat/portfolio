"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, Globe, Zap, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "Kasava",
    category: "Dashcam Companion App",
    description: "Comprehensive companion app enabling users to manage, request, and view footage from vehicle dashcams. Features remote camera diagnostics via Bluetooth/BLE, video and route playback with GPS tracking, real-time location monitoring, and support chat functionality.",
    technologies: ["Flutter", "Dart", "Kotlin", "Swift", "Google Maps", "HERE SDK", "BLE", "Bluetooth", "GPS", "Azure", "BLoC", "Provider"],
    impact: "Serving 5k+ users with real-time dashcam management and AI-powered driver analytics",
    image: "/images/kasava.webp",
    links: {
      ios: "https://apps.apple.com/app/id1562301152",
      android: "https://play.google.com/store/apps/details?id=io.kasava.kasava",
      website: "https://www.kasava.io/"
    },
    highlights: ["AI/ML Integration", "Real-time GPS Tracking", "Bluetooth Communication"]
  },
  {
    name: "All Ball",
    category: "Sports Management Platform",
    description: "Comprehensive basketball management application featuring match scheduling, tournament management, team joining functionality, real-time chat integration, live streaming capabilities, past game video playback, and in-app video editing tools.",
    technologies: ["Jetpack Compose", "Kotlin", "Agora SDK", "CometChat", "Firebase", "ExoPlayer"],
    impact: "Serving 10k+ users with live streaming, real-time chat, and optimized smooth video playback",
    image: "/images/allball.webp",
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
    image: "/images/inmotech.webp",
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
    image: "/images/costazoom.webp",
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
    image: "/images/janjiku.webp",
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
    image: "/images/summarisemeai.webp",
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
    image: "/images/schoolyai.webp",
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "circOut"
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
              className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200/50 shadow-xl hover:shadow-primary-500/10 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Project Header */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Modern Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Shine Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent -translate-x-full"
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-400/30 text-primary-200 text-[10px] font-bold tracking-wider uppercase mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-primary-300 transition-colors">
                      {project.name}
                    </h3>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-white/10 backdrop-blur-xl p-2.5 rounded-xl border border-white/20 shadow-xl">
                    <ExternalLink className="text-white" size={18} />
                  </div>
                </motion.div>
              </div>

              <div className="p-5">
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Zap size={12} className="text-primary-600" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 border border-primary-200/60 px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                        whileHover={{ y: -1, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Core Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md text-[10px] font-semibold border border-neutral-200/50 transition-colors hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200"
                        whileHover={{ y: -1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <motion.div
                  className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 rounded-2xl p-4 mb-4 overflow-hidden border border-emerald-200/60 shadow-sm"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                        <TrendingUp className="text-emerald-600" size={14} />
                      </div>
                      <p className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">Performance Impact</p>
                    </div>
                    <p className="text-neutral-700 font-medium text-xs leading-relaxed">{project.impact}</p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 gap-2">
                  {project.links.ios && project.links.android && project.links.website ? (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        <motion.a
                          href={project.links.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn bg-neutral-900 text-white px-4 py-3 rounded-xl transition-all duration-300 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-neutral-900/40"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Smartphone size={14} className="group-hover/btn:rotate-12 transition-transform" />
                          iOS
                        </motion.a>
                        <motion.a
                          href={project.links.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn bg-success-600 text-white px-4 py-3 rounded-xl transition-all duration-300 text-center text-xs font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-success-600/40"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Smartphone size={14} className="group-hover/btn:-rotate-12 transition-transform" />
                          Android
                        </motion.a>
                      </div>
                      <motion.a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full bg-white text-neutral-900 border-2 border-neutral-200 px-4 py-3 rounded-xl transition-all duration-300 text-center text-xs font-bold flex items-center justify-center gap-2 hover:border-neutral-900 shadow-sm"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe size={14} className="group-hover/btn:scale-110 transition-transform" />
                        Explore Site
                      </motion.a>
                    </>
                  ) : project.links.ios && project.links.android ? (
                    <div className="grid grid-cols-2 gap-3">
                      <motion.a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-neutral-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 text-center font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-neutral-900/40"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Smartphone size={18} className="group-hover/btn:rotate-12 transition-transform" />
                        iOS
                      </motion.a>
                      <motion.a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-success-600 text-white px-6 py-4 rounded-2xl transition-all duration-300 text-center font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-success-600/40"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Smartphone size={18} className="group-hover/btn:-rotate-12 transition-transform" />
                        Android
                      </motion.a>
                    </div>
                  ) : project.links.ios ? (
                    <motion.a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full bg-neutral-900 text-white px-6 py-4 rounded-2xl transition-all duration-300 text-center font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-neutral-900/40"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} className="group-hover/btn:rotate-12 transition-transform" />
                      Download iOS App
                    </motion.a>
                  ) : project.links.android ? (
                    <motion.a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full bg-success-600 text-white px-6 py-4 rounded-2xl transition-all duration-300 text-center font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-success-600/40"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Smartphone size={18} className="group-hover/btn:-rotate-12 transition-transform" />
                      Download Android App
                    </motion.a>
                  ) : (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full bg-white text-neutral-900 border-2 border-neutral-900 px-6 py-4 rounded-2xl transition-all duration-300 text-center font-bold flex items-center justify-center gap-3 hover:bg-neutral-900 hover:text-white shadow-lg"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                      View Project Demo
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

