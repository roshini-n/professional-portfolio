"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function MobileOptimizedContact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mnnvdwqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Failed to send email:", error)
      setIsSubmitting(false)
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8 md:mb-12 text-center"
        >
          <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="w-16 md:w-24 h-1.5 bg-primary rounded-full mb-4 md:mb-6"></div>
          <p className="max-w-2xl text-sm md:text-base text-muted-foreground px-4">
            Have a project in mind or want to explore potential opportunities? Feel free to reach out and I'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold">Contact Information</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Feel free to reach out through any of the methods below. I'm always open to discussing new projects,
              opportunities, or partnerships.
            </p>

            <div className="space-y-3 md:space-y-4">
              <Card>
                <CardContent className="flex items-center p-3 md:p-4">
                  <div className="p-2 mr-3 md:mr-4 rounded-full bg-primary/10">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs md:text-sm text-muted-foreground break-all">nagururoshini@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-3 md:p-4">
                  <div className="p-2 mr-3 md:mr-4 rounded-full bg-primary/10">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-xs md:text-sm text-muted-foreground">+1 (660) 528-2685</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center p-3 md:p-4">
                  <div className="p-2 mr-3 md:mr-4 rounded-full bg-primary/10">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Maryville, Missouri, USA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Send Me a Message</h3>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg md:text-xl font-medium mb-2">Message Sent!</h4>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="h-11 md:h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="h-11 md:h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className="h-11 md:h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={4}
                        className="resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-11 md:h-12" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
