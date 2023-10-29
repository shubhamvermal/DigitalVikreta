import classNames from 'classnames';
import React from 'react';

const H4 = (props: any) => {
  const { className, children, ...rest } = props;

  return (
    <h2 className={classNames('text-2xl font-bold dark:text-whtie', className)} {...rest}>
      {children}
    </h2>
  );
};

export default H4;
