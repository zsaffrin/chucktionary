import React, { Component } from 'react';

export class Favorites extends Component {
  state = {
    currentThing: {},
  };

  componentDidMount() {
    const { id, data } = this.props;
    id ? this.setNewItem(data[id]) : this.setRandomItem(data);
  }

  setRandomItem = data => {
    const keys = Object.keys(data);
    const item = data[keys[Math.floor(Math.random() * keys.length)]];
    this.setNewItem(item);
  };

  setNewItem = newThing => {
    newThing &&
      this.setState({
        currentThing: newThing,
      });
  };

  render() {
    const { thing } = this.state.currentThing;

    const styles = {
      page: {
        display: 'grid',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      },
      content: {
        padding: '1em',
        textAlign: 'center',
      },
      value: {
        fontSize: '2em',
        fontWeight: 'bold',
      },
    };

    return (
      <div style={styles.page}>
        <div style={styles.content}>
          <div style={styles.value}>{thing}</div>
        </div>
      </div>
    );
  }
}

export default Favorites;
