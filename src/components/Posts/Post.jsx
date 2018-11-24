import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'

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

Post.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Post
