import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-slate-500 to-blue-500 rounded-full overflow-hidden shadow-2xl border-4 border-slate-400">
            <img 
              src="/images/mudasir.jpg" 
              alt="Muhammad Mudassir Azhar" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
            Muhammad Mudassir Azhar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Data Analyst & Machine Learning Engineer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Recent Artificial Intelligence graduate with expertise in machine learning and data science. Experienced in
            developing innovative AI solutions from computer vision to natural language processing systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant="outline"
            className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
            asChild
          >
            <a href="mailto:mrmudasir05@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              mrmudasir05@gmail.com
            </a>
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
            asChild
          >
            <a href="tel:+923110180239">
              <Phone className="w-4 h-4 mr-2" />
              +923110180239
            </a>
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
            asChild
          >
            <a href="https://www.linkedin.com/in/muhammad-mudassir-azhar-a80b68237/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
            asChild
          >
            <a href="https://github.com/mrmudasir05" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white shadow-lg" asChild>
            <Link href="#projects">
              View My Work
            </Link>
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
            asChild
          >
            <a href="/resume.pdf" download="Muhammad_Mudassir_Azhar_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
