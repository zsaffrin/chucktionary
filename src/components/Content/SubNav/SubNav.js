import React from 'react';
import { Link } from '@reach/router';

const SubNav = ({ updater, data }) => {
  const getRandomKey = obj => {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
  };

  const styles = {
    section: {
      display: 'grid',
      justifyContent: 'center',
    },
  };

  return (
    <section style={styles.section}>
      <button onClick={() => updater(getRandomKey(data))}>Another</button>
    </section>
  );
};

export default SubNav;
