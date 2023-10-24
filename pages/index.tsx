import { IResponse } from '../interfaces/response.interface';
import HeadSEO from '../components/HeadSEO';
import { useState } from 'react';
import PrimaryInput from '../components/Input/input/PrimaryInput';
import PrimaryEmailInput from '../components/Input/email/PrimaryEmailInput';
import PrimaryNumberInput from '../components/Input/number/PrimaryNumberInput';
import PrimaryTextArea from '../components/Input/textArea/PrimaryTextArea';
import { useFormik } from 'formik';
import Joi from 'joi';

export default function Home() {
  const validationSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().label('Name'),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required().label('Email Address'),
    phone: Joi.number().integer().min(10).required().label('Contact No.'),
    query: Joi.string().min(2).max(500).required().label('Message'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      query: '',
    },
    validate: (values) => {
      const { error } = validationSchema.validate(values, { abortEarly: false });

      const errors: Record<string, string> = {};

      if (error) {
      error.details.forEach((detail) => {
      const key = detail.context?.key;
      if (key) {
      errors[key] = detail.message;
    }
  });
}
return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch('api/query', {
          method: 'POST',
          body: JSON.stringify(values),
        });

        if (response.ok) {
          formik.resetForm();
        } else {

        }
      } catch (error) {
  
      }
    },
  });

  return (
    <div>
      <HeadSEO />
      <img alt="" src={'/desktop.png'} />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Helping FMCG Businesses to stand out of the crowd and <br /> become a legendary brand.
          </p>
          <form className="space-y-8" onSubmit={formik.handleSubmit}>
            <div>
              <PrimaryInput
                id={'person_name'}
                placeholder={'john doe'}
                label={'Name'}
                name={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <PrimaryEmailInput
                id={'email_address'}
                placeholder={'johndoe@mail.com'}
                label={'Email Address'}
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <PrimaryNumberInput
                id={'phone_number'}
                placeholder={'+919876543212'}
                label={'Contact No.'}
                name={'phone'}
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500">{formik.errors.phone}</div>
              )}
            </div>
            {console.log('aaaaaaaaaa', formik.values)}
            <div className="sm:col-span-2">
              <PrimaryTextArea
                id={'query_field'}
                placeholder={'Write your message here'}
                label={'Message'}
                name={'query'}
                value={formik.values.query}
                onChange={formik.handleChange}
              />
              {formik.touched.query && formik.errors.query && (
                <div className="text-red-500">{formik.errors.query}</div>
              )}
            </div>
            <button
              type="submit"
              className="py-3 bg-[#8700d7] px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <img alt="" src={'/footer.png'} />
    </div>
  );
}
