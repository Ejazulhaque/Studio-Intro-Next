import React from 'react'

import Previous from './previous'
import Next from './next'

const Navigation = () => {
  return (
    <>
      <div className="container">
        <Previous rootClassName="rootClassName1"></Previous>
        <Next></Next>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
