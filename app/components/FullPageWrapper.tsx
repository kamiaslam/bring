'use client'

import { useEffect, useRef } from 'react'

interface FullPageWrapperProps {
  children: React.ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  const fullpageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !fullpageRef.current) return

    const loadFullPage = async () => {
      try {
        const fullpage = (await import('fullpage.js')).default
        await import('fullpage.js/dist/fullpage.css')

        const licenseKey = 'TX6L9-29OSK-PT1KK-2JSLI-JZLYM'

        const fpInstance = new fullpage('#fullpage', {
          credits: {
            enabled: false
          },
          normalScrollElements: '.section_page-content.is-fixed',
          licenseKey: licenseKey,
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
          onLeave: function(origin: any, destination: any, direction: any) {
            // Handle section leave if needed
          }
        })

        return () => {
          if (fpInstance && fpInstance.destroy) {
            fpInstance.destroy('all')
          }
        }
      } catch (error) {
        console.error('Error loading fullpage.js:', error)
      }
    }

    loadFullPage()
  }, [])

  return (
    <div id="fullpage" ref={fullpageRef}>
      {children}
    </div>
  )
} 