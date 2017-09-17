import React, { Component } from 'react'
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
    marginTop: '20px',
    height: '700px',
    width: '100%',
    padding: '16px'
  },
  gridList: {
    width: 800,
    height: 900,
    overflowY: 'auto',
  },
  userInterfaceWrapper: {
    padding: '25px'
  }
};

export default class BonesJokes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'Start Now',
      currentDirectionNode: directionNodes.verifyClinicPage({name: 'test', address: '123 address st'}),
      currentCenter: {},
      centers: []
    }

    this.setCurrentDirectionNode = this.setCurrentDirectionNode.bind(this)
  }

  componentDidMount() {
    axios.get('/api/centers')
    .then((response) => {
      const centers = response.data
      const randomCenter = this.getRandomCenter(centers)
      this.setState({
        currentDirectionNode: directionNodes.verifyClinicPage(randomCenter),
        currentCenter: randomCenter,
        centers
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getRandomCenter(centers) {
    const randomIndex = Math.floor(Math.random() * (centers.length))
    return centers[randomIndex]
  }

  setCurrentDirectionNode(nodeName) {
    console.log('DIGDUG', nodeName)
    if (nodeName === 'new') {
      const newCenter = this.getRandomCenter(this.state.centers)
      nodeName = directionNodes.verifyClinicPage(newCenter)
      this.setState({
        currentCenter: newCenter,
        currentDirectionNode: directionNodes.verifyClinicPage(newCenter)
      })
    } else {
      this.setState({
        currentDirectionNode: directionNodes[nodeName](this.currentCenter)
      })
    }
  }

  render() {
    const currentNode = this.state.currentDirectionNode || {}
    const setCurrentNode = this.setCurrentDirectionNode
    const currentCenter = this.state.currentCenter
    if (!this.state) { return null }

    return (

        <div style={styles.root}>
          <GridList padding={1} cols={3} cellHeight='auto'>
            <GridTile style={styles.gridTileLeft}  cols={2}>
              <Iframe
                url="https://www.yelp.com/biz/avail-nyc-new-york"
                width="100%"
                height="100%"
                display="initial"
                position="relative"
                allowFullScreen
                styles={{border: '1px solid black'}}
              />
              <div>
                <h2>Avail NYC</h2>
              </div>
            </GridTile>
            <GridTile style={styles.userInterfaceWrapper} cols={1}>
              <UserInterface
                buttonData={currentNode.buttons}
                directions={currentNode.text}
                setCurrentNode={setCurrentNode}
              />
            </GridTile>
         </GridList>
        </div>
    )
  }
}
