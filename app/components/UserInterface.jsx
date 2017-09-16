import React, { Component } from 'react'


export default class UserInterface extends Component {
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
        Yo, Yo, I'm a div
      </div>
    )
  }
}


