"use client";

export const OutRightPurchase = () => {
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
                </div>
            </div>
        </div>
    )
}