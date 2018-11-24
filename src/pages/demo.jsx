import React, { Component } from 'react'
import Layout from '../components/Layout'

import Demo from '../components/Demo'

class DemoPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Demo">
        <Demo />
      </Layout>
    )
  }
}

export default DemoPage
