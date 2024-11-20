"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { QuoteInterface } from "@/types/quotation";
import { Box, Button } from "@mui/material";
import { TotalSummary } from "@/components/payment/totalSummary";

interface ComponentProps {
    quote: QuoteInterface;
}

export const OutRightPurchase = ({ quote }: ComponentProps) => {

    const router = useRouter();
    const { actions } = useStateMachine({ updateAction });

    const { handleSubmit } = useForm({
        defaultValues: {
        }
    });


    const onSubmit = async (formData: any) => {
        try {
            console.log('formData', formData)
            actions.updateAction(formData);

            router.push(`/quotation/payment-summary`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TotalSummary quote={quote} isFinance={false} />

            <Box position="sticky" bottom={0}>
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