'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface StandaloneKeyboardProps {
  email?: string
  phone?: string
  instagram?: string
  twitter?: string
  dribbble?: string
  behance?: string
  resumeUrl?: string
  homeUrl?: string
}

const StandaloneKeyboard: React.FC<StandaloneKeyboardProps> = ({
  email = 'grantgao221@gmail.com',
  phone = '+1234567890',
  instagram = 'https://instagram.com/grantgao',
  twitter = 'https://twitter.com/grantgao',
  dribbble = 'https://dribbble.com/grantgao',
  behance = 'https://behance.net/grantgao',
  resumeUrl = '/resume.pdf',
  homeUrl = 'https://grantgao.com'
}) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [displayText, setDisplayText] = useState('HELLO!')

  const handleKeyPress = (keyId: string, label: string, action: () => void) => {
    setPressedKey(keyId)
    setDisplayText(label)
    action()
    
    setTimeout(() => {
      setPressedKey(null)
      setTimeout(() => setDisplayText('READY'), 1000)
    }, 200)
  }

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Keyboard Container */}
      <div style={{
        position: 'relative',
        backgroundColor: '#1a1a1a',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        {/* Available For Freelance Badge */}
        <div style={{
          position: 'absolute',
          top: '-16px',
          left: '32px',
          backgroundColor: '#2a2a2a',
          padding: '8px 16px',
          borderRadius: '999px',
          fontSize: '12px',
          color: '#999'
        }}>
          Available For Freelance
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Keys Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            flex: '0 0 auto'
          }}>
            {/* Row 1 */}
            <button
              onClick={() => handleKeyPress('home', 'HOME', () => window.open(homeUrl, '_blank'))}
              style={{
                padding: '24px 16px',
                backgroundColor: pressedKey === 'home' ? '#2a2a2a' : '#3a3a3a',
                color: '#ddd',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'home' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'home' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              HOME
            </button>
            <button
              onClick={() => handleKeyPress('cv', 'CV', () => window.open(resumeUrl, '_blank'))}
              style={{
                padding: '24px 16px',
                backgroundColor: pressedKey === 'cv' ? '#444' : '#555',
                color: '#ddd',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'cv' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'cv' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              CV
            </button>
            <button
              onClick={() => handleKeyPress('ig', 'IG', () => window.open(instagram, '_blank'))}
              style={{
                padding: '24px 16px',
                background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'ig' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'ig' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              IG
            </button>

            {/* Row 2 */}
            <button
              onClick={() => handleKeyPress('email', '@', () => window.location.href = `mailto:${email}`)}
              style={{
                padding: '32px 16px',
                backgroundColor: pressedKey === 'email' ? '#f5e6d3' : '#fef3e2',
                color: '#333',
                border: 'none',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'email' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'email' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              @
            </button>
            <button
              onClick={() => handleKeyPress('hire', 'HIRE ME', () => window.location.href = `mailto:${email}?subject=Work Opportunity`)}
              style={{
                padding: '32px 16px',
                backgroundColor: pressedKey === 'hire' ? '#0a0a0a' : '#1a1a1a',
                color: '#ddd',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'hire' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'hire' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              HIRE ME
            </button>
            <button
              onClick={() => handleKeyPress('x', 'X', () => window.open(twitter, '_blank'))}
              style={{
                padding: '32px 16px',
                backgroundColor: pressedKey === 'x' ? '#0a0a0a' : '#1a1a1a',
                color: '#ddd',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'x' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'x' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              X
            </button>

            {/* Row 3 */}
            <button
              onClick={() => handleKeyPress('call', 'CALL ME', () => window.location.href = `tel:${phone}`)}
              style={{
                padding: '32px 16px',
                backgroundColor: pressedKey === 'call' ? '#0a0a0a' : '#1a1a1a',
                color: '#ddd',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'call' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'call' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              CALL ME
            </button>
            <button
              onClick={() => handleKeyPress('db', 'DB', () => window.open(dribbble, '_blank'))}
              style={{
                padding: '24px 16px',
                backgroundColor: pressedKey === 'db' ? '#e94b88' : '#ea4c89',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'db' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'db' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              DB
            </button>
            <button
              onClick={() => handleKeyPress('bh', 'BH', () => window.open(behance, '_blank'))}
              style={{
                padding: '24px 16px',
                backgroundColor: pressedKey === 'bh' ? '#0057ff' : '#1769ff',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transform: pressedKey === 'bh' ? 'translateY(2px)' : 'translateY(0)',
                boxShadow: pressedKey === 'bh' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 8px 16px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}
            >
              BH
            </button>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1, minWidth: '100px' }}>
            <div style={{
              height: '120px',
              backgroundColor: '#2a2a2a',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#444',
                    top: `${20 + i * 20}%`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Display */}
          <div style={{
            width: '180px',
            height: '180px',
            backgroundColor: '#0a0a0a',
            borderRadius: '50%',
            padding: '16px',
            position: 'relative',
            boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated Waveform */}
              <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <motion.path
                  d="M 20 90 Q 50 50, 80 90 T 140 90"
                  stroke="#00ff00"
                  strokeWidth="3"
                  fill="none"
                  animate={{
                    d: [
                      "M 20 90 Q 50 50, 80 90 T 140 90",
                      "M 20 90 Q 50 130, 80 90 T 140 90",
                      "M 20 90 Q 50 50, 80 90 T 140 90"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
              
              <div style={{
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '16px',
                fontWeight: 'bold',
                zIndex: 10,
                textShadow: '0 0 10px #00ff00'
              }}>
                {displayText}
              </div>
            </div>
            
            {/* Screws */}
            {[
              { top: '8px', left: '8px' },
              { top: '8px', right: '8px' },
              { bottom: '8px', left: '8px' },
              { bottom: '8px', right: '8px' }
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#555',
                  borderRadius: '50%',
                  ...pos
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#666',
                  borderRadius: '50%',
                  transform: 'scale(0.7)'
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandaloneKeyboard