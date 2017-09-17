import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme.js';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js'
import {GridList, GridTile} from 'material-ui/GridList';
import Iframe from 'react-iframe';
import UserInterface from './UserInterface.jsx'

const styles = {
  root: {
    marginTop: '20px'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 800,
    height: 900,
    overflowY: 'auto',
  },
  gridTitleLeft: {
    flexGrow: 3
  },
  gridTitleRight: {
    flexGrown: 1
  }
};

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
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={styles.root}>
          <GridList cols={2} padding={1}>
            <GridTile style={styles.gridTitleLeft}>
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
            </GridTile>
            <GridTile style={styles.gridTitleRight}>
             <UserInterface></UserInterface>
            </GridTile>
         </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}


