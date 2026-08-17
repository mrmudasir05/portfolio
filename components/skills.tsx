import { Code, Database, Brain, Cloud, GitBranch, BarChart3, Server, Layers } from "lucide-react"

export function Skills() {
  const skills = [
    { name: "Python", icon: Code },
    { name: "FastAPI", icon: Server },
    { name: "Django", icon: Layers },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Layers },
    { name: "Terraform", icon: Cloud },
    { name: "Machine Learning", icon: Brain },
    { name: "LLMs", icon: Brain },
    { name: "NLP", icon: Brain },
    { name: "Computer Vision", icon: Brain },
    { name: "Git", icon: GitBranch },
    { name: "Data Analysis", icon: BarChart3 },
    { name: "RAG Pipelines", icon: Layers },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.15)] hover:scale-105 hover:bg-[#0a0a0a] transition-all duration-300 cursor-pointer group"
              >
                <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
                <span className="text-gray-300 text-sm text-center font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
