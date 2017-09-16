import React, { Component } from 'react'
import Iframe from 'react-iframe';
import UserInterface from './UserInterface.jsx'

export default class BonesJokes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'Start Now'
    }
  }
  componentDidMount() {
  }



  render() {
    if (!this.state) { return null }

    return (
      <div>
        <Iframe
          url="https://www.yelp.com/biz/avail-nyc-new-york"
          width="450px"
          height="450px"
          display="initial"
          position="relative"
          allowFullScreen
        />
        <div>
          <h2>Avail NYC</h2>
        </div>

        <UserInterface></UserInterface>
      </div>
    )
  }
}
