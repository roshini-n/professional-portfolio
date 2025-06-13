"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
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
      // Replace YOUR_FORMSPREE_ENDPOINT with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This helps with reply-to functionality
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Show success message
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form after submission
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

  // Rest of the component remains the same...
  // (Form JSX structure unchanged)
}
