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

export const NavbarButton = styled(Button)(({ }) => ({
    fontSize: "12.36px",
    fontWeight: 700,
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    boxShadow: 'none',
    width: 160,
    background: "linear-gradient(90deg, #0087FF 0%, #EF238D 100%)",
    backdropFilter: "blur(12px)",
    borderColor: `1px solid rgba(255, 255, 255, 1)`,
    borderRadius: '25px',
    '&:hover': {
        background: "linear-gradient(90deg, #0087FF 0%, #EF238D 100%)",
        boxShadow: 'none',
    },
    '&:before': {
        content: '""',
        position: "absolute",
        top: "6px",
        left: "6px",
        right: "6px",
        bottom: "6px",
        border: "2px solid #FFFFFF80",
        borderRadius: "inherit",
    },
}));