/* eslint react/prefer-stateless-function:0 */
import React, { PropTypes } from 'react';
import { NavigationBar } from '../../components';

require('./app.css');

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
        <NavigationBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
