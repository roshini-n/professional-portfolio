"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Project data
const projects = [
  {
    id: 1,
    title: "ReviewNext - Ongoing",
    description: "Northwest Missouri State University, Missouri, USA",
    details: [
      "Developed a web-based platform enabling user registration, login, and submission, editing, or deletion of reviews and ratings across multiple categories including books, games, movies, and gadgets.",
      "Integrated third-party image API to allow users to add products with corresponding images under selected categories.",
      'Designed customizable user profiles featuring bios, "My List," and "My Log" to track user activity and preferences.',
      "Implemented role-based access control, including visitor mode for non-registered users to browse reviews and ratings.",
    ],
    tags: ["Web Development", "API Integration", "User Authentication", "Database Design"],
    githubLink: "https://github.com/roshini-n/ReviewNext",
    featured: true,
  },
  {
    id: 2,
    title: "Fresh Track App",
    description: "Northwest Missouri State University, Missouri, USA",
    details: [
      "Designed and developed a mobile app to reduce household food waste by tracking food freshness using deep learning and computer vision.",
      "Utilized a pre-trained MobileNetV2 model to detect and classify fruits and vegetables and estimate expiration dates based on visual data.",
      "Implemented API integration connecting the ML model with the app to ensure scalability and seamless data flow.",
      "Demonstrated project management and end-to-end machine learning pipeline skills in a sustainability-focused application.",
    ],
    tags: ["Mobile App", "Deep Learning", "Computer Vision", "MobileNetV2"],
    githubLink: "https://github.com/roshini-n/FreshTrack",
    featured: true,
  },
  {
    id: 3,
    title: "Medicinal Plant Analysis",
    description: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Tamil Nadu, India",
    details: [
      "Conducted comprehensive analysis of medicinal plants using RapidMiner to assess suitability for medical applications.",
      "Delivered the project within 4 months, showcasing effective project management in a machine learning context.",
      "Provided data-driven insights into plant properties, contributing to research initiatives in herbal medicine and sustainability.",
    ],
    tags: ["RapidMiner", "Data Analysis", "Machine Learning", "Research"],
    githubLink: "https://github.com/roshini-n",
    featured: true,
  },
  {
    id: 4,
    title: "Crop Price Prediction",
    description: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Tamil Nadu, India",
    details: [
      "Developed a predictive model for crop price forecasting using historical data, achieving accuracy improvements over traditional methods.",
      "Employed Jupyter Notebooks for data analysis and model development to enhance team collaboration and efficiency.",
      "Used Python for backend development, streamlining data processing workflows and reducing processing time.",
      "Applied machine learning algorithms to analyze market trends, supporting data-driven pricing strategies.",
    ],
    tags: ["Python", "Jupyter Notebooks", "Predictive Modeling", "Data Analysis"],
    githubLink: "https://github.com/roshini-n",
    featured: true,
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
      <Card className="h-full">
        <div className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {project.details && (
              <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
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
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((project) => project.featured)
  const displayedProjects = showAll ? featuredProjects : featuredProjects.slice(0, 2)

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
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
          ))}
        </div>

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
