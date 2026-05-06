"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Phone, Mail } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-charcoal border border-white/10 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-2xl font-serif text-off-white">
                  Kontakt os
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={24} className="text-off-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-off-white/70 text-sm">
                  Vi er glade for at høre fra dig. Kontakt os for mere information om vores ejendomme eller tjenester.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-off-white mb-1">
                        Adresse
                      </h3>
                      <p className="text-off-white/70 text-sm">
                        Bredgade 25, 3. sal<br />
                        1260 København K
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href="tel:+4533123456"
                    whileHover={{ x: 4 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-off-white mb-1">
                        Telefon
                      </h3>
                      <p className="text-off-white/70 text-sm group-hover:text-gold transition-colors">
                        +45 33 12 34 56
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:info@oyiejendomme.dk"
                    whileHover={{ x: 4 }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-off-white mb-1">
                        Email
                      </h3>
                      <p className="text-off-white/70 text-sm group-hover:text-gold transition-colors">
                        info@oyiejendomme.dk
                      </p>
                    </div>
                  </motion.a>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-off-white/60 text-xs mb-4">
                    Åbningstider: Mandag-Fredag 09:00-17:00
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full px-4 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold/90 transition-colors"
                  >
                    Luk
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
