import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div style={styles.container}>
      <Home />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
};

export default App;
