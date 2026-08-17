import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "CodeGraphers",
      location: "Lahore, Pakistan",
      duration: "Aug 2025 – Present",
      description: "Developed REST APIs for multiple AI-powered healthcare and enterprise applications. Dockerized backend services and deployed cloud infrastructure using AWS and Terraform. Integrated LLM workflows, Stripe, and Supabase into production systems.",
      skills: ["FastAPI", "Django", "AWS", "Docker", "Terraform", "LLMs", "Stripe", "Supabase"],
    },
    {
      title: "ML Engineer",
      company: "DeepEmbed",
      location: "Bahawalpur, Pakistan",
      duration: "Aug 2024 – May 2025",
      description: "Built and evaluated machine learning models for NLP and computer vision applications. Developed RAG pipelines, embeddings, and LLM-powered AI solutions. Improved model performance through feature engineering and hyperparameter tuning.",
      skills: ["Machine Learning", "NLP", "Computer Vision", "RAG Pipelines", "LLMs", "Feature Engineering"],
    },
    {
      title: "Python Intern",
      company: "Enigmatix (Pvt) Limited",
      location: "Bahawalpur, Pakistan",
      duration: "May 2023 – Sep 2023",
      description: "Developed Python automation scripts and backend utilities. Applied OOP principles to improve code maintainability.",
      skills: ["Python", "Automation", "OOP", "Backend Development"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="flex items-center text-lg text-gray-300 mb-2">
                    <span className="font-semibold">{exp.company}</span>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
