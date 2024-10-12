"use client"; // This is a client component

import { ChangeEvent, useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Breakdown from './breakdown';
import Summary from './summary';
import StatusImage from '../components/StatusImage';
import Tooltip from '../components/Tooltip';
import useResizeObserver from "use-resize-observer";
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  console.log("state", state)

  const electricity_spend = Number(state.electricity_spend);
  const price_band = String(state.price_band);

  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  const [formData, setFormData] = useState({
    electricity_spend,
    price_band,
    additional_info: false,
    solar_load: 50,
    battery_autonomy_hours_only: 12,
    battery_autonomy_days: 0,
    battery_autonomy_hours: 0,
    breakdowns: {}
  });

  const [quote, setQuote] = useState({
    number_of_panels: 0,
    number_of_batteries: 3,
    number_of_inverters: 18,
    total_cost_naira: 0,
    total_load_kwh: 0,
  });

  const [breakdownChanged, setBreakdownChanged] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseUp = () => {
    calculateQuote();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBreakdownChange = (breakdowns: Object) => {
    setFormData({
      ...formData,
      breakdowns,
    });
    setBreakdownChanged(breakdownChanged + 1);
  };

  // Calculate estimate only when breakdown is changed and not when sliders are moved. Use mouseup for slider changes
  useEffect(() => {
    calculateQuote();
  }, [breakdownChanged]);

  //Show estimate on load
  useEffect(() => {
    calculateQuote();
  }, []);

  const handleNext = async () => {
    if (!formData.additional_info) {
      setFormData({
        ...formData,
        additional_info: true,
      });
      calculateQuote();
    }
    else {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          // alert('User details saved successfully!');
          router.push(`/breakdown?name=`);
        } else {
          console.error('Failed to save user details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const calculateQuote = async () => {
    const data = { ...formData };
    data.battery_autonomy_hours = formData.battery_autonomy_hours_only + formData.battery_autonomy_days * 24;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submit-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // alert('User details saved successfully!');
        router.push(`/breakdown`);
      } else {
        console.error('Failed to save user details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/monthly-spend`);
  }

  return (
    <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => onBack()}>Back</button>

      <StatusImage status={3} />
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4">
            <div className="w-full container mx-auto text-center flex flex-col gap-4">
              <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className='flex input-group'>
                  <label htmlFor="solar_load" className="label">
                    Solar load coverage
                  </label>
                  <div className='input-group input-group-background'>
                    <div className='flex input-group'>
                      <Tooltip
                        content={`${formData.solar_load}%`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * formData.solar_load / 100 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            id="solar_load"
                            className="input w-full slider-input"
                            type="range"
                            name="solar_load"
                            value={formData.solar_load}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleMouseUp}
                            onChange={handleChange}
                            required
                            style={{ backgroundSize: `${formData.solar_load}% 100%` }}
                          />
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span className='text-sm font-bold calibration-line-container'>{i * 25}%</span>
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
                        content={`${formData.battery_autonomy_hours_only} h`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * formData.battery_autonomy_hours_only / 24 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            id="battery_autonomy_hours_only"
                            className="input w-full slider-input"
                            type="range"
                            name="battery_autonomy_hours_only"
                            value={formData.battery_autonomy_hours_only}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleMouseUp}
                            onChange={handleChange}
                            required
                            min="0"
                            max="24"
                            style={{ backgroundSize: `${100 * formData.battery_autonomy_hours_only / 24}% 100%` }}
                          />
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 25 }, (_, i) => (
                          <div className='calibration-line-container'>
                            <div className={`calibration-line ${i % 6 === 0 ? 'active' : ''}`}></div>
                            <span className='text-sm font-bold'>
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
                        content={`${formData.battery_autonomy_days} d`}
                        isAlwaysOpen
                        left={`${((width ?? 0) - 20) * formData.battery_autonomy_days / 5 + 20}px`}
                        position="top"
                      >
                        <div className='slider-container'>
                          <input
                            ref={ref}
                            id="battery_autonomy_days"
                            className="input w-full slider-input"
                            type="range"
                            name="battery_autonomy_days"
                            value={formData.battery_autonomy_days}
                            onMouseUp={handleMouseUp}
                            onTouchEnd={handleMouseUp}
                            onChange={handleChange}
                            required
                            min="0"
                            max="5"
                            style={{ backgroundSize: `${100 * formData.battery_autonomy_days / 5}% 100%` }}
                          />
                        </div>
                      </Tooltip>
                      <div className='flex flex-row justify-between calibration-container'>
                        {Array.from({ length: 6 }, (_, i) => (
                          <span className='text-sm font-bold calibration-line-container'>{i}</span>
                        ))}
                      </div>
                    </div>
                    <div className='m-auto pt-[10px] font-bold'>
                      {formData.battery_autonomy_days} days, {formData.battery_autonomy_hours_only} hours
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
                    <Breakdown onBreakdownChange={handleBreakdownChange} />
                  )}
                </div>
                <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                  <Summary solar_panels={quote.number_of_panels} cost={quote.total_cost_naira} energy={quote.total_load_kwh} />
                  <div
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                    onClick={handleNext}
                  >
                    Next
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
