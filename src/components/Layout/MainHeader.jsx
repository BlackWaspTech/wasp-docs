import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'

const MainHeader = ({ title }) => (
  <h1>
    <Link to={'/'}>{title}</Link>
  </h1>
)
MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MainHeader
