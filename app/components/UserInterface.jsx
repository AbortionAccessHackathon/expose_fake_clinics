import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin:12,
    background-color: #4CAF50,
    border: 2px solid #0000FF;
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
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
}

const buttonData = [];

const createButton = (index, label, link) => (
  <div key={index} style={style.root}>
    <GridTile
      cols={buttonData.length}
      cellHeight={100}
      padding={20}
      style={style.gridTile}>
        <RaisedButton
          label=
          link=
          style={style.button}
          />
      </GridList>
    </div>
);


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
    if (!this.state) { return null}
    const fakeButtonData = [
      {
        label:'Google'
        link:'http://www.google.com'
      },
      {
        label:'Facebook'
        link:'http://www.facebook.com'
      },
    ];
    return (
      <div>
        Yo, Yo, I'm a div
      </div>
      <GridList
        style={style.gridList}>
        <div>
          {this.props.buttonData.map((button, index) => createButton(
            index, button.label, button.link)}
        </div>
      </GridList>



    )
  }
}
