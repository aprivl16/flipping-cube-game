import React, { HTMLProps } from 'react'

const Input: React.FC<HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <input {...props} />
  )
}

export default Input