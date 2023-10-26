import React from 'react'

const Button = (props: any) => {
    const {...rest} = props;
  return (
    <button {...rest}>Button</button>
  )
}

export default Button