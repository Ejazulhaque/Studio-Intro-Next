import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const ComponentProps = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>09 - Component Props - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="09 - Component Props - Studio Intro"
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
              text="You can overwrite texts, links and image sources for any component"
              heading1="Component Props"
            ></Heading>
            <div className="ul">
              <ListItem text='Right click on the card below (make sure you select both the image and the text group) and click "Make Component"'></ListItem>
              <Tip text="You can create and see your components in the Components folder (Ctrl/Cmd + 2)"></Tip>
              <ListItem text="Click on your component and duplicate it"></ListItem>
              <Tip text="To duplicate a component, you can also hit Ctrl/Cmd + D"></Tip>
              <ListItem text="In the right panel you will see the props that you can overwrite (they are created automatically)"></ListItem>
              <ListItem text="Now you can set different images and text on the two components"></ListItem>
              <ListItem text="To edit the component's structure double click on any component instance"></ListItem>
              <ListItem text="Manage the component's props from the Props panel in the top-right part of the canvas while in component edit mode"></ListItem>
            </div>
            <h2 className="text subheading">Give it a try</h2>
            <div className="container3">
              <div className="container4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                  className="image"
                />
                <div className="container5">
                  <h1>Title</h1>
                  <span>Description</span>
                </div>
              </div>
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
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .container3 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .container4 {
            width: 200px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
          }
          .image {
            width: 100%;
            object-fit: cover;
          }
          .container5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

export default ComponentProps
