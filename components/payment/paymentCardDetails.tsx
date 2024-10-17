"use client";

import React from "react";
import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const PaymentCardDetails = () => {
    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    // Set up react-hook-form
    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            name_card: "",
            card_number: "",
            expiration_date: "",
            security_code: "",
            postcode: "",
        }
    });

    React.useEffect(() => {
        if (state) {
            setValue("name_card", state.name_card || "");
            setValue("card_number", state.card_number || "");
            setValue("expiration_date", state.expiration_date || "");
            setValue("security_code", state.security_code || "");
            setValue("postcode", state.postcode || "");
        }
    }, [state])

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log(data);
        actions.updateAction(data);  // Pass form data to state machine action
        router.push(`/payment-success`);
    };

    return (
        <>
            <div className='gap-6 flex flex-col mt-6 pt-4'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h5 className="font-harmonia text-base font-bold leading-[19.79px] text-left text-black pb-4">Card Details</h5>

                    {/* Cardholder Name */}
                    <div className='input-group'>
                        <label htmlFor="name_card" className="label">
                            Name on Card
                        </label>
                        <input
                            id="name_card"
                            className={errors.name_card ? "input w-full border border-red-500" : "input w-full"}
                            type="text"
                            {...register('name_card', { required: 'Cardholder name is required' })}
                        />
                        {errors.name_card && <p className="text-red-500 text-sm mt-1">{errors?.name_card?.message}</p>}
                    </div>

                    {/* Card Number */}
                    <div className='input-group'>
                        <label htmlFor="card_number" className="label">
                            Card Number
                        </label>

                        <input
                            id="card_number"
                            type="text"
                            {...register("card_number", {
                                required: "Card number is required",
                                pattern: {
                                    value: /^[0-9]{16}$/,
                                    message: "Card number must be 16 digits"
                                }
                            })}
                            className={errors.name_card ? "input w-full border border-red-500" : "input w-full"}
                        />
                        {errors.card_number && <p className="text-red-500 text-sm mt-1">{errors.card_number.message}</p>}
                    </div>

                    {/* Expiration Date */}

                    <div className='input-group'>
                        <label htmlFor="expiration_date" className="label">
                            Expiration Date (MM/YY)
                        </label>
                        <input
                            className={errors.name_card ? "input w-full border border-red-500" : "input w-full"}
                            id="expiration_date"
                            type="text"
                            {...register("expiration_date", {
                                required: "Expiration date is required",
                                pattern: {
                                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                    message: "Invalid date format (MM/YY)"
                                }
                            })}
                        />
                        {errors.expiration_date && <p className="text-red-500 text-sm mt-1">{errors?.expiration_date?.message}</p>}
                    </div>

                    {/* Security Code */}

                    <div className='input-group'>
                        <label htmlFor="security_code" className="label">
                            Security Code (CVV)
                        </label>
                        <input
                            className={errors.security_code ? "input w-full border border-red-500" : "input w-full"}
                            id="security_code"
                            type="text"
                            {...register("security_code", {
                                required: "Security code is required",
                                pattern: {
                                    value: /^[0-9]{3,4}$/,
                                    message: "Security code must be 3 or 4 digits"
                                }
                            })}
                        />
                        {errors.security_code && <p className="text-red-500 text-sm mt-1">{errors?.security_code?.message}</p>}
                    </div>

                    {/* Postcode */}
                    <div className='input-group'>
                        <label htmlFor="postcode" className="label">
                            Postcode
                        </label>
                        <input
                            className={errors.postcode ? "input w-full border border-red-500" : "input w-full"}
                            id="postcode"
                            type="text"
                            {...register("postcode", { required: "Postcode is required" })}
                        />
                        {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors?.postcode?.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                        <ul role="list">
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Due Today</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">£ {state.total_cost}</p>
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
        </>
    );
};

export default PaymentCardDetails;
