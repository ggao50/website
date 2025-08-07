'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = [
    '3D Animation',
    'Motion Design',
    'Robotics',
    'CAD Design',
    'Mechanical Engineering',
    'FTC Competition',
    'Product Design',
    'Creative Development'
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white/5">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white/80">
              <p>
                Hey! I'm Grant, a 19-year-old roboticist and motion designer passionate about bringing mechanical designs to life through creative visualization.
              </p>
              
              <p>
                As the former President of FTC robotics team Stuy Fission, I led the mechanical and design side of competitive robotics for 4 years in high school. Now, I'm an incoming freshman at the University of Wisconsin–Madison, ready to explore the intersection of engineering and creative technology.
              </p>
              
              <p>
                I specialize in creating engaging 3D animations and motion graphics that explain complex mechanical systems in simple, beautiful ways. My work combines technical precision with creative flair, making engineering concepts accessible and exciting.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-white/60">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Animated Background */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-accent-blue/20 to-green-500/20 blur-3xl" />
              </motion.div>

              {/* Content Box */}
              <div className="relative w-full h-full rounded-3xl border border-white/20 bg-black/50 backdrop-blur-sm p-8 flex flex-col justify-center items-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-8xl font-bold gradient-text mb-4">19</div>
                  <div className="text-xl text-white/60">Years of Creating</div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ 
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-full border border-accent-blue/50"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-8 left-8 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-accent-blue"
                />
              </div>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center italic text-white/60"
            >
              "Bringing mechanical designs to life through the power of motion"
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection