import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'

import 'whatwg-fetch'

import configureStore from './redux/store'
import RenderStore from './RenderStore'

const Wrapper = ({ children }) => (
  <Provider store={configureStore()}>{children}</Provider>
)

class Example extends Component {
  render() {
    return (
      <Wrapper>
        <Fragment>
          <RenderStore />
        </Fragment>
      </Wrapper>
    )
  }
}

export default Example
