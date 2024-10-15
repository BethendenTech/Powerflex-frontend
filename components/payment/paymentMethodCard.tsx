import updateAction from '@/little-state/action';
import { paymentMethods } from '@/utils/paymentData';
import { useStateMachine } from 'little-state-machine';
import React, { useState } from 'react';

const PaymentMethodCard = () => {
    const { actions, state } = useStateMachine({ updateAction });

    const onChangeMethod = (code: string) => {
        const formData = {
            payment_method: code
        };
        actions.updateAction(formData);
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <ul className="border rounded-lg divide-y divide-gray-200">

                    {paymentMethods && paymentMethods.map((paymentMethod) => {

                        return (
                            <li
                                className="p-4 cursor-pointer flex items-center justify-between"
                                onClick={() => onChangeMethod(paymentMethod.value)}
                            >
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={paymentMethod.value}
                                        checked={state.payment_method === paymentMethod.value}
                                        onChange={() => onChangeMethod(paymentMethod.value)}
                                        className="form-radio h-5 w-5 text-blue-600"
                                    />
                                    <span className="ml-3 text-lg">{paymentMethod.label}</span>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PaymentMethodCard;
