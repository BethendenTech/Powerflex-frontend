"use client";

import { useRouter } from "next/navigation";
import React from "react";
import dynamic from 'next/dynamic';
import { Box } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import useQuotation from "@/hooks/quotation";
import { NextButton } from "../button/style";

const PaystackButton = dynamic(() => import('react-paystack').then(mod => mod.PaystackButton), {
    ssr: false, // This ensures that the component is only rendered on the client side
});

const PayStackPayment = () => {
    const router = useRouter();
    const { quote } = useQuotation();

    const { state } = useStateMachine({ updateAction });

    const config = {
        reference: (new Date()).getTime().toString(),
        email: state.email,
        amount: Math.round(quote.total_cost_with_profit * 100), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        // publicKey: 'pk_live_68bf085a038d0f3e09dced6caab850db147d4c87',
        publicKey: 'pk_test_8a80005eb3a847c0a9a423d97f1c71cfe34d9215',
    };

    // you can call this function anything
    const handleSuccessAction = async (reference: any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);

        let formData = {
            "quote_number": state.quote_number,
            "status": "paid"
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-quote/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.push(`/quotation/payment-success`);
        }
    };

    // you can call this function anything
    const handleCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }


    return (

        <Box position="sticky" bottom={0} mt={2}>
            <NextButton
                {...config}
                text="Pay Now"
                variant="contained"
                fullWidth
                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                onSuccess={(reference: any) => handleSuccessAction(reference)}
                onClose={handleCloseAction}
                component={PaystackButton}
            />
        </Box>

    );
};

export default PayStackPayment;
