import React from 'react'
import H1 from './H1';
import classNames from 'classnames';

const GradientText = (props: any) => {
    const {type, className, text, ...rest} = props;
  return (
    <span className={classNames("text-gradient", className)} {...rest}>{text}</span>
  )
}

export default GradientText