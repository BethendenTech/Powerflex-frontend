"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAction from '@/little-state/action';
import React from 'react';

export default function Page() {
  const { actions, state } = useStateMachine({ updateAction });

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
    }
  });

  React.useEffect(() => {
    if (state) {
      setValue("name", state.name || "");
      setValue("email", state.email || "");
      setValue("phone_number", state.phone_number || "");
    }
  }, [state])

  const onSubmit = async (formData: any) => {
    try {

      actions.updateAction(formData);
      router.push(`/monthly-spend`);

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
        router.push(`/monthly-spend`);
      } else {
        console.error('Failed to save user details');
      }

      if (response.status == 400) {
        const data = await response.json();

        Object.entries(data).forEach(([key, value]) => {
          setError(key, { type: "manual", message: value });
        });
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
              <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Name
                  </label>
                  <input
                    className={errors.name ? "input w-full border border-red-500" : "input w-full"}
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                  />

                  {errors.name && <p className="text-red-500 text-xs italic">{errors?.name?.message}</p>}
                </div>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Email
                  </label>
                  <input
                    className={errors.email ? "input w-full border border-red-500" : "input w-full"}
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p className="text-red-500 text-xs italic">{errors?.email?.message}</p>}
                </div>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    Phone number
                  </label>
                  <input
                    className={errors.phone_number ? "input w-full border border-red-500" : "input w-full"}
                    type="tel"
                    {...register('phone_number', { required: 'Phone Number is required' })}

                  />
                  {errors.phone_number && <p className="text-red-500 text-xs italic">{errors?.phone_number?.message}</p>}
                </div>
                <input
                  type="submit"
                  className="btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                  rel="noopener noreferrer"
                  value="Continue to quote"
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
