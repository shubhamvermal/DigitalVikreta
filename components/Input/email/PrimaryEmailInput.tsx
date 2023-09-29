import React from 'react';
import { InputTypes } from '../types';

const PrimaryEmailInput = (props: InputTypes) => {
    const { id, label, name, value, placeholder, handleChange } = props;
  return (
    <>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <input
        name={name}
        onChange={(e) => handleChange({
            name: e.target.name,
            value: e.target.value
          })}
        type="email"
        id={id}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default PrimaryEmailInput;
