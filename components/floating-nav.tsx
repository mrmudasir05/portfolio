"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, GraduationCap, Briefcase, Code, FolderOpen, Award, FileText, Mail, Menu, X } from "lucide-react"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "certifications", label: "Certifications", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 text-white hover:bg-gray-700/90"
          size="sm"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden">
          <div className="fixed top-16 right-4 bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-lg p-4">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variant="ghost"
                    className={`w-full justify-start text-left ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                )
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Floating Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-full p-2">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-10 h-10 rounded-full p-0 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                      : "bg-transparent text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
