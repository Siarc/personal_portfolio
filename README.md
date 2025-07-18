# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations and a clean design. This project showcases personal projects, skills, and provides an easy way for visitors to get in touch.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Modern Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Deployment**: Vercel (recommended)

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

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProjectsSection.tsx
└── contexts/
    └── ThemeContext.tsx
```

## Customization

- **Personal Information**: Update content in the component files
- **Projects**: Modify `ProjectsSection.tsx` to showcase your projects
- **Styling**: Customize colors and themes in `globals.css` and Tailwind config
- **Resume**: Replace `public/aminul-islam-cv.pdf` with your own resume

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
