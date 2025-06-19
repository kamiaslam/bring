import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CanvasBackground from './components/CanvasBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bring-minto.vercel.app'),
  title: 'BRING - Beautiful Business',
  description: 'BRING is a creative agency that helps brands create beautiful business.',
  openGraph: {
    title: 'BRING',
  },
  twitter: {
    title: 'BRING',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/css/weareportas-2024.webflow.3c650eb36.min.css" rel="stylesheet" type="text/css"/>
        <link href="https://cdn.prod.website-files.com/6560d97507999a100386f1a6/6560d97507999a100386f1b3_Portas_Flavicon.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://cdn.prod.website-files.com/6560d97507999a100386f1a6/6560d97507999a100386f1ad_PortasLogo_Flavicon_256.png" rel="apple-touch-icon"/>
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WK3DP5TW');
            `,
          }}
        />
        
        {/* Cookie Consent */}
        <script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" data-fs-cc-mode="opt-in"></script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK3DP5TW"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        
        <div className="page-wrapper">
          <CanvasBackground />
          {children}
        </div>
      </body>
    </html>
  )
} 