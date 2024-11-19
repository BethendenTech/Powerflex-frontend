"use client";

import updateAction from "@/little-state/action";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TotalSummary } from "../payment/totalSummary";
import { QuoteInterface } from "@/types/quotation";
import { Box, Button } from "@mui/material";

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
        <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                    <div className="w-full pt-4 pb-4 mb-2">
                        <TotalSummary quote={quote} />
                    </div>
                </div>
            </div>

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