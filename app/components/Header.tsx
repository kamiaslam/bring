'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="section_header">
      <div className="navbar_desktop">
        <div className="padding-global">
          <div className="container-large">
            <div className="header_component-wrapper">
              <div className="header_component">
                <Link 
                  aria-label="BRING Homepage" 
                  href="/" 
                  aria-current={pathname === '/' ? 'page' : undefined}
                  className={`header_logo-link w-inline-block ${pathname === '/' ? 'w--current' : ''}`}
                >
                  <div className="header-logo_icon-wrapper">
                    <div className="icon-embed-custom w-embed">
                      <div className="bring-logo">
                        <img
                          src="/Bring-logo.svg"
                          alt="BRING Logo"
                          style={{ height: '48px', width: 'auto', display: 'block', margin: '0 auto' }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <nav className="navbar">
                <div className="navbar_left">
                  <Link 
                    href="/" 
                    aria-current={pathname === '/' ? 'page' : undefined}
                    className={`navbar_item w-inline-block ${pathname === '/' ? 'w--current' : ''}`}
                  >
                    <div data-hover="Who We Are" className="navbar_item-label">Who We Are</div>
                  </Link>
                  <Link 
                    href="/what-we-do" 
                    aria-current={pathname === '/what-we-do' ? 'page' : undefined}
                    className={`navbar_item w-inline-block ${pathname === '/what-we-do' ? 'w--current' : ''}`}
                  >
                    <div data-hover="What We Do" className="navbar_item-label">What We Do</div>
                  </Link>
                  <Link 
                    href="/in-culture" 
                    aria-current={pathname === '/in-culture' ? 'page' : undefined}
                    className={`navbar_item w-inline-block ${pathname === '/in-culture' ? 'w--current' : ''}`}
                  >
                    <div data-hover="In culture" className="navbar_item-label">In culture</div>
                  </Link>
                </div>
                <div className="navbar_right">
                  <Link 
                    href="/reports" 
                    aria-current={pathname === '/reports' ? 'page' : undefined}
                    className={`navbar_item w-inline-block ${pathname === '/reports' ? 'w--current' : ''}`}
                  >
                    <div data-hover="Reports" className="navbar_item-label">Reports</div>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 