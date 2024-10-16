"use client"; // This is a client component

import { ChangeEvent, useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import Tooltip from '../components/Tooltip';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import { OutRightPurchase } from '@/components/overview/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing';
import Image from 'next/image';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Component is mounted on the client side
    setIsClient(true);
  }, []);

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

      router.push(`/payment-summary`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/breakdown`);
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

      <StatusImage status={4} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4 pb-4 mb-2">
            <h4 className="heading text-center">Overview</h4>
            <div className="w-full container mx-auto flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <ul role="list" className="divide-y divide-gray-400">
                  <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly Spend</p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm font-bold leading-6 text-gray-900">{state?.electricity_spend}</p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Electricity band group</p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm font-bold leading-6 text-gray-900">{state?.price_band}</p>
                    </div>
                  </li>
                  <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Coverage Percentage</p>
                      </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm font-bold leading-6 text-gray-900">75%</p>
                    </div>
                  </li>
                  {isClient && (
                    <li className="flex justify-between gap-x-6 py-2">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Battery Autonomy</p>
                        </div>
                      </div>
                      <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm font-bold leading-6 text-gray-900">
                          {state?.battery_autonomy_hours_only} Hours - {state?.battery_autonomy_days} Days
                        </p>
                      </div>
                    </li>
                  )}
                  <li className="flex justify-between gap-x-6 py-2"></li>
                </ul>

                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                  <div className="w-full pt-4 pb-4 mb-2">
                    <div className="w-full container mx-auto text-left flex flex-col gap-4 pb-3">
                      <p className="text-lg font-harmonia font-bold leading-[1.3] text-left text-black">Estimated energy requirement</p>
                    </div>
                    <ul role="list">
                      <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number of solar panels</p>
                          </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number of inverters</p>
                          </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number/size of batteries</p>
                          </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                        </div>
                      </li>
                      <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Recommended battery size</p>
                          </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-[12px] flex border-b border-gray-300 bg-[#FFFFFF] p-1" style={{ boxShadow: 'inset 0px 2px 8px 0px #00000040', justifyContent: 'space-between' }}>
                  <button type='button' className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${allValues.finance ? "text-black text-[#424242]" : "tab-btn text-white"}`} onClick={() => { setValue("finance", false) }}>
                    Outright Purchase
                  </button>

                  <button type='button' className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${allValues.finance ? "tab-btn text-white" : "text-black text-[#424242]"}`} onClick={() => { setValue("finance", true) }}>
                    Financing
                  </button>
                </div>

                {!allValues.finance && <OutRightPurchase />}
                {allValues.finance && <FinancingPurchase />}



                {!allValues.finance && <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                  <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                  >
                    Proceed to Payment
                  </button>
                </div>}

                {allValues.finance && <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                  <button
                    type='button'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                  >
                    Apply for Financing
                  </button>
                </div>}

              </form>
            </div>
          </div>
        </div>
      </main>



    </div>
  );
}
