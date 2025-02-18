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
    const [isModalOpen, setModalOpen] = useState(false);

    const { actions, state } = useStateMachine({ updateAction });

    const handleToggle = (id: any) => {
        actions.updateAction({ business_role: id });
    };

    return (
        <Box>
            <TotalSummary />
            {/* <Chip color="primary" onClick={() => setModalOpen(true)} label="Edit Finance Terms" /> */}

            {isModalOpen == true && <FinancingTermModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}

            <BusinessOrIndividualCheckBox value={state.business_role} handleToggle={handleToggle} />

            {state && state.business_role == "individual" && <IndividualApplicationForm />}
            {state && state.business_role == "business" && <BusinessApplicationForm />}
        </Box>
    )
}