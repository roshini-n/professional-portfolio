"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

// Experience data
const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Tech Company Inc.",
    period: "Jun 2023 - Aug 2023",
    description:
      "Worked on full-stack development for a customer-facing application. Implemented new features and fixed bugs using React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB", "Git", "Agile"],
  },
  {
    id: 2,
    role: "Research Assistant",
    company: "University Research Lab",
    period: "Jan 2023 - May 2023",
    description:
      "Assisted in AI research projects, implemented algorithms, and analyzed data. Contributed to a paper on machine learning optimization techniques.",
    skills: ["Python", "TensorFlow", "Data Analysis", "Research"],
  },
  {
    id: 3,
    role: "Web Development Lead",
    company: "Student Association",
    period: "Sep 2022 - May 2023",
    description:
      "Led a team of student developers to create and maintain the university student association website. Implemented new features and ensured site reliability.",
    skills: ["JavaScript", "HTML/CSS", "Team Leadership", "Project Management"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            My professional journey includes internships, research positions, and leadership roles that have helped me
            grow as a computer science professional.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:ml-auto" : "md:pl-8"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 left-4 w-4 h-4 rounded-full bg-primary md:left-0 ${
                  index % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                }`}
              />

              {/* Card */}
              <div className="ml-12 p-6 border rounded-lg shadow-sm bg-card md:ml-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Briefcase className="w-4 h-4 mr-1.5" />
                  <span className="text-sm font-medium">{experience.company}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1.5" />
                  <span className="text-sm">{experience.period}</span>
                </div>
                <p className="mb-4 text-muted-foreground">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
