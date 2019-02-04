import React, { Component } from 'react';
import A from './A';
class B extends Component {
  render() {
    return (
      <div>
         我是ba
      </div>
    )
  }
}

export default A(B)