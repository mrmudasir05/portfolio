import { ExternalLink, Github, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Virtual Try-On System",
      subtitle: "Final Year Project",
      description:
        "Built a cloud-based AI garment try-on system using pose estimation, segmentation, and image synthesis, enabling realistic virtual fitting with a ReactJS frontend and real-time inference via Ngrok.",
      technologies: ["AI", "Computer Vision", "ReactJS", "Pose Estimation", "Image Synthesis"],
      github: "https://github.com/mrmudasir05/Virtual-Try-On",
      demo: "https://github.com/mrmudasir05/Virtual-Try-On",
      image: "/images/Virtual-Try-On.png",
    },
    {
      title: "Hematology Analyzer using Machine Learning",
      description:
        "Processed animal cell images using OpenCV and PCA, and trained a machine learning model to classify normal vs. abnormal cells, enhancing diagnostic accuracy.",
      technologies: ["OpenCV", "PCA", "Machine Learning", "Image Processing"],
      github: "https://github.com/mrmudasir05/Hemalogy",
      demo: "https://github.com/mrmudasir05/Hemalogy",
      image: "/images/Heamalogy.png",
    },
    {
      title: "Cyanobacteria Classification",
      description:
        "Developed an EfficientNet-B0 deep learning model to classify 13 cyanobacteria categories from microscopy images, addressing dataset imbalance with class weighting and augmentation to improve accuracy and model robustness.",
      technologies: ["EfficientNet-B0", "Deep Learning", "Image Classification", "Data Augmentation"],
      github: "https://github.com/mrmudasir05/Cyanotoxins_classifier",
      demo: "https://github.com/mrmudasir05/Cyanotoxins_classifier",
      image: "/images/Cyanotoxins_classifier.png",
    },
    {
      title: "AI Analyst – LLM-Powered Data Visualization Tool",
      description:
        "Developed an AI assistant that converts natural language queries into dynamic EDA visualizations using LLMs, generating Python code with Pandas and Seaborn for tasks like chart creation.",
      technologies: ["LLM", "Data Visualization", "Pandas", "Seaborn", "NLP"],
      github: "https://github.com/mrmudasir05/superstore_Analysis",
      demo: "https://github.com/mrmudasir05/superstore_Analysis",
      image: "/images/superstore_Analysis.png",
    },
    {
      title: "Pakistani Legal Chatbot",
      description:
        "Created an AI-powered legal assistant using LangChain, Groq LLM, FAISS, and HuggingFace embeddings to provide real-time, document-grounded answers to Pakistani law queries, with admin-controlled updates and RAG-based QA.",
      technologies: ["LangChain", "Groq LLM", "FAISS", "HuggingFace", "RAG"],
      github: "https://github.com/mrmudasir05/Legal-Chatbot",
      demo: "https://github.com/mrmudasir05/Legal-Chatbot",
      image: "/images/Legal-Chatbot.png",
    },
    {
      title: "Server Log Management using Streamlit",
      description:
        "Built a real-time server log management system using Streamlit, regex, and Plotly to enable interactive monitoring and dynamic visualizations.",
      technologies: ["Streamlit", "Regex", "Plotly", "Real-time Monitoring"],
      github: "https://github.com/mrmudasir05/Server-log-management",
      demo: "https://github.com/mrmudasir05/Server-log-management",
      image: "/images/Server-log-management.png",
    },
    {
      title: "Countries' Poverty Analysis using Streamlit",
      description:
        "Developed a Streamlit dashboard for global poverty analysis with multi-select filters and dynamic visualizations to explore key economic indicators.",
      technologies: ["Streamlit", "Data Analysis", "Dashboard", "Economic Indicators"],
      github: "https://github.com/mrmudasir05",
      demo: "https://github.com/mrmudasir05",
      image: "/images/countries poverity.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden"
            >
              {/* Full width image at the top */}
              <div className="w-full h-80 bg-gray-900 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    {project.subtitle && <p className="text-purple-400 font-medium">{project.subtitle}</p>}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
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
