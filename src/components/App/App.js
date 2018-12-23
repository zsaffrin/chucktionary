import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Default from '../Default/Default';
import Content from '../Content/Content';

class App extends Component {
  state = {
    collections: {},
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get('/.netlify/functions/chucktionapi')
      .then(res => {
        this.setState({
          collections: res.data,
          isLoading: false,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { collections, isLoading } = this.state;

    const styles = {
      page: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
        width: '100vw',
      },
    };

    return (
      <div style={styles.page}>
        <Header />
        {Object.keys(collections).length === 0 ? (
          <Default loading={isLoading} />
        ) : (
          <Content collections={collections} />
        )}
      </div>
    );
  }
}

export default App;
