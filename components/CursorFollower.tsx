"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    const checkIfMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Mobile/Touch device handling
      const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        setTouchPosition({ x: touch.clientX, y: touch.clientY });
        setIsTouching(true);
      };

      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        setTouchPosition({ x: touch.clientX, y: touch.clientY });
      };

      const handleTouchEnd = () => {
        setIsTouching(false);
      };

      // Add touch event listeners
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    } else {
      // Desktop/Mouse device handling
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      // Add event listeners to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, [data-hover]');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, [isMobile]);

  // Don't render anything on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          scale: { duration: 0.2 }
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-400 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          scale: { duration: 0.3 },
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
}
