import React from 'react';

const Spellingz = ({ data }) => {
  const item = data[Object.keys(data)[0]] || {
    chuckWord: 'chuckWord',
    intendedWord: 'intendedWord',
  };
  const { chuckWord, intendedWord } = item;

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
};

export default Spellingz;
