import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const BuildingLayoutsCardAlignment = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>08 - Building Layouts - Card & Alignment - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="08 - Building Layouts - Card &amp; Alignment - Studio Intro"
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
              text="Card &amp; Alignment"
              heading1="Building Layouts"
            ></Heading>
            <h2 className="text subheading">Desired Outcome</h2>
            <div className="container3">
              <h1 className="text1">Heading</h1>
              <span className="text2">
                Lorem ipsum dolor sit amet, ut sed aeque virtute, stet congue
                legere id quo. Dicam virtute scribentur te usu, cum omnium
                eripuit copiosae ne. An nullam essent fastidii eos.
              </span>
              <div className="container4">
                <button className="button">No</button>
                <button className="button1 button">Yes</button>
              </div>
            </div>
            <div className="ul">
              <ListItem text="Add the elements you see above using keyboard shortcuts"></ListItem>
              <ListItem text="Change their position to the vertical axis by selecting the parent node and choosing Column in the Layout section "></ListItem>
              <ListItem text="To have the buttons on the same row, simply drag the second one to the right of the first"></ListItem>
              <ListItem text="Set margins on the first three elements"></ListItem>
              <Tip text="Try using the layout tokens we introduced earlier"></Tip>
            </div>
            <h2 className="text3 subheading">Give it a try</h2>
            <div className="div"></div>
            <div className="feedback">
              <span>
                <span>
                  How was it so far? Did you find it too easy or hard to follow?
                  We would love to hear your feedback. Write us at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="mailto:hello@teleporthq.io?subject="
                  className="thqLink"
                >
                  <span className="text6">hello@teleporthq.io</span>
                </a>
                <span className="text7"></span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
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
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .text1 {
            align-self: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text2 {
            text-align: left;
            margin-bottom: var(--dl-space-space-unit);
          }
          .container4 {
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .button1 {
            margin-left: var(--dl-space-space-unit);
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
          .div {
            width: 100%;
            height: 170px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-700);
            border-style: dashed;
            border-width: 2px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .feedback {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: center;
          }
          .text6 {
            font-style: normal;
            font-weight: 500;
          }
          .text7 {
            font-style: normal;
            font-weight: 500;
          }
        `}
      </style>
    </>
  )
}

export default BuildingLayoutsCardAlignment
