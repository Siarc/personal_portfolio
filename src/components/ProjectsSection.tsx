'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useTheme, getButtonTextColor } from '@/contexts/ThemeContext'

// Project data based on your experience
const projects = [
  {
    id: 1,
    title: 'SD Cabin',
    description: 'In-flight connectivity app that simplifies access to multiple key functions from a single application while on board an aircraft equipped with SD Hardware.',
    tags: ['Kotlin', 'Java', 'Android', 'Aviation'],
    imageUrl: 'https://placehold.co/600x400/3b0764/ffffff?text=SD+Cabin',
  },
  {
    id: 2,
    title: 'Phoring - SIM-Less 2nd Line',
    description: 'VOIP-based secured Sim-Less 2nd line phone service provider that gives users a worldwide phone number to add a sideline to their smartphone.',
    tags: ['Kotlin', 'VOIP', 'SIP', 'IAX2'],
    imageUrl: 'https://placehold.co/600x400/4c1d95/ffffff?text=Phoring',
  },
  {
    id: 3,
    title: 'Minu Monitor',
    description: 'Secured, standard-based telemedicine service that measures health metrics like ECG, Blood Pressure, Oxygen Level, Glucose Level, and Body Temperature.',
    tags: ['Flutter', 'Bluetooth', 'Healthcare', 'IoT'],
    imageUrl: 'https://placehold.co/600x400/6d28d9/ffffff?text=Minu+Monitor',
  },
]

export default function ProjectsSection() {
  const { currentTheme } = useTheme()
  const constraintsRef = useRef(null)

  return (
    <section 
      id="projects" 
      className="py-20 px-4 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.surface }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(${currentTheme.colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.colors.primary} 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating project icons */}
        {['📱', '💻', '🚀', '⚡', '🔧', '🎯'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{ 
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 4) * 20}%`
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px"
          style={{ backgroundColor: currentTheme.colors.accent + '30' }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 rounded-lg"
          style={{ borderColor: currentTheme.colors.secondary + '40' }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: currentTheme.colors.text }}
          >
            My <span style={{ color: currentTheme.colors.primary }}>Projects</span>
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Here are some of my recent projects. Each one was carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={index === 0 ? constraintsRef : null}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden shadow-xl"
              style={{ 
                background: `linear-gradient(to bottom right, ${currentTheme.colors.background}, ${currentTheme.colors.surface})`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: currentTheme.colors.text }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: currentTheme.colors.primary + '20',
                        color: currentTheme.colors.primary
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-4 py-2 rounded-lg font-medium transition-colors"
                  style={{ 
                    backgroundColor: currentTheme.colors.primary,
                    color: getButtonTextColor(currentTheme)
                  }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}