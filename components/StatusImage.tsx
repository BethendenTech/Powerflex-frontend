import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export interface Status {
    status: number;
}

export default function StatusImage(props: Status) {
    return (
        <Box mb={2} textAlign="center">
            <Image
                src={`/images/status-${props.status}.svg`}
                alt="powerflex"
                width={150}
                height={150}
                className="m-auto"
            />
        </Box>
    );
}
