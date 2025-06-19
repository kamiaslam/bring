import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
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
                  <h1 className="heading-style-h1 text-align-center">Privacy Policy</h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-medium">
                    <p className="text-size-regular">Last updated: March 2025</p>
                    <div className="spacer-medium"></div>
                    
                    <h2 className="heading-style-h2">Introduction</h2>
                    <p className="text-size-regular">BRING ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                    
                    <div className="spacer-medium"></div>
                    <h2 className="heading-style-h2">Information We Collect</h2>
                    <p className="text-size-regular">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="text-size-regular">
                      <li>Fill out contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request information about our services</li>
                      <li>Engage with our website</li>
                    </ul>
                    
                    <div className="spacer-medium"></div>
                    <h2 className="heading-style-h2">How We Use Your Information</h2>
                    <p className="text-size-regular">We use the information we collect to:</p>
                    <ul className="text-size-regular">
                      <li>Provide and maintain our services</li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Send you newsletters and updates</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    
                    <div className="spacer-medium"></div>
                    <h2 className="heading-style-h2">Contact Us</h2>
                    <p className="text-size-regular">If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p className="text-size-regular">Email: beautifulbusiness@bringagency.com</p>
                    <p className="text-size-regular">Address: 33-35 St John's Square, London, EC1M 4DS</p>
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