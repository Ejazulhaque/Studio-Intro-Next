import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const PositioningElements = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>02 - Positioning Elements - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="02 - Positioning Elements - Studio Intro"
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
        <div className="container1">
          <div className="container2">
            <Heading
              text="Let's see how we position elements in containers"
              heading1="Positioning Elements"
            ></Heading>
            <div className="ul">
              <ListItem text="Drag and drop a Heading (H) in the box below "></ListItem>
              <ListItem text="Try to place it in another area of the container and see what happens"></ListItem>
            </div>
            <div className="container3"></div>
            <div className="ul1">
              <ListItem text="You can place your elements to any of these nine points in your containers"></ListItem>
              <Tip text="This option is available only for containers with display flex for the moment"></Tip>
              <ListItem text="Not sure if it's the right position for your element? Just drag and drop it to another point!"></ListItem>
            </div>
          </div>
          <Navigation></Navigation>
        </div>
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
          .container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .container2 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ul {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .container3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 350px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ul1 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: 0;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default PositioningElements
