import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Link from '../components/Link'

class BlogIndex extends Component {
  render() {
    const { data, location } = this.props
    const { title, description } = data.site.siteMetadata
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout location={location} title={title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        />
        <Bio />
        <Link to="demo">View Demo</Link>
        <Posts posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
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
