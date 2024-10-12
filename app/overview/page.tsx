"use client"; // This is a client component

import { ChangeEvent, useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import Tooltip from '../components/Tooltip';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
    defaultValues: {
      finance: false,
    }
  });

  const allValues = watch();

  const onSubmit = async (formData: any) => {
    try {
      console.log('formData', formData)
      actions.updateAction(formData);

      // router.push(`/breakdown`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/breakdown`);
  }

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => onBack()}>Back</button>

      <StatusImage status={4} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <h4 className="text-center">Overview</h4>
            <div className="w-full container mx-auto flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>



                <table className="table-auto w-full">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="text-left">Monthly spend</td>
                      <th className="text-right">{state.electricity_spend} N</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="text-left">Electricity band group</td>
                      <th className="text-right">{state.price_band}</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="text-left">Coverage Percentage</td>
                      <th className="text-right">75%</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="text-left">Battery Autonomy</td>
                      <th className="text-right">{state.battery_autonomy_hours_only} Hours - {state.battery_autonomy_days} Days</th>
                    </tr>
                  </tbody>
                </table>

                <h5 className='font-bold'>Estimated energy requirement</h5>
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="text-left">Number of solar panels</td>
                      <th className="text-right">value</th>
                    </tr>
                    <tr>
                      <td className="text-left">Number of inverters</td>
                      <th className="text-right">value</th>
                    </tr>
                    <tr>
                      <td className="text-left">Number/size of batteries</td>
                      <th className="text-right">value</th>
                    </tr>
                    <tr>
                      <td className="text-left">Recommended battery size</td>
                      <th className="text-right">value</th>
                    </tr>
                  </tbody>
                </table>


                <div className="w-full flex justify-between border rounded-lg p-3">
                  <button type='button' className={allValues.finance ? "text-black px-4 rounded-r-lg" : "btn bg-blue-500 text-white px-4 rounded-r-lg"} onClick={() => { setValue("finance", false) }}>
                    Outright Purchase
                  </button>

                  <button type='button' className={!allValues.finance ? "text-black px-4 rounded-r-lg" : "btn bg-blue-500 text-white px-4 rounded-r-lg"} onClick={() => { setValue("finance", true) }}>
                    Financing
                  </button>
                </div>



                <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                  <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>



    </div>
  );
}
