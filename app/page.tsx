"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import imageTo from "@/app/asset/WhatsApp Image 2025-02-01 at 12.25.37_c25d35f1.jpg"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src={imageTo} alt=" Doctor's Office" layout="fill" objectFit="cover" quality={100} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif mb-4"
          >
            Welcome to  Doctor Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Exclusive medical care for discerning patients
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🏆"
              title="Exclusive Care"
              description="Personalized attention from top-tier medical professionals."
            />
            <FeatureCard
              icon="🔬"
              title="Cutting-Edge Technology"
              description="Access to the latest medical advancements and treatments."
            />
            <FeatureCard
              icon="🤝"
              title="Concierge Service"
              description="Round-the-clock support for all your healthcare needs."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The level of care and attention I received was truly exceptional. I've never felt more valued as a patient."
              author="John D., CEO"
            />
            <TestimonialCard
              quote="From the moment I stepped in, I knew I was in good hands. The staff's professionalism is unmatched."
              author="Sarah L., Entrepreneur"
            />
            <TestimonialCard
              quote="Dr. Johnson's expertise and bedside manner made my treatment process smooth and comfortable."
              author="Michael R., Attorney"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-primary-50 p-6 rounded-lg shadow-md"
  >
    <p className="text-gray-800 mb-4 italic">"{quote}"</p>
    <p className="text-primary-600 font-semibold">- {author}</p>
  </motion.div>
)

