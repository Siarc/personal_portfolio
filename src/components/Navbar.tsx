'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme, themes } from '@/contexts/ThemeContext'

export default function Navbar() {
  const { currentTheme, setTheme, themeKey } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="text-2xl font-bold"
            style={{ color: currentTheme.colors.text }}
          >
            Aminul<span style={{ color: currentTheme.colors.primary }}>.</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-8 items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.toLowerCase()}`} 
                className="transition-colors hover:opacity-80"
                style={{ 
                  color: currentTheme.colors.textSecondary,
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = currentTheme.colors.text;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = currentTheme.colors.textSecondary;
                }}
              >
                {item}
              </a>
            </motion.div>
          ))}
          
          {/* Theme Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="transition-colors flex items-center space-x-1 hover:opacity-80"
              style={{ 
                color: currentTheme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = currentTheme.colors.text;
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = currentTheme.colors.textSecondary;
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Theme</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>

            {/* Theme Dropdown Menu */}
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute top-8 right-0 p-3 rounded-xl shadow-xl backdrop-blur-sm border min-w-48 z-50"
                style={{
                  backgroundColor: currentTheme.colors.surface + 'F0',
                  borderColor: currentTheme.colors.border,
                }}
              >
                <div className="space-y-2">
                  {Object.entries(themes).map(([key, theme]) => (
                    <motion.button
                      key={key}
                      onClick={() => {
                        setTheme(key)
                        setIsThemeOpen(false)
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer"
                      style={{
                        backgroundColor: themeKey === key ? theme.colors.primary + '20' : 'transparent',
                      }}
                      whileHover={{ 
                        backgroundColor: theme.colors.primary + '15',
                        scale: 1.02 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Theme Color Preview */}
                      <div className="flex space-x-1">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.colors.secondary }}
                        />
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.colors.accent }}
                        />
                      </div>
                      
                      {/* Theme Name */}
                      <span 
                        className="text-sm font-medium"
                        style={{ color: currentTheme.colors.text }}
                      >
                        {theme.name}
                      </span>
                      
                      {/* Active Indicator */}
                      {themeKey === key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 rounded-full"
                          style={{ backgroundColor: theme.colors.primary }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            style={{ color: currentTheme.colors.text }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-sm p-4 border-t"
          style={{ 
            backgroundColor: currentTheme.colors.surface + 'F0',
            borderColor: currentTheme.colors.border
          }}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <motion.div
              key={item}
              variants={menuItemVariants}
              className="py-2"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="block transition-colors hover:opacity-80"
                style={{ color: currentTheme.colors.textSecondary }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = currentTheme.colors.text;
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = currentTheme.colors.textSecondary;
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </motion.div>
          ))}
          
          {/* Mobile Theme Section */}
          <motion.div
            variants={menuItemVariants}
            className="py-2 border-t mt-2 pt-4"
            style={{ borderColor: currentTheme.colors.border }}
          >
            <div 
              className="block mb-3 font-medium"
              style={{ color: currentTheme.colors.text }}
            >
              Choose Theme
            </div>
            <div className="space-y-2">
              {Object.entries(themes).map(([key, theme]) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setTheme(key)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer"
                  style={{
                    backgroundColor: themeKey === key ? theme.colors.primary + '20' : 'transparent',
                  }}
                  whileHover={{ 
                    backgroundColor: theme.colors.primary + '15',
                    scale: 1.02 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Theme Color Preview */}
                  <div className="flex space-x-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                  </div>
                  
                  {/* Theme Name */}
                  <span 
                    className="text-sm font-medium"
                    style={{ color: currentTheme.colors.text }}
                  >
                    {theme.name}
                  </span>
                  
                  {/* Active Indicator */}
                  {themeKey === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 rounded-full"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  )
}