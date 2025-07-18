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
      className="py-20 px-4"
      style={{ 
        background: `linear-gradient(to bottom right, ${currentTheme.colors.background}, ${currentTheme.colors.primary}15)`
      }}
    >
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
            I'm a passionate developer focused on creating beautiful and functional mobile experiences.
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
              With over 4 years of experience at Brotecs Technologies Ltd., I've grown from an intern to a 
              Software Engineer II. My expertise lies in mobile app development, particularly with Kotlin, 
              Java, and Flutter. I'm passionate about creating intuitive user interfaces and optimizing 
              application performance.
            </p>
            <p 
              className="mb-6"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              I hold an M.Sc. and B.Sc. in Computer Science from American International University-Bangladesh. 
              My focus is on developing secure, efficient mobile applications with excellent user experiences, 
              and I'm constantly learning new technologies to stay at the forefront of mobile development.
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