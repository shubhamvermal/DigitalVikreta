import classNames from 'classnames'
import React from 'react'

const Paragraph = (props: any) => {
  const {className, children, ...rest} = props
  return (
    <p className={classNames('', className)}>{children}</p>
  )
}

export default Paragraph