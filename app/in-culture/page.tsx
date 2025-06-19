import Header from '../components/Header'
import Footer from '../components/Footer'

export default function InCulture() {
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
                  <h1 className="heading-style-h1 text-align-center">In Culture</h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-small align-center">
                    <p className="heading-style-h2 text-align-center">We help brands become culturally magnetic and powerful forces for good in their communities.</p>
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
                  <h2 className="heading-style-h2 text-align-center">Cultural Impact</h2>
                  <div className="spacer-medium"></div>
                  <p className="heading-style-h3 text-align-center">Beautiful business brings together <span className="font-style-self-modern-italic">trust</span> and <span className="font-style-self-modern-italic">desire</span> to create better businesses that people <span>believe in, and love</span>.</p>
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
                  <h2 className="heading-style-h2 text-align-center">Our Cultural Approach</h2>
                  <div className="spacer-medium"></div>
                  <div className="w-layout-grid grid-2-columns">
                    <div className="culture-item">
                      <h3 className="heading-style-h3">Community Engagement</h3>
                      <p className="text-size-regular">We help brands connect authentically with their communities, creating meaningful relationships that go beyond transactions.</p>
                    </div>
                    <div className="culture-item">
                      <h3 className="heading-style-h3">Social Responsibility</h3>
                      <p className="text-size-regular">We guide brands in becoming powerful forces for good, making positive impacts in society and the environment.</p>
                    </div>
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