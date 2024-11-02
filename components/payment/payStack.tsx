"use client";

import { renderNaira } from "@/utils/currency";
import { useRouter } from "next/navigation";
import React from "react";
import { PaystackButton } from "react-paystack";

interface ComponentProps {
    quote: QuoteInterface;
}
const PayStackPayment = ({ quote }: ComponentProps) => {
    const router = useRouter();

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: quote.total_cost_naira, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        // publicKey: 'sk_live_cf7887404952d8034ac7d143a9cdb63dbe5e7606',
        publicKey: 'sk_test_8e27f03e2719aad42d22ee0c294f2afd025a9790',
    };

    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        router.push(`/quotation/payment-success`);

    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
        <>
            <div className='gap-6 flex flex-col mt-6 pt-1'>
                <h5 className="font-harmonia text-base font-bold leading-[19.79px] text-left text-black">PayStack Payment</h5>

                {/* Submit Button */}
                <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                    <ul role="list">
                        <li className="flex justify-between gap-x-6 py-2">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-harmonia font-bold leading-[1.3] text-black">Due Today</p>
                                </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm font-bold leading-6 text-gray-900">{renderNaira(quote.total_cost_naira)}</p>
                            </div>
                        </li>
                    </ul>


                    <PaystackButton className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5" {...componentProps} />

                </div>
            </div>
        </>
    );
};

export default PayStackPayment;
