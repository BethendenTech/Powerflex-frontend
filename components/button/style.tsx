import { Button, styled } from "@mui/material";

export const BannerGlowingButton = styled(Button)(({ }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 1)',
    textTransform: 'inherit',
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(90deg, rgba(0, 131, 223, 0.8) 0%, rgba(3, 216, 221, 0.8) 100%)`,
    border: `1px solid rgba(255, 255, 255, 1)`,
    backdropFilter: "blur(12px)",
    borderColor: `1px solid rgba(255, 255, 255, 1)`,
    boxShadow: `0 0 12px #1072F2, 0 0 12px rgba(16, 114, 242, 0.9)`,
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
    '&:hover': {
        background: `linear-gradient(90deg, rgba(0, 131, 223, 0.8) 0%, rgba(3, 216, 221, 0.8) 100%)`,
        border: `1px solid rgba(255, 255, 255, 1)`,
        backdropFilter: "blur(12px)",
        borderColor: `1px solid rgba(255, 255, 255, 1)`,
        boxShadow: `0 0 12px #1072F2, 0 0 12px rgba(16, 114, 242, 0.9)`,
    },
}));

export const BannerNormalButton = styled(Button)(({ }) => ({
    fontSize: "16px",
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: `1px solid rgba(255, 255, 255, 1)`,
    textTransform: 'capitalize',
    position: "relative",
    overflow: "hidden",
    '&:hover': {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        border: `1px solid rgba(255, 255, 255, 1)`,
        borderColor: `1px solid rgba(255, 255, 255, 1)`,
    },
}));