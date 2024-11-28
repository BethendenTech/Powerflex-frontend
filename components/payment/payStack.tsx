"use client";

import { QuoteInterface } from "@/types/quotation";
import { renderNaira } from "@/utils/currency";
import { useRouter } from "next/navigation";
import React, { Component } from "react";
import dynamic from 'next/dynamic';
import { Box, Button } from "@mui/material";

const PaystackButton = dynamic(() => import('react-paystack').then(mod => mod.PaystackButton), {
    ssr: false, // This ensures that the component is only rendered on the client side
});
interface ComponentProps {
    quote: QuoteInterface;
}
const PayStackPayment = ({ quote }: ComponentProps) => {
    const router = useRouter();

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: quote.total_cost_naira, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        // publicKey: 'Bearer sk_live_cf7887404952d8034ac7d143a9cdb63dbe5e7606',
        // publicKey: 'Bearer sk_test_8e27f03e2719aad42d22ee0c294f2afd025a9790',
        publicKey: 'pk_test_8a80005eb3a847c0a9a423d97f1c71cfe34d9215',
    };

    // you can call this function anything
    const handlePaystackSuccessAction = (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        router.push(`/quotation/payment-success`);

    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }


    return (

        <Box position="sticky" bottom={0} mt={2}>
            <Button
                {...config}
                text="Pay Now"
                variant="contained"
                fullWidth
                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                onSuccess={(reference: any) => handlePaystackSuccessAction(reference)}
                onClose={handlePaystackCloseAction}
                component={PaystackButton}
            />
        </Box>

    );
};

export default PayStackPayment;
