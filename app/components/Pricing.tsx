import React from 'react'
import SocialLinks from './SocialLinks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Pricing = () => {
  return (
    <section id="pricing" className="w-full md:h-screen py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-muted">
      <div className="px-7 md:px-16 flex flex-col items-center gap-5">
        <h1 className='heading-text relative z-10'>Pricing
            <div className='absolute left-0 bottom-0 w-full h-1/3 bg-text-underline -z-10'></div>
        </h1>
        <div className="mt-12 max-w-lg mx-auto">
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Free Forever!</CardTitle>
            <CardDescription className="text-center">No hidden fees, no catch</CardDescription>
          </CardHeader>
          <CardContent className="text-center flex flex-col items-center gap-4">
            <p className="text-4xl font-extrabold">$0</p>
            <p className="text-muted-foreground">
              While SubEase is completely free, your suggestions and ideas are the real fuel that helps us improve. If you have any feedback or features you'd like to see, we'd love to hear from you!
            </p>
            <SocialLinks className='w-8 h-8' />
          </CardContent>
        </Card>
      </div>
        
      </div>
    </section>
  )
}

export default Pricing