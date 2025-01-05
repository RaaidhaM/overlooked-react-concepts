import React, { Component } from 'react'

class MyComponent extends Component {
  render() {
    const {cName} = this.props
    
    if(cName === 'Sample'){
      throw new Error('Not a valid name')
    }
    
    return (
      <div>
       {cName}
      </div>
    )
  }
}

export default MyComponent
