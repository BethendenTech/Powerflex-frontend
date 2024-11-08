"use client"; // This is a client component

import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import TruckImage from '@/components/bookingImage';
import DatePicker from 'react-datepicker';

export default function Page() {

    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    // Set up react-hook-form
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            address_line_1: "",
            address_line_2: "",
            postcode: "",
        }
    });

    React.useEffect(() => {
        if (state) {
            setValue("address_line_1", state.address_line_1 || "");
            setValue("address_line_2", state.address_line_2 || "");
            setValue("postcode", state.postcode || "");
        }
    }, [state])

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log(data);
        actions.updateAction(data);  // Pass form data to state machine action
        router.push(`/booking/booking-home-survey-confirmation`);
    };

    return (
        <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <TruckImage />
            <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4">
                        <h4 className="heading text-center mb-5">Booking home survey</h4>

                        <h4 className="font-[Harmonia_Sans_Pro] text-[16px] font-normal leading-[20.8px] text-left text-[#424242]">Your Name : Customer Name</h4>
                        <div className="flex justify-between items-center">
                            <h4 className="font-[Harmonia_Sans_Pro] text-[16px] font-normal leading-[20.8px] text-left text-[#424242]">
                                Email: customername@gmail.com
                            </h4>

                            <button className="ml-4 px-4 py-1 bg-blue-500 text-white font-bold rounded-[12px]">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-3">
                {/* Address line 1 */}
                <div className='input-group'>
                    <label htmlFor="address_line_1" className="label">
                        Address
                    </label>
                    <input
                        id="address_line_1"
                        placeholder='Address line 1'
                        className={errors.address_line_1 ? "input w-full border border-red-500" : "input w-full"}
                        type="text"
                        {...register('address_line_1', { required: 'Address Line 1 is required' })}
                    />
                    {errors.address_line_1 && <p className="text-red-500 text-sm mt-1">{errors?.address_line_1?.message}</p>}
                </div>

                {/* Address line 2 */}

                <div className='input-group'>
                    <input
                        className={errors.address_line_2 ? "input w-full border border-red-500" : "input w-full"}
                        id="address_line_2"
                        placeholder='Address line 2'
                        type="text"
                        {...register("address_line_2", {
                            required: "Address Line 2 is required",
                        })}
                    />
                    {errors.address_line_2 && <p className="text-red-500 text-sm mt-1">{errors?.address_line_2?.message}</p>}
                </div>

                {/* Postcode */}
                <div className='input-group'>
                    <input
                        className={errors.postcode ? "input w-full border border-red-500" : "input w-full"}
                        id="postcode"
                        placeholder='Postcode'
                        type="text"
                        {...register("postcode", { required: "Postcode is required" })}
                    />
                    {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors?.postcode?.message}</p>}
                </div>

                <div className='w-full flex item-center justify-center bg-white rounded-[12px]'>
                    <DatePicker
                        showIcon
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        icon={
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 48 48"
                                >
                                    <mask id="ipSApplication0">
                                        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                            <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                            <path
                                                fill="#fff"
                                                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                            ></path>
                                        </g>
                                    </mask>
                                    <path
                                        fill="black"
                                        d="M0 0h48v48H0z"
                                        mask="url(#ipSApplication0)"
                                    ></path>
                                </svg>
                                <img
                                    src="/images/collaps-arrow-down.svg"
                                    alt="Arrow Icon"
                                    className="datepicker-arrow"
                                />
                            </>
                        }
                    />
                    <DatePicker
                        showIcon
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        icon={
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 48 48"
                                >
                                    <circle cx="24" cy="24" r="22" fill="none" stroke="black" strokeWidth="4" />
                                    <line x1="24" y1="12" x2="24" y2="24" stroke="black" strokeWidth="3" />
                                    <line x1="24" y1="24" x2="32" y2="24" stroke="black" strokeWidth="3" />
                                </svg>
                                <img
                                    src="/images/collaps-arrow-down.svg"
                                    alt="Arrow Icon"
                                    className="datepicker-arrow"
                                />
                            </>
                        }
                    />
                </div>
                {/* Submit Button */}
                <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
}
