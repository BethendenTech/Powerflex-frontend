"use client";

import { useState } from "react";
import { FinancingTermModal } from "./financeTermModal";
import { BusinessOrIndividualCheckBox } from "./businessOrIndividual";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import IndividualApplicationForm from "./individualApplicationForm";
import BusinessApplicationForm from "./businessApplicationForm";
import { TotalSummary } from "../payment/totalSummary";
import { TotalFinancingSummary } from "../payment/totalFinancing";
import { QuoteInterface } from "@/types/quotation";
import { Button, Chip } from "@mui/material";
interface ComponentProps {
    quote: QuoteInterface;
}

export const FinancingPurchase = ({ quote }: ComponentProps) => {
    const { state } = useStateMachine({ updateAction });
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="mt-4">

            <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
                <div className="w-full pt-4 pb-4 mb-2">

                    {/* <TotalFinancingSummary /> */}

                    <TotalSummary quote={quote} />
                </div>
            </div>

            <Chip color="primary" onClick={() => setModalOpen(true)} label="Edit Finance Terms" />

            {isModalOpen == true && <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}

            <BusinessOrIndividualCheckBox />

            {state && state.business_role == "individual" && <IndividualApplicationForm />}
            {state && state.business_role == "business" && <BusinessApplicationForm />}


        </div>
    )
}