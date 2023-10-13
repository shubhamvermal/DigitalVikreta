import { IResponse } from '../interfaces/response.interface';
import HeadSEO from '../components/HeadSEO';
import { useState } from 'react';
import PrimaryInput from '../components/Input/input/PrimaryInput';
import PrimaryEmailInput from '../components/Input/email/PrimaryEmailInput';
import PrimaryNumberInput from '../components/Input/number/PrimaryNumberInput';
import PrimaryTextArea from '../components/Input/textArea/PrimaryTextArea';
import Image from 'next/image';

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
      <img alt="" src={"/desktop.jpg"}/>
    </div>
  );
}
