/*
 * PARTICLE TEXT COMPONENT
 * ======================
 * This component creates an interactive text effect where text is rendered as particles
 * that scatter when the mouse hovers over them and return to form the text when mouse leaves.
 * 
 * HOW IT WORKS:
 * 1. Renders text invisibly on canvas to get pixel data
 * 2. Creates particles at each text pixel location
 * 3. Animates particles to scatter on mouse hover
 * 4. Returns particles to original positions when mouse leaves
 */

'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

// Props interface for the ParticleText component
interface ParticleTextProps {
  text: string        // The text to render as particles (e.g., "AMINUL ISLAM")
  className?: string  // Optional CSS classes for styling
}

/**
 * PARTICLE CLASS
 * ==============
 * Represents a single particle that forms part of the text.
 * Each particle knows its current position, original position, and how to move.
 */
class Particle {
  // Current position of the particle
  x: number
  y: number

  // Visual properties
  size: number        // Radius of the particle circle
  textColor: string   // Color of the particle (matches theme)

  // Original position (where particle should return to form text)
  baseX: number
  baseY: number

  // Movement properties
  density: number     // How much the particle reacts to mouse (random for natural effect)

  /**
   * CONSTRUCTOR
   * Creates a new particle at the specified position
   */
  constructor(x: number, y: number, textColor: string) {
    this.x = x                                    // Start at text position
    this.y = y
    this.size = 1                                 // Small circle size
    this.baseX = this.x                          // Remember original position
    this.baseY = this.y
    this.density = (Math.random() * 30) + 1      // Random reaction strength (1-31)
    this.textColor = textColor                   // Use theme color
  }

  /**
   * DRAW METHOD
   * Renders the particle as a small circle on the canvas
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.textColor               // Set particle color
    ctx.beginPath()                              // Start drawing
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)  // Draw circle
    ctx.closePath()
    ctx.fill()                                   // Fill the circle
  }

  /**
   * UPDATE METHOD
   * Controls particle movement based on mouse position
   * This is where the magic happens!
   */
  update(mouseX: number | null, mouseY: number | null, mouseRadius: number) {
    // MOUSE REPULSION EFFECT
    // When mouse is present, particles scatter away from it
    if (mouseX !== null && mouseY !== null) {
      // Calculate distance from mouse to this particle
      const dx = mouseX - this.x                 // Horizontal distance
      const dy = mouseY - this.y                 // Vertical distance
      const distance = Math.sqrt(dx * dx + dy * dy)  // Actual distance using Pythagorean theorem

      // Only apply force if mouse is within interaction radius
      if (distance < mouseRadius && distance > 0) {
        // Calculate direction to push particle (away from mouse)
        const forceDirectionX = dx / distance    // Normalized X direction
        const forceDirectionY = dy / distance    // Normalized Y direction

        // Calculate force strength (stronger when mouse is closer)
        const maxDistance = mouseRadius
        const force = (maxDistance - distance) / maxDistance  // 0 to 1 scale

        // Apply force with particle's density as multiplier
        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        // Move particle away from mouse (subtract because we want repulsion)
        this.x -= directionX
        this.y -= directionY
      }
    } else {
      // RETURN TO BASE POSITION
      // When mouse is not present, particles slowly return to form text
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX           // Distance from home position
        this.x -= dx / 10                       // Move 10% closer each frame (smooth animation)
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY
        this.y -= dy / 10                       // Move 10% closer each frame
      }
    }
  }
}

/**
 * PARTICLE TEXT COMPONENT
 * =======================
 * Main React component that orchestrates the particle text effect
 */
