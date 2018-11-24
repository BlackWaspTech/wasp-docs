import React from 'react'
import PropTypes from 'prop-types'

import Display from './Display'
import MainHeader from './MainHeader'
import SecondaryHeader from './SecondaryHeader'

const rootPath = `${__PATH_PREFIX__}/`

const Layout = ({ children, location, title }) => (
  <Display>
    <header>
      {location.pathname === rootPath ? (
        <MainHeader title={title} />
      ) : (
        <SecondaryHeader title={title} />
      )}
    </header>
    <main>{children}</main>
  </Display>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
}

export default Layout
