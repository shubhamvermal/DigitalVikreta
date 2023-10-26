import classNames from 'classnames';
import React from 'react';

const H6 = (props: any) => {
  const { className, children, ...rest } = props;

  return (
    <h2 className={classNames('text-lg font-bold dark:text-white', className)} {...rest}>
      {children}
    </h2>
  );
};

export default H6;
