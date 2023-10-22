import React from 'react';
import { InputTypes } from '../types';

const PrimaryInput = (props: InputTypes) => {
  const { id, label, placeholder, ...rest } = props;
  return (
    <>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <input
        // onChange={(e) => handleChange({
        //   name: e.target.name,
        //   value: e.target.value
        // })}
        type="text"
        id={id}
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required
        {...rest}
      />{' '}
    </>
  );
};

export default PrimaryInput;
