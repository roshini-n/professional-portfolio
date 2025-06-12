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
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-40 transform-gpu overflow-hidden blur-3xl -z-10">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="container px-4 mx-auto z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-muted border border-primary/20"
          >
            <Code className="w-4 h-4 mr-2 text-primary" />
            Computer Science Graduate
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight md:text-6xl mb-4">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </motion.h1>

          <motion.div variants={item} className="h-12 mb-6 text-xl md:text-2xl font-medium">
            <TypeAnimation
              sequence={[
                "I build web applications",
                1500,
                "I create mobile apps",
                1500,
                "I develop AI solutions",
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
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-4 mt-8">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
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
              className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20"
            >
              <ArrowRight className="w-5 h-5 rotate-90" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
