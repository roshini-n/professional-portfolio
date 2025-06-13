"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DirectResumeDownload() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0 0 rgba(124, 58, 237, 0)",
          "0 0 0 4px rgba(124, 58, 237, 0.2)",
          "0 0 0 0 rgba(124, 58, 237, 0)",
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Button
        variant="outline"
        size="sm"
        className="bg-background/90 backdrop-blur-sm hover:bg-background hover:scale-105 transition-all duration-300"
      >
        <a
          href="/resume.pdf"
          download="Roshini_Naguru_Resume.pdf"
          className="flex items-center"
          onClick={(e) => {
            // This is a fallback in case the PDF download doesn't work
            const handleFallback = () => {
              e.preventDefault()

              // Create a simple text resume as fallback
              const resumeText = `ROSHINI NAGURU - RESUME
Computer Science Graduate
nagururoshini@gmail.com | +1 (660) 528-2685`

              const blob = new Blob([resumeText], { type: "text/plain" })
              const url = URL.createObjectURL(blob)
              const a = document.createElement("a")
              a.href = url
              a.download = "Roshini_Naguru_Resume.txt"
              document.body.appendChild(a)
              a.click()
              document.body.removeChild(a)
              URL.revokeObjectURL(url)

              alert("PDF download failed. A text version has been downloaded instead.")
            }

            // We'll set a timeout to check if the PDF download worked
            // This is a simple heuristic and not foolproof
            setTimeout(() => {
              // If we're still on the page after 2 seconds, assume PDF failed
              // This is just a simple fallback mechanism
              const link = document.createElement("a")
              link.href = "/resume.txt"
              link.download = "Roshini_Naguru_Resume.txt"
              link.style.display = "none"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }, 2000)
          }}
        >
          Resume
          <motion.div
            className="ml-2 inline-flex"
            animate={{ translateY: [0, -2, 0] }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 5,
            }}
          >
            <Download className="h-4 w-4" />
          </motion.div>
        </a>
      </Button>
    </motion.div>
  )
}
