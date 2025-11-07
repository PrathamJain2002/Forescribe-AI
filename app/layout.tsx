import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forescribe AI',
  description: 'Welcome to Forescribe - Your AI-powered solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
