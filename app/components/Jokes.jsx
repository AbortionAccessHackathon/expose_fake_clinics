import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme.js';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js'
import {GridList, GridTile} from 'material-ui/GridList';
import Iframe from 'react-iframe';
import UserInterface from './UserInterface.jsx'
import directionNodes from './user-interface'
import axios from 'axios'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px'
  },
  gridList: {
    width: 800,
    height: 900,
    overflowY: 'auto',
  }
};

export default class BonesJokes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'Start Now',
      currentDirectionNode: directionNodes.verifyClinicPage({name: 'test', address: '123 address st'})
    }
  }

  componentDidMount() {
    axios.get('/api/centers')
    .then((response) => {
      console.log('PIKACHU', response);
    })
    .catch((error) => {
      console.log('PSYDUCK', error);
    });
  }

  setCurrentDirectionNode(nodeName) {

  }

  render() {
    const currentNode = this.state.currentDirectionNode || {}
    const setCurrentNode = this.setCurrentDirectionNode
    if (!this.state) { return null }

    console.log('CHARMANDER', currentNode)

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={styles.root}>
          <GridList padding={1} cols={3} cellHeight='auto'>
            <GridTile style={styles.gridTitleLeft}  cols={2}>
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
            <GridTile style={styles.gridTitleRight} cols={1}>
              <UserInterface
                buttonData={currentNode.buttons}
                directions={currentNode.text}
                setCurrentNode={setCurrentNode}
              />
            </GridTile>
         </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}
