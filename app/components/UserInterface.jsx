import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin:12,
    backgroundColor: '#4CAF50',
    border: '2px solid #0000FF'
  }
}

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
          style={style.button}
          />
          <RaisedButton
            label="Button2"
            style={style.button}
            />
          <RaisedButton
            label="Button3"
              style={style.button}
              />
      </div>

    )
  }
}
