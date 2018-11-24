import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

class Bio extends React.Component {
  render() {
    return (
      <StyledContainer>
        <Logo />
        <p>
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
`

export default Bio
