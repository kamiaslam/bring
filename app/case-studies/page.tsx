import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function CaseStudies() {
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
                  <h1 className="heading-style-h1 text-align-center">Case Studies</h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-small align-center">
                    <p className="heading-style-h2 text-align-center">Discover how we've helped brands create beautiful business through strategic transformation.</p>
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
                    <Link href="/case-studies/churchs" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Church's Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Church's</h3>
                      <p className="text-size-regular">Revitalizing a heritage brand for the modern consumer.</p>
                    </Link>
                    
                    <Link href="/case-studies/endura" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Endura Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Endura</h3>
                      <p className="text-size-regular">Building a sustainable cycling brand for the future.</p>
                    </Link>
                    
                    <Link href="/case-studies/farrow-ball" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Farrow & Ball Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Farrow & Ball</h3>
                      <p className="text-size-regular">Elevating a premium paint brand's market position.</p>
                    </Link>
                    
                    <Link href="/case-studies/marys-living-giving" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Mary's Living & Giving Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Mary's Living & Giving</h3>
                      <p className="text-size-regular">Creating a sustainable retail concept with purpose.</p>
                    </Link>
                    
                    <Link href="/case-studies/molton-brown" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Molton Brown Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Molton Brown</h3>
                      <p className="text-size-regular">Transforming a luxury beauty brand's global presence.</p>
                    </Link>
                    
                    <Link href="/case-studies/westfield" className="case-study-item w-inline-block">
                      <div className="case-study-image-wrapper">
                        <img src="https://cdn.prod.website-files.com/66d74807dfbcdfb33c6f9069/66d74807dfbcdfb33c6f9095_certified-b-corp.svg" loading="lazy" alt="Westfield Case Study" className="case-study-image"/>
                      </div>
                      <h3 className="heading-style-h3">Westfield</h3>
                      <p className="text-size-regular">Redefining the shopping center experience for the digital age.</p>
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