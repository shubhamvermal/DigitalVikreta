import classNames from 'classnames';
import React from 'react';

const H1 = (props: any) => {
  const { className, children, ...rest } = props;
  return (
    <h1 className={classNames('text-5xl font-extrabold dark:text-white', className)} {...rest}>
      {children}
    </h1>
  );
};

export default H1;
