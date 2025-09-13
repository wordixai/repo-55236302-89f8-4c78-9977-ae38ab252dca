import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

interface TemplateSelectorProps {
  selected: string
  onSelect: (value: string) => void
}

const templates = [
  {
    id: 'og:image-right',
    name: 'Image Right',
    preview: (
      <div className="h-full w-full">
        <div className="bg-primary/10 mt-2 h-3 w-3 rounded-full"></div>
        <div className="flex aspect-video h-full w-full justify-center space-x-2 md:space-x-4">
          <div className="flex h-full w-1/2 flex-col space-y-2 pt-2 md:pt-4">
            <div className="rounded-md bg-primary/10 h-1 w-1/3 md:h-2"></div>
            <div className="rounded-md bg-primary/10 h-2 w-full md:h-4"></div>
          </div>
          <div className="rounded-md bg-primary/10 flex h-2/3 w-1/2"></div>
        </div>
      </div>
    )
  },
  {
    id: 'og:hero',
    name: 'Hero',
    preview: (
      <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1">
        <div className="rounded-md bg-primary/10 min-h-1 w-1/6 md:min-h-2"></div>
        <div className="rounded-md bg-primary/10 min-h-2 w-1/2 md:min-h-3"></div>
        <div className="rounded-md bg-primary/10 min-h-8 w-3/4 md:h-16"></div>
      </div>
    )
  },
  {
    id: 'og:logos',
    name: 'Logos',
    preview: (
      <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1 md:space-y-2">
        <div className="rounded-md bg-primary/10 h-1 w-1/6 md:h-2"></div>
        <div className="rounded-md bg-primary/10 h-2 w-1/2 md:h-4"></div>
        <div className="flex space-x-2">
          <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
          <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
          <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
        </div>
      </div>
    )
  },
  {
    id: 'og:basic',
    name: 'Basic',
    preview: (
      <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
        <div className="bg-primary/10 h-4 w-4 rounded-full md:h-8 md:w-8"></div>
        <div className="rounded-md bg-primary/10 mt-2 h-3 w-1/2 md:mt-3 md:h-4"></div>
        <div className="rounded-md bg-primary/10 mt-1 h-2 w-3/4 md:mt-2 md:h-3"></div>
      </div>
    )
  },
  {
    id: 'og:notice',
    name: 'Notice',
    preview: (
      <div className="flex aspect-video h-full w-full items-center justify-center space-x-2 md:space-x-4">
        <div className="bg-primary/10 h-6 w-6 shrink-0 rounded-md md:h-10 md:w-10"></div>
        <div className="w-1/4">
          <div className="rounded-md bg-primary/10 h-2 w-full md:h-3"></div>
          <div className="rounded-md bg-primary/10 mt-1 h-1 w-full md:mt-2 md:h-2"></div>
        </div>
      </div>
    )
  }
]

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="relative">
      <RadioGroup value={selected} onValueChange={onSelect} className="grid gap-2">
        <div className="overflow-hidden">
          <div className="flex -ml-4">
            {templates.map((template) => (
              <div key={template.id} className="min-w-0 shrink-0 grow-0 pl-4 basis-40 md:basis-64 lg:basis-1/5">
                <RadioGroupItem 
                  value={template.id} 
                  id={template.id} 
                  className="peer sr-only"
                />
                <Label 
                  htmlFor={template.id}
                  className="flex aspect-video max-h-24 items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:max-h-32 [&:has([data-state=checked])]:border-primary"
                >
                  {template.preview}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </RadioGroup>
      <Button 
        variant="secondary" 
        size="icon" 
        className="absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2 lg:hidden" 
        disabled
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button 
        variant="secondary" 
        size="icon" 
        className="absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2 lg:hidden" 
        disabled
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

export default TemplateSelector