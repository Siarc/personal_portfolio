'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme, getButtonTextColor } from '@/contexts/ThemeContext'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'


export default function Home() {
  const { currentTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div 
      className="overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <Navbar />

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen relative overflow-hidden"
        style={{ 
          background: `linear-gradient(to bottom right, ${currentTheme.colors.background}, ${currentTheme.colors.primary}40, ${currentTheme.colors.background})`
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: currentTheme.colors.primary + '33' }}
            animate={{
              x: mousePosition.x / 10,
              y: mousePosition.y / 10,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: currentTheme.colors.secondary + '33' }}
            animate={{
              x: -mousePosition.x / 15,
              y: -mousePosition.y / 15,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 30 }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              style={{ color: currentTheme.colors.text }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AMINUL ISLAM
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl mb-8"
              style={{ color: currentTheme.colors.textSecondary }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span style={{ color: currentTheme.colors.primary }}>Software Engineer II</span> &
              <span style={{ color: currentTheme.colors.secondary }}> Mobile App Developer</span>
            </motion.div>

            <motion.p
              className="text-lg max-w-2xl mx-auto mb-12"
              style={{ color: currentTheme.colors.textSecondary }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Proactive and adaptable professional with expertise in Kotlin, Java, Flutter, and Python.
              Passionate about creating innovative mobile solutions that make a difference.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                style={{ 
                  backgroundColor: currentTheme.colors.primary,
                  color: getButtonTextColor(currentTheme)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border rounded-full font-semibold transition-colors inline-block"
                style={{ 
                  borderColor: currentTheme.colors.accent,
                  color: currentTheme.colors.accent
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 rounded-full"
            style={{ backgroundColor: currentTheme.colors.accent }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-6 h-6 rounded-full"
            style={{ backgroundColor: currentTheme.colors.secondary }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-10 w-2 h-2 rounded-full"
            style={{ backgroundColor: currentTheme.colors.text }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: currentTheme.colors.text + '4D' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: currentTheme.colors.text + '80' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}