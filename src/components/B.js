import React, { Component } from 'react';
import A from './A';
class B extends Component {
  render() {
    return (
      <div>
         我是baskdlj
      </div>
    )
  }
}

export default A(B)