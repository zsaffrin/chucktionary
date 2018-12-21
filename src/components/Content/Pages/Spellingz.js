import React, { Component } from 'react';

class Spellingz extends Component {
  state = {
    currentItem: {
      chuckWord: '',
      intendedWord: '',
    },
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

  setNewItem = newItem => {
    newItem &&
      this.setState({
        currentItem: {
          chuckWord: newItem.chuckWord || '',
          intendedWord: newItem.intendedWord || '',
        },
      });
  };

  render() {
    const { chuckWord, intendedWord } = this.state.currentItem;

    const styles = {
      page: {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        height: '100%',
      },
      pageHalf: {
        alignItems: 'center',
        display: 'grid',
        justifyContent: 'center',
      },
    };

    return (
      <div style={styles.page}>
        <div style={styles.pageHalf}>{chuckWord}</div>
        <div style={styles.pageHalf}>{intendedWord}</div>
      </div>
    );
  }
}

export default Spellingz;
