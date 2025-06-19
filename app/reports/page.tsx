import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Reports() {
  return (
    <>
      <Header />
      
      <main className="main-wrapper">
        <section className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container is-first">
                <div className="max-width-large">
                  <div className="spacer-header"></div>
                  <h1 className="heading-style-h1 text-align-center">Reports</h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-small align-center">
                    <p className="heading-style-h2 text-align-center">Insights and research from BRING on the future of business, retail, and culture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container">
                <div className="max-width-large">
                  <div className="w-layout-grid grid-3-columns">
                    <Link href="/reports/how-to-do-loyalty" className="report-item w-inline-block">
                      <div className="report-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="How to Do Loyalty Report" className="report-image"/>
                      </div>
                      <h3 className="heading-style-h3">How to Do Loyalty</h3>
                      <p className="text-size-regular">A comprehensive guide to building lasting customer relationships in the modern retail landscape.</p>
                    </Link>
                    
                    <Link href="/reports/the-high-street-report" className="report-item w-inline-block">
                      <div className="report-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="The High Street Report" className="report-image"/>
                      </div>
                      <h3 className="heading-style-h3">The High Street Report</h3>
                      <p className="text-size-regular">Analysis of the evolving high street and strategies for retail success in changing times.</p>
                    </Link>
                    
                    <Link href="/reports/trust-transparency" className="report-item w-inline-block">
                      <div className="report-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Trust & Transparency Report" className="report-image"/>
                      </div>
                      <h3 className="heading-style-h3">Trust & Transparency</h3>
                      <p className="text-size-regular">Building trust through transparency in business practices and customer relationships.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 