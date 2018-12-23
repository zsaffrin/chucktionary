import React from 'react';
import Button from '../../../shared/Button';
import { colors } from '../../styles';

const SubNav = ({ updater, data }) => {
  const getRandomKey = obj => {
    const keys = Object.keys(obj);
    const randomKey = obj[keys[Math.floor(Math.random() * keys.length)]];
    return randomKey;
  };

  const styles = {
    section: {
      display: 'grid',
      justifyContent: 'center',
    },
  };

  return (
    <section style={styles.section}>
      <Button
        background={colors.darkViolet}
        click={() => updater(getRandomKey(data))}
        text="Another"
        textColor={colors.white}
      />
    </section>
  );
};

export default SubNav;
