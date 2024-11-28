import { Button, styled } from "@mui/material";

export const BannerGlowingButton = styled(Button)(({ }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: `1px solid rgba(255, 255, 255, 1)`,
    textTransform: 'capitalize',
    position: "relative",
    overflow: "hidden",
    '&:hover': {
        background: `linear-gradient(90deg, rgba(0, 131, 223, 0.8) 0%, rgba(3, 216, 221, 0.8) 100%)`,
        border: `1px solid #1072F2`,
        backdropFilter: "blur(12px)",
        borderColor: `1px solid rgba(255, 255, 255, 1)`,
        '&:before': {
            content: '""',
            position: "absolute",
            top: "4px",
            left: "4px",
            right: "4px",
            bottom: "4px",
            border: "2px solid #FFFFFF4D",
            borderRadius: "inherit",
        },
    },
}));