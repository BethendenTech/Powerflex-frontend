const PaymentSummaryCard = () => {
    return (
        <div>
            <h5 className='font-bold'>Outright Purchase</h5>

            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="text-left">Equipment</td>
                        <th className="text-right">value</th>
                    </tr>
                </tbody>
            </table>


            <table className="table-auto w-full ">
                <tbody>
                    <tr className='pl-4'>
                        <td className="text-left">Solar panels</td>
                        <th className="text-left">value</th>
                    </tr>
                    <tr>
                        <td className="text-left">Inverters</td>
                        <th className="text-left">value</th>
                    </tr>
                    <tr>
                        <td className="text-left">Batteries</td>
                        <th className="text-left">value</th>
                    </tr>
                </tbody>
            </table>

            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="text-left">Installation</td>
                        <th className="text-right">value</th>
                    </tr>
                </tbody>
            </table>

            <div className='text-center'>
                <h5 className='font-bold'>Total Cost</h5>
                <h5 className='font-bold'>£5000</h5>
            </div>
        </div>
    )
}

export default PaymentSummaryCard;
