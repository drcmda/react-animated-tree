[![Build Status](https://travis-ci.org/drcmda/react-animated-tree.svg?branch=master)](https://travis-ci.org/drcmda/react-animated-tree) [![npm version](https://badge.fury.io/js/react-animated-tree.svg)](https://badge.fury.io/js/react-animated-tree)

    npm install react-animated-tree

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="600" />
</p>

Demo: https://codesandbox.io/embed/rrw7mrknyp

* `content`, Name of the node, can be strings or React-components
* `type`, optional: description, will be presented a little smaller
* `open`, optional: open state
* `canHide`, optional: when set true will display a little eye icon
* `visible`, optional: when canHide is true, visible controls the visible-state
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

You can also create your own effects, study [react-spring](https://github.com/drcmda/react-spring/) for all the properties you can set:

```jsx
import Tree from 'react-animated-tree'

config = open => ({
  from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
  to: {
    height: open ? 'auto' : 0,
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0,0,0)' : 'translate3d(20px,0,0)',
  },
})

const SpecialTree = props => <Tree {...props} springConfig={config} />

<SpecialTree content="Name">
  <SpecialTree content="Subtree">
    <SpecialTree content="Sub-sub-tree" />
  <SpecialTree>
<SpecialTree>
```
