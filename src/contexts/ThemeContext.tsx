'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Theme = {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
  }
}

// Helper function to get button text color based on theme
export function getButtonTextColor(theme: Theme): string {
  // For monochrome theme, use black text on white buttons
  if (theme.name === 'Monochrome') {
    return 'rgb(0 0 0)' // black
  }
  // For all other themes, use white text
  return 'rgb(255 255 255)' // white
}

export const themes: Record<string, Theme> = {
  purple: {
    name: 'Purple Storm',
    colors: {
      primary: 'rgb(139 92 246)', // purple-500 (more subtle)
      secondary: 'rgb(99 102 241)', // indigo-500
      accent: 'rgb(168 85 247)', // purple-400
      background: 'rgb(15 23 42)', // slate-900
      surface: 'rgb(30 41 59)', // slate-800
      text: 'rgb(248 250 252)', // slate-50
      textSecondary: 'rgb(148 163 184)', // slate-400
      border: 'rgb(71 85 105)', // slate-600
    }
  },
  emerald: {
    name: 'Emerald Forest',
    colors: {
      primary: 'rgb(16 185 129)', // emerald-500 (more subtle)
      secondary: 'rgb(34 197 94)', // green-500
      accent: 'rgb(52 211 153)', // emerald-400
      background: 'rgb(15 23 42)', // slate-900
      surface: 'rgb(30 41 59)', // slate-800
      text: 'rgb(248 250 252)', // slate-50
      textSecondary: 'rgb(148 163 184)', // slate-400
      border: 'rgb(71 85 105)', // slate-600
    }
  },
  orange: {
    name: 'Sunset Glow',
    colors: {
      primary: 'rgb(249 115 22)', // orange-500 (more subtle)
      secondary: 'rgb(245 101 101)', // red-400
      accent: 'rgb(251 146 60)', // orange-400
      background: 'rgb(15 23 42)', // slate-900
      surface: 'rgb(30 41 59)', // slate-800
      text: 'rgb(248 250 252)', // slate-50
      textSecondary: 'rgb(148 163 184)', // slate-400
      border: 'rgb(71 85 105)', // slate-600
    }
  },
  cyan: {
    name: 'Ocean Breeze',
    colors: {
      primary: 'rgb(6 182 212)', // cyan-500 (more subtle)
      secondary: 'rgb(59 130 246)', // blue-500
      accent: 'rgb(34 211 238)', // cyan-400
      background: 'rgb(15 23 42)', // slate-900
      surface: 'rgb(30 41 59)', // slate-800
      text: 'rgb(248 250 252)', // slate-50
      textSecondary: 'rgb(148 163 184)', // slate-400
      border: 'rgb(71 85 105)', // slate-600
    }
  },
  rose: {
    name: 'Rose Garden',
    colors: {
      primary: 'rgb(244 63 94)', // rose-500 (more subtle)
      secondary: 'rgb(168 85 247)', // purple-500
      accent: 'rgb(251 113 133)', // rose-400
      background: 'rgb(15 23 42)', // slate-900
      surface: 'rgb(30 41 59)', // slate-800
      text: 'rgb(248 250 252)', // slate-50
      textSecondary: 'rgb(148 163 184)', // slate-400
      border: 'rgb(71 85 105)', // slate-600
    }
  },
  monochrome: {
    name: 'Monochrome',
    colors: {
      primary: 'rgb(255 255 255)', // white
      secondary: 'rgb(156 163 175)', // gray-400
      accent: 'rgb(209 213 219)', // gray-300
      background: 'rgb(0 0 0)', // black
      surface: 'rgb(17 24 39)', // gray-900
      text: 'rgb(255 255 255)', // white
      textSecondary: 'rgb(156 163 175)', // gray-400
      border: 'rgb(75 85 99)', // gray-600
    }
  }
}

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (themeKey: string) => void
  themeKey: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState('purple')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themes[savedTheme]) {
      setThemeKey(savedTheme)
    }
  }, [])

  const setTheme = (newThemeKey: string) => {
    setThemeKey(newThemeKey)
    localStorage.setItem('portfolio-theme', newThemeKey)
  }

  const currentTheme = themes[themeKey]

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeKey }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}