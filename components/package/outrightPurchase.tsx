"use client";

import { NextButton } from "@/components/button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Define the validation schema using Yup
const validationSchema = yup.object().shape({
    name: yup.string().required("First Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone_number: yup
        .string()
        .matches(
            /^[0-9]{10}$/,
            "Phone number must be only numbers and between 10 digits"
        )
        .required("Phone No. is required"),
});

export const PackageOutRightPurchase = (props) => {
    const { package_id, amount } = props;

    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },

    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
        },
        resolver: yupResolver(validationSchema),
    });


    const onSubmit = async (formData: any) => {
        try {
            formData.package = package_id;
            formData.total_price = amount
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/package/package-order/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                reset();
                router.push(`/package/payment-process/${data?.order?.id}`);
            } else {
                console.error("Failed to save user details");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box mt={2}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    {...register("name")}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...register("email")}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    {...register("phone_number")}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.phone_number}
                    helperText={errors.phone_number?.message}
                />

                <Box position="sticky" bottom={0} mt={2}>
                    <NextButton
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Proceed to Payment
                    </NextButton>
                </Box>
            </form>
        </Box>
    )
}