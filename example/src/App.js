import React from 'react';
import Tree, { Tree2, LazyTree } from 'react-animating-tree'

var config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
  },
})

const calanderIcon = props => (
  <svg aria-hidden="true" {...props} focusable="false" data-prefix="fas" data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill={props.style.fill} d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z">
    </path></svg>
)

var styles = {
  tree: {
    color: 'blue',
    background: 'white',
  },
  icon: {
    fill: 'green',
    background: 'white'
  }
}
function App() {

  function nodeClicked(e){
    console.log(e)
    
  }

  const toggleNode = (e) => {
	  console.log(e);
  }

  return (
    <div className="container">
      <div className="row">
    <div className="col-md-3">
      <h4>Tree</h4>
      <Tree content="Apple" type="Fruit" open canHide visible style={{...styles}}
        onClick={console.log} /* springConfig={config} */ toggleImmediate={false} >
        <Tree content="Contents" onNodeClick={() => nodeClicked("somethingx")} toggleImmediate={false}>
          <Tree onNodeClick={() => nodeClicked("something")} id={1343} content="Seeds" />
          <Tree content="Seeds" />
          <Tree content="Seeds"  />
          <Tree content="Seeds" />
        </Tree>
        <Tree content="Seeds" />
          <Tree content="Seeds" />
      </Tree>
      </div>
      <div className="col-md-3">
        <h4>Tree2</h4>
      <Tree2 content="Apple" open
        onClick={console.log} springConfig={config} toggleImmediate={true} style={{ icon: {fill: 'orange'}}} >
        <Tree2 content="Contents" onNodeClick={() => nodeClicked("somethingx")} toggleImmediate={true} usricon={calanderIcon} style={{...styles}}
			onToggle={toggleNode}> 
          <Tree2 onNodeClick={() => nodeClicked("something")} id={1343} content="Seeds" usricon={calanderIcon}  />
          <Tree2 content="Seeds" style={{...styles, icon: {fill:'blue'}}} />
          <Tree2 content="Seeds"  />
        </Tree2>
        <Tree2 content="Seeds" >
          <Tree2 content="Seeds" />
          <Tree2 content="Seeds"  />
        </Tree2>
        <Tree2 content="Seeds" />
      </Tree2>
    </div>
    <div className="col-md-3">
        <h4>LazyTree</h4>
      <LazyTree content="Apple" open
        onClick={console.log} springConfig={config} toggleImmediate={true} style={{ icon: {fill: 'orange'}}} >
        <LazyTree content="Contents" onNodeClick={() => nodeClicked("somethingx")} toggleImmediate={true} usricon={calanderIcon} style={{...styles}}> 
          <LazyTree onNodeClick={() => nodeClicked("something")} id={1343} content="Seeds" usricon={calanderIcon}  />
          <LazyTree content="Seeds" style={{...styles, icon: {fill:'blue'}}} />
          <LazyTree content="Seeds"  />
        </LazyTree>
        <LazyTree content="Seeds" >
          <LazyTree content="Seeds" />
          <LazyTree content="Seeds"  />
        </LazyTree>
        <LazyTree content="Seeds" />
      </LazyTree>
    </div>
    </div>
    </div>
  );
}

export default App;
