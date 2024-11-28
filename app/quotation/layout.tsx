"use client";

import { createStore, StateMachineProvider } from "little-state-machine";
import { defaultLittleState } from "@/little-state/littleStateData";
import { QuotationProvider } from "@/contexts/QuotationProvider";
import { Box, Grid2 } from "@mui/material";

createStore(defaultLittleState);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StateMachineProvider>
            <QuotationProvider>
                <Box mt={8} sx={{ backgroundColor: "#F1F1F1" }}>
                    <Grid2 container>
                        <Grid2 size={{ xs: 'grow', md: 6 }} offset={{ md: 3 }}>
                            {children}
                        </Grid2>
                    </Grid2>
                </Box>
            </QuotationProvider>
        </StateMachineProvider>
    );
}
