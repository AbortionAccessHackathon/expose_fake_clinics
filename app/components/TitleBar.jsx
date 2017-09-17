import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

  const styles = {
    nav: {
      backgroundColor: 'rgb(0,196,204)',

      padding: '14px 16px'
    },
    iconButton: {
      color: 'white'
    },
    title: {
      display: 'inline-block',
      color: 'white',
      fontFamily: '\'PT Sans\', Arial, sans-serif',
      fontSize: '16px',
      letterSpacing: '3px',
      margin: 0
    },
    noLetterSpacing: {
      letterSpacing: 0
    }
  }

export default class TitleBar extends Component {
  constructor (props) {
    super(props)

  }

  render() {

    return (
      <a href="">
        <nav style={styles.nav}>
          <IconButton tooltip="go back" iconClassName="material-icons" iconStyle={styles.iconButton}>&#60;</IconButton>
          <h1 style={styles.title}><span style={styles.noLetterSpacing}>back to </span>EXPOSEFAKECLINICS.COM</h1>
        </nav>
      </a>
    )
  }
}