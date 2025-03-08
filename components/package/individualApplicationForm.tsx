"use client";

import { Box, FormControl, Grid2, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';
import { NextButton } from "../button/style";
import { FormInputField, FormTitle, FormValidation, Heading } from "../form/style";
import FileUploadComponent from "../fileUpload";
import SelectStateComponent from "../overview/stateSelect";

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

const IndividualApplicationForm = (props) => {
    const { amount, package_id } = props
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
            device_price: ""
        }
    });

    // Handle form submission
    const onSubmit = async (formData: any) => {

        try {
            formData.package = package_id;
            formData.total_price = amount
            formData.name = formData.first_name
            formData.email = formData.email
            formData.phone_number = formData.phone_number

            const response1 = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-order/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response1.ok) {
                const data = await response1.json();

                formData["package_order"] = data?.order?.id

                formData["application_type"] = "business"

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/package/package-application/`, {
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
                    formData["sentinel_sld"] = "no"
                    formData["sentinel_sap"] = "no"
                    formData["device_price"] = amount

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
            } else {
                console.error("Failed to save user details");
            }
        } catch (error) {
            console.error('Error:', error);
        }


    };

    return (
        <Box mt={2}>
            <Heading sx={{ textAlign: 'inherit', fontWeight: 'bold' }}>
                Individual Application
            </Heading>

            {showIframe && <SentiFlexIframeComponent />}

            {!showIframe && <form onSubmit={handleSubmit(onSubmit)} className="outright-package-form">
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.first_name?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.last_name?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>

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
                            <FormValidation>{errors?.phone_number?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.email?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.house_number?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.street_address?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.landmark?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>

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
                            <FormValidation>{errors?.bus_stop?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.town?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.city?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>  <Grid2 size={{ xs: 12, md: 12 }}>
                        <SelectStateComponent
                            control={control}
                            watch={watch}
                            setValue={setValue}
                            errors={errors}
                        />
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.occupation?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
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
                            <FormValidation>{errors?.business_address?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 12 }}>


                        <FormInputField
                            fullWidth
                            error={!!errors.bvn} // Highlight the field if there's an error
                        >
                            <FormTitle sx={{ fontWeight: 700 }}>
                                BVN (Bank Verification Number)
                            </FormTitle>
                            <FormValidation sx={{ fontFamily: "'Harmonia Sans Pro', sans-serif", mb: 1, marginLeft: 0 }}>
                                Providing the correct BVN is mandatory for verification purposes.
                            </FormValidation>

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
                                <FormValidation>{errors.bvn.message}</FormValidation>
                            )}
                        </FormInputField>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>

                        <FormControl
                            fullWidth
                            error={!!errors.applicant_id_card}
                            className="outright-package-upload-file"
                        >
                            <FileUploadComponent
                                name="applicant_id_card"
                                label="Valid Government-Issued ID"
                                accept={{
                                    'image/jpeg': ['.jpeg', '.jpg'],
                                    'image/png': ['.png'],
                                    'application/pdf': ['.pdf'],
                                    'video/mp4': ['.mp4'],
                                }}
                                maxFiles={1}
                                maxSize={10 * 1024 * 1024}
                                setValue={setValue}
                                supportFormat="Accepted formats: PDF, JPG, PNG; Max size: 10MB"
                                acceptableText=""
                                acceptedLabel="NIN, Driver’s License., International Passport., Nigerian Birth Certificate., Permanent Voter’s Card., Nigerian Residence Permit., Nigerian Seaman’s Card (For Maritime Professionals)., Employee ID (For Civil Servants)."
                                subNote="Refer to info icon for accepted documents"
                            />
                            <FormValidation>{errors?.applicant_id_card?.message}</FormValidation>
                        </FormControl>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <FormControl
                            fullWidth
                            error={!!errors.bank_statements}
                        >
                            <FileUploadComponent
                                name="bank_statements"
                                label="6 Months Bank Statements"
                                accept={{
                                    'image/jpeg': ['.jpeg', '.jpg'],
                                    'image/png': ['.png'],
                                    'application/pdf': ['.pdf'],
                                    'video/mp4': ['.mp4'],
                                }}
                                maxFiles={1}
                                maxSize={10 * 1024 * 1024}
                                setValue={setValue}
                                supportFormat="Accepted formats: PDF, DOC, DOCX; Max size: 10MB"
                                acceptableText=""
                                acceptedLabel=""
                                subNote=""
                            />
                            <FormValidation>{errors?.bank_statements?.message}</FormValidation>
                        </FormControl>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <FormControl
                            fullWidth
                            error={!!errors.recent_utility_bill}
                        >
                            <FileUploadComponent
                                name="recent_utility_bill"
                                label="Recent Utility Bill"
                                accept={{
                                    'image/jpeg': ['.jpeg', '.jpg'],
                                    'image/png': ['.png'],
                                    'application/pdf': ['.pdf'],
                                    'video/mp4': ['.mp4'],
                                }}
                                maxFiles={1}
                                maxSize={10 * 1024 * 1024}
                                setValue={setValue}
                                supportFormat="Accepted formats: PDF, JPG, PNG; Max size: 10MB"
                                acceptableText=""
                                acceptedLabel="Electricity Bill (e.g Ikeja Electric, AEDC)., Water Bill (e.g Lagos Water Corporation)., Waste Management Bill (e.g LAWMA, Abuja Environmental Protection Board)., Internet Service Bill., Cable TV Subscription., Tenancy Agreement or Rent Receipt."
                                subNote="Refer to info icon for accepted documents"
                            />
                            <FormValidation>{errors?.recent_utility_bill?.message}</FormValidation>
                        </FormControl>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
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
                            <FormValidation>{errors?.how_heard_about?.message}</FormValidation>
                        </FormInputField>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 12 }}>
                        <Box position="sticky" bottom={0} mt={2}>
                            <NextButton
                                fullWidth
                                type="submit"
                                variant='contained'
                            >
                                Apply for Financing
                            </NextButton>
                        </Box>
                    </Grid2>
                </Grid2>
            </form>}
        </Box>
    );
};

export default IndividualApplicationForm;
