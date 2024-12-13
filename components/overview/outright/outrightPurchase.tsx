"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { TotalSummary } from "@/components/payment/totalSummary";
import useQuotation from "@/hooks/quotation";
import { useRouter } from "next/navigation";
import { NextButton } from "@/components/button/style";

export const OutRightPurchase = () => {
    const { createQuote } = useQuotation();
    const { actions } = useStateMachine({ updateAction });
    const router = useRouter();
    const { handleSubmit } = useForm({
        defaultValues: {
        }
    });


    const onSubmit = async (formData: any) => {
        try {
            actions.updateAction(formData);
            let response = await createQuote()
            if (response.ok) {
                router.push(`/quotation/payment-process`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TotalSummary />

            <Box position="sticky" bottom={0} mt={2}>
                <NextButton
                    fullWidth
                    type="submit"
                    variant='contained'
                >
                    Proceed to Payment
                </NextButton>
            </Box>
        </form>
    )
}