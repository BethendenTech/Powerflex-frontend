"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { TotalSummary } from "@/components/payment/totalSummary";
import useQuotation from "@/hooks/quotation";
import { useRouter } from "next/navigation";

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
            let response = createQuote()

            // if (response.ok) {
            //     router.push(`/quotation/payment-process`);
            // }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TotalSummary />

            <Box position="sticky" bottom={0} mt={2}>
                <Button
                    fullWidth
                    type="submit"
                    variant='contained'
                >
                    Proceed to Payment
                </Button>
            </Box>
        </form>
    )
}