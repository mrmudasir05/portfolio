import { Trophy, Users, Presentation } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "M(IT)² 2025 Winter Contest",
      description: "Participated in the prestigious M(IT)² 2025 Winter Contest",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      title: "AI Bootcamp at DeepEmbed Lab",
      description: "Successfully participated in AI Bootcamp at DeepEmbed Lab",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Python Workshop Delivery",
      description: "Delivered Python Workshop for ACM - IUB Chapter 1",
      icon: Presentation,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "ACM Team Member",
      description: "Python Team Member, ACM - IUB Chapter 1",
      icon: Users,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10 border-violet-500/20",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className={`bg-gray-900 border ${achievement.bgColor} rounded-lg shadow-2xl p-6`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
