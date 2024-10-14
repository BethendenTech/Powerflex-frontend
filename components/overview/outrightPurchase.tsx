"use client";

export const OutRightPurchase = () => {
    return (
        <div>
            <table className="table-auto w-full">
                <tbody>
                    <tr className="border-b border-gray-300">
                        <th className="text-left">Total Cost</th>
                        <th className="text-right">£5000</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Equipment</td>
                        <th className="text-right">£4500</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Installation</td>
                        <th className="text-right">£500</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td className="text-left">Profit margin</td>
                        <th className="text-right">2</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <th className="text-left">Due Today</th>
                        <th className="text-right">£ 5000</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}