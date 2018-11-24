import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'

const SecondaryHeader = ({ title }) => (
  <h3>
    <Link to={'/'}>{title}</Link>
  </h3>
)
SecondaryHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SecondaryHeader
