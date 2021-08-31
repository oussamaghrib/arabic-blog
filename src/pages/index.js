import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          مرحبا بالحبايب{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>هته هيس الطريقة الرائعى بسيكبنسي</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
      </div>
      </DirectionProvider>
    )
  }
}

export default IndexPage
