"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export const FinanceSelectToggle = (props) => {
    const { is_finance, handleChange } = props;

    return (
        <ToggleButtonGroup
            sx={{
                boxShadow: "0px 2px 8px 0px #00000040 inset",
                border: 'none'
            }}
            color="primary"
            value={is_finance}
            exclusive
            onChange={(e, value) => handleChange(value)}
            fullWidth
            size='small'
        >
            <ToggleButton sx={{
                fontFamily: "'Harmonia Sans Pro', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                textTransform: 'capitalize',
                color: (theme) => (is_finance === false ? theme.palette.common.white : theme.palette.common.black),
                "&.Mui-selected": {
                    color: "#FFFFFF",
                },
                "&:hover": {
                    background: "transparent"
                }
            }}
                value={false}>
                Outright Purchase
            </ToggleButton>
            <ToggleButton sx={{
                fontFamily: "'Harmonia Sans Pro', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                textTransform: 'capitalize',
                color: (theme) => (is_finance === true ? theme.palette.common.white : theme.palette.common.black),
                "&.Mui-selected": {
                    color: "#FFFFFF",
                },
                "&:hover": {
                    background: "transparent"
                }
            }}
                value={true}
            >
                Financing
            </ToggleButton>
        </ToggleButtonGroup>
    )
}