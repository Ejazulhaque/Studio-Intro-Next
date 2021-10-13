import React from 'react'

import PropTypes from 'prop-types'

const Heading = (props) => {
  return (
    <>
      <div className="container">
        <img alt="image" src="/playground_assets/logo.svg" className="image" />
        <h1 className="text heading">{props.heading1}</h1>
        <span className="text1 subheading">{props.text}</span>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            max-width: 600px;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .image {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text {
            width: 100%;
            text-align: left;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            text-align: left;
          }
        `}
      </style>
    </>
  )
}

Heading.defaultProps = {
  heading1: 'Heading',
  text: 'Letâs walk through this tutorial together to get you ready for building your next projects',
}

Heading.propTypes = {
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Heading
