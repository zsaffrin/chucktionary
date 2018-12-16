import React from 'react'

const Spellingz = () => {
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
  }

  return <div style={styles.page}>
      <div style={styles.pageHalf}>Spellingz A</div>
      <div style={styles.pageHalf}>Spellingz B</div>
    </div>;
}

export default Spellingz
