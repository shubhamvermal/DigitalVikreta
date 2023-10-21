import { IResponse } from '../interfaces/response.interface';
import HeadSEO from '../components/HeadSEO';
import { useState } from 'react';
import PrimaryInput from '../components/Input/input/PrimaryInput';
import PrimaryEmailInput from '../components/Input/email/PrimaryEmailInput';
import PrimaryNumberInput from '../components/Input/number/PrimaryNumberInput';
import PrimaryTextArea from '../components/Input/textArea/PrimaryTextArea';

export default function Home() {
  const [userQuery, setUserQuery] = useState({});
  const handleSubmit = (e: any) => {
    e.preventDefault()
    fetch("api/query", {
      method: "POST",
      body: JSON.stringify(userQuery)
    })
  };
  const handleUpdate = ({ name, value }: { name: string; value: string }) => {
    setUserQuery({ ...userQuery, [name]: value });
  };
  return (
    <div>
      <HeadSEO />
      <img alt="" src={"/desktop.png"}/>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Helping FMCG Businesses to stand out of crowd and <br/> become a lagendery brand.
          </p>
          <form className="space-y-8">
            <div>
              <PrimaryInput id={'person_name'} placeholder={'john doe'} label={'Name'} name={'name'} value={''} handleChange={handleUpdate} />
            </div>
            <div>
              <PrimaryEmailInput id={'email_address'} placeholder={'johndoe@mail.com'} label={'Email Address'} name={'email'} value={''} handleChange={handleUpdate} />
            </div>
            <div>
              <PrimaryNumberInput id={'phone_number'} placeholder={'+919876543212'} label={'Contact No.'} name={'phone'} value={''} handleChange={handleUpdate} />
            </div>
            <div className="sm:col-span-2">
              <PrimaryTextArea id={'query_field'} placeholder={'Write your message here'} label={'Message'} name={'query'} value={''} handleChange={handleUpdate} />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-3 bg-primary-700 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <img alt="" src={"/footer.png"}/>
    </div>
  );
}