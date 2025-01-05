import React, { Component } from 'react'
import CustomInput from './CustomInput'

class CustomInputParent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    focusCustomInput = () => {
        this.inputRef.current.focus()
      }
    
    render(){
        return (
            <div>
                <CustomInput ref={this.inputRef} />
                <button onClick={this.focusCustomInput}>Focus Custom Input</button>
            </div>
        )
    }
}

export default CustomInputParent
