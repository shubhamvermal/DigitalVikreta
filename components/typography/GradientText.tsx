import React from 'react'
import H1 from './H1';
import classNames from 'classnames';

const GradientText = (props: any) => {
    const {type, className, text, ...rest} = props;
  return (
    <div className={classNames("text-gradient", className)} {...rest}>{text}</div>
  )
}

export default GradientText