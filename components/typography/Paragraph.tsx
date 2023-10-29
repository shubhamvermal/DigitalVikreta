import classNames from 'classnames'
import React from 'react'

const Paragraph = (props: any) => {
  const {className, children, ...rest} = props
  return (
    <p className={classNames('dark:text-white', className)}>{children}</p>
  )
}

export default Paragraph