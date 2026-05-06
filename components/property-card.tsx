"use client"

import { motion } from "framer-motion"
import { MapPin, Maximize2, ArrowUpRight, Bed, Bath, Car } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
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
    </DialogTrigger>

    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-serif">{title}</DialogTitle>
        <DialogDescription className="flex items-center gap-2 text-base">
          <MapPin size={16} className="text-gold" />
          {location}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal">Type</h4>
            <p className="text-muted-foreground">{type}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal">Størrelse</h4>
            <p className="text-muted-foreground">{size}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal">Pris</h4>
            <p className="text-gold font-semibold text-lg">{price}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-charcoal">Faciliteter</h4>
            <div className="flex gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed size={16} />
                <span>3</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={16} />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Car size={16} />
                <span>1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-semibold text-charcoal">Beskrivelse</h4>
          <p className="text-muted-foreground leading-relaxed">
            Denne smukke {type.toLowerCase()} ligger i et attraktivt område og tilbyder moderne faciliteter og komfort. 
            Med {size} boligareal er der masser af plads til familien. Ejendommen er velholdt og klar til indflytning.
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}
