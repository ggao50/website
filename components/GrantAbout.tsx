'use client'

import { motion } from 'framer-motion'

const GrantAbout = () => {
  const skills = [
    'Onshape',
    'SolidWorks',
    'Fusion 360',
    'FEA',
    'GD&T',
    'CNC Mill',
    'Laser Cutting',
    'Waterjet',
    '3D Printing',
    'Java',
    'Python'
  ]

  return (
    <section id="about" className="py-32 relative bg-transparent">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Title - Left Aligned */}
        <motion.h2 
          className="text-[calc(2.5rem+2vw)] font-semibold tracking-tight mb-20 text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-24 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            
            <div className="space-y-6 text-[17px] text-text-light/90 leading-[1.85]">
              <p>
                Hi, I'm Grant Gao, an 18-year-old mechanical engineer and roboticist 
                passionate about bringing 3D designs to life.
              </p>
              
              <p>
                Over the past four years, I've led the mechanical and design efforts 
                for FTC Team 310, Stuy Fission, serving as President and pouring 
                thousands of hours into robotics. From designing high-speed telescoping 
                arms to engineering over-center linkages and custom drivetrains, I've 
                brought complex systems to life leading the team to new heights.
              </p>
              
              <p>
                Now, as an incoming mechanical engineering student at the University 
                of Wisconsin–Madison, I'm excited to dive deeper into robotics, 
                systems design, and advanced manufacturing.
              </p>
              
              <p>
                When I'm not building, you'll find me hooping, biking, running, or 
                tinkering with code and AI tools looking for the next thing to put 
                my 110% in.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="text-[16px] font-semibold text-white mb-8 tracking-wide uppercase">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full border border-white/20 text-[12px] text-text-light hover:border-white/40 hover:text-white transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[400px] mx-auto">
              {/* Background gradient */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #1c86ff 0%, transparent 50%), radial-gradient(circle at 70% 70%, #02c28f 0%, transparent 50%)',
                    filter: 'blur(60px)',
                    opacity: 0.3,
                  }}
                />
              </motion.div>

              {/* Grid pattern */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Floating elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8,
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${15 + i * 20}%`,
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg"
                    style={{
                      background: i % 2 === 0 ? '#1c86ff' : '#02c28f',
                      opacity: 0.6,
                      filter: 'blur(1px)',
                    }}
                  />
                </motion.div>
              ))}

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[72px] font-light text-white/20">4</div>
                  <div className="text-[14px] text-text-light">Years of Creating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GrantAbout