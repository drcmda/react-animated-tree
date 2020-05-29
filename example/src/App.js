import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Tree  from 'react-animated-tree'

var config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
  },
})

function App() {

  function nodeClicked(e){
    console.log(e)
    
  }

  return (
    <div>
      <Tree content="Apple" type="Fruit" open canHide visible 
        onClick={console.log} springConfig={config} toggleImmediate={true} >
        <Tree content="Contents" onNodeClick={() => nodeClicked("somethingx")} toggleImmediate={true}>
          <Tree onNodeClick={() => nodeClicked("something")} id={1343} content="Seeds" />
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
