/* eslint react/prefer-stateless-function:0 */
import React, { PropTypes } from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
