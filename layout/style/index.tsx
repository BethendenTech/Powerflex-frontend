import { Box, styled } from "@mui/material";

export const FooterSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#4F5F73",
    color: "#FFFFFF",
    paddingBottom: '2rem',
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    [theme.breakpoints.down("md")]: {
        paddingBottom: '1rem',
        paddingTop: '1rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
    }
}));