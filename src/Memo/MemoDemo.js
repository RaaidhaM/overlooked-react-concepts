import React, { memo } from "react"

const MyComponent = ({ value }) => {
  console.log("Rendering MyComponent")
  return <div>{value}</div>
}

export default memo(MyComponent)