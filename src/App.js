import React from 'react';
// alias name is set in webpack's config
import Component from './Component';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Component />
      </div>
    );
  }
}
