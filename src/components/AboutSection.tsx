'use client'

import { motion } from 'framer-motion'
import { useTheme, getButtonTextColor } from '@/contexts/ThemeContext'

// Skills data
const skills = [
  { name: 'Kotlin', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'Flutter', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Firebase Services', level: 85 },
  { name: 'Azure Web Services', level: 75 },
]

export default function AboutSection() {
  const { currentTheme } = useTheme()

  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${currentTheme.colors.background}, ${currentTheme.colors.primary}15)`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code symbols */}
        {['{', '}', '<', '>', '[', ']', '(', ')'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl font-mono opacity-10"
            style={{
              color: currentTheme.colors.primary,
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: currentTheme.colors.secondary + '20' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Tech stack icons floating */}
        {['K', 'J', 'F', 'P'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
            style={{
              backgroundColor: currentTheme.colors.accent + '20',
              color: currentTheme.colors.accent,
              left: `${15 + i * 20}%`,
              bottom: `${10 + i * 5}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {tech}
          </motion.div>
        ))}
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
            About <span style={{ color: currentTheme.colors.primary }}>Me</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            I&apos;m a passionate developer focused on creating beautiful and functional mobile experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: currentTheme.colors.text }}
            >
              My Journey
            </h3>
            <p
              className="mb-6"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              With over 4 years of hands-on experience at Brotecs Technologies Ltd., I&apos;ve evolved from a curious intern into a confident Software Engineer. My passion lies in crafting elegant, high-performance mobile apps using Kotlin, Java, and Flutter. I thrive on solving complex challenges, building seamless user experiences, and turning ideas into polished, production-ready applications.
            </p>
            <p
              className="mb-6"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              From leading feature development to fine-tuning app performance, I focus on delivering clean, maintainable code that scales. I&apos;m always exploring new tools, trends, and technologies—because in this fast-paced world of mobile development, staying still isn&apos;t an option.
            </p>
            <p
              className="mb-6 font-medium"
              style={{ color: currentTheme.colors.primary }}
            >
              Let&apos;s build something remarkable.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="/aminul-islam-cv.pdf"
                download="Aminul_Islam_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                style={{
                  backgroundColor: currentTheme.colors.primary,
                  color: getButtonTextColor(currentTheme)
                }}
              >
                Download CV
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border rounded-lg font-medium transition-colors inline-block"
                style={{
                  borderColor: currentTheme.colors.accent,
                  color: currentTheme.colors.accent
                }}
              >
                My Work
              </motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: currentTheme.colors.text }}
            >
              My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span style={{ color: currentTheme.colors.textSecondary }}>{skill.name}</span>
                    <span style={{ color: currentTheme.colors.primary }}>{skill.level}%</span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: currentTheme.colors.surface }}
                  >
                    <motion.div
                      className="h-full"
                      style={{
                        background: `linear-gradient(to right, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}