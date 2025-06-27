export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden mb-4 shadow-xl">
              <img 
                src="/images/mudasir.jpg" 
                alt="Muhammad Mudassir Azhar - AI Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-400 text-center">
              Muhammad Mudassir Azhar
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Data Analyst & Machine Learning Engineer</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I am a dedicated AI engineer with a strong foundation in machine learning, deep learning, and data
                science. I recently completed my Bachelor's degree in Artificial Intelligence at The Islamia University
                of Bahawalpur with a CGPA of 3.74/4.0.
              </p>
              <p>
                My passion lies in developing innovative AI solutions that can make a real impact. From computer vision
                applications to natural language processing systems, I enjoy tackling complex problems and turning ideas
                into working solutions.
              </p>
              <p>
                With hands-on experience gained through internships at DeepEmbed and Enigmatix, I have developed a
                comprehensive skill set in Python programming, machine learning algorithms, and data analysis
                techniques.
              </p>
            </div>

            {/* <div className="mt-8 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
              <h4 className="font-semibold text-white mb-2">Personal Description</h4>
              <p className="text-gray-400 italic">
                Add your personal description here - tell visitors about your personality, interests, and what drives
                you in your AI journey.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
