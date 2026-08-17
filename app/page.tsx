import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}
