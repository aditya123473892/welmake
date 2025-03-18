import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import detergent from "../assets/detergent.png";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorBubbles, setCursorBubbles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const newBubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 100 + 60,
      };

      setCursorBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setCursorBubbles((prev) =>
          prev.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 overflow-hidden min-h-[90vh]">
      {/* Cursor following bubbles */}
      {cursorBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed pointer-events-none rounded-full bg-gradient-to-br from-yellow-300/70 to-yellow-200/90 backdrop-blur-sm z-50"
          initial={{
            width: bubble.size,
            height: bubble.size,
            x: bubble.x - bubble.size / 2,
            y: bubble.y - bubble.size / 2,
            opacity: 0.9,
            scale: 0.2,
          }}
          animate={{
            opacity: 0,
            scale: 1.2,
            y: bubble.y - bubble.size / 2 - 150,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Background bubbles - Reduced movement and more subtle */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-200/60 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 180 + 100}px`,
              height: `${Math.random() * 180 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1], // Reduced scale change
              y: [0, -20, 0], // Reduced vertical movement
            }}
            transition={{
              duration: 12, // Slower animation
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5, // Staggered delay for more natural movement
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-8 pl-4"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-indigo-900 leading-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                दाग हटाए
                <br />
                <motion.span
                  className="text-orange-500 inline-block mb-5"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  प्यार बढ़ाए
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-2xl text-indigo-900 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: "easeOut",
              }}
            >
              Experience the power of advanced cleaning technology with our
              premium detergent. Perfect for both hand wash and machine wash.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="bg-green-600 text-white px-12 py-6 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:shadow-xl transition-all group overflow-hidden relative"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-green-500 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.span className="relative z-10 flex items-center justify-center gap-3">
                  Shop Now
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-7 h-7" />
                  </motion.span>
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Product showcase - Simplified */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 to-yellow-100/40 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 w-full h-full overflow-hidden rounded-full shadow-lg flex items-center justify-center bg-white/30 backdrop-blur-sm"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={detergent}
                  alt="Walmake 2-in-1 Detergent"
                  className="w-4/5 h-4/5 object-contain"
                  animate={{
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
