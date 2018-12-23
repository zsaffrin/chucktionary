import React from 'react';
import { Link } from '@reach/router';
import { colors, spacing } from '../../styles';

const NavLink = props => {
  const styles = {
    link: {
      display: 'block',
      fontSize: '.9em',
      padding: `${spacing.s1}px ${spacing.s3}px`,
      textDecoration: 'none',
    },
    active: {
      background: colors.darkestGray,
      color: colors.white,
    },
  };

  const { label, target } = props;

  return (
    <Link
      to={target}
      style={styles.link}
      getProps={({ isCurrent }) => ({
        style: isCurrent
          ? {
              ...styles.active,
              ...styles.link,
            }
          : {
              ...styles.link,
            },
      })}
    >
      {label}
    </Link>
  );
};

export default NavLink;
