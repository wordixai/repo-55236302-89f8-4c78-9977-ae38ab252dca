import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'
import { Globe, Twitter, Download } from 'lucide-react'
import TemplateSelector from './TemplateSelector'
import GradientSelector from './GradientSelector'
import PreviewImage from './PreviewImage'

const MainContent = () => {
  const [formData, setFormData] = useState({
    tag: 'mkdirs.com',
    title: 'Launch profitable directory websites in minutes',
    logo: 'mkdirs-logo.png',
    image: 'mkdirs1.png'
  })

  const [selectedTemplate, setSelectedTemplate] = useState('og:image-right')
  const [selectedGradient, setSelectedGradient] = useState('[\"rgb(17, 24, 39)\",\"rgb(75, 85, 99)\"]')
  const [gradientDirection, setGradientDirection] = useState('to top right')
  const [noiseValue, setNoiseValue] = useState([0.15])

  return (
    <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="sr-only text-sm font-medium">Choose a template</h2>
            <div className="flex gap-2">
              <Button variant="secondary" className="bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80">
                <Globe className="mr-1 size-4" />
                Open Graph
              </Button>
              <Button variant="outline">
                <Twitter className="mr-1 size-4" />
                Twitter/X
              </Button>
            </div>
          </div>
          <TemplateSelector 
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>

        <div className="shrink-0 bg-border h-[1px] w-full" />

        <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
          <div className="order-last col-span-1 space-y-4 lg:order-first">
            <Card>
              <CardHeader>
                <CardTitle>Template Properties</CardTitle>
                <CardDescription>Customize your image by changing the properties.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="tag">Tag</Label>
                      <div className="flex space-x-2">
                        <Input 
                          id="tag" 
                          value={formData.tag}
                          onChange={(e) => setFormData({...formData, tag: e.target.value})}
                        />
                        <Button variant="outline" size="icon">
                          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="#ccc"/>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="title">Title</Label>
                      <div className="flex space-x-2">
                        <Input 
                          id="title" 
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                        />
                        <Button variant="outline" size="icon">
                          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="#ccc"/>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="logo">Logo</Label>
                      <Button variant="outline" className="justify-start space-x-1 overflow-hidden">
                        <span>File:</span>
                        <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                          {formData.logo}
                        </span>
                      </Button>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="image">Image</Label>
                      <Button variant="outline" className="justify-start space-x-1 overflow-hidden">
                        <span>File:</span>
                        <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                          {formData.image}
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Background</CardTitle>
                <CardDescription>Set a custom background for your image.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Tabs defaultValue="linear-gradient">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="linear-gradient">Gradient</TabsTrigger>
                      <TabsTrigger value="color">Solid Color</TabsTrigger>
                    </TabsList>
                    <TabsContent value="linear-gradient" className="space-y-4">
                      <GradientSelector 
                        selected={selectedGradient}
                        onSelect={setSelectedGradient}
                      />
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Gradient Direction</div>
                        <Card className="p-2">
                          <div className="grid grid-cols-8 gap-2">
                            {/* Gradient direction buttons */}
                            <div>
                              <Button variant="outline" size="sm" className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                  <path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                                </svg>
                              </Button>
                            </div>
                            <div>
                              <Button variant="outline" size="sm" className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-primary bg-popover p-2 hover:bg-accent hover:text-accent-foreground">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="grid gap-2 pt-2">
                  <div className="flex justify-between">
                    <div className="text-sm font-medium">Grid Overlay</div>
                    <Badge>New</Badge>
                  </div>
                  <Button variant="outline" className="justify-start">
                    Grid
                  </Button>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="noise">Noise</Label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        {noiseValue[0]}
                      </span>
                    </div>
                    <Slider
                      id="noise"
                      min={0}
                      max={1}
                      step={0.01}
                      value={noiseValue}
                      onValueChange={setNoiseValue}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-first lg:order-last lg:col-span-2">
            <div className="sticky top-0 grow-0 space-y-4">
              <Card className="col-span-2 px-2 md:px-4">
                <PreviewImage
                  template={selectedTemplate}
                  formData={formData}
                  gradient={selectedGradient}
                  gradientDirection={gradientDirection}
                  noise={noiseValue[0]}
                />
              </Card>
              <div className="grid gap-x-4 gap-y-4">
                <Tabs defaultValue="save" className="w-full">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="save">Save Image</TabsTrigger>
                    <TabsTrigger value="api">API Request</TabsTrigger>
                  </TabsList>
                  <TabsContent value="save">
                    <Card>
                      <CardHeader>
                        <CardTitle>Save Image</CardTitle>
                        <CardDescription>Export the image as a PNG.</CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center">
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100" height="100" fill="#ccc"/>
                            </svg>
                            <p className="text-sm">
                              <a className="text-primary underline" href="https://indiehub.best/blog/the-free-open-gragh-image-generator">
                                Learn more
                              </a>{' '}
                              about Open Graph meta tags.
                            </p>
                          </div>
                          <div className="flex items-center">
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100" height="100" fill="#ccc"/>
                            </svg>
                            <p className="text-sm">
                              <a className="text-primary underline" href="https://indiehub.best/blog/the-free-open-gragh-image-maker">
                                Mkdirs
                              </a>{' '}
                              - The best directory boilerplate.
                            </p>
                          </div>
                          <div className="flex items-center">
                            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                              <rect width="100" height="100" fill="#ccc"/>
                            </svg>
                            <p className="text-sm">
                              <a className="text-primary underline" href="https://indiehub.best/blog/the-free-open-gragh-image-maker">
                                IndieHub
                              </a>{' '}
                              - The best directory for indie makers.
                            </p>
                          </div>
                        </div>
                        <Button>
                          <Download className="mr-2 h-4 w-4" />
                          <span>Save Image</span>
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent