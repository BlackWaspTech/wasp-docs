import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: sans-serif;
    font-size: 1.1em;
  }

  input {
    font-family: serif;
  }
`

export default GlobalStyle
