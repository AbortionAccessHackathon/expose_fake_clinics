import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

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
      <div>
        <RaisedButton
          label="Button1"
          style={
            margin:12,
            background-color: #4CAF50,
            border: 2px solid #0000FF;
          }
          />
          <RaisedButton
            label="Button1"
            style={
              margin:12,
              background-color: #4CAF50,
              border: 2px solid #0000FF;
            }
            />
          <RaisedButton
            label="Button1"
              style={
                margin:12,
                background-color: #4CAF50,
                border: 2px solid #0000FF;
              }
              />
      </div>

    )
  }
}
