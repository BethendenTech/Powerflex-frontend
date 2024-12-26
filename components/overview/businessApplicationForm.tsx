"use client";

import { Box, FormControl, FormHelperText, FormLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import SelectStateComponent from "./stateSelect";
import { useStateMachine } from "little-state-machine";
import updateAction from "@/little-state/action";
import FileUploadComponent from "../fileUpload";
import { NextButton } from "../button/style";
import { FormInputField, FormTitle, Title } from "../form/style";

const BusinessApplicationForm = () => {
    const router = useRouter();
    const { state } = useStateMachine({ updateAction });

    // Set up react-hook-form with default values for the inputs
    const { control, register, handleSubmit, setValue, formState: { errors }, watch } = useForm({
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

            router.push(`/quotation/application-success`);
        }
    };

    return (
        <Box mt={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" fontWeight="bold">
                    Business Application
                </Typography>


                <FormInputField
                    fullWidth
                    error={!!errors.business_role}
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Business_role
                    </FormTitle>
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
                    <FormTitle sx={{ fontWeight: 700 }}>
                        Please type your role?
                    </FormTitle>
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
                        Phone number
                    </FormTitle>
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
                        Bus Stop
                    </FormTitle>
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
                    error={!!errors.bvn} // Highlight the field if there's an error
                >
                    <FormTitle sx={{ fontWeight: 700 }}>
                        BVN (Bank Verification Number)
                    </FormTitle>
                    <FormHelperText sx={{ fontFamily: "'Harmonia Sans Pro', sans-serif", mb: 1 }}>
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



                <FormControl
                    fullWidth
                    error={!!errors.applicant_id_card}
                >
                    <FileUploadComponent
                        name="applicant_id_card"
                        label="Applicant Id Card"
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
                    />
                    <FormHelperText>{errors?.applicant_id_card?.message}</FormHelperText>
                </FormControl>
                <FormControl
                    fullWidth
                    error={!!errors.company_registration_document}
                >
                    <FileUploadComponent
                        name="company_registration_document"
                        label="Company Registration Document"
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
                    />
                    <FormHelperText>{errors?.company_registration_document?.message}</FormHelperText>
                </FormControl>
                <FormControl
                    fullWidth
                    error={!!errors.bank_statements}
                >
                    <FileUploadComponent
                        name="bank_statements"
                        label="6 months Bank Statements"
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
                    />
                    <FormHelperText>{errors?.bank_statements?.message}</FormHelperText>
                </FormControl>
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
                    />
                    <FormHelperText>{errors?.recent_utility_bill?.message}</FormHelperText>
                </FormControl>

                <Box position="sticky" bottom={0} mt={2}>
                    <NextButton
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Apply for Financing
                    </NextButton>
                </Box>
            </form>
        </Box>
    );
};

export default BusinessApplicationForm;
