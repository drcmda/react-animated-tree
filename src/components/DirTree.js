import React from 'react'
import PropTypes from 'prop-types'
import { Spring, config, animated } from 'react-spring'
import * as Icons from './../icons'

const styles = {
  tree: {
    position: 'relative',
    padding: '4px 0px 0px 0px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    color: 'black',
    fill: "#212529",
    background: 'white',
    
  },
  toggle: {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
  },
  type: {
    textTransform: 'uppercase',
    fontFamily: 'monospace',
    fontSize: '0.6em',
    verticalAlign: 'middle',
  },
  node: {
    verticalAlign: 'middle', 
    cursor: 'pointer'
  },
  contents: {
    willChange: 'transform, opacity, height',
    marginLeft: 6,
    padding: '4px 0px 0px 14px',
    borderLeft: '1px dashed rgba(255,255,255,0.4)',
  },
  icon: {
   // will be used same colors of tree.
   // user can override this and apply colors
  }
}

const Contents = ({ children, ...style }) => (
  <animated.div style={{ ...style, ...styles.contents }}>
    {children}
  </animated.div>
)

export default class DirTree extends React.PureComponent {
  static defaultProps = { open: false, visible: true, canHide: false }
  static propTypes = {
    open: PropTypes.bool,
    visible: PropTypes.bool,
    canHide: PropTypes.bool,
    content: PropTypes.node,
    springConfig: PropTypes.func,
    onNodeClick: PropTypes.func,
	onToggle: PropTypes.func,
  }

  constructor(props) {
    super()
    this.state = {
      id: props.id, 
      open: props.open, 
      visible: props.visible, 
      immediate: props.toggleImmediate 
    }
    this.onNodeClick = this.onNodeClick.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
  }

  toggle = () => {
    this.props.children &&
    this.setState(state => ({ open: !state.open }));
	this.props.onToggle && this.props.onToggle(!this.state.open) 
  }

  toggleVisibility = () => {
    this.setState(
      state => ({ visible: !state.visible, immediate: true }),
      () => this.props.onClick && this.props.onClick(this.state.visible)
    )
  }

  onMouseDown(e){
    var element = e.target
    element.style.color = "red"
  }

  onMouseUp(e){
    var element = e.target
    element.style.color = "inherit"
  }

  onNodeClick = () => {
    this.props.onNodeClick && this.props.onNodeClick(this.state.id)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState(state => {
      return ['open', 'visible'].reduce(
        (acc, val) =>
          this.props[val] !== props[val] ? { ...acc, [val]: props[val] } : acc,
        {}
      )
    })
  }

  render() {
    const { open, immediate } = this.state
    const { children, content, type, style = {}, springConfig, usricon } = this.props
    
    const ArrowIcon = open ? Icons.DownArrow : Icons.RightArrow
    
    const Icon = usricon ? usricon : children ? open ? Icons.FolderOpen : Icons.Folder : Icons.File

    let icon = {
        fill: "inherit",
        background: "inherit",
        ...style.icon
      }
    
    return (
      <div style={{ 
        ...styles.tree,
        ...style.tree 
        }}>
         <ArrowIcon
          className="toggle"
          style={{
            fill: "inherit",
            background: "inherit",
            ...styles.toggle,
            visibility : children ? 'inherit' : "hidden"
          }}
          onClick={this.toggle}
        />
        <span style={{ ...styles.type, marginRight: type ? 10 : 0 }}>
          {type}
        </span>
          <Icon
            className="toggle"
            style={{
              ...icon,
              ...styles.toggle
            }}
          />
        
        <span style={{...styles.node }} onClick={this.onNodeClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
          {content}
        </span>
        <Spring
          native
          immediate={immediate}
          config={{
            ...config.default,
          }}
          from={{ height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' }}
          to={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            transform: open ? 'translate3d(0px,0,0)' : 'translate3d(20px,0,0)',
          }}
          {...springConfig && springConfig(open)}
          render={Contents}>
          { open ? children : null}
        </Spring>
      </div>
    )
  }
}
