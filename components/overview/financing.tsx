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

                    <TotalFinancingSummary quote={quote} />

                    <TotalSummary quote={quote} />
                </div>
            </div>

            <button type='button' className={`px-7 py-2.5 mb-3 text-white text-sm font-harmonia font-normal leading-[1.3] tab-btn`} onClick={() => setModalOpen(true)}>Edit Finance Terms</button>

            {isModalOpen && <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}

            <BusinessOrIndividualCheckBox />

            {state && state.business_role == "individual" && <IndividualApplicationForm />}
            {state && state.business_role == "business" && <BusinessApplicationForm />}



        </div>
    )
}