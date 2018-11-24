import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

const Posts = ({ posts }) => (
  <section>
    {posts.reverse().map(({ node }) => (
      <Post node={node} key={node.fields.slug} />
    ))}
  </section>
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Posts
