import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Card } from './ui/card'

interface GradientSelectorProps {
  selected: string
  onSelect: (value: string) => void
}

const gradients = [
  {
    id: '["rgb(236, 72, 153)","rgb(239, 68, 68)","rgb(234, 179, 8)"]',
    style: 'linear-gradient(to top right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))'
  },
  {
    id: '["rgb(202, 138, 4)","rgb(220, 38, 38)"]',
    style: 'linear-gradient(to top right, rgb(202, 138, 4), rgb(220, 38, 38))'
  },
  {
    id: '["rgb(244, 63, 94)","rgb(248, 113, 113)","rgb(239, 68, 68)"]',
    style: 'linear-gradient(to top right, rgb(244, 63, 94), rgb(248, 113, 113), rgb(239, 68, 68))'
  },
  {
    id: '["rgb(17, 24, 39)","rgb(75, 85, 99)"]',
    style: 'linear-gradient(to top right, rgb(17, 24, 39), rgb(75, 85, 99))'
  }
]

const GradientSelector: React.FC<GradientSelectorProps> = ({ selected, onSelect }) => {
  return (
    <Card className="p-2">
      <RadioGroup value={selected} onValueChange={onSelect} className="grid gap-2">
        <div className="flex flex-wrap gap-1">
          {gradients.map((gradient) => (
            <div key={gradient.id} className="size-9 min-h-9 min-w-9">
              <RadioGroupItem 
                value={gradient.id} 
                id={gradient.id} 
                className="peer sr-only"
              />
              <Label 
                htmlFor={gradient.id}
                className="block aspect-square cursor-pointer rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                style={{ background: gradient.style }}
              />
            </div>
          ))}
        </div>
      </RadioGroup>
    </Card>
  )
}

export default GradientSelector