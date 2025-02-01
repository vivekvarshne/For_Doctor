"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    title: "Executive Health Screening",
    description: "Comprehensive health assessment tailored for busy professionals.",
    icon: "🩺",
  },
  {
    title: "Personalized Wellness Programs",
    description: "Customized plans to optimize your health and well-being.",
    icon: "🧘",
  },
  {
    title: "Concierge Medicine",
    description: "24/7 access to your personal physician for all your healthcare needs.",
    icon: "📱",
  },
  {
    title: "Advanced Diagnostic Services",
    description: "Cutting-edge technology for accurate and timely diagnoses.",
    icon: "🔬",
  },
  {
    title: "Luxury Hospital Suites",
    description: "Premium, private accommodations for your comfort during treatment.",
    icon: "🏥",
  },
  {
    title: "Global Medical Coordination",
    description: "Seamless healthcare management for international patients.",
    icon: "🌍",
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; icon: string } | null>(null)

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-serif mb-8 text-center"
      >
        Our Premium Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => setSelectedService(service)}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white p-8 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-serif mb-4">{selectedService.title}</h2>
            <p className="text-gray-600 mb-4">{selectedService.description}</p>
            <button
              className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors duration-300"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

