import React from 'react'
import Head from 'next/head'

import FeatureCard2 from '../components/feature-card2'
import GalleryCard3 from '../components/gallery-card3'
import TestimonialCard1 from '../components/testimonial-card1'

const GettingStarted = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>0 - Getting Started - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="0 - Getting Started - Studio Intro"
          />
          <meta
            property="og:description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/28aa9164-83d6-4a5c-90ea-6d478386530d/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
          />
        </Head>
        <header className="header">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="image"
          />
          <nav className="nav">
            <span>Home</span>
            <span className="text01">About Us</span>
            <span className="text02">Pricing</span>
            <span className="text03">Team</span>
            <span className="text04">Blog</span>
          </nav>
          <div className="btn-group">
            <button className="button">Login</button>
            <button className="button">Register</button>
          </div>
          <svg viewBox="0 0 1024 1024" className="icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </header>
        <div className="banner">
          <span className="text05">
            <span className="text06">Lorem ipsum dolor sit amet</span>
          </span>
          <h1 className="heading">Learn to keep it simple</h1>
          <span className="text07">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <button className="button2 button"> Button</button>
        </div>
        <div className="features">
          <h1 className="text14">All these impressive features</h1>
          <div className="container1">
            <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
          </div>
        </div>
        <div className="gallery">
          <h1 className="text15">Our portfolio</h1>
          <span className="text16">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="container2">
            <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3 rootClassName="rootClassName3"></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName7"
            ></GalleryCard3>
          </div>
          <div className="testimonial">
            <div className="container3">
              <h1 className="text23">
                <span>What theyâre saying</span>
                <br></br>
                <span></span>
              </h1>
              <span className="text26">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                  Integer in dignissim tortor.
                </span>
              </span>
              <div className="container4">
                <TestimonialCard1
                  picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName2"
                ></TestimonialCard1>
                <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
                <TestimonialCard1
                  picture_src="/playground_assets/img_20200124_151953-1000w.jpg"
                  rootClassName="rootClassName1"
                ></TestimonialCard1>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container5">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="image1"
            />
            <nav className="nav1">
              <span className="text28">About</span>
              <span className="text29">Features</span>
              <span className="text30">Pricing</span>
              <span className="text31">Team</span>
              <span className="text32">Blog</span>
            </nav>
          </div>
          <div className="separator"></div>
          <div className="container6">
            <span className="text33">
              Â© 2021 teleportHQ, All Rights Reserved.
            </span>
            <div className="icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="icon2">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .header {
            width: 100%;
            height: 105px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: #fdfde0;
          }
          .image {
            height: 2rem;
          }
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .text01 {
            margin-left: 32px;
          }
          .text02 {
            margin-left: 32px;
          }
          .text03 {
            margin-left: 32px;
          }
          .text04 {
            margin-left: 32px;
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .button {
            border-width: 0px;
            margin-right: 32px;
          }
          .icon {
            width: 16px;
            height: 16px;
            display: none;
          }
          .banner {
            width: 100%;
            height: 351px;
            display: flex;
            align-items: center;
            padding-top: 64px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 64px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .text05 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: 32px;
            letter-spacing: 2px;
          }
          .text06 {
            text-transform: uppercase;
          }
          .heading {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text07 {
            max-width: 1400px;
            text-align: center;
            margin-bottom: 32px;
          }
          .button2 {
            width: 81px;
            background-color: #fffbec;
          }
          .features {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            flex-direction: column;
            background-color: #fffbe9;
          }
          .text14 {
            font-size: 3rem;
            margin-bottom: 48px;
          }
          .container1 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr;
          }
          .gallery {
            width: 100%;
            height: 1587px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
            background-color: #ffffff;
          }
          .text15 {
            font-size: 3rem;
            text-align: center;
          }
          .text16 {
            color: var(--dl-color-gray-700);
            margin-top: 32px;
            text-align: center;
            padding-left: 48px;
            margin-bottom: 32px;
            padding-right: 48px;
          }
          .container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .testimonial {
            width: 100%;
            height: 669px;
            display: flex;
            margin-top: 0px;
            padding-top: 100px;
            margin-bottom: 0px;
            justify-content: center;
            background-color: #ffffff;
          }
          .container3 {
            width: 100%;
            height: 407px;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            margin-top: 50px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #fdfdfd;
          }
          .text23 {
            color: #0e0000;
          }
          .text26 {
            color: #000000;
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: 32px;
          }
          .container4 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer {
            width: 100%;
            height: 282px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 50px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 50px;
            justify-content: space-between;
          }
          .container5 {
            display: flex;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .image1 {
            height: 2rem;
            margin-bottom: 32px;
          }
          .nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .text28 {
            margin-left: 0px;
          }
          .text29 {
            margin-left: var(--dl-space-space-unit);
          }
          .text30 {
            margin-left: var(--dl-space-space-unit);
          }
          .text31 {
            margin-left: var(--dl-space-space-unit);
          }
          .text32 {
            margin-left: var(--dl-space-space-unit);
          }
          .separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: 32px;
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: 32px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .container6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon2 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon4 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon6 {
            width: 16px;
            height: 16px;
          }
          @media (max-width: 991px) {
            .nav {
              display: none;
            }
            .btn-group {
              display: none;
            }
            .icon {
              display: flex;
            }
            .text07 {
              width: 100%;
            }
            .text16 {
              text-align: center;
            }
            .container2 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .text23 {
              text-align: center;
            }
            .text26 {
              text-align: center;
            }
            .container4 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text07 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .container1 {
              grid-template-columns: 1fr;
            }
            .gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text16 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .container2 {
              grid-template-columns: 1fr 1fr;
            }
            .container3 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .image1 {
              margin-bottom: 24px;
            }
            .separator {
              margin-top: 24px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 24px;
            }
            .container6 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .text33 {
              margin-bottom: 24px;
            }
          }
          @media (max-width: 479px) {
            .header {
              padding: var(--dl-space-space-unit);
            }
            .banner {
              padding-top: 48px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 48px;
            }
            .features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .gallery {
              padding: var(--dl-space-space-unit);
            }
            .container2 {
              grid-template-columns: 1fr;
            }
            .container3 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .footer {
              padding: var(--dl-space-space-unit);
            }
            .separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .container6 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .text33 {
              text-align: center;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default GettingStarted
