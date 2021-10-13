import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <header className={`header ${props.rootClassName} `}>
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="separator"></div>
        <nav className="nav">
          <Link href="/">
            <a className="link thqLink">{props.text}</a>
          </Link>
          <Link href="/about-us">
            <a className="link1 thqLink">{props.text1}</a>
          </Link>
          <span className="text">{props.text2}</span>
          <span className="text1">{props.text3}</span>
          <span className="text2">{props.text4}</span>
        </nav>
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </header>
      <style jsx>
        {`
          .header {
            width: 100%;
            height: 196px;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .image {
            height: 2rem;
          }
          .separator {
            width: 100%;
            height: 1px;
            margin-top: 24px;
            margin-bottom: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .link {
            margin-left: 0px;
            text-decoration: none;
          }
          .link1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .text {
            margin-left: 32px;
          }
          .text1 {
            margin-left: 32px;
          }
          .text2 {
            margin-left: 32px;
          }
          .icon {
            width: 16px;
            height: 16px;
            display: none;
          }

          @media (max-width: 991px) {
            .icon {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .separator {
              margin-top: 24px;
              margin-bottom: 24px;
            }
            .icon {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .header {
              padding: var(--dl-space-space-unit);
            }
            .separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav {
              display: none;
            }
            .icon {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text4: 'Blog',
  text1: 'About Us',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text3: 'Team',
  image_alt: 'logo',
  text: 'Home',
  text2: 'Pricing',
  rootClassName: '',
}

AppComponent.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text3: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
