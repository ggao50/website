'use client'

import GrantNavigation from '@/components/GrantNavigation'
import GrantHero from '@/components/GrantHero'
import GrantWorks from '@/components/GrantWorks'
import YouTubeShowcase from '@/components/YouTubeShowcase'
import GrantAbout from '@/components/GrantAbout'
import GrantFooter from '@/components/GrantFooter'

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-x-hidden">
      {/* Black hole gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] black-hole-gradient" />
      </div>
      <div className="relative z-10">
        <GrantNavigation />
        <GrantHero />
        <YouTubeShowcase />
        <GrantWorks />
        <GrantAbout />
        <GrantFooter />
      </div>
    </main>
  )
}