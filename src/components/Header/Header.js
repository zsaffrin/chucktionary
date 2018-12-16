import React from 'react'
import { headings, spacing } from "../styles"
import Nav from './Nav/Nav';

const Header = () => {
  const styles = {
    header: {
      padding: spacing.s3,
      textAlign: 'center',
    },
  };

  return <header style={styles.header}>
      THE
      <h1 style={headings}>Chucktionary</h1>
      <Nav />
    </header>
}

export default Header
