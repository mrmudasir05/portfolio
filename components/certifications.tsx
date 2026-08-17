import { Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    "Certificate in Artificial Intelligence",
    "Azure AI Fundamentals – Microsoft",
    "Artificial Intelligence (ML, DL, Communication) – NAVTTC",
    "Python for Machine Learning – IBM",
    "Data Analysis with Python – IBM",
    "Data Visualization with Matplotlib & Seaborn – Coursera",
  ]

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl p-5 flex items-start gap-4 hover:border-green-400/30 transition-colors"
            >
              <div className="w-10 h-10 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-gray-300 text-sm font-medium leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
