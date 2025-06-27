import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Bachelor's in Artificial Intelligence</h3>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    2021 - 2025 (Completed)
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-2">The Islamia University of Bahawalpur, Pakistan</p>

                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    CGPA: 3.74/4.0
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Relevant Courses:</h4>
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
                        className="bg-gray-800 border border-gray-600 text-gray-300 px-3 py-1 rounded-md text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
