"use client";

import updateAction from "@/little-state/action";
import { Box, FormHelperText, FormLabel, OutlinedInput, Typography } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import SelectStateComponent from "./stateSelect";
import { NextButton } from "../button/style";
import { FormInputField, FormTitle, Heading } from "../form/style";

const SentiFlexIframeComponent = dynamic(() => Promise.resolve(() => (
    <iframe
        // src="https://sentiflex.com/contact.php"
        src="https://sentiflex.com/"
        width="100%"
        height="500"
        style={{ border: '1px #808080 solid' }}
        title="SentiFlex Contact Form"
    />
)), { ssr: false });

const IndividualApplicationForm = () => {
    const { state } = useStateMachine({ updateAction });

    const [showIframe, setShowIframe] = useState(false)

    // Set up react-hook-form with default values for the inputs
    const { control, register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        defaultValues: {
            application_type: "",
            bvn: "",
            other_role: "",
            first_name: "",
            last_name: "",
            house_number: "",
            street_address: "",
            landmark: "",
            bus_stop: "",
            occupation: "",
            business_role: "",
            business_name: "",
            business_address: "",
            town: "",
            city: "",
            state: "",
            lga: "",
            email: "",
            phone_number: "",
            reference_phone1: "",
            reference_phone2: "",
            how_heard_about: "",
            applicant_id_card: "",
            company_registration_document: "",
            bank_statements: "",
            recent_utility_bill: "",
        }
    });

    // Handle form submission
    const onSubmit = async (formData: any) => {
        formData["application_type"] = "business"
        formData["quote_number"] = state.quote_number
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cerate-quote-application/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            formData["firstname"] = formData["first_name"]
            formData["lastname"] = formData["last_name"]
            formData["application_channel"] = "powerflex"
            formData["device_id"] = "1856"
            formData["quantity"] = "1"
            formData["device_price"] = "1"
            formData["sentinel_sld"] = "no"
            formData["sentinel_sap"] = "no"


            const response = await fetch(`${process.env.NEXT_PUBLIC_FINANCE_BASE_URL}/finance/prod/checkout/application/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'requestApiKey': "jOwhFfcbHGaIkTUAKo8rPSMBp3xd"
                },
                body: JSON.stringify(formData),
            });

            console.log("response", response)

            if (response.ok) {
                setShowIframe(true)
            }
        }
    };

    return (
        <Box mt={2}>
            <Heading sx={{ textAlign: 'inherit', fontWeight: 'bold' }}>
                Individual Application
            </Heading>

            {showIframe && <SentiFlexIframeComponent />}

            {!showIframe && <form onSubmit={handleSubmit(onSubmit)} >

                <FormInputField
                    fullWidth
                    error={!!errors.first_name}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        First Name
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("first_name", { required: "First name is required" })}
                    />
                    <FormHelperText>{errors?.first_name?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.last_name}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Last Name
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("last_name", { required: "Last name is required" })}
                    />
                    <FormHelperText>{errors?.last_name?.message}</FormHelperText>
                </FormInputField>


                <FormInputField
                    fullWidth
                    error={!!errors.phone_number}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Phone Number
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("phone_number", { required: "Phone number is required" })}
                    />
                    <FormHelperText>{errors?.phone_number?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.email}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Email Address
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("email", { required: "Email address is required" })}
                    />
                    <FormHelperText>{errors?.email?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.house_number}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        House Number
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("house_number", { required: "House Number is required" })}
                    />
                    <FormHelperText>{errors?.house_number?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.street_address}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Street Address
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("street_address", { required: "Street Address is required" })}
                    />
                    <FormHelperText>{errors?.street_address?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.landmark}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Landmark
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("landmark", { required: "Landmark is required" })}
                    />
                    <FormHelperText>{errors?.landmark?.message}</FormHelperText>
                </FormInputField>


                <FormInputField
                    fullWidth
                    error={!!errors.bus_stop}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Nearest Bus Stop
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("bus_stop", { required: "Nearest Bus Stop is required" })}
                    />
                    <FormHelperText>{errors?.bus_stop?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.town}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Town
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("town", { required: "Town is required" })}
                    />
                    <FormHelperText>{errors?.town?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.city}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        City
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("city", { required: "City is required" })}
                    />
                    <FormHelperText>{errors?.city?.message}</FormHelperText>
                </FormInputField>

                <SelectStateComponent
                    control={control}
                    watch={watch}
                    setValue={setValue}
                    errors={errors}
                />

                <FormInputField
                    fullWidth
                    error={!!errors.occupation}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Occupation
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("occupation", { required: "Occupation is required" })}
                    />
                    <FormHelperText>{errors?.occupation?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.business_address}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Business Address
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("business_address", { required: "Business Address is required" })}
                    />
                    <FormHelperText>{errors?.business_address?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.reference_phone1}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Reference Phone 1
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("reference_phone1", { required: "Reference Phone 1 is required" })}
                    />
                    <FormHelperText>{errors?.reference_phone1?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.reference_phone2}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Reference Phone 2
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("reference_phone2", { required: "Reference Phone 2 is required" })}
                    />
                    <FormHelperText>{errors?.reference_phone2?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.business_name}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Business Name
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("business_name", { required: "Business Name is required" })}
                    />
                    <FormHelperText>{errors?.business_name?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.bvn} // Highlight the field if there's an error
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        BVN (Bank Verification Number)
                    </FormTitle>
                    <FormHelperText sx={{ fontFamily: "'Harmonia Sans Pro', sans-serif", mb: 1, marginLeft: 0 }}>
                        Providing the correct BVN is mandatory for verification purposes.
                    </FormHelperText>

                    <OutlinedInput
                        type="text"
                        {...register("bvn", {
                            required: "BVN (Bank Verification Number) is required",
                            minLength: {
                                value: 11,
                                message: "BVN must be exactly 11 digits",
                            },
                            maxLength: {
                                value: 11,
                                message: "BVN must be exactly 11 digits",
                            },
                            pattern: {
                                value: /^\d{11}$/,
                                message: "BVN must contain only numeric characters",
                            },
                        })}
                        error={!!errors.bvn} // Add error state to input
                    />

                    {errors?.bvn?.message && (
                        <FormHelperText>{errors.bvn.message}</FormHelperText>
                    )}
                </FormInputField>


                <FormInputField
                    fullWidth
                    error={!!errors.how_heard_about}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        How did you hear about Powerflex?
                    </FormTitle>
                    <OutlinedInput
                        type='text'
                        {...register("how_heard_about", { required: "this is required" })}
                    />
                    <FormHelperText>{errors?.how_heard_about?.message}</FormHelperText>
                </FormInputField>

                <Box position="sticky" bottom={0} mt={2}>
                    <NextButton
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Apply for Financing
                    </NextButton>
                </Box>

            </form>}
        </Box>
    );
};

export default IndividualApplicationForm;
