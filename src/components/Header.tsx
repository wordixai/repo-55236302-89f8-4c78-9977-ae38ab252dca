import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div>
          <a href="https://og.indiehub.best/">
            <img 
              alt="Free Open Graph Generator Logo" 
              width="36" 
              height="36" 
              className="block dark:hidden" 
              src="/logo.png"
            />
            <img 
              alt="Free Open Graph Generator Logo" 
              width="36" 
              height="36" 
              className="hidden dark:block" 
              src="/logo.png"
            />
          </a>
        </div>
        <h1 className="text font-semibold">Free Open Graph Generator</h1>
      </div>
      <div className="hidden space-x-2 sm:flex">
        <Button variant="link" className="text-primary underline-offset-4 hover:underline">
          <a target="_blank" href="https://indiehub.best/">🎉 IndieHub</a>
        </Button>
        <Button variant="link" className="text-primary underline-offset-4 hover:underline">
          <a target="_blank" href="https://mkdirs.com/">🔥 Mkdirs</a>
        </Button>
        <Button variant="link" className="flex items-center space-x-4 text-primary underline-offset-4 hover:underline">
          <a target="_blank" href="https://x.com/javay_hu">👨‍💻 @javay_hu</a>
        </Button>
        <Button variant="outline" size="icon">
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#ccc"/>
          </svg>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <div className="flex space-x-2 sm:hidden">
        <Button variant="outline" size="icon">
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#ccc"/>
          </svg>
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button variant="ghost" size="icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
            <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </Button>
      </div>
    </nav>
  )
}

export default Header