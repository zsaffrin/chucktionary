import React from 'react'
import { Link } from '@reach/router'
import { spacing } from '../../styles';

const Nav = () => {
  const styles = {
    nav: {
      justifyContent: 'center',
      display: 'flex',
    },
    navList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      listStyle: 'none',
      padding: 0
    },
    navListItem: {
      display: 'block',
      fontSize: '.9em',
      padding: `${spacing.s1}px ${spacing.s3}px`,
      textDecoration: 'none',
    },
  };

  const navItems = [
    { id: 1, target: 'spellingz', label: 'Spellingz' },
    { id: 2, target: 'favorites', label: 'Chuck\'s Favorite Things' },
    { id: 3, target: 'hates', label: 'Things Chuck Hates' },
    { id: 4, target: 'doesntget', label: 'Things Chuck Just Doesn\'t Get' },
    { id: 5, target: 'culinary', label: 'Chuck\'s Culinary Corner' },
    { id: 6, target: 'wtf', label: 'WTF?!' },
    { id: 7, target: 'ohchuck', label: 'Oh Chuck' },
  ]

  const navItemNodes = navItems.map(({ id, label, target }) => <li key={id}>
      <Link to={target} style={styles.navListItem}>
        {label}
      </Link>
    </li>);

  return <nav style={styles.nav}>
      <ul style={styles.navList}>{navItemNodes}</ul>
    </nav>;
}

export default Nav
