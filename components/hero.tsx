"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-40" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_70%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-8 animate-float">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <span className="text-green-400 text-sm font-medium">Available for new projects</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Associate Software{" "}
          <span className="text-green-400">Engineer</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-400 italic mb-12">
          " Building scalable AI-powered applications & cloud solutions "
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-green-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-green-300 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-green-400/50 text-green-400 font-semibold px-8 py-3 rounded-lg hover:bg-green-400/10 transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/mrmudasir05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudassir-azhar-a80b68237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mrmudasir05@gmail.com"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
