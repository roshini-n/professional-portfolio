"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Project data
const projects = [
  {
    id: 1,
    title: "AI Powered Task Manager",
    description: "A task management application with AI features for task prioritization and time estimation.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A fully-featured e-commerce platform with product management, cart, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging, user authentication, and media sharing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Socket.io", "Express", "Firebase"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on location.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "API", "CSS", "HTML"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A professional portfolio website to showcase projects and skills.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "A mobile application for finding and saving recipes based on available ingredients.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Redux", "API"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    featured: false,
  },
]

type ProjectCardProps = {
  project: (typeof projects)[0]
  index: number
  isFeatured?: boolean
}

function ProjectCard({ project, index, isFeatured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`overflow-hidden ${isFeatured ? "md:flex" : ""} h-full`}>
        <div className={`${isFeatured ? "md:w-1/2" : ""}`}>
          <div className="relative overflow-hidden aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className={`${isFeatured ? "md:w-1/2" : ""} flex flex-col h-full`}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((project) => project.featured)
  const displayedProjects = showAll ? projects : featuredProjects

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Check out my latest projects showcasing my technical skills and problem-solving abilities. Each project
            represents unique challenges and solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-10 md:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
          ))}
        </div>

        {showAll && (
          <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} size="lg">
            {showAll ? "Show Less Projects" : "View All Projects"}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
