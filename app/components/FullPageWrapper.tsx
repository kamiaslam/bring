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
        // Import both the module and its types
        const fullpageModule = await import('@fullpage/react-fullpage')
        const fullpage = fullpageModule.default

        const licenseKey = 'TX6L9-29OSK-PT1KK-2JSLI-JZLYM'

        const fpInstance = new fullpage('#fullpage', {
          credits: {
            enabled: false
          },
          normalScrollElements: '.section_page-content.is-fixed, .section_footer',
          licenseKey,
          scrollBar: true,
          scrollOverflow: false,
          bigSectionsDestination: 'top',
          scrollingSpeed: 2000,
          onLeave: function(origin: any, destination: any, direction: string) {
            // Handle video player controls
            const iframe = document.querySelector('iframe')
            if (iframe) {
              if (destination.index === 4 && direction === 'down') {
                // Play video
              }
              if (destination.index === 5 && direction === 'down') {
                // Pause video
              }
              if (destination.index === 4 && direction === 'up') {
                // Play video
              }
              if (destination.index === 3 && direction === 'up') {
                // Pause video
              }
            }
          },
        })

        return () => {
          if (fpInstance && typeof fpInstance.destroy === 'function') {
            fpInstance.destroy('all')
          }
        }
      } catch (error) {
        console.error('Failed to load FullPage.js:', error)
      }
    }

    loadFullPage()
  }, [])

  return (
    <div id="fullpage" ref={fullpageRef} className="main-wrapper">
      {children}
    </div>
  )
} 