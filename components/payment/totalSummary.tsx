import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";

interface ComponentProps {
    quote: QuoteInterface;
}

export const TotalSummary = ({ quote }: ComponentProps) => {
    return (
        <div className="border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal mb-2">

            <div className="pb-2">
                <p className="text-sm text-gray-600 flex items-center">
                    Payment Summary
                </p>
            </div>

            <ul role="list">
                <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Equipment</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{renderNaira(quote.total_cost_naira)}</p>
                    </div>
                </li>
                <li className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Installation & Cabling</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{renderNaira(quote.installation_and_cabling)}</p>
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
                        <p className="text-sm font-bold leading-6 text-gray-900">{renderNaira(quote.total_cost_with_profit)}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}