"use client";

import updateAction from '@/little-state/action';
import { paymentMethods } from '@/utils/paymentData';
import { Box, FormControlLabel, List, ListItem, Radio, RadioGroup, Typography } from '@mui/material';
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
            <Typography variant="h6" fontWeight="bold">
                Payment Method
            </Typography>

            <List
            >
                <RadioGroup
                    name="payment"
                    value={state.payment_method}
                    onChange={(event) => onChangeMethod(event.target.value)}
                >
                    {paymentMethods &&
                        paymentMethods.map((paymentMethod) => (
                            <ListItem
                                key={paymentMethod.value}
                               
                                onClick={() => onChangeMethod(paymentMethod.value)}
                            >
                                <FormControlLabel
                                    value={paymentMethod.value}
                                    control={<Radio />}
                                    label={
                                        <Typography variant="body1" fontWeight="bold">
                                            {paymentMethod.label}
                                        </Typography>
                                    }
                                    sx={{ margin: 0 }}
                                />
                            </ListItem>
                        ))}
                </RadioGroup>
            </List>
        </Box>
    );
};

export default PaymentMethodCard;
