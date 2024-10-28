"use client"; // This is a client component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Breakdown from '@/components/breakdown/breakdown';
import Summary from '@/components/breakdown/summary';
import StatusImage from '@/components/StatusImage';
import Tooltip from '@/components/Tooltip';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
    defaultValues: {
      additional_info: false,
      solar_load: 50,
      battery_autonomy_hours_only: 12,
      battery_autonomy_days: 0,
      battery_autonomy_hours: 0,
      breakdowns: {},
    }
  });

  const allValues = watch();
  const solar_load = watch("solar_load");
  const breakdowns = watch("breakdowns");
  const battery_autonomy_hours_only = watch("battery_autonomy_hours_only");
  const battery_autonomy_days = watch("battery_autonomy_days");
  const battery_autonomy_hours = watch("battery_autonomy_hours");

  const onSubmit = async (formData: any) => {
    try {
      console.log('formData', formData)
      actions.updateAction(formData);

      router.push(`/quotation/overview`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  const [quote, setQuote] = useState({
    number_of_panels: 0,
    number_of_batteries: 3,
    number_of_inverters: 18,
    total_cost_naira: 0,
    total_load_kwh: 0,
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleBreakdownChange = (breakdowns: Object) => {
    setValue("breakdowns", breakdowns)
  };

  React.useEffect(() => {
    if (state) {
      setValue("additional_info", state.additional_info || false);
      setValue("solar_load", state.solar_load || 0);
      setValue("battery_autonomy_hours_only", state.battery_autonomy_hours_only || 0);
      setValue("battery_autonomy_days", state.battery_autonomy_days || 0);
      setValue("battery_autonomy_hours", state.battery_autonomy_hours || 0);
      setValue("breakdowns", state.breakdowns || {});

      if (state.breakdowns && Object.keys(state.breakdowns).length > 0) {
        setIsChecked(true)
      }
    }
  }, [state])

  //Show estimate on load
  useEffect(() => {
    calculateQuote();
  }, [solar_load, battery_autonomy_hours_only, battery_autonomy_days, breakdowns, battery_autonomy_hours]);

  const calculateQuote = async () => {
    let postData = {
      electricity_spend: state.electricity_spend,
      price_band: state.price_band,
      solar_load: solar_load,
      battery_autonomy_hours: battery_autonomy_hours_only + battery_autonomy_days * 24,
      breakdowns: breakdowns
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        setQuote(data);
      } else {
        console.error('Failed to save user details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const onBack = () => {
    router.push(`/quotation/monthly-spend`);
  }

  return (
    <div>
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

      <StatusImage status={3} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto text-center flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex input-group'>
                  <label htmlFor="solar_load" className="label">
                    Solar load coverage
                  </label>
                  <div className='input-group input-group-background'>
                    <div className='flex input-group'>
                      <Tooltip
                        content={`${allValues.solar_load}%`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * allValues.solar_load / 100 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            id="solar_load"
                            className="input w-full slider-input"
                            type="range"
                            style={{ backgroundSize: `${allValues.solar_load}% 100%` }}
                            {...register('solar_load', { required: 'Solar load is required' })}
                          />
                          {errors.solar_load && <p className="text-red-500 text-xs italic">{errors?.solar_load?.message}</p>}
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span className='text-sm text-black font-bold calibration-line-container'>{i * 25}%</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex input-group'>
                  <label htmlFor="battery_autonomy_hours_only" className="label">
                    Battery autonomy in days and hours
                  </label>
                  <div className='input-group input-group-background'>

                    <div className='input-group'>
                      <label htmlFor="battery_autonomy_hours_only" className="label !font-bold">
                        Hours
                      </label>
                      <Tooltip
                        content={`${allValues.battery_autonomy_hours_only} h`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * allValues.battery_autonomy_hours_only / 24 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            id="battery_autonomy_hours_only"
                            className="input w-full slider-input"
                            type="range"
                            {...register('battery_autonomy_hours_only', { required: 'Battery Autonomy Hours Only is required' })}
                            min="0"
                            max="24"
                            style={{ backgroundSize: `${100 * allValues.battery_autonomy_hours_only / 24}% 100%` }}
                          />

                          {errors.battery_autonomy_hours_only && <p className="text-red-500 text-xs italic">{errors?.battery_autonomy_hours_only?.message}</p>}
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 25 }, (_, i) => (
                          <div className='calibration-line-container'>
                            <div className={`calibration-line ${i % 6 === 0 ? 'active' : ''}`}></div>
                            <span className='text-sm font-bold text-black'>
                              {i % 12 === 0 ? i : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='input-group'>
                      <label htmlFor="battery_autonomy_hours_only" className="label !font-bold mt-[10px]">
                        Days
                      </label>
                      <Tooltip
                        content={`${allValues.battery_autonomy_days} d`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * allValues.battery_autonomy_days / 5 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            ref={ref}
                            id="battery_autonomy_days"
                            className="input w-full slider-input"
                            type="range"
                            {...register('battery_autonomy_days', { required: 'Battery Autonomy Days is required' })}
                            min="0"
                            max="5"
                            style={{ backgroundSize: `${100 * allValues.battery_autonomy_days / 5}% 100%` }}
                          />
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 6 }, (_, i) => (
                          <span className='text-sm text-black font-bold calibration-line-container'>{i}</span>
                        ))}
                      </div>
                    </div>
                    <div className='m-auto pt-[10px] font-bold text-black'>
                      {allValues.battery_autonomy_days} days, {allValues.battery_autonomy_hours_only} hours
                    </div>
                  </div>
                </div>
                <div className='w-full input-group input-group-background'>
                  <div className="toggle-group flex items-center justify-between gap-4">
                    {/* Label */}
                    <label htmlFor="toggle" className="text-gray-700 text-sm font-medium">
                      Include Appliance Data
                    </label>

                    {/* Toggle Switch */}
                    <div className="relative">
                      {/* Visible Toggle Track and Thumb */}
                      <div
                        className={`w-11 h-6 ${isChecked ? 'bg-blue-500' : 'bg-gray-700'} rounded-full cursor-pointer transition-colors duration-300`}
                        onClick={handleToggle}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${isChecked ? 'translate-x-5' : ''
                            }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {isChecked && (
                    <Breakdown onBreakdownChange={handleBreakdownChange} breakdowns={state.breakdowns} />
                  )}
                </div>
                <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                  <Summary solar_panels={quote.number_of_panels} cost={quote.total_cost_naira} energy={quote.total_load_kwh} />
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
