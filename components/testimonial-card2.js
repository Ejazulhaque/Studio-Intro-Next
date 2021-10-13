import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard2 = (props) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="testimonial">
          <svg viewBox="0 0 1024 1024" className="icon">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="text">{props.quote}</span>
          <span className="text1">{props.name}</span>
        </div>
        <img
          alt={props.profile_alt}
          src={props.profile_src}
          className="image"
        />
      </div>
      <style jsx>
        {`
          .testimonial-card {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon {
            width: 48px;
            flex-shrink: 0;
            margin-bottom: 32px;
          }
          .text {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            margin-bottom: 32px;
          }
          .text1 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .image {
            width: 192px;
            height: 192px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          @media (max-width: 767px) {
            .testimonial-card {
              padding-left: 32px;
              padding-right: 32px;
            }
            .testimonial {
              margin-right: 32px;
            }
            .icon {
              height: 48px;
            }
          }
          @media (max-width: 479px) {
            .testimonial-card {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard2.defaultProps = {
  name: 'John Doe',
  rootClassName: '',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

TestimonialCard2.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  quote: PropTypes.string,
}

export default TestimonialCard2
