import React from "react"
import { DefaultButtonPropsType } from "./Button.props"

const Button: React.FC<DefaultButtonPropsType> = ({innerButtonText, ...props}) => {
  return (
    <button {...props}>{innerButtonText}</button>
  )
}

export default Button