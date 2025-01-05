import React, { Component } from "react"

// Higher-Order Component
const withLogger = (WrappedComponent, initialState) => {
  class WithLogger extends Component {
    constructor(props) {
      super(props)

      this.state = {
        value: initialState,
      }
    }

    // Method to update state and log the change
    updateValue = (newValue) => {
      console.log(`Previous State: ${this.state.value}`)
      this.setState({ value: newValue }, () => {
        console.log(`Updated State: ${this.state.value}`)
      })
    }

    render() {
      console.log("Props passed to component:", this.props)

      return (
        <WrappedComponent
          value={this.state.value}
          updateValue={this.updateValue}
          {...this.props} // Spread other props
        />
      )
    }
  }

  return WithLogger //return enhanced component
}

export default withLogger
