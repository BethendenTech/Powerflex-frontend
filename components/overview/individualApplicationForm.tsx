"use client";

import updateAction from "@/little-state/action";
import { Box, FormHelperText, FormLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import SelectStateComponent from "./stateSelect";
import { NextButton } from "../button/style";
import { FormInputField } from "../form/style";

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


    const business_role = watch("business_role");

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
        <Box mt={5}>
            <Typography variant="h6">
                Individual Application
            </Typography>

            {showIframe && <SentiFlexIframeComponent />}

            {!showIframe && <form onSubmit={handleSubmit(onSubmit)} >


                <FormInputField
                    fullWidth
                    error={!!errors.business_role}
                >
                    <FormLabel>
                        Business_role
                    </FormLabel>
                    <Select
                        type='text'
                        {...register("business_role", { required: "Role is required" })}
                    >
                        <MenuItem value="director">Director</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    <FormHelperText>{errors?.business_role?.message}</FormHelperText>
                </FormInputField>


                {business_role == "other" && <FormInputField
                    fullWidth
                    error={!!errors.other_role}
                >
                    <FormLabel>
                        Please type your role?
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("other_role", { required: "This field is required" })}
                    />
                    <FormHelperText>{errors?.other_role?.message}</FormHelperText>
                </FormInputField>}

                <FormInputField
                    fullWidth
                    error={!!errors.first_name}
                >
                    <FormLabel>
                        First Name
                    </FormLabel>
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
                    <FormLabel>
                        Last Name
                    </FormLabel>
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
                    <FormLabel>
                        Phone number
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("phone_number", { required: "Phone number is required" })}
                    />
                    <FormHelperText>{errors?.phone_number?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.reference_phone1}
                >
                    <FormLabel>
                        Reference Phone 1
                    </FormLabel>
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
                    <FormLabel>
                        Reference Phone 2
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("reference_phone2", { required: "Reference Phone 2 is required" })}
                    />
                    <FormHelperText>{errors?.reference_phone2?.message}</FormHelperText>
                </FormInputField>


                <FormInputField
                    fullWidth
                    error={!!errors.email}
                >
                    <FormLabel>
                        Email Address
                    </FormLabel>
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
                    <FormLabel>
                        House Number
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("house_number", { required: "House Number is required" })}
                    />
                    <FormHelperText>{errors?.house_number?.message}</FormHelperText>
                </FormInputField>
                <FormInputField
                    fullWidth
                    error={!!errors.business_name}
                >
                    <FormLabel>
                        Business Name
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("business_name", { required: "Business Name is required" })}
                    />
                    <FormHelperText>{errors?.business_name?.message}</FormHelperText>
                </FormInputField>



                <FormInputField
                    fullWidth
                    error={!!errors.house_number}
                >
                    <FormLabel>
                        House Number
                    </FormLabel>
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
                    <FormLabel>
                        Street Address
                    </FormLabel>
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
                    <FormLabel>
                        Landmark
                    </FormLabel>
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
                    <FormLabel>
                        Bus Stop
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("bus_stop", { required: "Bus Stop is required" })}
                    />
                    <FormHelperText>{errors?.bus_stop?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.occupation}
                >
                    <FormLabel>
                        Occupation
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("occupation", { required: "Occupation is required" })}
                    />
                    <FormHelperText>{errors?.occupation?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.business_name}
                >
                    <FormLabel>
                        Business Name
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("business_name", { required: "Business Name is required" })}
                    />
                    <FormHelperText>{errors?.business_name?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.business_address}
                >
                    <FormLabel>
                        Business Address
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("business_address", { required: "Business Address is required" })}
                    />
                    <FormHelperText>{errors?.business_address?.message}</FormHelperText>
                </FormInputField>

                <FormInputField
                    fullWidth
                    error={!!errors.town}
                >
                    <FormLabel>
                        Town
                    </FormLabel>
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
                    <FormLabel>
                        City
                    </FormLabel>
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
                    error={!!errors.bvn} // Highlight the field if there's an error
                >
                    <FormLabel>
                        BVN (Bank Verification Number)
                    </FormLabel>
                    <FormHelperText>
                        Please ensure the BVN entered belongs to the director of the company. Providing the correct BVN is mandatory for verification purposes.
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
                    <FormLabel>
                        How did you hear about Powerflex?
                    </FormLabel>
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
