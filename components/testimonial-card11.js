import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard11 = (props) => {
  return (
    <>
      <div className="testimonial-card">
        <svg viewBox="0 0 950.8571428571428 1024" className="icon">
          <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
        </svg>
        <div className="testimonial">
          <span className="text">{props.quote}</span>
          <span className="text1">{props.name}</span>
          <span className="text2">{props.role}</span>
          <img
            alt={props.picture_alt}
            src={props.picture_src}
            className="image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card {
            display: flex;
            padding: 32px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon {
            width: 2rem;
            margin-bottom: 32px;
          }
          .testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .text {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: 48px;
          }
          .text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text2 {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .image {
            width: 96px;
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          @media (max-width: 991px) {
            .text2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial-card {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .testimonial-card {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .icon {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              margin-bottom: 32px;
            }
            .text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard11.defaultProps = {
  picture_alt: 'profile',
  name: 'Jane Doe',
  rootClassName: '',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  role: 'SOFTWARE ENGINEER',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
}

TestimonialCard11.propTypes = {
  picture_alt: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_src: PropTypes.string,
  role: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard11
