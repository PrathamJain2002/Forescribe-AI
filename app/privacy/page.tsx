'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="bg-background-card rounded-lg p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an
              account, use our services, or contact us for support.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, and communicate with you.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy.
            </p>
          </section>
        </div>
      </main>
    </motion.div>
  )
}

