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
    const { data } = this.props;
    const randomItem = this.getRandomKey(data);
    this.setNewItem(randomItem);
  }

  getRandomKey = obj => {
    const keys = Object.keys(obj);
    const randomKey = obj[keys[Math.floor(Math.random() * keys.length)]];
    return randomKey;
  };

  setNewItem = newItem => {
    this.setState({
      currentItem: newItem,
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
        padding: '1.5em',
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
        <SubNav updater={this.setNewItem} data={data} />
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
