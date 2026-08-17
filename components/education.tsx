import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Education
        </h2>

        <div className="relative pl-8 border-l-2 border-gray-800">
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-400 border-4 border-[#0a0a0a]" />

          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">Bachelor&apos;s in Artificial Intelligence</h3>
                <p className="text-green-400 font-medium">The Islamia University of Bahawalpur, Pakistan</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 ml-16">
              <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-md">
                <Calendar className="w-3.5 h-3.5" />
                2021 - 2025 (Completed)
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm bg-green-400/10 text-green-400 px-3 py-1 rounded-md font-semibold">
                CGPA: 3.74/4.0
              </span>
            </div>

            <div className="ml-16">
              <h4 className="font-semibold text-white mb-3 text-sm">Relevant Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Programming Fundamentals",
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Neural Networks",
                ].map((course) => (
                  <span
                    key={course}
                    className="text-xs text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1 rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
