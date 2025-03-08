"use client";

import { Box, Container } from "@mui/material";
import { DialogProvider } from "@/providers/dialogProvider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DialogProvider>
            <Box sx={{ backgroundColor: "#F0F9FF" }} pb={4}>
                <Container>
                    <Box mt={8} >
                        {children}
                    </Box>
                </Container>
            </Box>
        </DialogProvider>
    );
}
