import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aminul Islam - Mobile App Developer & Software Engineer",
  description: "Experienced Software Engineer specializing in mobile app development with Kotlin, Java, Flutter, and Python. 4+ years building aviation, healthcare, and HR applications.",
  keywords: [
    "Aminul Islam",
    "Software Engineer",
    "Mobile App Developer", 
    "Kotlin Developer",
    "Flutter Developer",
    "Java Developer",
    "Android Developer",
    "iOS Developer",
    "Aviation Apps",
    "Healthcare Apps",
    "HR Apps",
    "Bangladesh Developer",
    "Dhaka Developer"
  ],
  authors: [{ name: "Aminul Islam", url: "https://personal-portfolio-sand-mu.vercel.app" }],
  creator: "Aminul Islam",
  publisher: "Aminul Islam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://personal-portfolio-sand-mu.vercel.app',
    title: 'Aminul Islam - Mobile App Developer & Software Engineer',
    description: 'Experienced Software Engineer specializing in mobile app development with Kotlin, Java, Flutter, and Python. 4+ years building aviation, healthcare, and HR applications.',
    siteName: 'Aminul Islam Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aminul Islam - Mobile App Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aminul Islam - Mobile App Developer & Software Engineer',
    description: 'Experienced Software Engineer specializing in mobile app development with Kotlin, Java, Flutter, and Python.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://personal-portfolio-sand-mu.vercel.app',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
