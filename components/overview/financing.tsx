"use client";

import { useState } from "react";
import { FinancingTermModal } from "./financeTermModal";
import { interestRateValue, interestTermValue } from "@/utils/formData";
import { BusinessOrIndividualCheckBox } from "./businessOrIndividual";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import IndividualApplicationForm from "./individualApplicationForm";
import BusinessApplicationForm from "./businessApplicationForm";
interface ComponentProps {
    quote: QuoteInterface;
}

export const FinancingPurchase = ({ quote }: ComponentProps) => {
    const { actions, state } = useStateMachine({ updateAction });

    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="mt-4">

            <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                <div className="w-full pt-4 pb-4 mb-2">

                    <div className="px-6 rounded overflow-hidden shadow-lg">
                        <ul role="list">
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Down payment</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">₦100</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly payment</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">₦75</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Term</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{interestTermValue} Years</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Interest rate</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-normal leading-6 text-gray-900">{interestRateValue}%</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div className="px-6 rounded overflow-hidden shadow-lg">
                        <ul role="list">
                            
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Equipment</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">₦{quote.total_cost_naira}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Installation</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">₦{quote.total_inverter_cost_naira}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Cabling Cost</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">₦{quote.cabling_cost}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">VAT</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{quote.vat}%</p>
                                </div>
                            </li>




                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Due Today</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">₦{quote.total_cost_with_profit}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <button type='button' className={`px-7 py-2.5 mb-3 text-white text-sm font-harmonia font-normal leading-[1.3] tab-btn`} onClick={() => setModalOpen(true)}>Edit Finance Terms</button>

            <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

            <BusinessOrIndividualCheckBox />

            {state && state.business_role == "individual" && <IndividualApplicationForm />}
            {state && state.business_role == "business" && <BusinessApplicationForm />}



        </div>
    )
}