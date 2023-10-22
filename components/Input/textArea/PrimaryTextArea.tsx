import React from 'react';
import { InputTypes } from '../types';

const PrimaryTextArea = (props: InputTypes) => {
  const { id, label, ...rest } = props;
  // console.log("🚀 ~ file: PrimaryTextArea.tsx:6 ~ PrimaryTextArea ~ props:", props)
  return (
    <>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </label>
      <textarea
        // name={name}
        // onChange={(e) =>
        //   handleChange({
        //     name: e.target.name,
        //     value: e.target.value,
        //   })
        // }
        // id={id}
        rows={6}
        value={'adfasdf'}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        {...rest}
      ></textarea>
    </>
  );
};

export default PrimaryTextArea;