export default function ParticleText({ text, className = '' }: ParticleTextProps) {
  // REFS - These persist across re-renders and don't trigger re-renders when changed
  const canvasRef = useRef<HTMLCanvasElement>(null)           // Reference to the canvas element
  const animationRef = useRef<number | undefined>(undefined)  // Stores animation frame ID for cleanup
  const particleArrayRef = useRef<Particle[]>([])            // Array of all particles
  const mouseRef = useRef<{
    x: number | null;      // Mouse X position (null when not hovering)
    y: number | null;      // Mouse Y position (null when not hovering)  
    radius: number         // Interaction radius around mouse (150px)
  }>({ x: null, y: null, radius: 80 })

  // THEME - Get current theme colors for particles
  const { currentTheme } = useTheme()

  /**
   * MAIN EFFECT HOOK
   * Runs when component mounts and when text or theme changes
   */
  useEffect(() => {

    /**
     * INITIALIZATION FUNCTION
     * ======================
     * This function converts text into particles by:
     * 1. Drawing text invisibly on canvas
     * 2. Reading pixel data to find where text exists
     * 3. Creating particles at each text pixel location
     */
    const init = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      // Get 2D drawing context with optimization flag
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) return

      // STEP 1: Set canvas size to match container
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // STEP 2: Clear any existing particles
      particleArrayRef.current = []

      // STEP 3: Draw text invisibly to get pixel data
      ctx.fillStyle = currentTheme.colors.text                    // Use theme color
      ctx.font = `normal ${Math.min(canvas.width / 12, 100)}px Verdana`  // Responsive font size
      ctx.textAlign = 'center'                                    // Center horizontally
      ctx.textBaseline = 'middle'                                 // Center vertically
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)    // Draw text in center

      // STEP 4: Get pixel data from the drawn text
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height)

      // STEP 5: Clear canvas (we only needed it to get pixel data)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // STEP 6: Create particles from text pixels
      const particleDensity = 2  // Skip every 2 pixels (reduces particle count for performance)

      // Loop through every pixel in the image data
      for (let y = 0; y < textCoordinates.height; y += particleDensity) {
        for (let x = 0; x < textCoordinates.width; x += particleDensity) {
          // Check if this pixel has text (alpha channel > 128 means it's visible)
          // Image data format: [R, G, B, A, R, G, B, A, ...] so alpha is every 4th value
          const pixelIndex = (y * 4 * textCoordinates.width) + (x * 4) + 3  // +3 for alpha channel

          if (textCoordinates.data[pixelIndex] > 128) {  // If pixel is visible enough
            const positionX = x
            const positionY = y

            // Create new particle at this text pixel location
            particleArrayRef.current.push(new Particle(positionX, positionY, currentTheme.colors.text))

            // Set the particle's home position (where it returns to form text)
            const lastParticle = particleArrayRef.current[particleArrayRef.current.length - 1]
            lastParticle.baseX = positionX
            lastParticle.baseY = positionY
          }
        }
      }
    }

    /**
     * ANIMATION LOOP FUNCTION
     * =======================
     * This function runs continuously (60fps) to:
     * 1. Clear the canvas
     * 2. Update all particles based on mouse position
     * 3. Draw all particles in their new positions
     * 4. Schedule the next frame
     */
    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // STEP 1: Clear previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // STEP 2: Update and draw each particle
      for (let i = 0; i < particleArrayRef.current.length; i++) {
        // Draw particle at current position
        particleArrayRef.current[i].draw(ctx)

        // Update particle position based on mouse
        particleArrayRef.current[i].update(
          mouseRef.current.x,      // Mouse X position
          mouseRef.current.y,      // Mouse Y position  
          mouseRef.current.radius  // Interaction radius
        )
      }

      // STEP 3: Schedule next animation frame (creates smooth 60fps loop)
      animationRef.current = requestAnimationFrame(animate)
    }
    // Get canvas reference for event handling
    const canvas = canvasRef.current
    if (!canvas) return

    /**
     * EVENT HANDLERS
     * ==============
     * These functions handle user interactions and system events
     */

    /**
     * MOUSE MOVE HANDLER
     * Tracks mouse position relative to canvas for particle interaction
     */
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()  // Get canvas position on page
      // Convert page coordinates to canvas coordinates
      mouseRef.current.x = event.clientX - rect.left
      mouseRef.current.y = event.clientY - rect.top
    }

    /**
     * MOUSE LEAVE HANDLER  
     * Resets mouse position when cursor leaves canvas area
     * This triggers particles to return to text formation
     */
    const handleMouseLeave = () => {
      mouseRef.current.x = null  // Clear mouse position
      mouseRef.current.y = null  // Particles will return to base positions
    }

    /**
     * WINDOW RESIZE HANDLER
     * Recreates particles when window size changes to maintain proper text scaling
     */
    const handleResize = () => {
      // Stop current animation to prevent conflicts
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Reinitialize after brief delay to ensure new size is applied
      setTimeout(() => {
        init()     // Recreate particles with new canvas size
        animate()  // Restart animation loop
      }, 100)
    }

    /**
     * EVENT LISTENER SETUP
     * ====================
     * Attach event handlers to track user interactions
     */
    canvas.addEventListener('mousemove', handleMouseMove)    // Track mouse movement
    canvas.addEventListener('mouseleave', handleMouseLeave)  // Detect when mouse leaves
    window.addEventListener('resize', handleResize)          // Handle window resizing

    /**
     * COMPONENT INITIALIZATION
     * =======================
     * Start the particle system after a brief delay to ensure proper canvas sizing
     */
    setTimeout(() => {
      init()     // Convert text to particles
      animate()  // Start animation loop
    }, 100)

    /**
     * CLEANUP FUNCTION
     * ================
     * This runs when component unmounts or dependencies change
     * Prevents memory leaks and removes event listeners
     */
    return () => {
      // Stop animation loop
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      // Remove event listeners to prevent memory leaks
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [text, currentTheme])  // Re-run effect when text or theme changes

  /**
   * COMPONENT RENDER
   * ================
   * Returns the canvas element that will display the particle effect
   */
  return (
    <canvas
      ref={canvasRef}                    // Connect to our canvas reference
      className={`block ${className}`}   // Apply CSS classes
      style={{
        width: '100%',                   // Full width of container
        height: '200px',                 // Fixed height for text display
        cursor: 'pointer'                // Show pointer cursor to indicate interactivity
      }}
    />
  )
}

/*
 * SUMMARY OF HOW IT ALL WORKS TOGETHER:
 * =====================================
 * 
 * 1. INITIALIZATION:
 *    - Component mounts and useEffect runs
 *    - init() draws text invisibly and creates particles at text pixels
 *    - animate() starts the 60fps animation loop
 * 
 * 2. MOUSE INTERACTION:
 *    - User moves mouse over canvas
 *    - handleMouseMove updates mouseRef with current position
 *    - Each animation frame, particles check mouse position
 *    - Particles within radius scatter away from mouse
 * 
 * 3. MOUSE LEAVE:
 *    - User moves mouse away from canvas
 *    - handleMouseLeave sets mouse position to null
 *    - Particles gradually return to base positions (forming text)
 * 
 * 4. ANIMATION LOOP:
 *    - Runs continuously at 60fps
 *    - Clears canvas, updates particles, draws particles
 *    - Creates smooth motion and interaction
 * 
 * 5. CLEANUP:
 *    - When component unmounts, stops animation and removes listeners
 *    - Prevents memory leaks and performance issues
 * 
 * KEY CONCEPTS:
 * - Canvas API for drawing
 * - requestAnimationFrame for smooth animation
 * - Image data manipulation to detect text pixels
 * - Vector math for particle movement and mouse interaction
 * - React refs for persistent values that don't trigger re-renders
 */