'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  style?: React.CSSProperties
}

export default function Logo({ className = '', style }: LogoProps) {
  return (
    <Image
      src="/image.png"
      alt="forescribe"
      width={163}
      height={38}
      className={className}
      style={style}
      priority
      unoptimized
    />
  )
}

