'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface SignupModalProps {
  onClose: () => void
}

export default function SignupModal({ onClose }: SignupModalProps) {
  const router = useRouter()
  const [loadingButton, setLoadingButton] = useState<'google' | 'microsoft' | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !loadingButton) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose, loadingButton])

  const handleGoogleSignup = async () => {
    setLoadingButton('google')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoadingButton(null)
    router.push('/home')
  }

  const handleMicrosoftSignup = async () => {
    setLoadingButton('microsoft')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoadingButton(null)
    router.push('/home')
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-20 flex flex-col items-center justify-center p-4"
      >
        <div className="relative w-full max-w-md">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 rounded-2xl"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(0px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="rounded-2xl p-8 w-full shadow-2xl relative z-10"
            style={{ backgroundColor: '#00000033' }}
          >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/logo.gif"
              alt="Forescribe logo"
              className="w-12 h-12 object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-center mb-8 font-semibold"
            style={{
              fontSize: '22px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Welcome to Forescribe
          </motion.h1>

          <div className="space-y-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignup}
              disabled={loadingButton !== null}
              aria-label="Continue with Google"
              className="w-full text-white rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#8B3DFF',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                padding: '12px 16px',
                minHeight: '48px',
              }}
            >
              {loadingButton === 'google' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="flex items-center gap-3" style={{ width: '200px', justifyContent: 'flex-start' }}>
                  <img
                    src="/google.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </div>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleMicrosoftSignup}
              disabled={loadingButton !== null}
              aria-label="Continue with Microsoft"
              className="w-full text-white rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: '#4A4A4A',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '0%',
                padding: '12px 16px',
                minHeight: '48px',
              }}
            >
              {loadingButton === 'microsoft' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <div className="flex items-center gap-3" style={{ width: '200px', justifyContent: 'flex-start' }}>
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4 24H0V12.6H11.4V24ZM24 24H12.6V12.6H24V24ZM11.4 11.4H0V0H11.4V11.4ZM24 11.4H12.6V0H24V11.4Z"
                      fill="white"
                    />
                  </svg>
                  Continue with Microsoft
                </div>
              )}
            </motion.button>
          </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-xs leading-relaxed w-full max-w-md mt-4"
          style={{ textAlign: 'left' }}
        >
          By clicking &quot;Continue with Google/Microsoft&quot; above, you acknowledge that
          you have read and understood, and agree to Forescribe&apos;s{' '}
          <a
            href="/terms"
            className="text-primary hover:underline transition-colors"
          >
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="text-primary hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          .
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}

