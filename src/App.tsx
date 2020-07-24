import React from 'react';

import './App.css'
import ThemeProvider from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider />
  );
}

export default App;
