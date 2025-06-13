"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, FileIcon as FilePdf, FileCode } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function ResumeDownloadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(0, 0, 0, 0)",
              isDark
                ? "0 0 0 4px rgba(190, 173, 237, 0.2)" // Lavender for dark mode
                : "0 0 0 4px rgba(20, 184, 166, 0.2)", // Teal for light mode
              "0 0 0 0 rgba(0, 0, 0, 0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Button
            variant="outline"
            size="sm"
            className="bg-background/90 backdrop-blur-sm hover:bg-background hover:scale-105 transition-all duration-300"
          >
            Resume
            <motion.div
              className="ml-2 inline-flex"
              animate={{ translateY: [0, -2, 0] }}
              transition={{
                duration: 1,
                delay: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            >
              <Download className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">Choose your preferred format to download Roshini's resume:</p>
          <div className="flex flex-col gap-3">
            <Button asChild variant="default" className="justify-start">
              <a href="/resume.pdf" download="Roshini_Naguru_Resume.pdf">
                <FilePdf className="mr-2 h-4 w-4" />
                <span>PDF Format (.pdf)</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <a href="/resume.txt" download="Roshini_Naguru_Resume.txt">
                <FileText className="mr-2 h-4 w-4" />
                <span>Plain Text (.txt)</span>
              </a>
            </Button>
            <Button
              onClick={() => {
                // Create a text blob and trigger download
                const resumeText = `ROSHINI NAGURU
Computer Science Graduate
nagururoshini@gmail.com | +1 (660) 528-2685 | Maryville, Missouri, USA
LinkedIn: linkedin.com/in/roshininaguru | GitHub: github.com/roshini-n

EDUCATION
---------
MS Computer Science
Northwest Missouri State University, Missouri, USA
2024-2025

B-Tech Computer Science
Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Tamil Nadu, India
2019-2023

SKILLS
------
Programming: JavaScript, TypeScript, Python, HTML/CSS, React.js, Node.js
Databases: MongoDB, SQL, PostgreSQL
Tools: Git/GitHub, AWS, CI/CD
Soft Skills: Problem Solving, Team Collaboration, Communication, Time Management

CERTIFICATIONS
-------------
AWS Academy Graduate – Machine Learning Foundations
AWS Academy Graduate – Data Analytics
AWS Academy Graduate – Cloud Foundations
Server-side Development with NodeJS, Express, MongoDB
CCNA: Introduction to Networks
Deep Learning AI

PROJECTS
--------
ReviewNext
- Developed a web-based platform enabling user registration, login, and submission, editing, or deletion of reviews and ratings across multiple categories including books, games, movies, and gadgets.
- Integrated third-party image API to allow users to add products with corresponding images under selected categories.
- Designed customizable user profiles featuring bios, "My List," and "My Log" to track user activity and preferences.
- Implemented role-based access control, including visitor mode for non-registered users to browse reviews and ratings.

Fresh Track App
- Designed and developed a mobile app to reduce household food waste by tracking food freshness using deep learning and computer vision.
- Utilized a pre-trained MobileNetV2 model to detect and classify fruits and vegetables and estimate expiration dates based on visual data.
- Implemented API integration connecting the ML model with the app to ensure scalability and seamless data flow.
- Demonstrated project management and end-to-end machine learning pipeline skills in a sustainability-focused application.

Medicinal Plant Analysis
- Conducted comprehensive analysis of medicinal plants using RapidMiner to assess suitability for medical applications.
- Delivered the project within 4 months, showcasing effective project management in a machine learning context.
- Provided data-driven insights into plant properties, contributing to research initiatives in herbal medicine and sustainability.

Crop Price Prediction
- Developed a predictive model for crop price forecasting using historical data, achieving accuracy improvements over traditional methods.
- Employed Jupyter Notebooks for data analysis and model development to enhance team collaboration and efficiency.
- Used Python for backend development, streamlining data processing workflows and reducing processing time.
- Applied machine learning algorithms to analyze market trends, supporting data-driven pricing strategies.`

                const blob = new Blob([resumeText], { type: "text/plain" })
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "Roshini_Naguru_Resume.txt"
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                URL.revokeObjectURL(url)
                setIsOpen(false)
              }}
              variant="outline"
              className="justify-start"
            >
              <FileCode className="mr-2 h-4 w-4" />
              <span>Direct Download (Most Compatible)</span>
            </Button>
            <div className="text-xs text-muted-foreground mt-2">
              Note: If you have trouble opening the downloaded file, try the Direct Download option which creates the
              file directly in your browser.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
