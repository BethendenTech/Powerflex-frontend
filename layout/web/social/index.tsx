import { Box, Paper } from "@mui/material";
import React from "react";
import Link from "next/link";

export const SocialIcon = () => {
    const CallNumber = "+2347074109549";

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: {
                    lg: 20,
                    md: 20,
                    sm: "unset",
                    xs: "unset",
                },
                top: {
                    lg: "unset",
                    md: "unset",
                    sm: 75,
                    xs: 75,
                },
                right: 20,
                zIndex: 1400,
            }}
        >
            <Box
                component={Paper}
                sx={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    overflow: "hidden",
                }}
            >
                <Link href={`https://wa.me/${CallNumber}`} target="_blank">
                    <Box component="img" src="/images/home/whatsapp-icon.svg" />
                </Link>
            </Box>
        </Box>
    );
};
