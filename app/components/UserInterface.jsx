import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

const style = {
  button: {
    margin:12,
    border: '2px solid #00c4cc'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gridTile: {
    width: 200,
    height: 150,
    overflowY: 'auto',
  },
  gridList: {
    width: 800,
    height: 900,
    overflowY: 'auto',
  },
  buttonWrapper: {
    width: '100%',
    margin: 'auto'
  },
  wrapper: {
    fontSize: '2em'
  }
}

const createButton = (onClickFunc, index, label, nextNode) => {
  return (
  <GridTile
    cellHeight={100}
    padding={20}
    key={index}
    style={style.gridTile}
  >
      <RaisedButton
        style={style.button}
        onClick={() => onClickFunc(nextNode)}
      >
      {label}
      </RaisedButton>
  </GridTile>
)};

export default class UserInterface extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'Start Now'
    }
  }

  render() {
    const {
      buttonData = [],
      directions = '',
      setCurrentNode
    } = this.props

    if (!this.state) { return null}

    return (
      <div style={style.wrapper}>
          {directions}
        <GridList
          style={style.buttonWrapper}
          cols={buttonData && buttonData.length}
        >
          {
            buttonData.map((button, index) =>
              createButton(
                setCurrentNode,
                index,
                button.label,
                button.nextPage
              ))
          }
        </GridList>
      </div>
    )
  }
}
