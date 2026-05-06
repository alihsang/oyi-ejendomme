"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "./property-card"
import { ArrowRight } from "lucide-react"

const properties = [
  {
    image: "/images/property-1.jpg",
    title: "Penthouse med panoramaudsigt",
    location: "Østerbro, København",
    type: "Bolig",
    size: "245 m²",
    price: "18.500.000 DKK",
  },
  {
    image: "/images/property-2.jpg",
    title: "Moderne kontordomicil",
    location: "Nordhavn, København",
    type: "Erhverv",
    size: "1.850 m²",
    price: "Leje: 1.650 kr/m²",
  },
  {
    image: "/images/property-3.jpg",
    title: "Havnefront residence",
    location: "Sydhavnen, København",
    type: "Bolig",
    size: "178 m²",
    price: "12.900.000 DKK",
  },
  {
    image: "/images/property-4.jpg",
    title: "Historisk byhus",
    location: "Indre By, København",
    type: "Bolig",
    size: "320 m²",
    price: "24.500.000 DKK",
  },
  {
    image: "/images/property-5.jpg",
    title: "Prime retail lokation",
    location: "Strøget, København",
    type: "Erhverv",
    size: "420 m²",
    price: "Leje: 2.800 kr/m²",
  },
  {
    image: "/images/property-6.jpg",
    title: "Eksklusiv lejlighed",
    location: "Frederiksberg",
    type: "Bolig",
    size: "156 m²",
    price: "9.800.000 DKK",
  },
]

export function FeaturedProperties() {
  return (
    <section id="erhverv" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4 block">
              Udvalgte Ejendomme
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal text-balance">
              Ekstraordinære
              <span className="block text-charcoal-light">muligheder</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors group"
            >
              <span className="text-sm font-medium tracking-wider uppercase">
                Se alle ejendomme
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.title}
              {...property}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-off-white font-medium text-sm tracking-wider uppercase hover:bg-charcoal-light transition-colors"
          >
            <span>Udforsk porteføljen</span>
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
