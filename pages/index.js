import React from 'react'
import Head from 'next/head'

import AppComponent from '../components/component'
import FeatureCard3 from '../components/feature-card3'
import GalleryCard2 from '../components/gallery-card2'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import BlogPostCard4 from '../components/blog-post-card4'
import Component1 from '../components/component1'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta property="og:title" content="Studio Intro" />
          <meta
            property="og:description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/28aa9164-83d6-4a5c-90ea-6d478386530d/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
          />
        </Head>
        <AppComponent></AppComponent>
        <div className="hero">
          <div className="container01">
            <h1 className="text">Magnificent things are very simple</h1>
            <span className="text01">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
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
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
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
            <div className="btn-group">
              <button className="button">Get Started</button>
              <button className="button1 button">Learn More</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
            className="image"
          />
        </div>
        <div className="features">
          <h1 className="text08">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="text11">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
              pellentesque nulla leo, sagittis vehicula sem commodo nec.â
            </span>
            <span></span>
          </span>
          <div className="container02">
            <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
            <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
          </div>
        </div>
        <div className="gallery">
          <div className="container03">
            <div className="container04">
              <div className="container05">
                <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
              </div>
              <div className="container06">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="container07">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="container08">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <div className="testimonial">
          <div className="container09">
            <div className="container10">
              <div className="container11">
                <TestimonialCard2
                  profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                ></TestimonialCard2>
              </div>
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard2>
            </div>
            <div className="container12">
              <TestimonialCard4
                picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard4>
            </div>
          </div>
        </div>
        <div className="blog">
          <BlogPostCard4
            label="Business &amp; Travel"
            rootClassName="rootClassName1"
          ></BlogPostCard4>
          <div className="container13">
            <BlogPostCard4
              label="Nature"
              image_src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHRyYXZlbHxlbnwwfHx8fDE2MjY0MzI2Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></BlogPostCard4>
            <BlogPostCard4
              image_src="https://images.unsplash.com/photo-1446822775955-c34f483b410b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cmF2ZWwlMjBmb29kfGVufDB8fHx8MTYyNjQ1Mjg0Ng&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName3"
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
            image_src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJvYXR8ZW58MHx8fHwxNjI2NDUyODIx&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName4"
          ></BlogPostCard4>
        </div>
        <div className="steps">
          <h1 className="text14">
            <span>Discover Our Process</span>
          </h1>
          <span className="text16">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <br></br>
            <span></span>
          </span>
          <div className="container14">
            <div className="step">
              <div className="container15">
                <div className="line"></div>
                <div className="container16">
                  <svg viewBox="0 0 1024 1024" className="icon">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="line1"></div>
              </div>
              <div className="container17">
                <h1 className="text19">
                  <span>Ideate</span>
                </h1>
                <span className="text21">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="step1">
              <div className="container18">
                <div className="line2"></div>
                <div className="container19">
                  <svg viewBox="0 0 1024 1024" className="icon2">
                    <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                  </svg>
                </div>
                <div className="line3"></div>
              </div>
              <div className="container20">
                <h1 className="text24">
                  <span>Design</span>
                </h1>
                <span className="text26">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="step2">
              <div className="container21">
                <div className="line4"></div>
                <div className="container22">
                  <svg viewBox="0 0 1024 1024" className="icon4">
                    <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                    <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                  </svg>
                </div>
                <div className="line5"></div>
              </div>
              <div className="container23">
                <h1 className="text29">
                  <span>Develop</span>
                </h1>
                <span className="text31">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="step3">
              <div className="container24">
                <div className="line6"></div>
                <div className="container25">
                  <svg viewBox="0 0 1024 1024" className="icon7">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                  </svg>
                </div>
                <div className="line7"></div>
              </div>
              <div className="container26">
                <h1 className="text34">
                  <span>Deploy</span>
                </h1>
                <span className="text36">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Component1></Component1>
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
          }
          .hero {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container01 {
            display: flex;
            margin-right: 48px;
            padding-right: 48px;
            flex-direction: column;
          }
          .text {
            font-size: 3rem;
            max-width: 450px;
          }
          .text01 {
            margin-top: 32px;
            margin-bottom: 32px;
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .button:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .button1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .image {
            width: 400px;
            object-fit: cover;
          }
          .features {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .text08 {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .text11 {
            color: var(--dl-color-gray-700);
            width: 70%;
            font-size: 1.15rem;
            text-align: center;
          }
          .container02 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            margin-top: 64px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
          }
          .container03 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container04 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .container05 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container07 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .container08 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .container09 {
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: stretch;
            justify-content: space-between;
          }
          .container10 {
            flex: 2;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container11 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container12 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .container13 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 32px;
            margin-right: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steps {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
          }
          .text14 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
          }
          .text16 {
            color: var(--dl-color-gray-700);
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .step {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container16 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .icon {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container17 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .text19 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text21 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .step1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container19 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .icon2 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container20 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .text24 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text26 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .step2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container21 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container22 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .icon4 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container23 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .text29 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text31 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          .step3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container24 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container25 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .icon7 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .container26 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .text34 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text36 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: center;
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column;
            }
            .container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
              padding-right: 0px;
            }
            .text {
              text-align: center;
            }
            .text01 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .text08 {
              text-align: center;
            }
            .text11 {
              text-align: center;
            }
            .container02 {
              grid-template-columns: 1fr 1fr;
            }
            .container08 {
              width: 100%;
            }
            .container09 {
              flex-direction: column;
            }
            .container10 {
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .text14 {
              text-align: center;
            }
            .text16 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .image {
              width: 80%;
            }
            .features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .text08 {
              text-align: center;
            }
            .gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .container04 {
              flex-direction: column;
            }
            .container09 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .blog {
              padding-left: 32px;
              padding-right: 32px;
              flex-direction: column;
            }
            .container13 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .steps {
              padding-left: 32px;
              padding-right: 32px;
            }
            .container14 {
              align-items: flex-start;
              padding-left: 80px;
              flex-direction: column;
            }
            .step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .container15 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .container17 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .text19 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text21 {
              text-align: left;
            }
            .step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .container18 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .container20 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .text24 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text26 {
              text-align: left;
            }
            .step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .container21 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .container23 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .text29 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text31 {
              text-align: left;
            }
            .step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .container24 {
              width: 48px;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .container26 {
              width: 100%;
              align-items: flex-start;
              padding-top: 32px;
              flex-direction: column;
              padding-bottom: 32px;
              justify-content: space-between;
            }
            .text34 {
              margin-top: 32px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text36 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .btn-group {
              flex-direction: column;
            }
            .button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container02 {
              grid-template-columns: 1fr;
            }
            .gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .container03 {
              width: auto;
            }
            .container09 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .steps {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container14 {
              padding-left: 0px;
            }
            .container17 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .text19 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .container20 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .text24 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .container23 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .text29 {
              margin-left: 0px;
              margin-right: 32px;
            }
            .container26 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 32px;
            }
            .text34 {
              margin-left: 0px;
              margin-right: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
