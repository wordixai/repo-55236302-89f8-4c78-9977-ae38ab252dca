import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'

interface PreviewImageProps {
  template: string
  formData: {
    tag: string
    title: string
    logo: string
    image: string
  }
  gradient: string
  gradientDirection: string
  noise: number
}

const PreviewImage: React.FC<PreviewImageProps> = ({ formData }) => {
  return (
    <div className="overflow-hidden">
      <AspectRatio ratio={1200/630}>
        <div className="h-full w-full relative bg-gradient-to-tr from-gray-900 to-gray-600">
          <div className="absolute inset-0 bg-black/10" style={{ opacity: 0.15 }} />
          
          {/* Logo and tag */}
          <div className="absolute top-8 left-8 flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-gray-800">dir</span>
            </div>
            <div className="px-4 py-2 border border-white rounded-full">
              <span className="text-white text-sm">{formData.tag}</span>
            </div>
          </div>

          {/* Main content */}
          <div className="absolute left-8 bottom-20 max-w-lg">
            <h1 className="text-white text-4xl font-bold leading-tight mb-4">
              {formData.title}
            </h1>
          </div>

          {/* Side image placeholder */}
          <div 
            className="absolute right-8 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20"
          />
        </div>
      </AspectRatio>
    </div>
  )
}

export default PreviewImage