# Aminul Islam - Portfolio Website

A modern, interactive portfolio website showcasing mobile app development expertise. Built with Next.js and featuring advanced particle text effects, smooth animations, and professional project showcases.

## 🌐 Live Demo

**Production Site**: [https://aminul-islam.vercel.app/](https://aminul-islam.vercel.app/)

## ✨ Features

- **Interactive Particle Text**: Mouse-responsive particle animation for name display
- **Enhanced Background Animations**: Dynamic floating elements across all sections
- **Responsive Design**: Optimized for all device sizes and touch interactions
- **Dark/Light Theme**: Seamless theme switching with smooth transitions
- **Project Showcase**: Real project cards with app icons and Google Play Store links
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Smooth 60fps animations with proper cleanup

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + Custom Canvas Animations
- **Email Service**: EmailJS
- **Deployment**: Vercel
- **Canvas API**: For particle text effects
- **Performance**: RequestAnimationFrame for smooth 60fps animations

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your EmailJS configuration:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutSection.tsx      # Skills and journey section
│   ├── ContactSection.tsx    # Contact form with EmailJS
│   ├── Footer.tsx           # Animated terminal footer
│   ├── Navbar.tsx           # Navigation with theme toggle
│   ├── ParticleText.tsx     # Interactive particle text effect
│   └── ProjectsSection.tsx  # Project showcase with Play Store links
├── contexts/
│   └── ThemeContext.tsx     # Theme management system
└── public/
    └── images/
        ├── placeholder.jpg   # Project cover placeholder
        └── projects/        # App icons and project assets
```

## 🎨 Key Components

### ParticleText.tsx
- **Interactive particle system** that converts text to animated particles
- **Mouse interaction** with configurable radius (150px)
- **Canvas-based rendering** for smooth 60fps performance
- **Theme-aware colors** that adapt to light/dark modes

### ProjectsSection.tsx
- **Real project showcase** featuring 4 mobile applications
- **Google Play Store integration** with direct links
- **App icon overlays** on placeholder covers
- **Hover animations** and interactive elements

## 🎯 Featured Projects

The portfolio showcases 4 professional mobile applications:

1. **SD Cabin** - In-flight connectivity app for aircraft
2. **Phoring** - VOIP-based SIM-less 2nd line service  
3. **Minu Monitor** - Healthcare telemedicine monitoring app
4. **Next Cabin Tools** - Aviation diagnostic and troubleshooting app

All projects link directly to Google Play Store for live demonstrations.

## 🎨 Customization

- **Particle Text**: Modify text, colors, and interaction radius in `ParticleText.tsx`
- **Projects**: Update project data and links in `ProjectsSection.tsx`
- **Animations**: Adjust background animations in each section component
- **Theme Colors**: Customize colors in `ThemeContext.tsx`
- **Content**: Update personal information across component files
- **Images**: Replace placeholder images in `public/images/` folder

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

For other deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🚀 Performance Features

- **Optimized Animations**: 60fps particle system with proper cleanup
- **Responsive Images**: Next.js Image component with lazy loading
- **Theme Persistence**: Smooth theme transitions without flicker
- **Memory Management**: Proper event listener cleanup and animation cancellation
- **Mobile Optimized**: Touch-friendly interactions and responsive design

## 🎮 Interactive Elements

- **Particle Text Effect**: Hover over "AMINUL ISLAM" to see particles scatter
- **Background Animations**: Floating elements throughout all sections
- **Project Cards**: Hover effects with image scaling and button animations
- **Contact Form**: Real-time validation and EmailJS integration
- **Theme Toggle**: Instant dark/light mode switching

## 📱 Mobile App Development Expertise

This portfolio demonstrates expertise in:
- **Kotlin & Java** for Android development
- **Aviation Apps** with SATCOM and connectivity features
- **Healthcare Apps** with IoT device integration
- **VOIP Applications** with SIP and IAX2 protocols
- **Network Diagnostics** and troubleshooting tools

## 🔧 Development Notes

- **Canvas Animations**: Custom particle system built with HTML5 Canvas API
- **Vector Mathematics**: Mouse repulsion effects using distance calculations
- **React Patterns**: useRef for animation loops and DOM manipulation
- **TypeScript**: Comprehensive type safety for better development experience
- **Performance**: RequestAnimationFrame for smooth animations
