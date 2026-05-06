"use client"

import { motion } from "framer-motion"
import { MapPin, Maximize2, ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  type: string
  size: string
  price: string
  index: number
}

export function PropertyCard({ image, title, location, type, size, price, index }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-muted aspect-[4/3]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm text-off-white text-xs font-medium tracking-wider uppercase">
            {type}
          </span>
        </div>

        {/* View Button on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
            <ArrowUpRight size={24} className="text-charcoal" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="pt-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors duration-300 text-balance">
            {title}
          </h3>
          <span className="text-gold font-semibold text-sm md:text-base whitespace-nowrap">
            {price}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-gold" />
            <span>{size}</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
