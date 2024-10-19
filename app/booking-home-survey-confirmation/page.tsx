"use client"; // This is a client component

import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import TruckImage from '../components/bookingImage';
import Image from 'next/image';

export default function Page() {

    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log(data);
        actions.updateAction(data);  // Pass form data to state machine action
        router.push(`/booking-home-survey-confirmation`);
    };

    return (
        <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <TruckImage />
            <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4">
                        <div className="w-full container mx-auto flex flex-col gap-4 text-center">
                            <div className="max-w-lg mx-auto p-4 bg-white rounded-lg px-10" style={{ borderLeft: '8px solid #5C69FF' }}>
                                <h4 className="font-bold text-left text-black">{`<Customer Name>`}</h4>
                                <h4 className="font-bold text-left text-black mb-3">Home Survey</h4>

                                <p className="text-black font-harmonia text-[14px] font-normal leading-[17.11px] text-center">Address: 38 Highbury Street, Brighton
                                </p>
                                <div className="flex items-center mt-4 mb-4">
                                    <Image
                                        src="/images/calendar-icon.svg"
                                        alt="arrow icon"
                                        width={22}
                                        height={22}
                                        className="mr-2"
                                    />
                                    <h4 className="font-[Harmonia_Sans_Pro] text-[16px] font-normal leading-[20.8px] text-left text-[#000000]">
                                        15/JUL/2024
                                    </h4>
                                </div>

                                <div className="flex items-center mt-2 mb-2">
                                    <Image
                                        src="/images/clock.svg"
                                        alt="arrow icon"
                                        width={22}
                                        height={22}
                                        className="mr-2"
                                    />
                                    <h4 className="font-[Harmonia_Sans_Pro] text-[16px] font-normal leading-[20.8px] text-left text-[#000000]">
                                        09:00 AM
                                    </h4>
                                </div>
                            </div>


                            <button
                                type='submit'
                                className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                                rel="noopener noreferrer"
                            >
                                Set Up Account
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
