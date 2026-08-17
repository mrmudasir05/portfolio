import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "CodeGraphers",
      location: "Lahore, Pakistan",
      duration: "Aug 2025 – Present",
      bullets: [
        "Developed REST APIs for multiple AI-powered healthcare and enterprise applications using FastAPI and Django.",
        "Dockerized backend services and deployed cloud infrastructure using AWS and Terraform.",
        "Integrated LLM workflows, Stripe payments, and Supabase into production systems.",
        "Built scalable microservices architecture with event-driven patterns for high-throughput processing.",
        "Implemented CI/CD pipelines and automated deployment workflows for multiple environments.",
      ],
      skills: ["FastAPI", "Django", "AWS", "Docker", "Terraform", "LLMs", "Stripe", "Supabase", "PostgreSQL"],
    },
    {
      title: "ML Engineer",
      company: "DeepEmbed",
      location: "Bahawalpur, Pakistan",
      duration: "Aug 2024 – May 2025",
      bullets: [
        "Built and evaluated machine learning models for NLP and computer vision applications.",
        "Developed RAG pipelines, embeddings, and LLM-powered AI solutions for document intelligence.",
        "Improved model performance through feature engineering and hyperparameter tuning.",
        "Created end-to-end ML pipelines from data preprocessing to model deployment.",
      ],
      skills: ["Machine Learning", "NLP", "Computer Vision", "RAG Pipelines", "LLMs", "Feature Engineering"],
    },
    {
      title: "Python Intern",
      company: "Enigmatix (Pvt) Limited",
      location: "Bahawalpur, Pakistan",
      duration: "May 2023 – Sep 2023",
      bullets: [
        "Developed Python automation scripts and backend utilities for internal tools.",
        "Applied OOP principles to improve code maintainability and reduce technical debt.",
      ],
      skills: ["Python", "Automation", "OOP", "Backend Development"],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-800">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-400 border-4 border-[#0a0a0a]" />

              <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 md:p-8">
                {/* Header */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-green-400 font-medium mb-3">{exp.company}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-400 mt-1.5 text-xs">◆</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1 rounded-md uppercase tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
