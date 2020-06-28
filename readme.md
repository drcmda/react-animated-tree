[![NPM](https://img.shields.io/npm/v/react-animating-tree.svg)](https://www.npmjs.com/package/react-animating-tree)
![Node.js CI](https://github.com/DimuthRuwantha/react-animating-tree/workflows/Node.js%20CI/badge.svg?branch=master)

    npm install react-animating-tree

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="300" />
</p>

Demo: https://codesandbox.io/embed/rrw7mrknyp

* `content`, Name of the node (string or React-component)
* `id`, id of the node.
* `type`, optional description, good for displaying icons, too (string or React-component)
* `open`, optional: default open state
* `onNodeClick`, optional: Node click event default it returns id
* `canHide`, optional: when set true displays an eye icon
* `visible`, optional: default visible state
* `onClick`, optional: click events on the eye
* `springConfig`, optional: react-spring animation config
* `toggleImmediate`, optional: Avoid animations (boolean)

```jsx
import Tree from 'react-animating-tree'

<Tree content="Apple" type="Fruit" open canHide visible onClick={console.log}>
  <Tree content="Contents" toggleImmediate={true} >
    <Tree content="Seeds" onNodeClick={nodeClicked} id={1343} />
  <Tree>
<Tree>
```

Create your own effects by passing a [react-spring](https://github.com/drcmda/react-spring/) config. The config below is the default (items fade in while moving in 20px from the right). You can go wild here by rotating, flipping, etc.

```jsx
config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
  },
})

const SpecialTree = props => <Tree {...props} springConfig={config} />

<SpecialTree content="Oranges">
  <SpecialTree content="Juice" />
</SpecialTree>
```
Tree2 with icon customization
All the props of Tree component are valid for this too
```jsx
import { Tree2 } from 'react-animating-tree'

const FolderOpen = props => (
  <svg aria-hidden="true" {...props} focusable="false" data-prefix="fas" data-icon="folder-open" class="svg-inline--fa fa-folder-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill={props.style.fill} d="M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z">
    </path></svg>
)

<Tree2 content="Apple" open style={{ icon: {fill: 'orange'}}} >
  <Tree2 content="Contents" usricon={FolderOpen} style={{...styles}}> 
    <Tree2 content="Seeds" usricon={FolderOpen}  />
    <Tree2 content="Seeds" style={{...styles, icon: {fill:'blue'}}} />
    <Tree2 content="Seeds"  />
  </Tree2>
  <Tree2 content="Seeds" />
</Tree2>
```