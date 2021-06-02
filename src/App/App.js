import React from 'react';

import AppProvider from '../.store/AppProvider';
import Calculator from '../Calculator/Calculator';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <div className="wrapper">
        <Calculator />
      </div>
    </AppProvider>
  );
}

export default App;