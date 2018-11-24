import React, { Component } from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="404">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
