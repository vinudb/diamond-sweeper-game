import React from 'react';
import './App.scss';
import DiamondSweeperApp from './components/DiamondSweeperApp';

function App() {
  return (
    <React.Fragment>
      <div className="content-container">
        <h1 className="title">Diamond Sweeper</h1>
        <DiamondSweeperApp />
      </div>
    </React.Fragment>
  );
}

export default App;
