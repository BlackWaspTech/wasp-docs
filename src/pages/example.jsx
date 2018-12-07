import React, { Component } from 'react'
import Layout from '../components/Layout'

import Example from '../components/Example'

class ExamplePage extends Component {
  render() {
    const { siteMetadata } = this.props.data.site

    return (
      <Layout {...siteMetadata}>
        <Example />
      </Layout>
    )
  }
}

export default ExamplePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
