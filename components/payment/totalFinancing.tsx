import { renderNaira } from "@/utils/currency";
import { interestRateValue, interestTermValue } from "@/utils/formData";

export const TotalFinancingSummary = () => {
    return (
        <div className="border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal mb-2">

            <div className="pb-2">
                <p className="text-sm text-gray-600 flex items-center">
                    Financing Summary
                </p>
            </div>

            <ul role="list">
                <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Down payment</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{renderNaira(100)}</p>
                    </div>
                </li>
                <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly payment</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{renderNaira(75)}</p>
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
    )
}