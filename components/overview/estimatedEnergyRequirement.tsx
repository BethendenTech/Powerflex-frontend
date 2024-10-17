export const EstimatedEnergyRequirement = (props) => {
    const { quote } = props
    return (
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
                            <p className="text-sm font-bold leading-6 text-gray-900">{quote.number_of_panels}</p>
                        </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number of inverters</p>
                            </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm font-bold leading-6 text-gray-900">{quote.number_of_inverters}</p>
                        </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Number/size of batteries</p>
                            </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm font-bold leading-6 text-gray-900">{quote.number_of_batteries}</p>
                        </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-2">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Recommended battery size</p>
                            </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm font-bold leading-6 text-gray-900">{quote.number_of_batteries}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}