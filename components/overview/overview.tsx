import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";

export const OverviewData = () => {
    const { state } = useStateMachine({ updateAction });

    return (
        <ul role="list" className="divide-y divide-gray-400">
            <li className="flex justify-between gap-x-6 py-2">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Monthly Spend</p>
                    </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm font-bold leading-6 text-gray-900">{state?.electricity_spend}</p>
                </div>
            </li>
            <li className="flex justify-between gap-x-6 py-2">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-harmonia font-normal leading-[1.3] text-black">Electricity band group</p>
                    </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm font-bold leading-6 text-gray-900">{state?.price_band}</p>
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
                    <p className="text-sm font-bold leading-6 text-gray-900">
                        {state?.battery_autonomy_hours_only} Hours - {state?.battery_autonomy_days} Days
                    </p>
                </div>
            </li>

            <li className="flex justify-between gap-x-6 py-2"></li>
        </ul>
    )
}