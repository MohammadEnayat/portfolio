"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TouchPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function TouchIndicator() {
  const [touchPoints, setTouchPoints] = useState<TouchPoint[]>([]);
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
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      const newTouches = Array.from(e.touches).map(touch => ({
        id: touch.identifier,
        x: touch.clientX,
        y: touch.clientY,
        timestamp: Date.now()
      }));

      setTouchPoints(prev => [...prev, ...newTouches]);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const updatedTouches = Array.from(e.touches).map(touch => ({
        id: touch.identifier,
        x: touch.clientX,
        y: touch.clientY,
        timestamp: Date.now()
      }));

      setTouchPoints(prev =>
        prev.map(point => {
          const updated = updatedTouches.find(t => t.id === point.id);
          return updated || point;
        })
      );
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endedTouches = Array.from(e.changedTouches).map(touch => touch.identifier);
      setTouchPoints(prev => prev.filter(point => !endedTouches.includes(point.id)));
    };

    // Clean up old touch points
    const cleanup = setInterval(() => {
      const now = Date.now();
      setTouchPoints(prev => prev.filter(point => now - point.timestamp < 100));
    }, 100);

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      clearInterval(cleanup);
    };
  }, [isMobile]);

  // Don't render on desktop
  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {touchPoints.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-8 h-8 border border-primary-300/50 rounded-full pointer-events-none"
            style={{
              left: point.x - 16,
              top: point.y - 16,
            }}
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0.2 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{
              duration: 0.15,
              opacity: { duration: 0.2 }
            }}
          >
            <motion.div
              className="absolute inset-0.5 bg-primary-400/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
