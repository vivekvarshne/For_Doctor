"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import imageTo from "@/app/asset/WhatsApp Image 2025-02-01 at 12.25.37_c25d35f1.jpg"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-serif mb-8 text-center"
      >
        About  Doctor Clinic
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image src={imageTo} alt=" Doctor" width={500} height={500} className="rounded-lg shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At  Doctor Clinic, we are committed to providing unparalleled medical care to our discerning clientele.
            Our mission is to combine cutting-edge medical technology with personalized attention to ensure the best
            possible health outcomes for our patients.
          </p>
          <h2 className="text-2xl font-serif mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-4">
            We believe in a holistic approach to healthcare, addressing not just immediate health concerns but also
            focusing on long-term wellness and prevention. Our team of elite medical professionals is dedicated to
            providing comprehensive care tailored to each individual's unique needs.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-serif mb-4">Why Choose  Doctor Clinic?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Exclusive access to top-tier medical professionals</li>
          <li>State-of-the-art facilities and cutting-edge medical technology</li>
          <li>Personalized treatment plans tailored to your unique needs</li>
          <li>Luxurious, comfortable environment for your care</li>
          <li>24/7 concierge service for all your healthcare needs</li>
          <li>Discreet and confidential service</li>
        </ul>
      </motion.div>
    </div>
  )
}

