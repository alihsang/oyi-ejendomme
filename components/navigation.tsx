"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "./contact-modal"

const navLinks = [
  { href: "#erhverv", label: "Erhverv" },
  { href: "#bolig", label: "Bolig" },
  { href: "#om-os", label: "Om os" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-start"
              >
                <span className={`font-serif text-4xl font-extrabold tracking-[-0.02em] transition-colors duration-300 ${
                  isScrolled ? "text-off-white" : "text-white"
                }`}>
                  OYI
                </span>
                <span className={`font-sans text-xs uppercase tracking-[0.55em] font-semibold mt-1 transition-colors duration-300 ${
                  isScrolled ? "text-gold/80" : "text-gold-light"
                }`}>
                  ejendomme
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                    isScrolled 
                      ? "text-off-white/80 hover:text-gold" 
                      : "text-white/90 hover:text-gold-light"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {link.label}
                  </motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <motion.button
                onClick={() => setIsContactOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase border transition-all duration-300 ${
                  isScrolled
                    ? "border-gold text-gold hover:bg-gold hover:text-charcoal"
                    : "border-gold-light text-gold-light hover:bg-gold-light hover:text-charcoal"
                }`}
              >
                Kontakt
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-off-white" : "text-white"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-off-white" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-off-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => {
                  setIsContactOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-3 text-sm font-semibold tracking-widest uppercase border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all"
              >
                Kontakt
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
