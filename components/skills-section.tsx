"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Skill categories
const skillCategories = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },

    { name: "TypeScript", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 80 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 65 },
  ],
}

// Soft skills
const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Attention to Detail",
  "Project Management",
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            As a computer science graduate, I've acquired a diverse set of skills through academic studies, projects,
            and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold capitalize">{category} Skills</h3>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div
                            className="skill-progress"
                            style={{ "--progress": `${skill.level}%` } as React.CSSProperties}
                          />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {category === "frontend" && (
                    <Card>
                      <CardHeader>
                        <h3 className="text-xl font-semibold">Soft Skills</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {softSkills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                              <Badge variant="outline" className="px-3 py-1 text-sm">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {category === "backend" && (
                    <Card>
                      <CardHeader>
                        <h3 className="text-xl font-semibold">Databases</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col items-center p-4 border rounded-lg">
                            <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xl font-bold text-primary">SQL</span>
                            </div>
                            <h4 className="font-medium">Relational</h4>
                            <p className="text-sm text-center text-muted-foreground">MySQL, PostgreSQL</p>
                          </div>
                          <div className="flex flex-col items-center p-4 border rounded-lg">
                            <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xl font-bold text-primary">NoSQL</span>
                            </div>
                            <h4 className="font-medium">Non-Relational</h4>
                            <p className="text-sm text-center text-muted-foreground">MongoDB, Firebase</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {category === "tools" && (
                    <Card>
                      <CardHeader>
                        <h3 className="text-xl font-semibold">Other Technologies</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                          {["AI/ML", "Cloud Computing", "Mobile Dev"].map(
                            (tech, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex flex-col items-center p-4 border rounded-lg"
                              >
                                <div className="w-12 h-12 mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                  <span className="text-sm font-bold text-primary">{tech.split("/")[0]}</span>
                                </div>
                                <p className="text-sm text-center font-medium">{tech}</p>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
