"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ResumeDownloadModal from "./resume-download-modal"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            I'm a computer science graduate passionate about creating impactful software solutions. Here's a brief
            overview of my background and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              I'm a passionate computer science graduate with a strong foundation in software development, algorithms,
              and problem-solving. My academic journey has equipped me with both theoretical knowledge and practical
              skills necessary for creating innovative solutions.
            </p>
            <p className="text-muted-foreground">
              Throughout my academic career, I've worked on numerous projects that have helped me develop expertise in
              web development, artificial intelligence, and data structures. I believe in writing clean, efficient code
              and constantly strive to expand my knowledge.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects,
              or solving complex algorithmic problems to keep my skills sharp.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <GraduationCap className="w-8 h-8 mb-2 text-primary" />
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-center text-muted-foreground">M.S. Computer Science</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Code className="w-8 h-8 mb-2 text-primary" />
                  <h4 className="font-medium">Projects</h4>
                  <p className="text-sm text-center text-muted-foreground">3 Completed</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex justify-center">
              <div className="relative overflow-hidden border-2 border-primary/20 rounded-md shadow-lg w-full max-w-md">
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src="https://sjc.microlink.io/1g-02sEIeSuyYFOxTCeW6c4pi3FGnd9oBvNaqOXo70QJZTOvbgCfwrsl9AiLDOIPQfHAHwf7zZGBebtXWu1_fg.jpeg"
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="absolute bottom-4 right-4">
                        <ResumeDownloadModal />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Resume</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="mt-8 p-4 bg-card border rounded-lg shadow-lg mx-auto max-w-sm">
              <h4 className="mb-2 font-semibold">Education Timeline</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <GraduationCap className="flex-shrink-0 w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">MS Computer Science</p>
                    <p className="text-xs text-muted-foreground">
                      Northwest Missouri State University, Missouri, USA 2024-2025
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <GraduationCap className="flex-shrink-0 w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium">B-Tech Computer Science</p>
                    <p className="text-xs text-muted-foreground">
                      Vel Tech Rangarajan Dr. Sagunthala R&amp;D Institute of Science and Technology, Tamil Nadu, India
                      2019-2023
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
