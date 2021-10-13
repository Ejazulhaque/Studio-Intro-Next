import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <footer className={`footer ${props.rootClassName} `}>
        <div className="container">
          <img alt={props.image_alt} src={props.image_src} className="image" />
          <nav className="nav">
            <span className="text">{props.text1}</span>
            <span className="text1">{props.text2}</span>
            <span className="text2">{props.text3}</span>
            <span className="text3">{props.text4}</span>
            <span className="text4">{props.text5}</span>
          </nav>
        </div>
        <div className="separator"></div>
        <div className="container1">
          <span className="text5">{props.text}</span>
          <div className="icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="icon">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="icon2">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="icon4">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .container {
            display: flex;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .image {
            height: 2rem;
            margin-bottom: 32px;
          }
          .nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .text {
            margin-left: 0px;
          }
          .text1 {
            margin-left: var(--dl-space-space-unit);
          }
          .text2 {
            margin-left: var(--dl-space-space-unit);
          }
          .text3 {
            margin-left: var(--dl-space-space-unit);
          }
          .text4 {
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
          .container1 {
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
          .icon {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon2 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .icon4 {
            width: 16px;
            height: 16px;
          }

          @media (max-width: 767px) {
            .footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .image {
              margin-bottom: 24px;
            }
            .separator {
              margin-top: 24px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 24px;
            }
            .container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .text5 {
              margin-bottom: 24px;
            }
          }
          @media (max-width: 479px) {
            .footer {
              padding: var(--dl-space-space-unit);
            }
            .separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .text5 {
              text-align: center;
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  text3: 'Pricing',
  text1: 'About',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text: 'Â© 2021 teleportHQ, All Rights Reserved.',
  rootClassName: '',
  image_alt: 'logo',
  text5: 'Blog',
  text2: 'Features',
  text4: 'Team',
}

Component1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Component1
