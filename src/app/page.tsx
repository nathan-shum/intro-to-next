'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoonIcon, SunIcon } from "lucide-react"
import clsx from 'clsx'

export default function Home() {
  const pathname = usePathname()
  const isDarkMode = pathname === '/pages/dark-mode'

  return (
    <div className={clsx(
      'min-h-screen flex flex-col items-center justify-center p-4',
      'transition-colors duration-200',
      {
        'bg-background text-foreground': !isDarkMode,
        'dark:bg-background dark:text-foreground': isDarkMode
      }
    )}>
      <div className={clsx(
        'w-full max-w-md space-y-8 p-8 rounded-lg shadow-lg',
        'transition-colors duration-200',
        {
          'bg-white': !isDarkMode,
          'dark:bg-gray-800': isDarkMode
        }
      )}>
        <h1 className="text-3xl font-bold text-center">Theme Switcher</h1>
        
        <div className="flex justify-center space-x-4">
          <Link href="/pages/dark-mode">
            <button className={clsx(
              "flex items-center px-4 py-2 rounded-md",
              isDarkMode ? "bg-primary text-white" : "border border-gray-300"
            )}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark Mode
            </button>
          </Link>
          
          <Link href="/pages/light-mode">
            <button className={clsx(
              "flex items-center px-4 py-2 rounded-md",
              !isDarkMode ? "bg-primary text-white" : "border border-gray-300"
            )}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light Mode
            </button>
          </Link>
        </div>
        
        <p className="text-center">Current theme: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </div>
  )
}