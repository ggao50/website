'use client'

import { motion } from 'framer-motion'

const YouTubeShowcase = () => {
  // Your YouTube video ID extracted from the URL
  const VIDEO_ID = '0944FVLUMyo'
  
  return (
    <section id="youtube" className="py-32 relative bg-transparent">
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
            Cool Stuff I've Made
          </h2>
        </motion.div>

        {/* Single Video Player with Picture-in-Picture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-white/60 hover:border-white/80 transition-all duration-300">
            <div className="aspect-video relative">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&showinfo=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
              {/* Invisible overlay to prevent interaction */}
              <div className="absolute inset-0 z-10" style={{ pointerEvents: 'auto' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default YouTubeShowcase