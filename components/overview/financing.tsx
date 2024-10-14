"use client";

import { useState } from "react";
import { FinancingTermModal } from "./financeTermModal";

export const FinancingPurchase = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <table className="table-auto w-full">
                <tbody>
                    <tr className="border-b border-gray-300">
                        <th className="text-left">Total Cost</th>
                        <th className="text-right">£7000</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Down payment</td>
                        <th className="text-right">£100</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Monthly payment</td>
                        <th className="text-right">£75</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Term</td>
                        <th className="text-right">4 Years</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Interest rate</td>
                        <th className="text-right">7.5%</th>
                    </tr>
                </tbody>
            </table>

            <button type='button' className='btn bg-blue-500 text-white mt-5 px-4 rounded-r-lg' onClick={() => setModalOpen(true)}>Edit Finance Terms</button>

            <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </div>
    )
}