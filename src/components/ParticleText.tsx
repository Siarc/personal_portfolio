'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface ParticleTextProps {
  text: string
  className?: string
}

class Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  textColor: string

  constructor(x: number, y: number, textColor: string) {
    this.x = x
    this.y = y
    this.size = 1
    this.baseX = this.x
    this.baseY = this.y
    this.density = (Math.random() * 30) + 1
    this.textColor = textColor
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.textColor
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update(mouseX: number | null, mouseY: number | null, mouseRadius: number) {
    // Always try to return to base position first
    if (this.x !== this.baseX) {
      const dx = this.x - this.baseX
      this.x -= dx / 8
    }
    if (this.y !== this.baseY) {
      const dy = this.y - this.baseY
      this.y -= dy / 8
    }

    // Apply mouse repulsion effect only if mouse is present
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < mouseRadius && distance > 0) {
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const force = (mouseRadius - distance) / mouseRadius
        const directionX = forceDirectionX * force * this.density * 0.6
        const directionY = forceDirectionY * force * this.density * 0.6

        this.x -= directionX
        this.y -= directionY
      }
    }
  }
}

export default function ParticleText({ text, className = '' }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { currentTheme } = useTheme()
  const animationRef = useRef<number | undefined>(undefined)
  const particleArrayRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({ x: null, y: null, radius: 100 })


  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) return

      // Set canvas size
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      particleArrayRef.current = []

      // Draw text
      ctx.fillStyle = currentTheme.colors.text
      ctx.font = `normal ${Math.min(canvas.width / 12, 100)}px Verdana`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particleDensity = 2
      for (let y = 0; y < textCoordinates.height; y += particleDensity) {
        for (let x = 0; x < textCoordinates.width; x += particleDensity) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            const positionX = x
            const positionY = y
            particleArrayRef.current.push(new Particle(positionX, positionY, currentTheme.colors.text))
            const lastParticle = particleArrayRef.current[particleArrayRef.current.length - 1]
            lastParticle.baseX = positionX
            lastParticle.baseY = positionY
          }
        }
      }
    }

    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particleArrayRef.current.length; i++) {
        particleArrayRef.current[i].draw(ctx)
        particleArrayRef.current[i].update(mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius)
      }

      animationRef.current = requestAnimationFrame(animate)
    }
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = event.clientX - rect.left
      mouseRef.current.y = event.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      setTimeout(() => {
        init()
        animate()
      }, 100)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    // Initialize after a short delay to ensure proper sizing
    setTimeout(() => {
      init()
      animate()
    }, 100)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [text, currentTheme])

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className}`}
      style={{
        width: '100%',
        height: '200px',
        cursor: 'pointer'
      }}
    />
  )
}