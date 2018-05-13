[![Build Status](https://travis-ci.org/drcmda/react-animated-tree.svg?branch=master)](https://travis-ci.org/drcmda/react-animated-tree) [![npm version](https://badge.fury.io/js/react-animated-tree.svg)](https://badge.fury.io/js/react-animated-tree)

    npm install react-animated-tree

A simple, configurable tree view control for React.

<p align="middle">
  <img src="assets/tree.gif" width="600" />
</p>

Demo: https://codesandbox.io/embed/rrw7mrknyp

```jsx
import Tree from 'react-animated-tree'

<Tree content="Name" open canHide visible>
  <Tree content="Subtree">
    <Tree content="Sub-sub-tree" />
  <Tree>
<Tree>
```
