"use client";

import updateAction from "@/little-state/action";
import { vatRateValue } from "@/utils/formData";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TotalSummary } from "../payment/totalSummary";

interface ComponentProps {
    quote: QuoteInterface;
}

export const OutRightPurchase = ({ quote }: ComponentProps) => {

    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
        }
    });

    const allValues = watch();

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
                        <TotalSummary quote={quote}/>
                    </div>
                </div>
            </div>

            <div className="m-auto max-w-[570px] bottom-fixed fixed bottom-0 w-full p-5 pb-[10px]">
                <button
                    type='submit'
                    className="mt-[15px] btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5"
                    rel="noopener noreferrer"
                >
                    Proceed to Payment
                </button>
            </div>
        </form>
    )
}