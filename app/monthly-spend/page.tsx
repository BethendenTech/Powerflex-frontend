"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import React from 'react';
import Image from 'next/image';

export default function Page() {
  const { actions, state } = useStateMachine({ updateAction });

  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
    defaultValues: {
      electricity_spend: "",
      price_band: "A"
    }
  });

  React.useEffect(() => {
    if (state) {
      setValue("electricity_spend", state.electricity_spend || "");
      setValue("price_band", state.price_band || "A");
    }
  }, [state])

  const onSubmit = async (formData: any) => {
    try {
      actions.updateAction(formData);

      router.push(`/breakdown`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/details`);
  }

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <button className='flex items-center text-[#AEAEAE] font-bold' onClick={() => onBack()}>
        <Image
          src="/images/collaps-arrow-right.svg"
          alt="arrow icon"
          width={24}
          height={24}
          className="mr-2"
        />
        Back
      </button>
      <StatusImage status={2} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto text-center flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group'>
                  <label htmlFor="electricity_spend" className="label">
                    How much do you spend on electricity each month?
                  </label>
                  <input
                    id="electricity_spend"
                    className={errors.electricity_spend ? "input w-full border border-red-500" : "input w-full"}
                    {...register('electricity_spend', { required: 'Electricity Spend is required' })}
                  />
                  {errors.electricity_spend && <p className="text-red-500 text-xs italic">{errors?.electricity_spend?.message}</p>}
                </div>
                <div className='input-group'>
                  <label htmlFor="price_band" className="label">
                    Select your electricity band group
                  </label>
                  <div className={errors.price_band ? "border border-red-500 input-group input-group-background radio-group p-[20px]" : "input-group input-group-background radio-group p-[20px]"}>
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_a" className="label !font-bold">
                        Band A
                      </label>
                      <input
                        id="band_a"
                        type="radio"
                        className="input w-full radio-input"
                        value="A"
                        {...register('price_band', { required: 'Please select an option' })}
                      />
                    </div>
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_b" className="label !font-bold">
                        Band B
                      </label>
                      <input
                        id="band_b"
                        type="radio"
                        className="input w-full radio-input"
                        value="B"
                        {...register('price_band', { required: 'Please select an option' })}
                      />
                    </div>
                    <div className="input-group items-center gap-[5px]">
                      <label htmlFor="band_c" className="label !font-bold">
                        Band C
                      </label>

                      <input
                        id="band_c"
                        type="radio"
                        className="input w-full radio-input"
                        value="C"
                        {...register('price_band', { required: 'Please select an option' })}
                      />
                    </div>
                  </div>

                  {errors.price_band && <p className="text-red-500 text-xs italic">{errors?.price_band?.message}</p>}
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
