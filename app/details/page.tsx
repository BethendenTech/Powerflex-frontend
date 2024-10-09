"use client"; // This is a client component

import { ChangeEvent, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import StatusImage from '../components/StatusImage';

export default function Page() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    electricity_bill: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submit-details/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // alert('User details saved successfully!');
        router.push(`/monthly-spend?name=${formData.name}&email=${formData.email}&phone_number=${formData.phone_number}`);
      } else {
        console.error('Failed to save user details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <StatusImage status={1} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto text-center flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit}>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Name
                  </label>
                  <input
                    className="input w-full"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Email
                  </label>
                  <input
                    className="input w-full"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Phone number
                  </label>
                  <input
                    className="input w-full"
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                  rel="noopener noreferrer"
                  value="Next"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
