'use client'

import { useEffect, useRef } from 'react'

interface FullPageWrapperProps {
  children: React.ReactNode
}

export default function FullPageWrapper({ children }: FullPageWrapperProps) {
  const fullpageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !fullpageRef.current) return

    let fpInstance: any = null;

    const loadFullPage = async () => {
      try {
        const fullpage = (await import('fullpage.js')).default
        await import('fullpage.js/dist/fullpage.css')

        const licenseKey = 'TX6L9-29OSK-PT1KK-2JSLI-JZLYM'

        fpInstance = new fullpage(fullpageRef.current, {
          credits: {
            enabled: false
          },
          normalScrollElements: '.section_page-content.is-fixed, .section_footer',
          licenseKey,
          scrollBar: true,
          scrollOverflow: false,
          bigSectionsDestination: 'top',
          scrollingSpeed: 2000,
          onLeave: function(index: any, nextIndex: any, direction: string) {
            // Handle video player controls
            const iframe = document.querySelector('iframe')
            if (iframe) {
              if (nextIndex.index == 4 && direction == 'down') {
                // Play video
              }
              if (nextIndex.index == 5 && direction == 'down') {
                // Pause video
              }
              if (nextIndex.index == 4 && direction == 'up') {
                // Play video
              }
              if (nextIndex.index == 3 && direction == 'up') {
                // Pause video
              }
            }
          },
        })
      } catch (error) {
        console.error('Failed to load FullPage.js:', error)
      }
    }

    loadFullPage()

    return () => {
      if (fpInstance && typeof fpInstance.destroy === 'function') {
        fpInstance.destroy('all')
      }
    }
  }, [])

  return (
    <div ref={fullpageRef} className="main-wrapper">
      {children}
    </div>
  )
} 