import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Main />
      <footer style={{color:'white'}}>
      © Copyright 2020 Samsara Tattoo  - All Rights Reserved
    </footer>
    </div>
    
  );
}

export default App;
