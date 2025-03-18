import React from "react";
import { motion } from "framer-motion";
import detergent from "../assets/detergent.png";
import ModelViewer from "./ModelViewer";

const features = [
  { title: "AFFORDABLE", position: "top-left" },
  { title: "MADE IN INDIA", position: "top-right" },
  { title: "TRUST-QUALITY", position: "bottom-left" },
  { title: "ECO-FRIENDLY", position: "bottom-right" },
];

function FeaturesSection() {
  return (
    <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900">
            WHY WELMAKE
          </h2>
        </motion.div>

        {/* Desktop View (Original Layout) */}
        <div className="hidden md:flex relative h-[350px] items-center justify-center">
          {/* Feature Labels */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`absolute text-amber-900 font-extrabold text-2xl sm:text-3xl md:text-4xl ${
                feature.position.includes("top") ? "top-[20%]" : "bottom-[20%]"
              } ${
                feature.position.includes("left") ? "left-[10%]" : "right-[10%]"
              }`}
              initial={{ opacity: 0, x: index < 2 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {feature.title}
            </motion.div>
          ))}
          {/* Central Product Display */}-<ModelViewer></ModelViewer>
        </div>

        {/* Mobile View (Better Layout) */}
        <div className="md:hidden flex flex-col items-center space-y-6 mt-10">
          {/* Image (Smaller on Mobile) */}
          <motion.img
            src={detergent}
            alt="Welmake Detergent"
            className="w-28 h-28 sm:w-40 sm:h-40 object-contain drop-shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Feature List */}
          <div className="grid grid-cols-1 gap-4 w-full px-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-amber-900 font-extrabold text-xl sm:text-2xl bg-yellow-300 px-6 py-3 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {feature.title}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
