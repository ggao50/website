'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  category: string
  year: string
  description?: string
  color?: string
  gradient?: string
  achievements?: string[]
  pdfPath?: string
  coverImage?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: '2025 Robot - Farewell',
    category: 'INTO THE DEEP',
    year: '2025',
    description: 'Latest competition robot featuring 4-stage pivoting telescoping arm, custom drivetrain, and advanced autonomous systems',
    gradient: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    achievements: ['288 pts High Score', '176 OPR', 'Level 2 Ascent in 4 seconds', '3-5 Sample Autonomous'],
    pdfPath: '/portfolio-2025.pdf',
    coverImage: '/2025-robot.png',
  },
  {
    id: 2,
    title: '2024 Robot - History',
    category: 'CENTERSTAGE',
    year: '2024',
    description: "First robot in team's history to make playoffs at the World Championships, featuring innovative intake mechanisms and precision scoring",
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    coverImage: '/2024-robot.png',
    pdfPath: '/Copy of 2024 MTI.pdf',
  },
  {
    id: 3,
    title: '2023 Robot - Heartbreak',
    category: 'POWERPLAY',
    year: '2023',
    description: 'State Championship finalist robot featuring 5 cone autonomous and lightweight virtual four bar arm.',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    coverImage: '/2023-robot.png',
    pdfPath: '/Copy of V4 PowerPlay globulous glop.pdf',
  },
  {
    id: 4,
    title: '2022 Robot - Rookie',
    category: 'FREIGHT FRENZY',
    year: '2022',
    description: 'Our first custom robot, utilizing an innovative horizontal slide system, making it to the Maryland Technical Invitation for the first time ever',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    coverImage: '/2022-robot.png',
    pdfPath: '/310 RobotFlyer2022.pdf',
  },
]

const GrantWorks = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [selectedProject])
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    // You can add modal opening logic here or navigation
    console.log('Project clicked:', project.title)
  }

  return (
    <section id="works" className="py-32 relative bg-transparent">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-left"
        >
          <h2 className="text-[calc(2.5rem+2vw)] font-semibold tracking-tight">
            My Past Four Years
          </h2>
        </motion.div>

        {/* Projects Grid - Optimized for 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div 
                className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm border border-purple-900/20 hover:border-purple-600/40"
                style={{ 
                  width: '100%',
                }}
              >
                {/* Project Visual */}
                <div className="relative h-[260px] overflow-hidden bg-gradient-to-br from-purple-900/20 to-black/50 flex items-center justify-center p-4">
                  {project.coverImage ? (
                    <div className="relative w-full h-full max-w-[220px] max-h-[220px]">
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110 relative"
                      style={{
                        background: project.gradient || project.color,
                      }}
                    >
                      {/* Project Number for non-image cards */}
                      <div className="absolute inset-0 flex items-center justify-center text-white/30 text-[72px] font-light">
                        0{project.id}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info - Below Image */}
                <div className="p-6 bg-gradient-to-b from-black/60 to-purple-900/10 backdrop-blur-xs">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-wider">{project.category}</p>
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-white text-[19px] font-bold mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title.split(' - ')[0]}
                  </h3>
                  {project.title.includes(' - ') && (
                    <p className="text-gray-400 text-[14px] mb-3 font-medium tracking-wide">{project.title.split(' - ')[1]}</p>
                  )}
                  {project.description && (
                    <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-3">{project.description}</p>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Click hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[13px] text-gray-500 italic">
            Click on any project to view detailed documentation
          </p>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl overscroll-none"
          onClick={() => setSelectedProject(null)}
          style={{ touchAction: 'none' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.16, 1, 0.3, 1],
              scale: { duration: 0.4 },
              opacity: { duration: 0.3 }
            }}
            className="bg-black rounded-2xl w-[95vw] h-[95vh] md:w-[95vw] md:h-[95vh] overflow-hidden flex flex-col shadow-2xl
                       sm:rounded-2xl rounded-none sm:w-[95vw] sm:h-[95vh] w-screen h-screen fixed inset-0 sm:relative sm:w-[95vw] sm:h-[95vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ touchAction: 'auto' }}
          >
            {/* Clean Header - Responsive */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10"
            >
              <div className="flex-1">
                <h2 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg">{selectedProject.title}</h2>
                <p className="text-white/70 text-xs sm:text-sm">{selectedProject.category} • {selectedProject.year}</p>
              </div>
              
              {/* Mobile Download Button */}
              <div className="flex items-center gap-2">
                <motion.a
                  href={selectedProject.pdfPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="sm:hidden text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  title="Download PDF"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="text-white/70 hover:text-white transition-all duration-300 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            
            {selectedProject.pdfPath ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 overflow-auto bg-white rounded-xl m-0 sm:m-3 mt-12 sm:mt-16 -webkit-overflow-scrolling-touch"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {/* Mobile-friendly PDF viewer with toolbar */}
                <iframe
                  src={`${selectedProject.pdfPath}#view=FitH&scrollbar=1&toolbar=1&navpanes=0`}
                  className="w-full h-full min-h-[150vh] sm:min-h-[600px]"
                  title={selectedProject.title}
                  style={{ border: 'none' }}
                  allow="fullscreen"
                />
              </motion.div>
            ) : (
              <>
                {selectedProject.description && (
                  <p className="text-gray-300 mb-6 px-4">{selectedProject.description}</p>
                )}
                
                {selectedProject.achievements && (
                  <div className="mb-6 px-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Achievements</h3>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div
                  className="h-64 rounded-lg mx-4"
                  style={{
                    background: selectedProject.gradient || selectedProject.color,
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default GrantWorks