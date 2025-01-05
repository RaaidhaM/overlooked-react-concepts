import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef() // Create a ref object

  const focusInput = () => {
    inputRef.current.focus() // Access the DOM node
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
