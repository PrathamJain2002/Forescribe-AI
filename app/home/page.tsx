'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo'

export default function HomePage() {
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background-DEFAULT"
    >
      {/* Header */}
      <motion.header
        variants={itemVariants}
        className="sticky top-0 z-50 bg-background-DEFAULT/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Logo
              style={{
                width: '163px',
                height: '38px',
                opacity: 1,
              }}
            />
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/home"
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <button
              onClick={() => router.push('/')}
              className="text-white hover:text-primary transition-colors"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Forescribe
          </h1>
          <p className="text-gray-400 text-lg">
            Your AI-powered solution for the future
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-background-card rounded-lg p-6 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">f</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">
                Feature {item}
              </h3>
              <p className="text-gray-400">
                Discover amazing features that will transform your workflow and
                boost productivity.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  )
}

