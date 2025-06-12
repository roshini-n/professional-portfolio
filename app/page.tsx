"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { ModeToggle } from "@/components/mode-toggle"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen">
      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ width: progressBarWidth }} />

      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button variant="outline" size="icon" asChild>
          <a href="/resume.pdf" download>
            <Download className="h-4 w-4" />
            <span className="sr-only">Download Resume</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="#contact">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Contact</span>
          </a>
        </Button>
        <ModeToggle />
      </div>

      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ExperienceSection />

      <ContactSection />

      <Footer />

      <Toaster />
    </main>
  )
}
