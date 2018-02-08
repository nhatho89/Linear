import React, { Component } from 'react';

export default class Card extends Component {
  handleClick(e) {
    console.log("handling click ", e);
    debugger
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <img style={styles.cardContainer} src={require(`./cards/${this.props.card}.png`)} />
      </div>
    );
  }
}

const styles = {
  cardContainer: {
    width: '100px'
  }
}
