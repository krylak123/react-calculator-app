import React from 'react';

import AppProvider from '../.store/AppProvider';
import Calculator from '../Calculator/Calculator';
import AsidePanel from '../AsidePanel/AsidePanel';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <div className="wrapper">
        <Calculator />
        <AsidePanel />
      </div>
    </AppProvider>
  );
}

export default App;