"use client";

import { financeTermTears, interestRateValue, interestTermValue } from "@/utils/formData";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FinancingTermModalProps {
    isOpen: boolean;
    onClose: (sata: any) => void;
}

export const FinancingTermModal = ({ isOpen, onClose }: FinancingTermModalProps) => {
    if (!isOpen) return null;

    const [isIcon] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            total_cost: "",
            down_payment: "",
            term: interestTermValue,
            interest_rate: interestRateValue,
        }
    });

    const onSubmit = async () => {
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-200 rounded-lg w-1/1 p-5">
                {/* Modal Content */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Edit Finance Terms</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        &#x2715; {/* Close icon */}
                    </button>
                </div>
                <div className="mt-4">
                    <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit(onSubmit)}>


                        <div className="grid grid-cols-2 gap-2">


                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Total Cost
                                </label>
                                <input
                                    className={errors.total_cost ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('total_cost', { required: 'Total Cost is required' })}
                                />

                                {errors.total_cost && <p className="text-red-500 text-xs italic">{errors?.total_cost?.message}</p>}
                            </div>
                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Down Payment
                                </label>
                                <input
                                    className={errors.down_payment ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('down_payment', { required: 'Down Payment is required' })}
                                />

                                {errors.down_payment && <p className="text-red-500 text-xs italic">{errors?.down_payment?.message}</p>}
                            </div>
                            <div className="relative input-group">
                                <label htmlFor="term" className="label">
                                    Term
                                </label>

                                <div className="relative w-full">
                                    <select
                                        className={`select w-full appearance-none p-4 pr-10 ${isIcon ? 'border-blue-500' : 'border-gray-300'} ${errors?.term ? 'border border-red-500' : ''}`}
                                        {...register('term', { required: 'Term is required' })}
                                    >
                                        <option value="">Select a term</option> {/* Placeholder */}
                                        {financeTermTears.map((financeTermTear) => (
                                            <option key={financeTermTear.value} value={financeTermTear.value}>
                                                {financeTermTear.label}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Custom Dropdown Icon */}
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <Image
                                            src={isIcon ? "/images/collaps-arrow-up.svg" : "/images/collaps-arrow-down.svg"}
                                            alt="dropdown icon"
                                            width={24} // Adjust the size as needed
                                            height={24}
                                        />
                                    </span>
                                </div>

                                {/* Error Message */}
                                {errors?.term && <p className="text-red-500 text-xs italic">{errors.term.message}</p>}
                            </div>
                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Interest Rate
                                </label>
                                <input
                                    className={errors.interest_rate ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('interest_rate', { required: 'Interest Rate is required' })}
                                />

                                {errors.interest_rate && <p className="text-red-500 text-xs italic">{errors?.interest_rate?.message}</p>}
                            </div>
                        </div>

                    </form>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}