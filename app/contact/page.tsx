'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DarkModeToggle from '@/components/DarkModeToggle'
import Logo from '@/components/Logo'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  // Enable scrolling on this page
  useEffect(() => {
    document.documentElement.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
    
    return () => {
      // Restore original overflow when leaving the page
      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'hidden'
    }
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

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
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Contact Us
            </Link>
            {/* <DarkModeToggle /> */}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background-card rounded-lg p-8 space-y-6"
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-background-modal border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full bg-background-modal border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-white font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full bg-background-modal border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Message is required' })}
                className="w-full bg-background-modal border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {isSubmitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-400 text-center"
              >
                Thank you for your message! We&apos;ll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </main>
    </motion.div>
  )
}

