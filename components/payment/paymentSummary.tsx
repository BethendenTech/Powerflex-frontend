const PaymentSummaryCard = () => {
    return (
        <>
            <h5 className='font-harmonia text-base font-bold leading-[19.79px] text-left text-black'>Outright Purchase</h5>
            <div className='bg-[#ffffff] rounded-[7px] p-3'>
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="sub-content text-left">Equipment</td>
                            <th className="sub-content text-right">value</th>
                        </tr>
                    </tbody>
                </table>

                <table className="table-auto w-full">
                    <tbody>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Solar panels</td>
                            <th className="sub-content text-left">value</th>
                        </tr>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Inverters</td>
                            <th className="sub-content text-left">value</th>
                        </tr>
                        <tr className='pl-4 flex justify-around'>
                            <td className="sub-content text-left">Batteries</td>
                            <th className="sub-content text-left">value</th>
                        </tr>
                    </tbody>
                </table>

                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="sub-content text-left">Installation</td>
                            <th className="sub-content text-right">value</th>
                        </tr>
                    </tbody>
                </table>

                <div className='text-center'>
                    <h5 className='font-bold text-black'>Total Cost</h5>
                    <h5 className='font-bold text-black'>£5000</h5>
                </div>
            </div>
        </>
    )
}

export default PaymentSummaryCard;
