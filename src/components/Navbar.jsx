import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from './Link'
import Logo from './Logo'

const Navbar = ({ title }) => (
  <StyledNav>
    <Leftside>
      <Logo />
      <Heading>
        <Link to="/">{title}</Link>
      </Heading>
    </Leftside>
    <Rightside>
      <ListItem to="/">Home</ListItem>
      <ListItem to="/example">In&nbsp;Action</ListItem>
      <ListItem to="/wasp-graphql">Base&nbsp;Library</ListItem>
      <ListItem to="/redux-wasp">For&nbsp;Redux</ListItem>
      <ListItem to="/redux-wasp-apollo">For&nbsp;Apollo</ListItem>
    </Rightside>
  </StyledNav>
)

const ListItem = ({ children, to }) => (
  <li style={{ padding: '0 0.4em' }}>
    <Link to={to}>{children}</Link>
  </li>
)

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 0px -2px #d8dada;
  color: purple;
  padding: 0.8em;
  width: 100%;
`

const Leftside = styled.div`
  display: flex;
  align-items: center;
`

const Rightside = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  font-weight: bold;
`

const Heading = styled.h1`
  font-size: 2em;
  font-family: monospace;
  margin: 0 0.8em;
`

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
