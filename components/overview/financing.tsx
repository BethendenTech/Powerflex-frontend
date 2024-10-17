"use client";

import { useState } from "react";
import { FinancingTermModal } from "./financeTermModal";
import { interestRateValue, interestTermValue } from "@/utils/formData";
import { BusinessOrIndividualCheckBox } from "./businessOrIndividual";
interface ComponentProps {
    quote: QuoteInterface;
}

export const FinancingPurchase = ({ quote }: ComponentProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
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
                                <p className="text-sm font-bold leading-6 text-gray-900">£7000</p>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-2">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Down payment</p>
                                </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">£100</p>
                            </div>
                        </li>
                        <li className="flex justify-between gap-x-6 py-2">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly payment</p>
                                </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">£75</p>
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
            </div>

            <button type='button' className={`px-7 py-2.5 mb-3 text-white text-sm font-harmonia font-normal leading-[1.3] tab-btn`} onClick={() => setModalOpen(true)}>Edit Finance Terms</button>

            <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

            <BusinessOrIndividualCheckBox />
        </div>
    )
}