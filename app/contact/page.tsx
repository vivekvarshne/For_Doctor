"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [contactMethod, setContactMethod] = useState("email")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  interface FormData {
    name: string
    email: string
    phone: string
    message: string
  }

  interface SubmissionData extends FormData {
    contactMethod: string
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const submissionData: SubmissionData = {
      ...formData,
      contactMethod,
    }
    console.log("Form submitted:", submissionData)
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" })
    setContactMethod("email")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-serif mb-8 text-center"
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Preferred Contact Method</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className="form-radio text-primary-500"
                  />
                  <span className="ml-2">Email</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={contactMethod === "whatsapp"}
                    onChange={(e) => setContactMethod(e.target.value)}
                    className="form-radio text-primary-500"
                  />
                  <span className="ml-2">WhatsApp</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            {contactMethod === "whatsapp" && (
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Luxury Lane, Prestige City, State 12345
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p className="mb-2">
            <strong>WhatsApp:</strong> +1 (555) 987-6543
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@doctorclinic.com
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-serif mb-2">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-serif mb-2">24/7 Concierge Service</h3>
            <p>For urgent matters, our  patients can reach our on-call physician at any time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

