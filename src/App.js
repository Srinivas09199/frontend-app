import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AirportTable from './components/AirportTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AirportTable />
      </div>
    </div>
  );
}

export default App;