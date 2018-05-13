[![Build Status](https://travis-ci.org/drcmda/react-animated-tree.svg?branch=master)](https://travis-ci.org/drcmda/react-animated-tree) [![npm version](https://badge.fury.io/js/react-animated-tree.svg)](https://badge.fury.io/js/react-animated-tree)

    npm install react-animated-tree

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="600" />
</p>

Demo: https://codesandbox.io/embed/rrw7mrknyp

* `content`, Name of the node (string or React-component)
* `type`, optional description, good for displaying icons, too (string or React-component)
* `open`, optional: default open state
* `canHide`, optional: when set true displays an eye icon
* `visible`, optional: default visible state
* `onClick`, optional: click events on the eye
* `springConfig`, optional: react-spring animation config

```jsx
import Tree from 'react-animated-tree'

<Tree content="Apple" type="Fruit" open canHide visible onClick={console.log}>
  <Tree content="Contents">
    <Tree content="Seeds" />
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

<SpecialTree content="Orange">
  <SpecialTree content="Juice" />
</SpecialTree>
```
