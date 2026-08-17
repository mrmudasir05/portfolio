"use client"

import { useState } from "react"
import { ExternalLink, Github, Lock } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Backend Systems")

  const filters = ["Backend Systems", "AI/ML", "Data Science"]

  const projects = [
    // Client Projects (first 5) - no images or github links
    {
      title: "Pathways",
      subtitle: "Clinical AI Decision Support System",
      description:
        "Developed FastAPI backend services for AI-assisted pathology analysis, Supabase integration, and clinical workflow automation. Integrated LLM workflows, Stripe, AWS (Terraform), and PHI protection.",
      technologies: ["FastAPI", "LLM", "AWS", "Terraform", "Stripe", "Supabase"],
      category: "Backend Systems",
      isClient: true,
    },
    {
      title: "VirtualFusion",
      subtitle: "Cybersecurity Platform",
      description:
        "Built Django REST APIs powering a multi-tenant cybersecurity platform with automated AWS Fargate lab provisioning. Integrated AWS ECS/Fargate, Celery, RabbitMQ, Redis, and SSE for real-time competition updates.",
      technologies: ["Django", "AWS ECS/Fargate", "Celery", "RabbitMQ", "Redis", "Docker"],
      category: "Backend Systems",
      isClient: true,
    },
    {
      title: "Nyquist Scholar",
      subtitle: "AI Research Platform",
      description:
        "Developed scalable FastAPI REST APIs to upload documents, handle processing steps, and support backend services. Integrated AI/LLM-based chat with documents for smart paper screening and extracting key insights.",
      technologies: ["FastAPI", "LLM", "Document AI", "RAG", "REST API"],
      category: "Backend Systems",
      isClient: true,
    },
    {
      title: "Multi-Tenant OCR & Document Intelligence SaaS",
      subtitle: "Enterprise Document Platform",
      description:
        "Built a Django-based platform with async OCR pipelines, rule-based extraction, vector search (Qdrant), LLM-driven structured data extraction, and Stripe-enabled SaaS workflows.",
      technologies: ["Django", "OCR", "Qdrant", "LLM", "Stripe", "Vector Search"],
      category: "Backend Systems",
      isClient: true,
    },
    {
      title: "AI-Powered Podcast Generator",
      subtitle: "Sentiment & TTS Based",
      description:
        "Built a Streamlit app using LangChain, Groq LLM, and ElevenLabs TTS to analyze script sentiment, rewrite narration, and generate podcasts with sentiment-driven background music and audio mixing via Pydub.",
      technologies: ["Streamlit", "LangChain", "Groq LLM", "ElevenLabs TTS", "Pydub"],
      category: "AI/ML",
      isClient: true,
    },
    // Personal/Open Projects - have images and github links
    {
      title: "Virtual Try-On System",
      subtitle: "Final Year Project",
      description:
        "Built a cloud-based AI garment try-on system using pose estimation, segmentation, and image synthesis, enabling realistic virtual fitting with a ReactJS frontend and real-time inference.",
      technologies: ["AI", "Computer Vision", "ReactJS", "Pose Estimation"],
      category: "AI/ML",
      isClient: false,
      github: "https://github.com/mrmudasir05/Virtual-Try-On",
      image: "/images/Virtual-Try-On.png",
    },
    {
      title: "Hematology Analyzer",
      subtitle: "Machine Learning Classification",
      description:
        "Processed animal cell images using OpenCV and PCA, and trained a machine learning model to classify normal vs. abnormal cells, enhancing diagnostic accuracy.",
      technologies: ["OpenCV", "PCA", "Machine Learning", "Image Processing"],
      category: "AI/ML",
      isClient: false,
      github: "https://github.com/mrmudasir05/Hemalogy",
      image: "/images/Heamalogy.png",
    },
    {
      title: "Cyanobacteria Classification",
      subtitle: "Deep Learning Model",
      description:
        "Developed an EfficientNet-B0 deep learning model to classify 13 cyanobacteria categories from microscopy images, addressing dataset imbalance with class weighting and augmentation.",
      technologies: ["EfficientNet-B0", "Deep Learning", "Image Classification"],
      category: "AI/ML",
      isClient: false,
      github: "https://github.com/mrmudasir05/Cyanotoxins_classifier",
      image: "/images/Cyanotoxins_classifier.png",
    },
    {
      title: "AI Analyst",
      subtitle: "LLM-Powered Data Visualization",
      description:
        "Developed an AI assistant that converts natural language queries into dynamic EDA visualizations using LLMs, generating Python code with Pandas and Seaborn.",
      technologies: ["LLM", "Data Visualization", "Pandas", "Seaborn", "NLP"],
      category: "Data Science",
      isClient: false,
      github: "https://github.com/mrmudasir05/superstore_Analysis",
      image: "/images/superstore_Analysis.png",
    },
    {
      title: "Pakistani Legal Chatbot",
      subtitle: "RAG-Based Legal Assistant",
      description:
        "Created an AI-powered legal assistant using LangChain, Groq LLM, FAISS, and HuggingFace embeddings for real-time, document-grounded answers to Pakistani law queries.",
      technologies: ["LangChain", "Groq LLM", "FAISS", "HuggingFace", "RAG"],
      category: "AI/ML",
      isClient: false,
      github: "https://github.com/mrmudasir05/Legal-Chatbot",
      image: "/images/Legal-Chatbot.png",
    },
    {
      title: "Server Log Management",
      subtitle: "Real-Time Monitoring Dashboard",
      description:
        "Built a real-time server log management system using Streamlit, regex, and Plotly to enable interactive monitoring and dynamic visualizations.",
      technologies: ["Streamlit", "Regex", "Plotly", "Real-time Monitoring"],
      category: "Data Science",
      isClient: false,
      github: "https://github.com/mrmudasir05/Server-log-management",
      image: "/images/Server-log-management.png",
    },
    {
      title: "Countries' Poverty Analysis",
      subtitle: "Interactive Dashboard",
      description:
        "Developed a Streamlit dashboard for global poverty analysis with multi-select filters and dynamic visualizations to explore key economic indicators.",
      technologies: ["Streamlit", "Data Analysis", "Dashboard"],
      category: "Data Science",
      isClient: false,
      github: "https://github.com/mrmudasir05",
      image: "/images/countries poverity.png",
    },
  ]

  const filteredProjects = projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Projects Portfolio
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-green-400 text-black"
                  : "bg-[#111111] border border-gray-800 text-gray-400 hover:text-green-400 hover:border-green-400/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden hover:border-green-400/30 transition-colors group"
            >
              {/* Image or Client Placeholder */}
              {project.isClient ? (
                <div className="w-full h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-500 text-xs">Client Project</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-green-400 text-sm">{project.subtitle}</p>
                    )}
                  </div>
                  {!project.isClient && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-2 py-0.5 rounded"
                    >
                      {tech}
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
