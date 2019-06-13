import React from 'react';
import './App.css';
import NavBar from './tasks/components/task3/navbar';
import ColorMe from './tasks/components/task1/colorme';
import CreateTable from './tasks/components/task2/createTable';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateTable />
      <ColorMe />
    </div>
  );
}

export default App;
