import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const SelectingElements = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>04 - Selecting Elements - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="04 - Selecting Elements - Studio Intro"
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
          <Heading
            text="There are multiple ways to select and group elements "
            heading1="Selecting Elements"
          ></Heading>
          <div className="ul">
            <ListItem text="You can select multiple items by holding Ctrl/Cmd or Shift and clicking the items"></ListItem>
            <ListItem text="Same thing can be achieved in the Tree View"></ListItem>
            <Tip text="The only difference is that in the Tree View pressing Shift + Click allows selecting all siblings between two elements"></Tip>
            <ListItem text="You can also mouse-select by dragging over the desired items and holding Ctrl/Cmd pressed "></ListItem>
            <Tip text="If you are not dragging over a container you don't need to press Cmd/Ctrl"></Tip>
            <ListItem text="If you want to become a pro go to the Keyboard Shortcuts - Control - Selection and see all the ways you can select elements"></ListItem>
            <Tip text="Open the Keyboard Shortcuts panel by pressing Ctrl + Shift + /"></Tip>
          </div>
          <div className="container2"></div>
        </div>
        <div className="container3">
          <h2 className="text subheading">Give it a try</h2>
          <span className="text1">And you can also select me</span>
          <div className="container4">
            <img
              src="https://play.teleporthq.io/static/img/default.png"
              className="image"
            />
            <h1 className="h1">Heading</h1>
            <span className="text2">Text</span>
            <span className="text3">Text</span>
            <span className="text4">Text</span>
          </div>
        </div>
        <h1 className="text5">Select me as well</h1>
        <div className="container5">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className="image1"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className="image2"
          />
        </div>
        <span className="text6">And you can also select me</span>
        <div className="container6">
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
            justify-content: space-between;
          }
          .container1 {
            width: 600px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .ul {
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .container2 {
            top: auto;
            left: 554px;
            right: auto;
            width: 332px;
            bottom: 0px;
            display: flex;
            position: absolute;
            align-self: flex-end;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .container4 {
            width: 600px;
            display: flex;
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
          .image {
            width: 100px;
            height: 100px;
            background-position: center;
          }
          .h1 {
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
          .text5 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .container5 {
            width: 600px;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .image1 {
            width: 200px;
            object-fit: cover;
          }
          .image2 {
            width: 200px;
            object-fit: cover;
          }
          .text6 {
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .container6 {
            width: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default SelectingElements
