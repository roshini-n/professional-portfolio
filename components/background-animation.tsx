"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particleCount = 70
    const connectionDistance = 100

    // Use resolvedTheme to get the actual current theme
    const isDark = resolvedTheme === "dark"

    // Define Particle class first
    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number
      color: string

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.directionX = Math.random() * 0.4 - 0.2
        this.directionY = Math.random() * 0.4 - 0.2

        // Larger particles in light mode for better visibility
        this.size = Math.random() * (isDark ? 2 : 2.5) + (isDark ? 0.5 : 1)

        // Different colors for dark and light modes
        // Lavender for dark mode, Teal for light mode
        this.color = isDark
          ? "rgba(190, 173, 237, 0.4)" // Lavender for dark mode
          : "rgba(20, 184, 166, 0.5)" // Teal for light mode
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) {
          this.directionX = -this.directionX
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.directionY = -this.directionY
        }

        this.x += this.directionX
        this.y += this.directionY
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize particles array after class definition
    let particles: Particle[] = []

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push(new Particle(x, y))
      }
    }

    function connect() {
      if (!ctx) return

      // Higher opacity for light mode connections
      const opacityValue = isDark ? 0.15 : 0.25

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = isDark
              ? `rgba(190, 173, 237, ${opacity * opacityValue})` // Lavender for dark mode
              : `rgba(20, 184, 166, ${opacity * opacityValue})` // Teal for light mode

            // Thicker lines in light mode
            ctx.lineWidth = isDark ? 1 : 1.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // This will call initParticles() after Particle class is defined
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme]) // Add resolvedTheme to dependencies to update when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70 pointer-events-none"
      aria-hidden="true"
    />
  )
}
