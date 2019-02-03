import React, { Component } from 'react'

function A(Components){
    return class A extends Component {
        render() {
          return (
            <div>
              我是A
              <Components/>
            </div>
          )
        }
      }
}

export default  A;
