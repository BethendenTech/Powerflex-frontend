"use client";

import updateAction from '@/little-state/action';
import { paymentMethods } from '@/utils/paymentData';
import { Box, Divider, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import React from 'react';
import { FormTitle } from '../form/style';

const PaymentMethodCard = () => {
    const { actions, state } = useStateMachine({ updateAction });

    const onChangeMethod = (code: string) => {
        const formData = {
            payment_method: code
        };
        actions.updateAction(formData);
    }

    return (
        <Box mb={4}>
            <FormControl
                fullWidth
            >
                <FormTitle sx={{ fontWeight: 700, color: "#000000 !important" }}>Payment Method</FormTitle>

                <RadioGroup

                    name="payment"
                    value={state.payment_method}
                    onChange={(event) => onChangeMethod(event.target.value)}
                    sx={{
                        mt: 1,
                        backgroundColor: "white",
                        borderRadius: 2,
                        paddingTop: 1,
                        paddingLeft: 2,
                        paddingRight: 2,
                    }}
                >
                    {paymentMethods &&
                        paymentMethods.map((paymentMethod, index) => (
                            <Box key={paymentMethod.value}>
                                <FormControlLabel
                                    value={paymentMethod.value}
                                    control={<Radio />}
                                    label={paymentMethod.label}
                                    labelPlacement="end"
                                    sx={{
                                        p: "6px 12px",
                                        "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
                                            fontFamily: "'Harmonia Sans Pro', sans-serif",
                                            fontWeight: 400,
                                            fontSize: "16px",
                                        }
                                    }}
                                />
                                {index < paymentMethods.length - 1 && <Divider />}
                            </Box>
                        ))}
                </RadioGroup>
            </FormControl>


        </Box>
    );
};

export default PaymentMethodCard;
