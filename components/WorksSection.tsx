'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  color: string
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Robotic Arm Control',
    category: '3D Animation',
    description: 'Interactive 3D visualization of robotic arm kinematics',
    image: '/project1.jpg',
    color: 'from-blue-500 to-purple-600',
    year: '2024'
  },
  {
    id: 2,
    title: 'Planetary Gear System',
    category: 'Motion Design',
    description: 'Educational animation explaining planetary gear mechanics',
    image: '/project2.jpg',
    color: 'from-green-500 to-teal-600',
    year: '2024'
  },
  {
    id: 3,
    title: 'FTC Competition Robot',
    category: 'Product Design',
    description: 'Award-winning robot design for FTC competition',
    image: '/project3.jpg',
    color: 'from-orange-500 to-red-600',
    year: '2023'
  },
  {
    id: 4,
    title: 'Mechanical Systems',
    category: '3D Visualization',
    description: 'Complex mechanical systems breakdown and analysis',
    image: '/project4.jpg',
    color: 'from-pink-500 to-rose-600',
    year: '2023'
  }
]

const WorksSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="works" className="py-20 md:py-32">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Selected Works</span>
          </h2>
          <p className="text-xl text-white/60">
            A collection of my motion design and creative development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
                {/* Project Image/Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                  <motion.div
                    className="absolute inset-0 bg-black/30"
                    animate={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        rotate: hoveredProject === project.id ? 5 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-6xl font-bold text-white/20"
                    >
                      {project.id}
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1 group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50">{project.category}</p>
                    </div>
                    <span className="text-sm text-white/40">{project.year}</span>
                  </div>
                  
                  <p className="text-white/70 line-clamp-2">
                    {project.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredProject === project.id ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-accent-blue to-green-500 mt-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WorksSection