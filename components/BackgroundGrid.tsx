'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface BackgroundGridProps {
  isDimmed: boolean
}

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
  const columns = 5
  const [windowWidth, setWindowWidth] = useState(1920)
  const [windowHeight, setWindowHeight] = useState(1080)
  
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
  
  const getRandomImage = () => {
    return groupImages[Math.floor(Math.random() * groupImages.length)]
  }
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const originalWidth = 374.0354919433594
  const originalHeight = 543.1200561523438
  const aspectRatio = originalHeight / originalWidth
  const scaleFactor = 1.3
  const columnGap = 5
  const padding = 5
  const availableWidth = windowWidth - (padding * 2)
  const maxImageWidth = (availableWidth - ((columns - 1) * columnGap)) / columns
  const scaledWidth = originalWidth * scaleFactor
  const imageWidth = Math.min(maxImageWidth, scaledWidth)
  const imageHeight = imageWidth * aspectRatio
  const rowGap = 5
  const rowSpacing = imageHeight + rowGap
  
  const startPosition = windowHeight * -0.7
  const totalHeightNeeded = Math.abs(startPosition) + windowHeight
  
  const baseRows = Math.ceil(totalHeightNeeded / rowSpacing)
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
        const columnSpacing = imageWidth + columnGap
        
        const totalGridWidth = (columns * imageWidth) + ((columns - 1) * columnGap)
        
        const startLeft = Math.max(padding, windowWidth / 2 - totalGridWidth / 2)
        
        const baseTop = windowHeight * -0.7
        
        const isOddColumn = item.column % 2 === 1
        const startTop = isOddColumn ? baseTop : baseTop + imageHeight / 2
        
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

