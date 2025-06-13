"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"
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

      {/* Background Animation */}
      <BackgroundAnimation />

      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <CertificationsSection />

      <ContactSection />

      <Footer />

      <Toaster />
    </main>
  )
}
