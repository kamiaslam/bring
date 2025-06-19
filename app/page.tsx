import Header from './components/Header'
import Footer from './components/Footer'
import FullPageWrapper from './components/FullPageWrapper'

export default function Home() {
  return (
    <>
      <Header />
      
      <FullPageWrapper>
        <section id="section_1" className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container is-first">
                <div className="max-width-large">
                  <div className="spacer-header"></div>
                  <h1 className="heading-style-h1 text-align-center">We exist to create <em>beautiful business.</em></h1>
                  <div className="spacer-xlarge"></div>
                  <div className="max-width-small align-center">
                    <p className="heading-style-h2 text-align-center">When a business is desirable, culturally magnetic and a powerful force for good - that's beautiful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="section_2" className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container">
                <div className="max-width-small align-center">
                  <p className="heading-style-h2 text-align-center">Beautiful business brings together <span className="font-style-self-modern-italic">trust</span><span> </span>and <span className="font-style-self-modern-italic">desire</span> to create better businesses that people <span>believe in, and love</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="section_3" className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container">
                <div className="max-width-medium align-center">
                  <p className="heading-style-h2 text-align-center">Born out of retail, fashion and beauty, our business is built around <span>specialism</span> and category <span>expertise</span>. Our approach is an<span className="font-style-self-modern"> </span><span className="font-style-self-modern-italic">inch wide</span> and a <span className="font-style-self-modern-italic">mile deep</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="section_4" className="section_page-content section fp-auto-height-responsive">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container">
                <div className="max-width-large align-center">
                  <p className="heading-style-h2 text-align-center">We transform <span className="font-style-self-modern-italic">vision</span> into <span className="font-style-self-modern-italic">action</span> with behaviours that shape every corner of the brand's experience. Because every experience counts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="section_5" className="section_page-content section fp-auto-height-responsive is-video">
          <div className="padding-global">
            <div className="container-large">
              <div className="full-height-container">
                <div className="showreel_image-wrapper">
                  <div className="showreel_video-embed w-embed w-iframe">
                    <iframe 
                      loading="lazy" 
                      id="vimeo-player" 
                      style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                      src="https://player.vimeo.com/video/1007359295?h=4ebcc4a014&muted=1&controls=0&autoplay=1" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="autoplay; encrypted-media"
                    />
                  </div>
                  <div className="showreel_controls">
                    <div id="play-pause" className="showreel_button">
                      <div className="showreel_button-icon is-gray hide w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28.5069 22.335C30.4982 21.0454 30.4971 18.9539 28.5069 17.665L17.6055 10.6051C15.6142 9.3155 14 10.1552 14 12.4778V27.5223C14 29.8461 15.6153 30.6838 17.6055 29.395L28.5069 22.335Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="showreel_button-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6503 13.3987C17.5173 12.0474 16.5303 11 15.3333 11C14.0453 11 13 12.216 13 13.7146V27.2854L13.0163 27.6012C13.1493 28.9526 14.1363 30 15.3333 30C16.6213 30 17.6667 28.784 17.6667 27.2854V13.7146L17.6503 13.3987Z" fill="currentColor"/>
                          <path d="M26.9837 13.3987C26.8507 12.0474 25.8637 11 24.6667 11C23.3787 11 22.3333 12.216 22.3333 13.7146V27.2854L22.3497 27.6012C22.4827 28.9526 23.4697 30 24.6667 30C25.9547 30 27 28.784 27 27.2854V13.7146L26.9837 13.3987Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <div id="mute-unmute" className="showreel_button">
                      <div className="showreel_button-icon is-gray w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3037 26.9054L20.9379 30.4501C21.1989 30.7126 21.5354 30.8918 21.9028 30.9642C22.2703 31.0366 22.6517 30.9987 22.9967 30.8555C23.3404 30.7048 23.6314 30.4595 23.834 30.1496C24.0367 29.8398 24.142 29.4789 24.1372 29.1114V21.5695L16.2212 26.0569C16.6021 26.3145 16.9639 26.598 17.3037 26.9054ZM29.8011 13.4902C29.5981 13.1636 29.2727 12.9268 28.8939 12.8301C28.5151 12.7333 28.1125 12.7841 27.7714 12.9716L24.1372 14.9985V10.8788C24.1455 10.5105 24.0402 10.1483 23.8349 9.83909C23.6296 9.5299 23.3338 9.28799 22.9859 9.14473C22.638 9.00147 22.254 8.96346 21.8836 9.03563C21.5133 9.1078 21.1737 9.28682 20.9089 9.54948L17.2941 13.0848C16.4137 13.9364 15.3698 14.6104 14.2221 15.0682C13.0744 15.526 11.8455 15.7586 10.6056 15.7527C10.0929 15.7527 9.6012 15.9514 9.23868 16.305C8.87616 16.6586 8.67249 17.1382 8.67249 17.6382V22.3519C8.68906 22.7665 8.84534 23.1641 9.1171 23.4832L4.53569 26.0758C4.26535 26.29 4.0831 26.5919 4.02228 26.9264C3.96146 27.2609 4.02613 27.6056 4.20446 27.8974C4.3828 28.1892 4.66287 28.4087 4.99346 28.5156C5.32406 28.6225 5.68307 28.6098 6.00483 28.4798L13.0703 24.5014L24.1372 18.2981L29.2309 15.4699C29.4037 15.3785 29.556 15.2543 29.6787 15.1044C29.8014 14.9546 29.8921 14.7823 29.9452 14.5977C29.9984 14.413 30.0131 14.2199 29.9883 14.0297C29.9636 13.8394 29.8999 13.656 29.8011 13.4902Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="showreel_button-icon hide w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.9862 9.14457C22.633 9.00141 22.2442 8.9635 21.8689 9.03563C21.4935 9.10776 21.1486 9.28669 20.8776 9.54979L17.2408 13.0932C15.4888 14.8005 13.1124 15.7598 10.6345 15.7601C10.1214 15.7601 9.62934 15.9587 9.26655 16.3122C8.90376 16.6656 8.69995 17.145 8.69995 17.6449V22.3568C8.69995 22.8567 8.90376 23.3361 9.26655 23.6896C9.62934 24.043 10.1214 24.2416 10.6345 24.2416C11.8615 24.2412 13.0766 24.4766 14.2101 24.9342C15.3437 25.3919 16.3736 26.0628 17.2408 26.9085L20.8776 30.4519C21.1487 30.7145 21.4936 30.8929 21.8687 30.9647C22.2437 31.0364 22.6322 30.9983 22.9851 30.8552C23.338 30.712 23.6394 30.4702 23.8514 30.1603C24.0633 29.8503 24.1763 29.4862 24.176 29.1137V10.888C24.1768 10.5153 24.0642 10.1508 23.8524 9.84053C23.6406 9.53022 23.3392 9.28803 22.9862 9.14457ZM28.4415 15.1193C28.134 14.909 27.7548 14.8232 27.3836 14.8798C27.0124 14.9364 26.6782 15.1311 26.4514 15.4229C26.2246 15.7147 26.1228 16.0809 26.1675 16.4443C26.2121 16.8078 26.3997 17.1402 26.6908 17.3716C27.1109 17.6749 27.4522 18.0698 27.6874 18.5248C27.9226 18.9797 28.0451 19.482 28.0451 19.9914C28.0451 20.5008 27.9226 21.0031 27.6874 21.4581C27.4522 21.9131 27.1109 22.308 26.6908 22.6113C26.5312 22.7204 26.3959 22.8597 26.2928 23.0209C26.1897 23.1822 26.121 23.362 26.0909 23.5496C26.0607 23.7373 26.0697 23.9289 26.1172 24.1131C26.1648 24.2973 26.25 24.4703 26.3677 24.6217C26.4854 24.7732 26.6332 24.8999 26.8023 24.9944C26.9714 25.089 27.1583 25.1493 27.3519 25.1719C27.5454 25.1945 27.7417 25.1788 27.9289 25.1258C28.1161 25.0728 28.2905 24.9837 28.4415 24.8636C29.2201 24.2968 29.8523 23.5608 30.2878 22.7142C30.7232 21.8676 30.95 20.9337 30.95 19.9867C30.95 19.0398 30.7232 18.1059 30.2878 17.2592C29.8523 16.4126 29.2201 15.6767 28.4415 15.1099V15.1193Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FullPageWrapper>
      
      <Footer />
    </>
  )
} 