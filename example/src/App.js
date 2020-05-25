import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Tree  from 'react-animated-tree'

function App() {
  return (
    <div>
      <Tree content="Apple" type="Fruit" open canHide visible onClick={console.log}>
  <Tree content="Contents">
    <Tree content="Seeds" />
    <Tree content="Seeds" />
    <Tree content="Seeds" />
    <Tree content="Seeds" />
    <Tree content="Seeds" />
    <Tree content="Seeds" />
  </Tree>
  </Tree>
    </div>
  );
}

export default App;
