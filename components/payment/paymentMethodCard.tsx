import React, { useState } from 'react';

const PaymentMethodCard = () => {
    const [selectedMethod, setSelectedMethod] = useState('credit');

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <ul className="border rounded-lg divide-y divide-gray-200">
                    <li
                        className={`p-4 cursor-pointer flex items-center justify-between ${selectedMethod === 'credit' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedMethod('credit')}
                    >
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="credit"
                                checked={selectedMethod === 'credit'}
                                onChange={() => setSelectedMethod('credit')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <span className="ml-3 text-lg">Credit/Debit Card</span>
                        </label>
                    </li>
                    <li
                        className="p-4 cursor-pointer flex items-center justify-between"
                        onClick={() => setSelectedMethod('paypal')}
                    >
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="paypal"
                                checked={selectedMethod === 'paypal'}
                                onChange={() => setSelectedMethod('paypal')}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <span className="ml-3 text-lg">PayPal</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PaymentMethodCard;
