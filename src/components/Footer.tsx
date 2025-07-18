'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { currentTheme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="py-12 px-4"
      style={{ backgroundColor: currentTheme.colors.surface }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
          {/* Logo and description - Left Aligned */}
          <div className="text-left max-w-xs">
            <Link 
              href="/" 
              className="text-2xl font-bold"
              style={{ color: currentTheme.colors.text }}
            >
              Aminul<span style={{ color: currentTheme.colors.primary }}>.</span>
            </Link>
            <p 
              className="mt-4"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Software Engineer specializing in mobile app development with Kotlin, Java, and Flutter.
              Let&apos;s work together to bring your ideas to life.
            </p>
          </div>

          {/* Animated Code Terminal - Center Aligned */}
          <div className="flex flex-col items-center">
            <h3 
              className="text-lg font-semibold mb-4 text-center"
              style={{ color: currentTheme.colors.text }}
            >
              Live Coding
            </h3>
            
            {/* Terminal Window */}
            <div 
              className="rounded-lg border overflow-hidden"
              style={{ 
                backgroundColor: currentTheme.colors.background,
                borderColor: currentTheme.colors.border
              }}
            >
              {/* Terminal Header */}
              <div 
                className="px-4 py-2 flex items-center space-x-2"
                style={{ backgroundColor: currentTheme.colors.surface }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span 
                  className="text-xs ml-2 font-mono"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  terminal
                </span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 h-40 font-mono text-sm overflow-hidden">
                {/* Animated Code Lines */}
                <motion.div
                  className="space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Line 1 */}
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span style={{ color: currentTheme.colors.primary }}>$</span>
                    <motion.span
                      className="ml-2"
                      style={{ color: currentTheme.colors.text }}
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ delay: 0.8, duration: 1.5 }}
                    >
                      npm run build
                    </motion.span>
                    <motion.span
                      className="ml-1"
                      style={{ color: currentTheme.colors.primary }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </motion.div>
                  
                  {/* Line 2 */}
                  <motion.div
                    style={{ color: currentTheme.colors.secondary }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    ✓ Building application...
                  </motion.div>
                  
                  {/* Line 3 */}
                  <motion.div
                    style={{ color: currentTheme.colors.accent }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                  >
                    ✓ Optimizing bundle...
                  </motion.div>
                  
                  {/* Line 4 */}
                  <motion.div
                    style={{ color: currentTheme.colors.primary }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, duration: 0.5 }}
                  >
                    ✓ Build completed successfully!
                  </motion.div>
                  
                  {/* New Command Line */}
                  <motion.div
                    className="flex items-center pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.5, duration: 0.5 }}
                  >
                    <span style={{ color: currentTheme.colors.primary }}>$</span>
                    <motion.span
                      className="ml-1"
                      style={{ color: currentTheme.colors.primary }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 6 }}
                    >
                      |
                    </motion.span>
                  </motion.div>
                </motion.div>
                
                {/* Reset Animation */}
                <motion.div
                  key={Math.random()}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 8, duration: 0.5 }}
                  onAnimationComplete={() => {
                    // This will trigger re-render and restart animation
                    setTimeout(() => window.location.reload, 100);
                  }}
                />
              </div>
            </div>
            
            {/* Floating Code Particles */}
            <div className="relative h-8 overflow-hidden mt-4">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute font-mono text-xs"
                  style={{ color: currentTheme.colors.primary + '4D' }}
                  initial={{ 
                    x: -20, 
                    y: Math.random() * 20,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: 200, 
                    opacity: [0, 1, 0] 
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "linear"
                  }}
                >
                  {['{ }', '< />', '[ ]', '( )', '=>', '&&'][i]}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact info - Right Side, Left Aligned Text */}
          <div className="text-left">
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: currentTheme.colors.text }}
            >
              Get In Touch
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke={currentTheme.colors.primary}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span style={{ color: currentTheme.colors.textSecondary }}>
                  aminul.irony@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke={currentTheme.colors.primary}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ color: currentTheme.colors.textSecondary }}>
                  Dhaka, 1344 Bangladesh
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Siarc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: currentTheme.colors.background,
                  color: currentTheme.colors.textSecondary
                }}
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/aminul-islam-rony"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: currentTheme.colors.background,
                  color: currentTheme.colors.textSecondary
                }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/aminul.islam.549256"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: currentTheme.colors.background,
                  color: currentTheme.colors.textSecondary
                }}
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/8801983877855"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ 
                  backgroundColor: currentTheme.colors.background,
                  color: currentTheme.colors.textSecondary
                }}
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className="border-t pt-8"
          style={{ borderColor: currentTheme.colors.border }}
        >
          <p 
            className="text-center"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            © {currentYear} Aminul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}