"use client"

import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
    const mailtoLink = `mailto:mrmudasir05@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let&apos;s Work Together</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:mrmudasir05@gmail.com" className="text-white hover:text-green-400 transition-colors">
                    mrmudasir05@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+923110180239" className="text-white hover:text-green-400 transition-colors">
                    +923110180239
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/mudassir-azhar-a80b68237"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111111] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mrmudasir05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111111] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-green-400/50 text-white placeholder-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-green-400/50 text-white placeholder-gray-500 text-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg focus:outline-none focus:border-green-400/50 text-white placeholder-gray-500 text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-black font-semibold py-3 rounded-lg hover:bg-green-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-4"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
          <p className="text-gray-500 text-sm">© 2026 Muhammad Mudassir Azhar. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
