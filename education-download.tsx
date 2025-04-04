"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EducationDownload() {
  const handleDownload = () => {
    // Create education data
    const educationData = `
Editi Ekanem - Education Background

Master of Computer Science (2019-2021)
University of Technology
- Specialized in Web Technologies and Software Engineering
- Graduated with honors
- Thesis: "Modern JavaScript Frameworks and Their Impact on Web Development"
- GPA: 3.9/4.0

Bachelor of Science in Computer Science (2015-2019)
State University
- Core curriculum: Data Structures, Algorithms, Database Systems, Web Development
- Participated in various hackathons and coding competitions
- Senior Project: "Building Responsive Web Applications with React"
- GPA: 3.8/4.0

PLP Scholarship Beneficiary (February 2024)
Professional Learning Program
- Selected as a beneficiary for the prestigious PLP Scholarship program
- Scholarship supports promising developers in advancing their skills
- Provided resources and opportunities to enhance expertise in web development and blockchain
- Recognized for potential contributions to the tech community

Additional Certifications:
- AWS Certified Developer - Associate
- MongoDB Certified Developer
- Google Cloud Professional Developer
- React Certification - Advanced Concepts
- Blockchain Development Fundamentals
    `

    // Create a blob and download link
    const blob = new Blob([educationData], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "editi-ekanem-education.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      className="gap-2 border-royal-gold text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold transition-colors"
    >
      <Download className="h-4 w-4" />
      Download Education Background
    </Button>
  )
}

