import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

class Bio extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Logo />
        <p style={{ margin: 0.3 }}>
          Created by <strong>Black Wasp Tech</strong>, an open source
          organization dedicated to building useful things.{' '}
          <a href="https://github.com/BlackWaspTech">
            View our projects on Github.
          </a>
        </p>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  border: 1px solid #d8dada;
  box-shadow: 3px 3px 3px -1px #d8dada;
  padding: 0.2em 0.8em 0.8em;
  max-width: 300px;
  font-size: 0.8em;
  margin: 2em auto;
`

export default Bio
