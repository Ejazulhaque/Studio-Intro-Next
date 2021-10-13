import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const PositioningMultipleElements = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>03 - Positioning Multiple Elements - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="03 - Positioning Multiple Elements - Studio Intro"
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
              text=" "
              heading1="Positioning Multiple Elements"
            ></Heading>
            <h2 className="text subheading">Desired Outcome</h2>
            <div className="container3">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/img/default.png"
                className="image"
              />
              <div className="container4">
                <h1>Heading</h1>
                <span>Text</span>
              </div>
            </div>
            <div className="ul">
              <ListItem text="Add an Image (I) in the container below"></ListItem>
              <ListItem text="Drag and drop a Heading (H) next to the image"></ListItem>
              <ListItem text="Drag and drop a Text (T) element below the Heading"></ListItem>
              <ListItem text="See what happens!"></ListItem>
            </div>
            <h2 className="text3 subheading">Give it a try</h2>
            <div className="container5"></div>
            <div className="ul1">
              <ListItem text="We automatically group elements in containers when needed"></ListItem>
              <div className="container6">
                <ListItem text="Check the Tree View to get a better overview of your page's structure"></ListItem>
              </div>
              <Tip text="Open the Files &amp; Tree View panel by pressing Ctrl/Cmd + 3"></Tip>
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
          .text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .container3 {
            width: 500px;
            height: 150;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 100px;
            height: 90px;
            object-fit: cover;
          }
          .container4 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ul {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text3 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .container5 {
            width: 500px;
            height: 150;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: center;
          }
          .ul1 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .container6 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default PositioningMultipleElements
