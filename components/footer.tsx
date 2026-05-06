"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  ejendomme: [
    { label: "Erhverv", href: "#erhverv" },
    { label: "Bolig", href: "#bolig" },
    { label: "Nybyggeri", href: "#" },
    { label: "Investeringer", href: "#" },
  ],
  virksomhed: [
    { label: "Om os", href: "#om-os" },
    { label: "Karriere", href: "#" },
    { label: "Nyheder", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl">
                <span className="text-off-white">oyi</span>
                <span className="text-gold ml-1">ejendomme</span>
              </span>
            </Link>
            <p className="text-off-white/60 text-sm leading-relaxed mb-6">
              Eksklusiv fast ejendom i Danmark siden 1995. Vi forbinder mennesker 
              med exceptionelle ejendomme.
            </p>
            <div className="flex items-center gap-4">
              {["LinkedIn", "Instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-off-white/60 hover:text-gold text-sm transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-off-white/40 mb-6">
              Ejendomme
            </h4>
            <ul className="space-y-4">
              {footerLinks.ejendomme.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-off-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-off-white/40 mb-6">
              Virksomhed
            </h4>
            <ul className="space-y-4">
              {footerLinks.virksomhed.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-off-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-off-white/40 mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-off-white/70 text-sm">
                  Bredgade 25, 3. sal<br />
                  1260 København K
                </span>
              </li>
              <li>
                <a
                  href="tel:+4533123456"
                  className="flex items-center gap-3 text-off-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  +45 33 12 34 56
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oyiejendomme.dk"
                  className="flex items-center gap-3 text-off-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  info@oyiejendomme.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-off-white/40 text-sm">
            © {new Date().getFullYear()} Oyi Ejendomme. Alle rettigheder forbeholdes.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-off-white/40 hover:text-off-white/60 text-sm transition-colors">
              Privatlivspolitik
            </Link>
            <Link href="#" className="text-off-white/40 hover:text-off-white/60 text-sm transition-colors">
              Vilkår & Betingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
