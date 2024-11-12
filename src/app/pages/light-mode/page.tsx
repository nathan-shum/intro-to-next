'use client'

import Link from 'next/link'
import { MoonIcon, SunIcon } from "lucide-react"
import clsx from 'clsx'

export default function LightMode() {
  return (
    <div className={clsx(
      'min-h-screen flex flex-col items-center justify-center p-4',
      'bg-background text-foreground'
    )}>
      <div className={clsx(
        'w-full max-w-md space-y-8 p-8 rounded-lg shadow-lg',
        'bg-white'
      )}>
        <h1 className="text-3xl font-bold text-center">Light Mode Example</h1>
        
        <p className="text-center">This is an example of a page in light mode.</p>
        
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <button className="flex items-center px-4 py-2 rounded-md border border-gray-300">
              <SunIcon className="mr-2 h-4 w-4" />
              Home
            </button>
          </Link>
          
          <Link href="/pages/dark-mode">
            <button className="flex items-center px-4 py-2 rounded-md border border-gray-300">
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark Mode
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}