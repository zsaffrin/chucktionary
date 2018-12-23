import React from 'react';
import { Link } from '@reach/router';
import { headings, spacing } from '../styles';
import Nav from './Nav/Nav';

const Header = () => {
  const styles = {
    header: {
      padding: spacing.s3,
      textAlign: 'center',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <header style={styles.header}>
      THE
      <Link to="/" style={styles.link}>
        <h1 style={headings}>Chucktionary</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
