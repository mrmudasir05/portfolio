"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="text-green-400">&lt;/&gt;</span>
          <span>Meet Mudassir</span>
          <span className="text-green-400">.</span>
        </button>

        {/* Desktop Nav - pushed to the right */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-gray-800/50 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-400 hover:text-green-400 transition-colors py-3 text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
