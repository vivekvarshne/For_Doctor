"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-primary-600">
             Doctor Clinic
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            <NavLink href="/services" mobile>
              Services
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

import { ReactNode } from "react";

const NavLink = ({ href, children, mobile = false }: { href: string; children: ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`text-gray-800 hover:text-primary-600 transition duration-300 ${mobile ? "block py-2" : ""}`}
  >
    {children}
  </Link>
)

export default Header

