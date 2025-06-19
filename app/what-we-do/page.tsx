import Header from '../components/Header'
import Footer from '../components/Footer'

export default function WhatWeDo() {
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
                  <h1 className="heading-style-h1 text-align-center">What We Do</h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-small align-center">
                    <p className="heading-style-h2 text-align-center">We create beautiful business through strategic brand consultancy, transforming vision into action with behaviours that shape every corner of the brand's experience.</p>
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
                <div className="max-width-medium align-center">
                  <h2 className="heading-style-h2 text-align-center">Our Services</h2>
                  <div className="spacer-medium"></div>
                  <div className="w-layout-grid grid-3-columns">
                    <div className="service-item">
                      <h3 className="heading-style-h3">Brand Strategy</h3>
                      <p className="text-size-regular">We develop comprehensive brand strategies that align with your business objectives and resonate with your target audience.</p>
                    </div>
                    <div className="service-item">
                      <h3 className="heading-style-h3">Retail & Fashion</h3>
                      <p className="text-size-regular">Specialized expertise in retail and fashion industries, helping brands create compelling customer experiences.</p>
                    </div>
                    <div className="service-item">
                      <h3 className="heading-style-h3">Cultural Impact</h3>
                      <p className="text-size-regular">We help brands become culturally magnetic and powerful forces for good in their communities.</p>
                    </div>
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
                <div className="max-width-large align-center">
                  <h2 className="heading-style-h2 text-align-center">Our Approach</h2>
                  <div className="spacer-medium"></div>
                  <p className="heading-style-h3 text-align-center">We believe in an <span className="font-style-self-modern-italic">inch wide</span> and a <span className="font-style-self-modern-italic">mile deep</span> approach, focusing on specialism and category expertise to deliver exceptional results.</p>
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