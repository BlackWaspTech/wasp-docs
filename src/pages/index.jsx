import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

class BlogIndex extends Component {
  render() {
    const { siteMetadata } = this.props.data.site
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Layout {...siteMetadata}>
        <p>Brief description of libraries.</p>

        <Posts posts={posts} />
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
