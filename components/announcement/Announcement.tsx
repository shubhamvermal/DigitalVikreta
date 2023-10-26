import classNames from 'classnames';
import React from 'react';

const Announcement = (props: any) => {
  const { className, children, ...rest } = props;
  return (
    <div className={classNames('', className)} {...rest}>
      {children}
    </div>
  );
};

export default Announcement;
