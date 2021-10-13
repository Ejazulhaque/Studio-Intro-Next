import React from 'react'
import Head from 'next/head'

import AppComponent from '../components/component'
import TestimonialCard11 from '../components/testimonial-card11'
import Component1 from '../components/component1'

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>About Us - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta property="og:title" content="About Us - Studio Intro" />
          <meta
            property="og:description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/28aa9164-83d6-4a5c-90ea-6d478386530d/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
          />
        </Head>
        <AppComponent rootClassName="rootClassName"></AppComponent>
        <div className="hero">
          <span className="text">
            <span className="text01">Lorem ipsum dolor sit amet</span>
          </span>
          <h1 className="text02">Magnificent things are very simple</h1>
          <button className="button">Get Started</button>
        </div>
        <div className="banner">
          <h1 className="text03">Our Mission</h1>
          <span className="text04">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum
                mi ut rhoncus. Integer in dignissim tortor. Sed non volutpat
                turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                ortor.
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
          <button className="button1 button">Read More</button>
        </div>
        <div className="testimonial">
          <div className="container1">
            <h1 className="text08">
              <span>What theyâre saying</span>
              <br></br>
              <span></span>
            </h1>
            <span className="text11">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
              </span>
            </span>
            <div className="container2">
              <TestimonialCard11
                picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard11>
              <TestimonialCard11 rootClassName="rootClassName"></TestimonialCard11>
              <TestimonialCard11
                picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard11>
            </div>
          </div>
        </div>
        <Component1 rootClassName="rootClassName"></Component1>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .hero {
            width: 100%;
            display: flex;
            padding: 48px;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .text {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          .text01 {
            text-transform: uppercase;
          }
          .text02 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 450px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .button:hover {
            transform: scale(1.02);
          }
          .banner {
            width: 100%;
            display: flex;
            padding: 48px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .text03 {
            font-size: 3rem;
            text-align: center;
          }
          .text04 {
            max-width: 1400px;
            margin-top: 32px;
            text-align: center;
            margin-bottom: 32px;
          }
          .button1 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .button1:hover {
            transform: scale(1.02);
          }
          .testimonial {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: 232323;
          }
          .container1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text08 {
            color: var(--dl-color-gray-white);
          }
          .text11 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: 32px;
          }
          .container2 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .text04 {
              max-width: 100%;
            }
            .text08 {
              text-align: center;
            }
            .text11 {
              text-align: center;
            }
            .container2 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .container1 {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .banner {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
