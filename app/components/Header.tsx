'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Who We Are' },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/in-culture', label: 'In culture' },
    { href: '/reports', label: 'Reports' },
  ]

  return (
    <header className="section_header">
      {/* Desktop Nav */}
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

      {/* Mobile Nav */}
      <div className="navbar_mobile">
        <div className="padding-global">
          <div className="container-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link 
              aria-label="BRING Homepage" 
              href="/" 
              className="header_logo-link w-inline-block"
              style={{ zIndex: 1001 }}
            >
              <div className="header-logo_icon-wrapper">
                <div className="icon-embed-custom w-embed">
                  <div className="bring-logo">
                    <img
                      src="/Bring-logo.svg"
                      alt="BRING Logo"
                      style={{ height: '40px', width: 'auto', display: 'block', margin: '0 auto' }}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <button
              className={`hamburger${mobileNavOpen ? ' open' : ''}`}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
        {/* Overlay menu */}
        {mobileNavOpen && (
          <nav
            id="mobile-menu"
            className="mobile-nav-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(255,255,255,0.98)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className={`mobile-nav-link${pathname === link.href ? ' active' : ''}`}
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  margin: '1.5rem 0',
                  color: '#000',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s',
                }}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
} 