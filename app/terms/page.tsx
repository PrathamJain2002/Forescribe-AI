'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background-DEFAULT"
    >
      <header className="sticky top-0 z-50 bg-background-DEFAULT/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/">
            <Logo
              style={{
                width: '163px',
                height: '38px',
                opacity: 1,
              }}
            />
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
        <div className="bg-background-card rounded-lg p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Forescribe, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use Forescribe for personal, non-commercial
              transitory viewing only.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p>
              The materials on Forescribe are provided on an &apos;as is&apos; basis. Forescribe
              makes no warranties, expressed or implied, and hereby disclaims and negates all
              other warranties.
            </p>
          </section>
        </div>
      </main>
    </motion.div>
  )
}

