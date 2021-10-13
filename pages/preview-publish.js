import React from 'react'
import Head from 'next/head'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'

const PreviewPublish = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>10 - Preview & Publish - Studio Intro</title>
          <meta
            name="description"
            content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
          />
          <meta
            property="og:title"
            content="10 - Preview &amp; Publish - Studio Intro"
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
              text="Preview your project before you publish to see the final result"
              heading1="Preview &amp; Publish"
            ></Heading>
            <div className="container3">
              <div className="container4">
                <h2 className="text subheading">Preview</h2>
                <div className="ul">
                  <div className="container5">
                    <ListItem text="Click the Preview button in the top right corner of your window"></ListItem>
                    <div className="container6">
                      <svg viewBox="0 0 1024 1024" className="icon">
                        <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                      </svg>
                    </div>
                  </div>
                  <ListItem text="This will open up a new tab where you can see a full preview of your current page/component"></ListItem>
                </div>
              </div>
            </div>
            <h2 className="text1 subheading">Publish</h2>
            <div className="ul1">
              <div className="container7">
                <ListItem text="Click on the Publish button in the top right corner to see the deploy options"></ListItem>
                <div className="container8">
                  <svg viewBox="0 0 1024 1024" className="icon2">
                    <path d="M725.333 554.667v256c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM456.832 627.499l396.501-396.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h153.003l-396.501 396.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                  </svg>
                </div>
              </div>
              <ListItem text="You can choose to publish through TeleportHQ on one of our subdomains"></ListItem>
              <Tip text="If you want to change the subdomain go to the Project Settings - General from the menu"></Tip>
              <ListItem text="Or you can opt for a custom deploy, using your preferred domain, by setting up a Vercel token"></ListItem>
              <Tip text="To add a Vercel token go to Project Settings - Tokens"></Tip>
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
            justify-content: space-between;
          }
          .container3 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container4 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
          }
          .ul {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .container5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container6 {
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-900);
          }
          .icon {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
          }
          .text1 {
            color: var(--dl-color-primary-100);
            align-self: flex-start;
          }
          .ul1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .container7 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .container8 {
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-900);
          }
          .icon2 {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
          }
        `}
      </style>
    </>
  )
}

export default PreviewPublish
