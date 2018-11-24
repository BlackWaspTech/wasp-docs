import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { testDispatch } from './redux/actions'

class RenderStore extends Component {
  render() {
    const { handleClick, store } = this.props

    return (
      <Code>
        {JSON.stringify(store, null, 2)}
        <p>
          <button onClick={handleClick}>Test Dispatch</button>
        </p>
      </Code>
    )
  }
}

const Code = styled.pre`
  /* box */
  background-color: #f3f3f3;
  border: 0.5px solid #777;
  border-radius: 10px;
  min-height: 100px;
  margin: 40px;
  padding: 20px;

  /* text */
  font-family: monospace;
  line-height: 1.5;
  text-align: left;
`

const mapState = state => {
  return {
    store: state,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick: () => {
      dispatch(testDispatch())
    },
  }
}

RenderStore.propTypes = {
  handleClick: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
}
RenderStore.defaultProps = {
  store: {},
}

export default connect(
  mapState,
  mapDispatch
)(RenderStore)
