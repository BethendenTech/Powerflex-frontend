"use client";

import { createStore, StateMachineProvider } from "little-state-machine";
import { defaultLittleState } from "@/little-state/littleStateData";
import { QuotationProvider } from "@/contexts/QuotationProvider";
import { Box, Container } from "@mui/material";
import { DialogProvider } from "@/providers/dialogProvider";

createStore(defaultLittleState);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StateMachineProvider>
            <QuotationProvider>
                <DialogProvider>
                    <Box sx={{ backgroundColor: "#F1F1F1" }} pb={4}>
                        <Container>
                            <Box mt={8} >
                                {children}
                            </Box>
                        </Container>
                    </Box>
                </DialogProvider>
            </QuotationProvider>
        </StateMachineProvider>
    );
}
