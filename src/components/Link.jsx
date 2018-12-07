import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  /* box */
  box-shadow: none;

  /* text */
  color: inherit;
  text-decoration: none;

  &:active,
  &:hover {
    text-decoration: underline;
  }
`

export default StyledLink
