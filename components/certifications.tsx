import { Award } from "lucide-react"

export function Certifications() {
  const certifications = [
    "Certificate in Artificial Intelligence",
    "Azure AI Fundamentals – Microsoft",
    "Artificial Intelligence (Machine Learning, Deep Learning, Communication) – NAVTTC",
    "Python for Machine Learning – IBM",
    "Data Analysis with Python – IBM",
    "Data Visualization with Matplotlib & Seaborn(Enhanced) from Coursera",
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white leading-tight">{cert}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
