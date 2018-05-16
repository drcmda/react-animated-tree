import * as React from 'react';

export interface TreeProps {
  /**
   * Name of the node
   */
  content?: React.ReactNode;

  /**
   * Description of the node
   * 
   * This is a good way to provide a custom icon for a node.
   */
  type?: React.ReactNode;

  /**
   * Default open state
   */
  open?: boolean;

  /**
   * Default visible state
   */
  visible?: boolean;

  /**
   * Whether or not an eye icon should be shown for the Tree
   * 
   * Manage user interaction with the eye through the "onClick" prop.
   */
  canHide?: boolean;

  /**
   * Event handler for clicks on the eye
   */
  onClick?: React.MouseEventHandler<any>;

  /**
   * Custom react-spring animation config
   */
  springConfig?: Function;
}

export default class Tree extends React.Component<TreeProps> {}