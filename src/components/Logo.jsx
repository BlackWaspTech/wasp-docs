import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import logo from '../assets/logo.jpg'

const Logo = () => (
  <Link to="/">
    <Image src={logo} alt={`Black Wasp Tech`} />
  </Link>
)

const Image = styled.img``

export default Logo
