"use client"; // This is a client component

import { useState } from 'react';
import StatusImage from '../components/StatusImage';

export default function Page() {

    const [activeTab, setActiveTab] = useState('Outright Purchase');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="pb-[260px] w-full p-[25px] m-auto max-w-[580px] sm:w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <StatusImage status={2} />
            <main className="w-full flex flex-col gap-2 row-start-2 items-center sm:items-center">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4 pb-4 mb-2">
                        <div className="w-full container mx-auto text-center flex flex-col gap-4">
                            <p className="heading">Overview</p>
                        </div>
                        <ul role="list" className="divide-y divide-gray-400">
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly Spend</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">1000 N</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Electricity band group</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">Band B</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Coverage Percentage</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">75%</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Battery Autonomy</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">12 hours - 2 days</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2"></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4 pb-4 mb-2">
                        <div className="w-full container mx-auto text-left flex flex-col gap-4 pb-3">
                            <p className="text-lg font-harmonia font-bold leading-[1.3] text-left text-black">Estimated energy requirement</p>
                        </div>
                        <ul role="list">
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number of solar panels</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number of inverters</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number/size of batteries</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                                </div>
                            </li>
                            <li className="flex justify-between gap-x-6 py-2">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Recommended battery size</p>
                                    </div>
                                </div>
                                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm font-bold leading-6 text-gray-900">{`<X>`}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full p-4">
                    {/* Tabs */}
                    <div className="rounded-[12px] flex border-b border-gray-300 bg-[#FFFFFF] p-1" style={{ boxShadow: 'inset 0px 2px 8px 0px #00000040', justifyContent: 'space-between' }}>
                        <button
                            className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${activeTab === 'Outright Purchase' ? 'tab-btn' : 'text-black text-[#424242]'}`}
                            onClick={() => setActiveTab('Outright Purchase')}
                        >
                            Outright Purchase
                        </button>
                        <button
                            className={`px-7 py-2.5 text-sm font-harmonia font-normal leading-[1.3] ${activeTab === 'Financing' ? 'tab-btn' : 'text-black text-[#424242]'}`}
                            onClick={() => setActiveTab('Financing')}
                        >
                            Financing
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-4">
                        {activeTab === 'Outright Purchase' && (
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
                                                <p className="text-sm font-bold leading-6 text-gray-900">£5000</p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-2">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Equipment</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">£4500</p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-2">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Installation</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">£500</p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-2">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Profit margin</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">{`<x>`}</p>
                                            </div>
                                        </li>
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
                                    <div
                                        className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                                        rel="noopener noreferrer"
                                    >
                                        Proceed to Payment
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Financing' && (
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
                                                <p className="text-sm leading-6 text-gray-900">4 Years</p>
                                            </div>
                                        </li>
                                        <li className="flex justify-between gap-x-6 py-2">
                                            <div className="flex min-w-0 gap-x-4">
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Interest rate</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm font-normal leading-6 text-gray-900">7.5%</p>
                                            </div>
                                        </li>
                                        <button
                                            className={`px-7 py-2.5 mb-3 text-sm font-harmonia font-normal leading-[1.3] tab-btn`}
                                            onClick={openModal}
                                        >
                                            Edit Finance Terms
                                        </button>
                                    </ul>
                                    <div
                                        className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                                        rel="noopener noreferrer"
                                    >
                                        Apply for Financing
                                    </div>
                                </div>
                            </div>
                        )}

                        {isModalOpen && (
                            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                        <svg
                                                            className="h-6 w-6 text-red-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                                            Deactivate account
                                                        </h3>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                                Are you sure you want to deactivate your account? All of your data will be permanently
                                                                removed. This action cannot be undone.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                >
                                                    Deactivate
                                                </button>
                                                <button
                                                    type="button"
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* fetch content 1*/}
            <>
                <table className="table-auto w-full">
                    <tbody>
                        <tr className="border-b border-gray-300">
                            <td className="text-left text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly spend</td>
                            <th className="text-right text-sm font-bold leading-6 text-gray-900">{state?.electricity_spend}</th>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="text-left text-sm font-harmonia font-normal leading-[1.3] text-black">Electricity band group</td>
                            <th className="text-right text-sm font-bold leading-6 text-gray-900">{state?.price_band}</th>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="text-left text-sm font-harmonia font-normal leading-[1.3] text-black">Coverage Percentage</td>
                            <th className="text-right text-sm font-bold leading-6 text-gray-900">75%</th>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="text-left text-sm font-harmonia font-normal leading-[1.3] text-black">Battery Autonomy</td>
                            <th className="text-right text-sm font-bold leading-6 text-gray-900">{state?.battery_autonomy_hours_only} Hours - {state?.battery_autonomy_days} Days</th>
                        </tr>
                    </tbody>
                </table>
            </>

            {/* contet 2 */}
            <>
                <h5 className='font-bold'>Estimated energy requirement</h5>
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="text-left">Number of solar panels</td>
                            <th className="text-right">value</th>
                        </tr>
                        <tr>
                            <td className="text-left">Number of inverters</td>
                            <th className="text-right">value</th>
                        </tr>
                        <tr>
                            <td className="text-left">Number/size of batteries</td>
                            <th className="text-right">value</th>
                        </tr>
                        <tr>
                            <td className="text-left">Recommended battery size</td>
                            <th className="text-right">value</th>
                        </tr>
                    </tbody>
                </table>
            </>
        </div>
    );
}
