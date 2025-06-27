import { Code, Database, Brain, BarChart3 } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Data Analysis", "Data Visualization (Matplotlib, Seaborn)", "Data Cleaning", "Statistical Analysis"],
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10 border-violet-500/20",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Supervised and Unsupervised Learning", "Neural Networks", "NLP", "LLM Applications"],
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10 border-violet-500/20",
    },
    {
      title: "Database Management",
      icon: Database,
      skills: ["SQL Basics"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className={`bg-gray-900 border ${category.bgColor} rounded-lg shadow-2xl p-6`}>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-sm">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
