"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface ComponentProps {
    quote: QuoteInterface;
}

export const OutRightPurchase = ({ quote }: ComponentProps) => {

    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
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

    return (
        <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4 pb-4 mb-2">
                        <ul role="list">
                            <li className="flex justify-between gap-x-6 py-2 mb-3">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Total Cost</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">£{quote.total_cost_naira}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Equipment</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">£{quote.total_battery_cost_naira}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Installation</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">£{quote.total_inverter_cost_naira}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Profit margin</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">£{quote.total_cost_with_profit}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Due Today</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">£{quote.total_cost_naira}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                >
                    Proceed to Payment
                </button>
            </div>
        </form>
    )
}