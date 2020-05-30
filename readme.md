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
