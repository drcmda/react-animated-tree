[![Build Status](https://travis-ci.org/drcmda/react-animated-tree.svg?branch=master)](https://travis-ci.org/drcmda/react-animated-tree) [![npm version](https://badge.fury.io/js/react-animated-tree.svg)](https://badge.fury.io/js/react-animated-tree)

    npm install react-animated-tree

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="600" />
</p>

Demo: https://codesandbox.io/embed/rrw7mrknyp

```jsx
import Tree from 'react-animated-tree'

<Tree content="Name" open canHide visible onClick={visible => console.log(visible)}>
  <Tree content="Subtree">
    <Tree content="Sub-sub-tree" />
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

<SpecialTree content="Name" open canHide visible>
  <SpecialTree content="Subtree">
    <SpecialTree content="Sub-sub-tree" />
  <SpecialTree>
<SpecialTree>
```
