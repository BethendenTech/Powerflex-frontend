"use client"; 

import updateAction from '@/little-state/action';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useStateMachine } from 'little-state-machine';

export const FinanceSelectToggle = () => {
    const { actions, state } = useStateMachine({ updateAction });

    const handleToggle = (id: any) => {
        const formData = {
            is_finance: id
        }
        actions.updateAction(formData);
    };
    return (
        <ToggleButtonGroup
            sx={{
                boxShadow: "0px 2px 8px 0px #00000040 inset",
                border: 'none'
            }}
            color="primary"
            value={state.is_finance}
            exclusive
            onChange={(e, value) => handleToggle(value)}
            fullWidth
            size='small'
        >
            <ToggleButton sx={{
                fontFamily: "'Harmonia Sans Pro', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                textTransform: 'capitalize',
                color: (theme) => (state.is_finance === false ? theme.palette.common.white : theme.palette.common.black),
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
                color: (theme) => (state.is_finance === true ? theme.palette.common.white : theme.palette.common.black),
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