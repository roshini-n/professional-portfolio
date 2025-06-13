"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="container px-4 mx-auto z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-muted/80 backdrop-blur-sm border border-primary/20"
          >
            <Code className="w-4 h-4 mr-2 text-primary" />
            Computer Science Graduate
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight md:text-6xl mb-4">
            Hi, I'm <span className="gradient-text">Roshini Naguru</span>
          </motion.h1>

          <motion.div variants={item} className="h-12 mb-6 text-xl md:text-2xl font-medium">
            <TypeAnimation
              sequence={[
                "I build web applications",
                1500,
                "I create mobile apps",
                1500,
                "I craft data-driven models",
                1500,
                "I design user experiences",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-primary"
            />
          </motion.div>

          <motion.p variants={item} className="max-w-xl mb-8 text-muted-foreground">
            A passionate computer science graduate specializing in creating exceptional digital experiences through
            clean code and modern technologies.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="backdrop-blur-sm">
              <Link href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="backdrop-blur-sm">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-4 mt-8">
            <Link href="https://github.com/roshini-n" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full backdrop-blur-sm">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/roshininaguru/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full backdrop-blur-sm">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/Roshini_1124" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full backdrop-blur-sm">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Link
              href="#about"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5 rotate-90" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
