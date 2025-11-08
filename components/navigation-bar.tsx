"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavBarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export function NavigationBar({ activeSection, onNavigate }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "hero", label: "BOSQUE" },
    { id: "about", label: "UNIVERSO" },
    { id: "characters", label: "ALMAS PERDIDAS" },
    { id: "quiz", label: "TESTE SEU DESTINO" },
  ]

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-purple-900/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigate("hero")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">✦</span>
          </div>
          <span className="text-white font-bold text-sm tracking-widest hidden sm:inline">PROFANO</span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              className={`text-sm font-semibold transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-purple-400 border-b-2 border-purple-400"
                  : "text-purple-200/70 hover:text-purple-300"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-purple-300 hover:text-purple-400 transition"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-purple-900/30 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigate(section.id)}
                className={`text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-purple-300 bg-purple-900/40 border border-purple-500/50"
                    : "text-purple-200/70 hover:text-purple-300 hover:bg-purple-900/20"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
