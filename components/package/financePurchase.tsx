"use client";

import { Box } from "@mui/material";
import { BusinessOrIndividualCheckBox } from "../overview/businessOrIndividual";
import React from "react";
import IndividualApplicationForm from "./individualApplicationForm";
import BusinessApplicationForm from "./businessApplicationForm";

export const PackageFinancePurchase = (props) => {
    const { package_id, amount } = props;

    const [businessRole, setBusinessRole] = React.useState("individual");

    const handleToggle = (id: any) => {
        setBusinessRole(id);
    };

    return (
        <Box mt={2}>
            <BusinessOrIndividualCheckBox value={businessRole} handleToggle={handleToggle} />


            {businessRole == "individual" && <IndividualApplicationForm package_id={package_id} amount={amount} />}
            {businessRole == "business" && <BusinessApplicationForm package_id={package_id} amount={amount} />}
        </Box>
    )
}