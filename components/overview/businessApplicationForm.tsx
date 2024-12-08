"use client";

import { Box, Button, FormControl, FormHelperText, FormLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SelectStateComponent from "./stateSelect";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const BusinessApplicationForm = () => {
    const router = useRouter();

    // Set up react-hook-form with default values for the inputs
    const { control, register, handleSubmit, setValue, formState: { errors }, watch } = useForm({
        defaultValues: {
            role: 'Director',
            other_role: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            business_name: '',
            house_number: '',
            street_name: '',
            nearest_bus_stop: '',
            lga: '',
            state: '',
            bvn: '',
            applicant_id_card: "",
            company_registration_document: "",
            bank_statements: "",
            recent_utility_bill: ""
        }
    });


    const role = watch("role");

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // You can trigger the update action or route navigation here
        // actions.updateAction(data);
        router.push("/quotation/payment-process");
    };

    return (
        <Box mt={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6">
                    Business Application
                </Typography>


                <FormControl
                    fullWidth
                    error={!!errors.role}
                >
                    <FormLabel>
                        Role
                    </FormLabel>
                    <Select
                        type='text'
                        {...register("role", { required: "Role is required" })}
                    >
                        <MenuItem value="director">Director</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                    <FormHelperText>{errors?.role?.message}</FormHelperText>
                </FormControl>


                {role == "other" && <FormControl
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
                </FormControl>}

                <FormControl
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
                </FormControl>



                <FormControl
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
                </FormControl>


                <FormControl
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
                </FormControl>


                <FormControl
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
                </FormControl>






                <FormControl
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
                </FormControl>



                <FormControl
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
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.street_name}
                >
                    <FormLabel>
                        Street Name
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("street_name", { required: "Street Name is required" })}
                    />
                    <FormHelperText>{errors?.street_name?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.nearest_bus_stop}
                >
                    <FormLabel>
                        Nearest Bus Stop
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("nearest_bus_stop", { required: "Nearest Bus Stop is required" })}
                    />
                    <FormHelperText>{errors?.nearest_bus_stop?.message}</FormHelperText>
                </FormControl>

                <SelectStateComponent
                    control={control}
                    watch={watch}
                    setValue={setValue}
                    errors={errors}
                />

                <FormControl
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
                </FormControl>



                <FormControl
                    fullWidth
                    error={!!errors.applicant_id_card}
                >

                    <Button
                        fullWidth
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        color="warning"
                    >
                        Applicant Id Card
                        <VisuallyHiddenInput
                            type="file"
                            {...register("applicant_id_card", { required: "Applicant Id Card is required" })}

                        />
                    </Button>

                    <FormHelperText>{errors?.applicant_id_card?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.company_registration_document}
                >

                    <Button
                        fullWidth
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        color="warning"
                    >
                        Company Registration Document
                        <VisuallyHiddenInput
                            type="file"
                            {...register("company_registration_document", { required: "Company Registration Document is required" })}

                        />
                    </Button>

                    <FormHelperText>{errors?.company_registration_document?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.bank_statements}
                >

                    <Button
                        fullWidth
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        color="warning"
                    >
                        6 months Bank Statements
                        <VisuallyHiddenInput
                            type="file"
                            {...register("bank_statements", { required: "Bank Statements is required" })}

                        />
                    </Button>

                    <FormHelperText>{errors?.bank_statements?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.recent_utility_bill}
                >

                    <Button
                        fullWidth
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        color="warning"
                    >
                        Recent Utility Bill
                        <VisuallyHiddenInput
                            type="file"
                            {...register("recent_utility_bill", { required: "Recent Utility Bill is required" })}

                        />
                    </Button>

                    <FormHelperText>{errors?.recent_utility_bill?.message}</FormHelperText>
                </FormControl>


                <Box position="sticky" bottom={0} mt={2}>
                    <Button
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Apply for Financing
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default BusinessApplicationForm;
