import React from 'react';
import { title } from './style.css';

export default class App extends React.Component {
  render() {
    return (
      <h1 className={title}>Hello, bundlers!</h1>
    );
  }
}
