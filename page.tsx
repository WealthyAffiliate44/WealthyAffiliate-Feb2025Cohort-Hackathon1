import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EducationDownload from "@/components/education-download"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-royal-cream/20">
      <header className="sticky top-0 z-10 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-royal-red">
            <span className="text-royal-gold">My</span> Portfolio
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-royal-red transition-colors">
              About
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-royal-red transition-colors">
              Education
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-royal-red transition-colors">
              Skills
            </Link>
            <Link href="#interests" className="text-sm font-medium hover:text-royal-red transition-colors">
              Interests
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-royal-red transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-royal-red transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex bg-royal-red hover:bg-royal-darkred text-white shadow-md">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-royal-gold/5 to-royal-red/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-gradient">Editi Ekanem From Nigerian</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate web developer focused on creating modern, responsive, and user-friendly web
                    applications proficient with python, Html, CSS JavaScript, TypeScript, React, Next.js, Tailwind CSS.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="bg-royal-red hover:bg-royal-darkred text-white shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-royal-gold text-royal-gold hover:bg-royal-gold/10 shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/WealthyAffiliate44" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-royal-red hover:text-royal-darkred hover:bg-royal-red/10 rounded-full"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/wealthy-affiliate-9b2021253?trk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-royal-red hover:text-royal-darkred hover:bg-royal-red/10 rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:feedbackgfranklinetech@gmail.com">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-royal-red hover:text-royal-darkred hover:bg-royal-red/10 rounded-full"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-royal-red to-royal-gold rounded-full blur opacity-75 animate-pulse"></div>
                  <Image
                    src="/my-pic.png"
                    alt="Editi Ekanem"
                    width={400}
                    height={400}
                    className="relative aspect-square overflow-hidden rounded-full object-cover border-4 border-royal-gold shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 section-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    About Me
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a dedicated web developer with a passion for creating elegant, efficient, and user-friendly web
                  applications. With a strong foundation in modern web technologies and a keen eye for design, I strive
                  to build digital experiences that are both beautiful and functional.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Image
                  src="/website-mockup.png"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-royal-gold flex items-center">
                          <span className="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-2 text-royal-gold">
                            01
                          </span>
                          My Approach
                        </h3>
                        <p className="text-muted-foreground pl-10">
                          I believe in clean, maintainable code and user-centered design. Every project I undertake is
                          built with scalability and performance in mind.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-royal-gold flex items-center">
                          <span className="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-2 text-royal-gold">
                            02
                          </span>
                          My Journey
                        </h3>
                        <p className="text-muted-foreground pl-10">
                          My journey in web development began with a curiosity about how websites work. That curiosity
                          has evolved into a professional passion for creating digital solutions.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-royal-gold flex items-center">
                          <span className="w-8 h-8 rounded-full bg-royal-gold/10 flex items-center justify-center mr-2 text-royal-gold">
                            03
                          </span>
                          My Goal
                        </h3>
                        <p className="text-muted-foreground pl-10">
                          My goal is to continue growing as a developer while creating meaningful web experiences that
                          solve real problems for users and businesses alike.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/5 to-transparent z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    Education
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My academic journey has provided me with a strong foundation in computer science and web development.
                </p>
                <div className="flex justify-center mt-4">
                  <EducationDownload />
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="w-full card-hover border-gradient overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-red to-royal-gold"></div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-royal-red">Master of Computer Science</h3>
                      <Badge className="bg-royal-gold text-white hover:bg-royal-gold/90">2019-2021</Badge>
                    </div>
                    <p className="text-royal-gold font-medium">University of Technology</p>
                    <p>
                      Specialized in Web Technologies and Software Engineering. Graduated with honors and completed a
                      thesis on "Modern JavaScript Frameworks and Their Impact on Web Development".
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full card-hover border-gradient overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-red to-royal-gold"></div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-royal-red">Bachelor of Science in Computer Science</h3>
                      <Badge className="bg-royal-gold text-white hover:bg-royal-gold/90">2015-2019</Badge>
                    </div>
                    <p className="text-royal-gold font-medium">State University</p>
                    <p>
                      Core curriculum included Data Structures, Algorithms, Database Systems, and Web Development.
                      Participated in various hackathons and coding competitions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full col-span-1 lg:col-span-2 card-hover border-gradient overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-red to-royal-gold"></div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-royal-red">PLP Scholarship Beneficiary</h3>
                      <Badge className="bg-royal-gold text-white hover:bg-royal-gold/90">FEB 2024</Badge>
                    </div>
                    <p className="text-royal-gold font-medium">Professional Learning Program</p>
                    <p>
                      Selected as a beneficiary for the prestigious PLP Scholarship program, which supports promising
                      developers in advancing their skills and contributing to the tech community. This scholarship has
                      provided me with resources and opportunities to further enhance my expertise in web development
                      and blockchain technologies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 section-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    Skills & Expertise
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've developed a diverse skill set that allows me to tackle various aspects of web development
                  including Blockchain Technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M12 19V5" />
                          <path d="M5 12l7-7 7 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Frontend Development</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        HTML5
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        CSS3
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        JavaScript
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        TypeScript
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Tailwind CSS
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                          <line x1="8" y1="16" x2="8.01" y2="16" />
                          <line x1="8" y1="20" x2="8.01" y2="20" />
                          <line x1="12" y1="18" x2="12.01" y2="18" />
                          <line x1="12" y1="22" x2="12.01" y2="22" />
                          <line x1="16" y1="16" x2="16.01" y2="16" />
                          <line x1="16" y1="20" x2="16.01" y2="20" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Backend Development</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Express
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Django
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        RESTful APIs
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        GraphQL
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M2 22h20" />
                          <path d="M10 6h4" />
                          <path d="M10 10h4" />
                          <path d="M10 14h4" />
                          <path d="M10 18h4" />
                          <path d="M4 18V2h16v16" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Database & Cloud</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        MongoDB
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        PostgreSQL
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Firebase
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        AWS
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Vercel
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Tools & Practices</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Git
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        GitHub
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        CI/CD
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Jest
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Cypress
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Agile
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Design & UI/UX</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Figma
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Adobe XD
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Responsive Design
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        UI/UX Principles
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Accessibility
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Blockchain</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Ethereum
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Solidity
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Web3.js
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        Smart Contracts
                      </Badge>
                      <Badge variant="secondary" className="bg-royal-gold/10 text-royal-gold border-royal-gold/20">
                        DApps
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-red/5 to-transparent z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    Interests & Passions
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Beyond coding, I'm passionate about staying at the forefront of technology and exploring new
                  innovations like Blockchain.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M12 19l7-7 3 3-7 7-3-3z" />
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                          <path d="M2 2l7.586 7.586" />
                          <circle cx="11" cy="11" r="2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Modern Web Development</h3>
                    </div>
                    <p>
                      I'm constantly exploring modern frameworks and best practices in web development. I enjoy
                      experimenting with new tools and techniques to create more efficient and user-friendly web
                      applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Blockchain Technology</h3>
                    </div>
                    <p>
                      I'm fascinated by blockchain technology and its potential to revolutionize various industries. I
                      keep up with emerging trends in blockchain and explore its applications beyond cryptocurrency.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Tech Innovations</h3>
                    </div>
                    <p>
                      I'm passionate about staying informed about the latest technological innovations. From AI and
                      machine learning to IoT and beyond, I'm always eager to learn about new advancements.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Open Source Contribution</h3>
                    </div>
                    <p>
                      I believe in the power of open source and enjoy contributing to projects that make a difference.
                      Collaborating with developers worldwide has been a rewarding experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Continuous Learning</h3>
                    </div>
                    <p>
                      I'm committed to lifelong learning and regularly take online courses, attend webinars, and
                      participate in coding challenges to enhance my skills and stay current with industry trends.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-royal-red/10 flex items-center justify-center mr-3 group-hover:bg-royal-red/20 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal-red"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-royal-red">Tech Community</h3>
                    </div>
                    <p>
                      I enjoy being part of the tech community, attending meetups, conferences, and hackathons. Sharing
                      knowledge and learning from others is something I value greatly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 section-alt">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    Featured Projects
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on that showcase my skills and expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden card-hover group">
                <div className="relative">
                  <Image
                    src="/ecommerce-logo.png"
                    alt="E-Commerce Platform"
                    width={500}
                    height={300}
                    className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-bold">E-Commerce Platform</h4>
                      <p className="text-sm text-white/80">Next.js, Node.js, MongoDB, Stripe</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-royal-red">E-Commerce Platform</h3>
                    <p className="text-muted-foreground">
                      A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user
                      authentication, product management, cart functionality, and payment integration.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge className="bg-royal-red/10 text-royal-red">Next.js</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Node.js</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">MongoDB</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Stripe</Badge>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-red text-royal-red hover:bg-royal-red/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-gold text-royal-gold hover:bg-royal-gold/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden card-hover group">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto mb-2"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 2v5" />
                        <path d="M8 2v5" />
                        <path d="M12 18v4" />
                        <path d="M2 10h20" />
                      </svg>
                      <h4 className="font-bold text-lg">Blockchain Explorer</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-bold">Blockchain Explorer</h4>
                      <p className="text-sm text-white/80">React, Express, Web3.js, Ethereum</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-royal-red">Blockchain Explorer</h3>
                    <p className="text-muted-foreground">
                      A web application that allows users to explore blockchain transactions, addresses, and blocks.
                      Built with React, Express, and Web3.js.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge className="bg-royal-red/10 text-royal-red">React</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Express</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Web3.js</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Ethereum</Badge>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-red text-royal-red hover:bg-royal-red/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-gold text-royal-gold hover:bg-royal-gold/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden card-hover group">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mx-auto mb-2"
                      >
                        <path d="M11 12H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z" />
                        <path d="M22 2H14a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                        <path d="m22 17-5 5" />
                        <path d="m17 17 5 5" />
                      </svg>
                      <h4 className="font-bold text-lg">Task Management App</h4>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-bold">Task Management App</h4>
                      <p className="text-sm text-white/80">React, Firebase, Chart.js, Tailwind CSS</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-royal-red">Task Management App</h3>
                    <p className="text-muted-foreground">
                      A responsive task management application with real-time updates, user collaboration, and data
                      visualization. Built with React, Firebase, and Chart.js.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge className="bg-royal-red/10 text-royal-red">React</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Firebase</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Chart.js</Badge>
                      <Badge className="bg-royal-red/10 text-royal-red">Tailwind CSS</Badge>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-red text-royal-red hover:bg-royal-red/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-royal-gold text-royal-gold hover:bg-royal-gold/10"
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-royal-red to-royal-gold text-white hover:opacity-90 shadow-md transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                <Link href="https://github.com/WealthyAffiliate44" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/5 to-transparent z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-red relative">
                    Get In Touch
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-royal-red to-royal-gold"></span>
                  </h2>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-royal-red to-royal-gold text-white hover:opacity-90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-4">
                <Card className="card-hover group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-royal-red/10 flex items-center justify-center group-hover:bg-royal-red/20 transition-colors">
                        <Mail className="h-6 w-6 text-royal-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-royal-red">Email</h3>
                        <p className="text-muted-foreground">feedbackgfranklinetech@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-royal-red/10 flex items-center justify-center group-hover:bg-royal-red/20 transition-colors">
                        <Linkedin className="h-6 w-6 text-royal-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-royal-red">LinkedIn</h3>
                        <p className="text-muted-foreground">linkedin.com/in/wealthy-affiliate-9b2021253</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-royal-red/10 flex items-center justify-center group-hover:bg-royal-red/20 transition-colors">
                        <Github className="h-6 w-6 text-royal-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-royal-red">GitHub</h3>
                        <p className="text-muted-foreground">https:/github.com/WealthyAffiliate44</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-gradient-to-r from-royal-red to-royal-gold text-white">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <p className="text-center text-sm">&copy; {new Date().getFullYear()} Editi Ekanem. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/WealthyAffiliate44" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-royal-cream hover:bg-white/10 rounded-full"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/wealthy-affiliate-9b2021253?trk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-royal-cream hover:bg-white/10 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:feedbackgfranklinetech@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-royal-cream hover:bg-white/10 rounded-full"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

