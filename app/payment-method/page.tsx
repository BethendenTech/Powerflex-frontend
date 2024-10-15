"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '../components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import React from 'react';

export default function Page() {

    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            name: "",
            card_number: "",
            expiration_date: "",
            security_code: "",
            postcode: "",
            payment_method: "Credit/Debit"
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

    React.useEffect(() => {
        if (state) {
            setValue("name", state.name || "");
            setValue("card_number", state.card_number || "");
            setValue("expiration_date", state.expiration_date || "");
            setValue("security_code", state.security_code || "");
            setValue("postcode", state.postcode || "");
            setValue("payment_method", state.payment_method || "Credit/Debit");
        }
    }, [state])

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

            <StatusImage status={5} />
            <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4">

                        <h4 className="heading text-center">Payment Summary</h4>

                        <div className="w-full container mx-auto flex flex-col gap-4 mt-4">
                            <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                                <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black'>Outright Purchase</h5>
                                <div className='bg-[#ffffff] rounded-[7px] p-3'>
                                    <table className="table-auto w-full">
                                        <tbody>
                                            <tr>
                                                <td className="sub-content text-left">Equipment</td>
                                                <th className="sub-content text-right">value</th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="table-auto w-full">
                                        <tbody>
                                            <tr className='pl-4 flex justify-around'>
                                                <td className="sub-content text-left">Solar panels</td>
                                                <th className="sub-content text-left">value</th>
                                            </tr>
                                            <tr className='pl-4 flex justify-around'>
                                                <td className="sub-content text-left">Inverters</td>
                                                <th className="sub-content text-left">value</th>
                                            </tr>
                                            <tr className='pl-4 flex justify-around'>
                                                <td className="sub-content text-left">Batteries</td>
                                                <th className="sub-content text-left">value</th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="table-auto w-full">
                                        <tbody>
                                            <tr>
                                                <td className="sub-content text-left">Installation</td>
                                                <th className="sub-content text-right">value</th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className='text-center'>
                                        <h5 className='font-bold text-black'>Total Cost</h5>
                                        <h5 className='font-bold text-black'>£5000</h5>
                                    </div>
                                </div>

                            </form>
                        </div>

                        {/* payment method section*/}
                        <div className="w-full container mx-auto flex flex-col gap-4 mt-5 pt-4">
                            <form className="w-full details-form flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

                                <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black'>Payment Method</h5>
                                <div className='bg-[#ffffff] rounded-[7px] pl-2'>
                                    <div className='input-group'>
                                        <div className={errors.payment_method ? "border border-red-500 input-group input-group-background radio-group" : "input-group input-group-background radio-group"}>
                                            <ul role="list" className="w-full divide-y divide-gray-100">
                                                <li className="flex justify-between gap-x-6 py-4">
                                                    <div className="flex min-w-0 gap-x-4">
                                                        <input
                                                            id="mode_a"
                                                            type="radio"
                                                            className="radio-input"
                                                            value="Credit/Debit"
                                                            {...register('payment_method', { required: 'Please select an option' })}
                                                        />
                                                        <div className="min-w-0 flex-auto">
                                                            <label htmlFor="mode_a" className="label font-bold">
                                                                Credit/Debit Card
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex justify-between gap-x-6 py-4">
                                                    <div className="flex min-w-0 gap-x-4">
                                                        <input
                                                            id="mode_b"
                                                            type="radio"
                                                            className="radio-input"
                                                            value="Paypal"
                                                            {...register('payment_method', { required: 'Please select an option' })}
                                                        />
                                                        <div className="min-w-0 flex-auto">
                                                            <label htmlFor="mode_b" className="label font-bold">
                                                                PayPal
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className='gap-6 flex flex-col mt-6 pt-4'>
                                    <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black pb-4'>Card Details</h5>

                                    <div className='input-group'>
                                        <label htmlFor="electricity_spend" className="label">
                                            Name on Card
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
                                            Card number
                                        </label>
                                        <input
                                            className={errors.card_number ? "input w-full border border-red-500" : "input w-full"}
                                            type="card_number"
                                            {...register('card_number', { required: 'Card number is required' })}
                                        />
                                        {errors.card_number && <p className="text-red-500 text-xs italic">{errors?.card_number?.message}</p>}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="electricity_spend" className="label">
                                            Expiration date
                                        </label>
                                        <input
                                            className={errors.expiration_date ? "input w-full border border-red-500" : "input w-full"}
                                            type="tel"
                                            {...register('expiration_date', { required: 'Expiration date is required' })}

                                        />
                                        {errors.expiration_date && <p className="text-red-500 text-xs italic">{errors?.expiration_date?.message}</p>}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="electricity_spend" className="label">
                                            Security code
                                        </label>
                                        <input
                                            className={errors.security_code ? "input w-full border border-red-500" : "input w-full"}
                                            type="tel"
                                            {...register('security_code', { required: 'Security code is required' })}

                                        />
                                        {errors.security_code && <p className="text-red-500 text-xs italic">{errors?.security_code?.message}</p>}
                                    </div>
                                    <div className='input-group'>
                                        <label htmlFor="electricity_spend" className="label">
                                            Postcode
                                        </label>
                                        <input
                                            className={errors.postcode ? "input w-full border border-red-500" : "input w-full"}
                                            type="tel"
                                            {...register('postcode', { required: 'Postcode is required' })}

                                        />
                                        {errors.postcode && <p className="text-red-500 text-xs italic">{errors?.postcode?.message}</p>}
                                    </div>
                                </div>

                                <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                                    <ul role="list">
                                        <li className="flex justify-between gap-x-6 py-2">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Due Today</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm font-bold leading-6 text-gray-900">£5000</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button
                                        type='submit'
                                        className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                                        rel="noopener noreferrer"
                                    >
                                        Confirm
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
