'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Key {
  id: string
  label: string
  color: string
  textColor?: string
  action: () => void
  gridArea?: string
  size?: 'normal' | 'large'
}

const InteractiveKeyboard = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [displayText, setDisplayText] = useState('READY')

  const handleKeyPress = (key: Key) => {
    setPressedKey(key.id)
    setDisplayText(key.label)
    key.action()
    
    // Reset after animation
    setTimeout(() => {
      setPressedKey(null)
    }, 200)
  }

  const keys: Key[] = [
    {
      id: 'home',
      label: 'HOME',
      color: 'bg-gray-800',
      textColor: 'text-gray-200',
      action: () => window.location.href = '/',
      gridArea: 'home'
    },
    {
      id: 'cv',
      label: 'CV',
      color: 'bg-gray-700',
      textColor: 'text-gray-200',
      action: () => window.open('/resume.pdf', '_blank'),
      gridArea: 'cv'
    },
    {
      id: 'ig',
      label: 'IG',
      color: 'bg-gradient-to-br from-purple-600 to-pink-500',
      textColor: 'text-white',
      action: () => window.open('https://instagram.com/grantgao', '_blank'),
      gridArea: 'ig'
    },
    {
      id: 'email',
      label: '@',
      color: 'bg-amber-100',
      textColor: 'text-gray-800',
      action: () => window.location.href = 'mailto:grantgao221@gmail.com',
      gridArea: 'email',
      size: 'large'
    },
    {
      id: 'hire',
      label: 'HIRE ME',
      color: 'bg-gray-900',
      textColor: 'text-gray-200',
      action: () => window.location.href = '#contact',
      gridArea: 'hire',
      size: 'large'
    },
    {
      id: 'x',
      label: 'X',
      color: 'bg-gray-900',
      textColor: 'text-gray-200',
      action: () => window.open('https://twitter.com/grantgao', '_blank'),
      gridArea: 'x'
    },
    {
      id: 'call',
      label: 'CALL ME',
      color: 'bg-gray-900',
      textColor: 'text-gray-200',
      action: () => window.location.href = 'tel:+1234567890',
      gridArea: 'call',
      size: 'large'
    },
    {
      id: 'db',
      label: 'DB',
      color: 'bg-pink-400',
      textColor: 'text-white',
      action: () => window.open('https://dribbble.com/grantgao', '_blank'),
      gridArea: 'db'
    },
    {
      id: 'bh',
      label: 'BH',
      color: 'bg-blue-500',
      textColor: 'text-white',
      action: () => window.open('https://behance.net/grantgao', '_blank'),
      gridArea: 'bh'
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Keyboard Container */}
      <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl">
        {/* Available For Freelance Badge */}
        <div className="absolute -top-4 left-8 bg-gray-800 px-4 py-2 rounded-full">
          <span className="text-xs text-gray-400">Available For Freelance</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Keys Grid */}
          <div className="grid grid-cols-3 gap-3" style={{
            gridTemplateAreas: `
              "home cv ig"
              "email hire x"
              "call db bh"
            `
          }}>
            {keys.map((key) => (
              <motion.button
                key={key.id}
                className={`
                  relative rounded-xl font-bold text-sm
                  ${key.color} ${key.textColor || 'text-white'}
                  ${key.size === 'large' ? 'px-6 py-8' : 'px-4 py-6'}
                  shadow-lg hover:shadow-xl transition-all duration-200
                  active:scale-95
                `}
                style={{ gridArea: key.gridArea }}
                onMouseDown={() => handleKeyPress(key)}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: pressedKey === key.id ? 2 : 0,
                  boxShadow: pressedKey === key.id 
                    ? '0 2px 4px rgba(0,0,0,0.2)' 
                    : '0 8px 16px rgba(0,0,0,0.4)'
                }}
              >
                {/* Key Top */}
                <div className="relative z-10">
                  {key.label}
                </div>
                
                {/* Key Side (3D Effect) */}
                <div className={`
                  absolute inset-x-0 bottom-0 h-2 rounded-b-xl
                  ${key.color} brightness-75
                  ${pressedKey === key.id ? 'h-0' : 'h-2'}
                  transition-all duration-100
                `} />
              </motion.button>
            ))}
          </div>

          {/* Spacer Area */}
          <div className="flex-1 relative">
            <div className="h-32 bg-gray-800 rounded-lg">
              {/* Horizontal lines */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-gray-700"
                  style={{ top: `${20 + i * 25}%` }}
                />
              ))}
            </div>
          </div>

          {/* Display Screen */}
          <div className="relative">
            <div className="w-48 h-48 bg-gray-900 rounded-full p-4 shadow-inner">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Waveform Animation */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M 0 80 Q 40 40, 80 80 T 160 80 T 240 80"
                    stroke="#00ff00"
                    strokeWidth="3"
                    fill="none"
                    animate={{
                      d: [
                        "M 0 80 Q 40 40, 80 80 T 160 80 T 240 80",
                        "M 0 80 Q 40 120, 80 80 T 160 80 T 240 80",
                        "M 0 80 Q 40 40, 80 80 T 160 80 T 240 80"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
                
                {/* Display Text */}
                <motion.div
                  key={displayText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 font-mono text-lg z-10"
                >
                  {displayText}
                </motion.div>
              </div>
            </div>
            
            {/* Corner Screws */}
            {[
              { top: '10px', left: '10px' },
              { top: '10px', right: '10px' },
              { bottom: '10px', left: '10px' },
              { bottom: '10px', right: '10px' }
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gray-700 rounded-full"
                style={pos}
              >
                <div className="w-full h-full bg-gray-600 rounded-full transform scale-75" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveKeyboard