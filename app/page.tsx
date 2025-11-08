"use client"

import { useEffect, useRef, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CharactersSection } from "@/components/characters-section"
import { QuizSection } from "@/components/quiz-section"
import { Footer } from "@/components/footer"
import { NavigationBar } from "@/components/navigation-bar"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    characters: useRef<HTMLDivElement>(null),
    quiz: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigateToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs]
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleExplore = () => {
    navigateToSection("about")
  }

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-background overflow-hidden"
      style={{
        cursor:
          'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(168,85,247,0.8)%22 strokeWidth=%222%22%3E%3Cpath d=%22M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m0 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6%22/%3E%3C/svg%3E") 12 12, auto',
      }}
    >
      <NavigationBar activeSection={activeSection} onNavigate={navigateToSection} />

      <div ref={sectionRefs.hero}>
        <HeroSection onExplore={handleExplore} />
      </div>

      <div ref={sectionRefs.about}>
        <AboutSection mousePos={mousePos} />
      </div>

      <div ref={sectionRefs.characters}>
        <CharactersSection />
      </div>

      <div ref={sectionRefs.quiz}>
        <QuizSection />
      </div>

      <Footer />
    </main>
  )
}
