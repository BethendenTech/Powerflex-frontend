"use client";

import updateAction from "@/little-state/action";
import { Box, Button, FormControl, FormHelperText, FormLabel, OutlinedInput, Typography } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const PaymentCardDetails = () => {
    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    // Set up react-hook-form
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            name_card: "",
            card_number: "",
            expiration_date: "",
            security_code: "",
            postcode: "",
        }
    });

    React.useEffect(() => {
        if (state) {
            setValue("name_card", state.name_card || "");
            setValue("card_number", state.card_number || "");
            setValue("expiration_date", state.expiration_date || "");
            setValue("security_code", state.security_code || "");
            setValue("postcode", state.postcode || "");
        }
    }, [state])

    // Handle form submission
    const onSubmit = (data: any) => {
        actions.updateAction(data);  // Pass form data to state machine action
        router.push(`/quotation/payment-success`);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" fontWeight="bold">Card Details</Typography>


                <FormControl
                    fullWidth
                    error={!!errors.name_card}
                >
                    <FormLabel>
                        Name on Card
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("name_card", { required: "Name on Card is required" })}
                    />
                    <FormHelperText>{errors?.name_card?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.card_number}
                >
                    <FormLabel>
                        Card Number
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("card_number", {
                            required: "Card number is required",
                            pattern: {
                                value: /^[0-9]{16}$/,
                                message: "Card number must be 16 digits"
                            }
                        })}
                    />
                    <FormHelperText>{errors?.card_number?.message}</FormHelperText>
                </FormControl>



                <FormControl
                    fullWidth
                    error={!!errors.expiration_date}
                >
                    <FormLabel>
                        Expiration Date (MM/YY)
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("expiration_date", {
                            required: "Expiration date is required",
                            pattern: {
                                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                message: "Invalid date format (MM/YY)"
                            }
                        })}
                    />
                    <FormHelperText>{errors?.expiration_date?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.security_code}
                >
                    <FormLabel>
                        Security Code (CVV)
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("security_code", {
                            required: "Security code is required",
                            pattern: {
                                value: /^[0-9]{3,4}$/,
                                message: "Security code must be 3 or 4 digits"
                            }
                        })}
                    />
                    <FormHelperText>{errors?.security_code?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.postcode}
                >
                    <FormLabel>
                        Postcode
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("postcode", { required: "Postcode is required" })}
                    />
                    <FormHelperText>{errors?.postcode?.message}</FormHelperText>
                </FormControl>



                <Box position="sticky" bottom={0} mt={2}>
                    <Button
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Confirm
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default PaymentCardDetails;
