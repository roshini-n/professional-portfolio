"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Certification data
const certifications = [
  {
    id: 1,
    title: "AWS Academy Graduate – Machine Learning Foundations",
    description: [
      "Foundational ML knowledge using AWS tools and services.",
      "Supervised/unsupervised learning, model evaluation via SageMaker.",
    ],
    link: "https://www.credly.com/badges/029b4760-418e-463f-89b7-d332fceeecab/public_url", // Replace with actual certificate link
    tags: ["AWS", "Machine Learning", "SageMaker"],
  },
  {
    id: 2,
    title: "AWS Academy Graduate – Data Analytics",
    description: [
      "Core data analytics concepts: collection, preparation, analysis.",
      "Hands-on with Redshift, AWS Glue, QuickSight.",
    ],
    link: "https://www.credly.com/badges/6ebf612e-9a43-4d6a-87ba-dc106498b015/public_url", // Replace with actual certificate link
    tags: ["AWS", "Data Analytics", "Redshift", "QuickSight"],
  },
  {
    id: 3,
    title: "AWS Academy Graduate – Cloud Foundations",
    description: [
      "Fundamentals of cloud computing & AWS architecture.",
      "Covered networking and cloud security practices.",
    ],
    link: "https://www.credly.com/badges/ff0325f2-755e-4ef9-85dc-9d0bfdf869bb/public_url", // Replace with actual certificate link
    tags: ["AWS", "Cloud Computing", "Security"],
  },
  {
    id: 4,
    title: "Server-side Development with NodeJS, Express, MongoDB",
    description: ["Built RESTful APIs with Express & Node.js.", "Used MongoDB for request handling and data storage."],
    link: "https://www.coursera.org/account/accomplishments/certificate/86LAAKG5QSBJ", // Replace with actual certificate link
    tags: ["Node.js", "Express", "MongoDB", "RESTful API"],
  },
  {
    id: 5,
    title: "CCNA: Introduction to Networks",
    description: [
      "Covered OSI model, TCP/IP, protocols, IP addressing.",
      "Configured routers/switches & troubleshooting networks.",
    ],
    link: "https://www.credly.com/badges/17934015-78e9-47bb-a64e-53de8f3dece1/public_url", // Replace with actual certificate link
    tags: ["Networking", "CCNA", "TCP/IP"],
  },
  {
    id: 6,
    title: "Deep Learning AI",
    description: ["Built neural networks using TensorFlow and Keras.", "Practical deep learning model training."],
    link: "https://www.coursera.org/account/accomplishments/certificate/54FJBPLNL73M", // Replace with actual certificate link
    tags: ["Deep Learning", "TensorFlow", "Keras"],
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Certifications</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            I've earned several industry-recognized certifications that validate my skills and knowledge in various
            technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-start justify-between">
                    <Link
                      href={cert.link}
                      className="text-lg hover:text-primary transition-colors flex items-center gap-1 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.title}
                      <ExternalLink className="w-4 h-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-muted-foreground mb-4">
                    {cert.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
