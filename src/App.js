import React from 'react';
import MainScreen from './screens/MainScreen';
import Header from './components/Header';
import './assets/styles/style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainScreen />
    </div>
  );
}

export default App;
