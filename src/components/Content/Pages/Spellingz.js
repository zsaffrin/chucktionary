import React, { Component } from 'react';
import SubNav from '../SubNav/SubNav';

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

  setItemById = id => {
    const { data } = this.props;
    const item = data[id];
    this.setNewItem(item);
  };

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
    const { data } = this.props;

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
      content: {
        textAlign: 'center',
      },
      title: {
        fontSize: '.8em',
        textTransform: 'uppercase',
      },
      value: {
        fontSize: '3em',
        fontWeight: 'bold',
      },
    };

    return (
      <>
        <SubNav updater={this.setItemById} data={data} />
        <div style={styles.page}>
          <div style={styles.pageHalf}>
            <div style={styles.content}>
              <div style={styles.title}>Chuck</div>
              <div style={styles.value}>{chuckWord}</div>
            </div>
          </div>
          <div style={styles.pageHalf}>
            <div style={styles.content}>
              <div style={styles.title}>Intended</div>
              <div style={styles.value}>{intendedWord}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Spellingz;
