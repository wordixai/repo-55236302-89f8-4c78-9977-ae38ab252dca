import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <>
      <div className="shrink-0 bg-border h-[1px] w-full" />
      <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-mono font-semibold">
              <a target="_blank" href="https://og.indiehub.best/">
                Free Open Graph Generator
              </a>
            </div>
            <div>
              <Button variant="link" className="text-primary underline-offset-4 hover:underline">
                <a target="_blank" href="https://indiehub.best/">
                  🎉 IndieHub - best directory for indie makers
                </a>
              </Button>
              <Button variant="link" className="text-primary underline-offset-4 hover:underline">
                <a target="_blank" href="https://mkdirs.com/">
                  🔥 Mkdirs - best directory boilerplate
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden items-center gap-x-2 md:inline-flex">
            <Button variant="link" className="text-primary underline-offset-4 hover:underline">
              <a target="_blank" href="https://github.com/FadyMak/imgsrc-app">
                all credits to imgsrc-app
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer