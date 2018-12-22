import React from 'react';
import { Link } from '@reach/router';

const SubNav = ({ updater, data }) => {
  const getRandomKey = obj => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const styles = {
    section: {
      background: '#e5f5c4',
    },
  };

  return (
    <section style={styles.section}>
      <button onClick={() => updater(getRandomKey(data))}>Another</button>
    </section>
  );
};

export default SubNav;
