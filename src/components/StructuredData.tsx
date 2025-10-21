'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aminul Islam",
    "jobTitle": "Software Engineer",
    "description": "Experienced Software Engineer specializing in mobile app development with Kotlin, Java, Flutter, and Python",
    "url": "https://personal-portfolio-sand-mu.vercel.app",
    "email": "aminul.irony@gmail.com",
    "telephone": "+8801983877855",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "postalCode": "1344",
      "addressCountry": "Bangladesh"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "American International University-Bangladesh",
      "sameAs": "https://www.aiub.edu"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Brotecs Technologies Ltd.",
      "url": "https://brotecs.com"
    },
    "knowsAbout": [
      "Mobile App Development",
      "Kotlin Programming",
      "Java Programming", 
      "Flutter Development",
      "Python Programming",
      "Android Development",
      "iOS Development",
      "Aviation Software",
      "Healthcare Applications",
      "HR Management Systems"
    ],
    "sameAs": [
      "https://github.com/Siarc",
      "https://www.linkedin.com/in/aminul-islam-rony",
      "https://www.facebook.com/aminul.islam.549256"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "M.Sc. in Computer Science",
        "educationalLevel": "Master's Degree",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "B.Sc. in Computer Science",
        "educationalLevel": "Bachelor's Degree",
        "credentialCategory": "degree"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Custom mobile application development for Android and iOS platforms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Software Engineering Consultation",
          "description": "Technical consultation for software architecture and development"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}