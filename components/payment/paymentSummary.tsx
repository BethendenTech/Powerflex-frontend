"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";

interface ComponentProps {
    quote: QuoteInterface;
}

const PaymentSummaryCard = ({ quote }: ComponentProps) => {
    const { actions, state } = useStateMachine({ updateAction });

    return (
        <>
            <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black'>Outright Purchase</h5>
            <div className='bg-[#ffffff] rounded-[7px] p-3'>
                
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="sub-content text-left">Equipment</td>
                            <th className="sub-content text-right">{quote?.total_equipments}</th>
                        </tr>
                    </tbody>
                </table>

                <table className="table-auto w-full">
                    <tbody>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Solar panels</td>
                            <th className="sub-content text-left">{quote?.number_of_panels}</th>
                        </tr>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Inverters</td>
                            <th className="sub-content text-left">{quote?.number_of_inverters}</th>
                        </tr>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Batteries</td>
                            <th className="sub-content text-left">{quote?.number_of_batteries}</th>
                        </tr>
                    </tbody>
                </table>

                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="sub-content text-left">Installation</td>
                            <th className="sub-content text-right">₦{quote?.miscellaneous_cost}</th>
                        </tr>
                    </tbody>
                </table>

                <div className='text-center'>
                    <h5 className='font-bold text-black'>Total Cost</h5>
                    <h5 className='font-bold text-black'>₦{quote?.total_cost_naira}</h5>
                </div>
            </div>
        </>
    )
}

export default PaymentSummaryCard;
