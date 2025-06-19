'use client'

import { useEffect, useRef } from 'react'

interface FullPageWrapperProps {
  children: React.ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  const fullpageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !fullpageRef.current) return

    let fpInstance: any = null

    const loadFullPage = async () => {
      try {
        const fullpage = (await import('fullpage.js')).default
        await import('fullpage.js/dist/fullpage.css')

        const options = {
          licenseKey: 'TX6L9-29OSK-PT1KK-2JSLI-JZLYM',
          credits: { enabled: false },
          normalScrollElements: '.section_page-content.is-fixed',
          scrollingSpeed: 700,
          navigation: true,
          navigationPosition: 'right',
          css3: true,
          scrollBar: true,
          autoScrolling: false,
          fitToSection: false,
          paddingTop: '0px',
          paddingBottom: '0px',
          responsiveWidth: 991,
          afterLoad: function(origin: any, destination: any, direction: string) {
            // Handle section load if needed
          }
        }

        fpInstance = new fullpage('#fullpage', options)
      } catch (error) {
        console.error('Error loading fullpage.js:', error)
      }
    }

    loadFullPage()

    return () => {
      if (fpInstance && fpInstance.destroy) {
        fpInstance.destroy('all')
      }
    }
  }, [])

  return (
    <div id="fullpage" ref={fullpageRef}>
      {children}
    </div>
  )
} 