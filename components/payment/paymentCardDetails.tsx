"use client";

import updateAction from "@/little-state/action";
import { Box, FormHelperText, OutlinedInput } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { NextButton } from "../button/style";
import { FormInputField, FormTitle, Title } from "../form/style";

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
                <Title sx={{ mb: 2 }}>Card Details</Title>


                <FormInputField
                    fullWidth
                    error={!!errors.name_card}
                >
                    <FormTitle>
                        Name on Card
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("name_card", { required: "Name on Card is required" })}
                    />
                    <FormHelperText>{errors?.name_card?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.card_number}
                >
                    <FormTitle>
                        Card Number
                    </FormTitle>
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
                </FormInputField>



                <FormInputField
                    fullWidth
                    error={!!errors.expiration_date}
                >
                    <FormTitle>
                        Expiration Date (MM/YY)
                    </FormTitle>
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
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.security_code}
                >
                    <FormTitle>
                        Security Code (CVV)
                    </FormTitle>
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
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.postcode}
                >
                    <FormTitle>
                        Postcode
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("postcode", { required: "Postcode is required" })}
                    />
                    <FormHelperText>{errors?.postcode?.message}</FormHelperText>
                </FormInputField>



                <Box position="sticky" bottom={0} mt={2}>
                    <NextButton
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Confirm
                    </NextButton>
                </Box>
            </form>
        </Box>
    );
};

export default PaymentCardDetails;
