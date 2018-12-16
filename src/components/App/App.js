import React from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'

const App = () => {
  const styles = {
    page: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: '100vh',
      width: '100vw',
    },
  }

  return <div style={styles.page}>
      <Header />
      <Content />
    </div>;
}

export default App
