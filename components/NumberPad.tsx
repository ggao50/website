'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NumberPadProps {
  onNumberPress?: (number: string) => void
}

const NumberPad: React.FC<NumberPadProps> = ({ onNumberPress }) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [display, setDisplay] = useState<string>('')

  const quickActions: { [key: string]: { label: string; action: () => void } } = {
    '1': { label: 'Home', action: () => window.location.href = '#' },
    '2': { label: 'Works', action: () => window.location.href = '#works' },
    '3': { label: 'About', action: () => window.location.href = '#about' },
    '4': { label: 'Contact', action: () => window.location.href = '#contact' },
    '5': { label: 'Resume', action: () => window.open('/resume.pdf', '_blank') },
    '6': { label: 'GitHub', action: () => window.open('https://github.com/ggao50', '_blank') },
    '7': { label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/grantgao', '_blank') },
    '8': { label: 'Email', action: () => window.location.href = 'mailto:grantgao221@gmail.com' },
    '9': { label: 'Call', action: () => window.location.href = 'tel:+1234567890' },
    '0': { label: 'Download', action: () => window.open('/portfolio.pdf', '_blank') },
  }

  const handleKeyPress = (key: string) => {
    setPressedKey(key)
    
    if (key === 'C') {
      setDisplay('')
    } else if (key === '⌫') {
      setDisplay(display.slice(0, -1))
    } else if (key === '✓') {
      // Handle enter/submit
      if (onNumberPress) {
        onNumberPress(display)
      }
      // Check if it's a quick action
      if (display.length === 1 && quickActions[display]) {
        quickActions[display].action()
      }
      setDisplay('')
    } else {
      const newDisplay = display + key
      setDisplay(newDisplay)
      
      // Auto-execute single digit quick actions
      if (newDisplay.length === 1 && quickActions[newDisplay]) {
        setTimeout(() => {
          quickActions[newDisplay].action()
          setDisplay('')
        }, 300)
      }
    }
    
    setTimeout(() => {
      setPressedKey(null)
    }, 100)
  }

  const keys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['C', '0', '⌫'],
    ['✓']
  ]

  return (
    <div className="w-full max-w-[280px] mx-auto">
      {/* Quick Actions Legend */}
      <div className="mb-2 p-3 bg-gray-100 rounded-lg text-xs">
        <p className="font-semibold mb-1">Quick Actions:</p>
        <div className="grid grid-cols-2 gap-1 text-gray-600">
          <span>1: Home</span>
          <span>2: Works</span>
          <span>3: About</span>
          <span>4: Contact</span>
          <span>5: Resume</span>
          <span>6: GitHub</span>
          <span>7: LinkedIn</span>
          <span>8: Email</span>
          <span>9: Call</span>
          <span>0: Portfolio</span>
        </div>
      </div>

      {/* Display */}
      <div className="bg-white text-black p-4 rounded-t-lg font-mono text-xl text-right min-h-[60px] flex items-center justify-end border-2 border-black">
        {display || '0'}
      </div>
      
      {/* Number Pad */}
      <div className="bg-black p-2 rounded-b-lg border-2 border-t-0 border-black">
        {keys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 mb-1 last:mb-0">
            {row.map((key) => (
              <motion.button
                key={key}
                onMouseDown={() => handleKeyPress(key)}
                className={`
                  flex-1 aspect-square flex items-center justify-center
                  text-lg font-bold rounded
                  transition-all duration-100
                  ${key === '✓' ? 'col-span-3 aspect-auto h-14' : ''}
                  ${pressedKey === key 
                    ? 'bg-gray-600 text-white scale-95' 
                    : 'bg-white text-black hover:bg-gray-200'
                  }
                `}
                whileTap={{ scale: 0.95 }}
              >
                {key}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NumberPad