"use client";

import { useState } from "react";

import { BusinessOrIndividualCheckBox } from "../businessOrIndividual";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import IndividualApplicationForm from "../individualApplicationForm";
import BusinessApplicationForm from "../businessApplicationForm";
import { TotalSummary } from "../../payment/totalSummary";
import { Box } from "@mui/material";
import { FinancingTermModal } from "./financeTermModal";

export const FinancingPurchase = () => {
    const { state } = useStateMachine({ updateAction });
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <Box>
            <TotalSummary />
            {/* <Chip color="primary" onClick={() => setModalOpen(true)} label="Edit Finance Terms" /> */}

            {isModalOpen == true && <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}

            <BusinessOrIndividualCheckBox />

            {state && state.business_role == "individual" && <IndividualApplicationForm />}
            {state && state.business_role == "business" && <BusinessApplicationForm />}
        </Box>
    )
}