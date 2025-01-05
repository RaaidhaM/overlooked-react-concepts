import React, { Component } from "react"
import withLogger from "./withLogger"

class ValueUpdater extends Component {
  render() {
    const { value, updateValue } = this.props

    return (
      <div>
        <h1>Current Value: {value}</h1>
        <button onClick={() => updateValue(value + 1)}>Increment</button>
        <button onClick={() => updateValue(value - 1)}>Decrement</button>
      </div>
    )
  }
}

export default withLogger(ValueUpdater, 0)
