"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
    "Writes code that turns your ideas into reality",
    "Crafts and sends emails with impeccable timing",
    "Commands your PC with a single, smart directive",
    "Navigates the web to fetch exactly what you need",
    "Manages your chats and social apps like a digital concierge",
    "Organizes files and tasks without breaking a sweat",
    "Automates routine actions before you even ask",
    "Reminds you of the important moments throughout your day",
    "Keeps your digital life running smoothly and securely",
    "Operates with your privacy as its highest priority"
]

export const FeaturesSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); 

  return (
    <motion.section style={{ opacity }} className="bg-white transition-colors duration-500 py-20 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Imagine a Computer That...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl transition-all bg-white hover:bg-gray-50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg text-gray-700">
                  {feature}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};