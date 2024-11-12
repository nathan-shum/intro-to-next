'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDarkMode = pathname === '/dark-mode'

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(
        inter.className,
        'min-h-screen',
        { 'dark': isDarkMode }
      )}>
        {children}
      </body>
    </html>
  )
}