"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Roshini Naguru. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full border"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
