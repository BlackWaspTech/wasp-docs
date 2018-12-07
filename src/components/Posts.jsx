import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from './Link'

const Posts = ({ posts }) => (
  <section>
    {posts.reverse().map(({ node }) => (
      <Post node={node} key={node.fields.slug} />
    ))}
  </section>
)

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article>
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </article>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Posts
