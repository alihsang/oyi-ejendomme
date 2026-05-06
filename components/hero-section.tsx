"use client"

import { motion } from "framer-motion"
import { Search, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const propertyTypes = ["Alle", "Kontor", "Retail", "Lager", "Lejlighed", "Villa"]
const locations = ["København", "Aarhus", "Odense", "Aalborg", "Alle områder"]

export function HeroSection() {
  const [selectedType, setSelectedType] = useState("Alle")
  const [selectedLocation, setSelectedLocation] = useState("Alle områder")
  const [showTypeDropdown, setShowTypeDropdown] = useState(false)
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Eksklusiv arkitektur"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Siden 1995
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance"
          >
            Eksklusiv fast ejendom
            <span className="block text-gold-light">i Danmark</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed"
          >
            Vi specialiserer os i ekstraordinære erhvervs- og boligejendomme, 
            hvor kvalitet og æstetik møder funktionalitet.
          </motion.p>

          {/* Search/Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-2 max-w-3xl"
          >
            <div className="flex flex-col md:flex-row gap-2">
              {/* Property Type Dropdown */}
              <div className="relative flex-1">
                <button
                  onClick={() => {
                    setShowTypeDropdown(!showTypeDropdown)
                    setShowLocationDropdown(false)
                  }}
                  className="w-full flex items-center justify-between px-5 py-4 bg-transparent text-white text-sm hover:bg-white/5 transition-colors"
                >
                  <span className="text-white/60 text-xs uppercase tracking-wider">Ejendomstype</span>
                  <div className="flex items-center gap-2">
                    <span>{selectedType}</span>
                    <ChevronDown size={16} className="text-gold" />
                  </div>
                </button>
                {showTypeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-charcoal border border-white/20 z-20"
                  >
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type)
                          setShowTypeDropdown(false)
                        }}
                        className={`w-full px-5 py-3 text-left text-sm transition-colors ${
                          selectedType === type
                            ? "bg-gold/20 text-gold"
                            : "text-white/80 hover:bg-white/5"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-white/20" />

              {/* Location Dropdown */}
              <div className="relative flex-1">
                <button
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown)
                    setShowTypeDropdown(false)
                  }}
                  className="w-full flex items-center justify-between px-5 py-4 bg-transparent text-white text-sm hover:bg-white/5 transition-colors"
                >
                  <span className="text-white/60 text-xs uppercase tracking-wider">Lokation</span>
                  <div className="flex items-center gap-2">
                    <span>{selectedLocation}</span>
                    <ChevronDown size={16} className="text-gold" />
                  </div>
                </button>
                {showLocationDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-charcoal border border-white/20 z-20"
                  >
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location)
                          setShowLocationDropdown(false)
                        }}
                        className={`w-full px-5 py-3 text-left text-sm transition-colors ${
                          selectedLocation === location
                            ? "bg-gold/20 text-gold"
                            : "text-white/80 hover:bg-white/5"
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-charcoal font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
              >
                <Search size={18} />
                <span>Søg</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
