"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Building2, value: "250+", label: "Ejendomme" },
  { icon: Users, value: "1.200+", label: "Tilfredse kunder" },
  { icon: Award, value: "28", label: "År i branchen" },
  { icon: TrendingUp, value: "4.2B", label: "DKK under forvaltning" },
]

export function AboutSection() {
  return (
    <section id="om-os" className="py-24 md:py-32 bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6 block">
              Om Oyi Ejendomme
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 text-balance">
              Traditioner møder
              <span className="block text-gold-light">moderne vision</span>
            </h2>
            <div className="space-y-6 text-off-white/70 leading-relaxed">
              <p>
                Siden 1995 har Oyi Ejendomme været en førende aktør inden for det danske 
                ejendomsmarked. Vi kombinerer dyb markedsindsigt med en unik forståelse 
                for vores kunders behov.
              </p>
              <p>
                Vores portefølje omfatter nogle af Danmarks mest eftertragede erhvervs- 
                og boligejendomme, og vi er stolte af at kunne tilbyde en personlig og 
                professionel service i verdensklasse.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-8 py-4 border border-gold text-gold font-medium text-sm tracking-wider uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Lær os at kende
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-charcoal-light/50 border border-white/10 p-8 group hover:border-gold/30 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-gold mb-4" />
                <div className="font-serif text-3xl md:text-4xl text-off-white mb-2">
                  {stat.value}
                </div>
                <div className="text-off-white/60 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
