'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface BackgroundGridProps {
  isDimmed: boolean
}

// 5 columns grid structure - one in middle, 2 on each side
// Randomly uses Group images from public folder

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function BackgroundGrid({ isDimmed }: BackgroundGridProps) {
  // 5 columns grid structure - one in middle, 2 on each side
  const columns = 5
  const [windowWidth, setWindowWidth] = useState(1920)
  const [windowHeight, setWindowHeight] = useState(1080)
  
  // Array of Group images to randomly select from
  const groupImages = [
    '/Group 39685.png',
    '/Group 39686.png',
    '/Group 39688.png',
    '/Group 39690.png',
    '/Group 39691.png',
    '/Group 39692.png',
    '/Group 39693.png',
    '/Group 39694.png',
    '/Group 39697.png',
    '/Group 39698.png',
    '/Group 39699.png',
    '/Group 39700.png',
    '/Group 39701.png',
  ]
  
  // Function to get random image
  const getRandomImage = () => {
    return groupImages[Math.floor(Math.random() * groupImages.length)]
  }
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    
    handleResize() // Set initial dimensions
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Calculate responsive image dimensions - increased size
  const originalWidth = 374.0354919433594
  const originalHeight = 543.1200561523438
  const aspectRatio = originalHeight / originalWidth
  const scaleFactor = 1.3 // Increase image size by 30%
  const columnGap = 5 // Reduced gap between columns
  const padding = 5 // Reduced padding from left and right
  const availableWidth = windowWidth - (padding * 2)
  const maxImageWidth = (availableWidth - ((columns - 1) * columnGap)) / columns
  // Use scaled original size, but ensure it fits within available width
  const scaledWidth = originalWidth * scaleFactor
  const imageWidth = Math.min(maxImageWidth, scaledWidth)
  const imageHeight = imageWidth * aspectRatio
  const rowGap = 5 // Reduced gap between rows
  const rowSpacing = imageHeight + rowGap
  
  // Calculate number of rows needed to fill screen vertically
  // Account for negative starting position (-70%) and ensure full coverage
  // Start position is at -70% of window height, so we need rows to cover from there to bottom
  const startPosition = windowHeight * -0.7
  const totalHeightNeeded = Math.abs(startPosition) + windowHeight // From start position to bottom of screen
  
  // Calculate base rows needed, then add extra for smaller screens
  const baseRows = Math.ceil(totalHeightNeeded / rowSpacing)
  // Add more rows for mobile/tablet to ensure full coverage
  const extraRows = windowWidth < 768 ? 5 : windowWidth < 1024 ? 3 : 2
  const rowsPerColumn = baseRows + extraRows
  
  const items: Array<{ column: number; row: number; image: string }> = []
  
  for (let col = 1; col <= columns; col++) {
    for (let row = 1; row <= rowsPerColumn; row++) {
      items.push({ column: col, row, image: getRandomImage() })
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`absolute inset-0 z-0 transition-opacity duration-300 ${
        isDimmed ? 'opacity-15' : 'opacity-100'
      }`}
      style={{ zIndex: 0 }}
    >
      {items.map((item, index) => {
        // Use the pre-calculated responsive dimensions
        const columnSpacing = imageWidth + columnGap
        
        // Calculate total grid width to center it horizontally
        const totalGridWidth = (columns * imageWidth) + ((columns - 1) * columnGap)
        
        // Center the grid horizontally - ensure no half images on sides
        const startLeft = Math.max(padding, windowWidth / 2 - totalGridWidth / 2)
        
        // Position table at 70% from top of screen
        const baseTop = windowHeight * -0.7
        
        // Staggered layout: odd columns start at 70%, even columns start at middle of first odd row
        const isOddColumn = item.column % 2 === 1
        const startTop = isOddColumn ? baseTop : baseTop + imageHeight / 2 // Even columns start at middle of first odd row
        
        const left = startLeft + (item.column - 1) * columnSpacing
        const top = startTop + (item.row - 1) * rowSpacing

        return (
          <motion.div
            key={`col-${item.column}-row-${item.row}`}
            variants={itemVariants}
            style={{
              position: 'absolute',
              top: `${top}px`,
              left: `${left}px`,
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 1,
            }}
          >
            <img
              src={item.image}
              alt="Background card"
              width={374.0354919433594}
              height={543.1200561523438}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                console.error('Image failed to load:', e.currentTarget.src)
              }}
              onLoad={() => {
                if (index === 0) {
                  console.log('First image loaded successfully at position:', { left, top })
                }
              }}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

