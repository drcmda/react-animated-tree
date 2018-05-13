import React from 'react'
import PropTypes from 'prop-types'
import { Spring, config, animated } from 'react-spring'
import * as Icons from './icons'

const Contents = ({ children, ...styles }) => (
  <animated.div
    style={{
      ...styles,
      willChange: 'height',
      marginLeft: 6,
      padding: '4px 0px 0px 14px',
      borderLeft: '1px dashed rgba(255,255,255,0.4)',
    }}>
    {children}
  </animated.div>
)

export default class Tree extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    visible: PropTypes.bool,
    canHide: PropTypes.bool,
    content: PropTypes.node,
    springConfig: PropTypes.func,
  }
  static defaultProps = { open: false, visible: true, canHide: false }

  constructor(props) {
    super()
    this.state = { open: props.open, visible: props.visible }
  }
  toggle = () =>
    this.props.children && this.setState(state => ({ open: !state.open }))
  toggleVisibility = () => {
    this.setState(
      state => ({ visible: !state.visible }),
      () => this.props.onClick && this.props.onClick(this.state.visible)
    )
  }
  componentWillReceiveProps(props) {
    this.setState(
      ['open', 'visible'].reduce(
        (acc, val) =>
          this.props[val] !== props[val] ? { ...acc, [val]: props[val] } : acc,
        {}
      )
    )
  }

  render() {
    const { open, visible } = this.state
    const { children, content, type, style, canHide, springConfig } = this.props
    const Icon =
      Icons[`${children ? (open ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
      <div
        style={{
          position: 'relative',
          padding: '4px 0px 0px 0px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          width: '100%',
          verticalAlign: 'middle',
          ...style,
        }}
        className="treeview">
        <Icon
          className="toggle"
          style={{
            width: '1em',
            height: '1em',
            marginRight: 10,
            opacity: children ? 1 : 0.3,
            cursor: 'pointer',
            verticalAlign: 'middle',
          }}
          onClick={this.toggle}
        />
        <span
          style={{
            marginRight: type ? 10 : 0,
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            fontSize: '0.6em',
            verticalAlign: 'middle',
          }}>
          {type}
        </span>
        {canHide && (
          <Icons.EyeO
            className="toggle"
            style={{
              width: '1em',
              height: '1em',
              marginRight: 10,
              opacity: visible ? 1 : 0.4,
              verticalAlign: 'middle',
            }}
            onClick={this.toggleVisibility}
          />
        )}
        <span style={{ verticalAlign: 'middle' }}>{content}</span>
        <Spring
          native
          config={{
            ...config.default,
            restSpeedThreshold: 1,
            restDisplacementThreshold: 0.01,
          }}
          from={{ height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' }}
          to={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            transform: open ? 'translate3d(0,0,0)' : 'translate3d(20px,0,0)',
          }}
          {...springConfig && springConfig(open)}
          render={Contents}>
          {children}
        </Spring>
      </div>
    )
  }
}
