import React, { forwardRef } from 'react'

const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
))

export default CustomInput
