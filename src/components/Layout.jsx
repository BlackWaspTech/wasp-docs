import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import 'normalize.css'

import GlobalStyle from './GlobalStyle'
import Navbar from './Navbar'

const Layout = ({ description, children, title }) => (
  <Display>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: description }]}
      title={title}
    />
    <GlobalStyle />
    <Navbar title={title} />
    <StyledMain>{children}</StyledMain>
  </Display>
)

const Display = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledMain = styled.main`
  max-width: 1200px;
  padding: 0 1em;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
