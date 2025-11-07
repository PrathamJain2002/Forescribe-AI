'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import BackgroundGrid from './BackgroundGrid'
import SignupModal from './SignupModal'
import Logo from './Logo'

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className="h-screen w-screen bg-background-DEFAULT relative overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 z-50"
      >
        <Logo
          style={{
            position: 'absolute',
            top: '43px',
            left: '120px',
            width: '163px',
            height: '38px',
            opacity: 1,
            transform: 'rotate(0deg)',
          }}
        />
      </motion.header>

      {/* Background Grid - Fixed and non-scrollable */}
      <div className="fixed inset-0 overflow-hidden">
        <BackgroundGrid isDimmed={isModalOpen} />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(118.88deg, rgba(0, 0, 0, 0.85) 38.24%, rgba(139, 61, 255, 0.85) 97.48%, rgba(139, 61, 255, 0.5) 108.58%)',
        }}
      />

      {/* Signup Modal */}
      {isModalOpen && (
        <SignupModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

