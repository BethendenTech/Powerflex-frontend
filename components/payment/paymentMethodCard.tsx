"use client";

import updateAction from '@/little-state/action';
import { paymentMethods } from '@/utils/paymentData';
import { Box, Divider, FormControl, FormControlLabel, FormLabel, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import React from 'react';

const PaymentMethodCard = () => {
    const { actions, state } = useStateMachine({ updateAction });

    const onChangeMethod = (code: string) => {
        const formData = {
            payment_method: code
        };
        actions.updateAction(formData);
    }

    return (
        <Box>


            <FormControl
                fullWidth
            >
                <FormLabel>Payment Method</FormLabel>

                <RadioGroup

                    name="payment"
                    value={state.payment_method}
                    onChange={(event) => onChangeMethod(event.target.value)}
                    sx={{
                        mt: 1,
                        backgroundColor: "white",
                        borderRadius: 2,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        paddingTop: 1,
                        paddingLeft: 2
                    }}
                >
                    {paymentMethods &&
                        paymentMethods.map((paymentMethod) => (
                            <>
                                <FormControlLabel
                                    value={paymentMethod.value}
                                    control={<Radio />}
                                    label={paymentMethod.label}
                                    labelPlacement="end"
                                />
                                <Divider />
                            </>
                        ))}
                </RadioGroup>
            </FormControl>


        </Box>
    );
};

export default PaymentMethodCard;
