"use client";

import { NextButton } from "@/components/button/style";
import usePackage from "@/hooks/package";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid2, TextField } from "@mui/material";
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
            /^[0-9]{12}$/,
            "Phone number must be only numbers and between 12 digits"
        )
        .required("Phone No. is required"),
});

export const PackageOutRightPurchase = (props) => {
    const { package_id, amount } = props;
    const { orderData, createOrder } = usePackage();
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

            createOrder(formData)

            router.push(`/package/payment-process/${package_id}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box mt={2}>
            <form onSubmit={handleSubmit(onSubmit)} className="outright-package-form">
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            {...register("name")}
                            InputLabelProps={{ shrink: true }}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </Grid2>  <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            {...register("email")}
                            InputLabelProps={{ shrink: true }}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid2>  <Grid2 size={{ xs: 12, sm: 12 }}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            {...register("phone_number")}
                            InputLabelProps={{ shrink: true }}
                            error={!!errors.phone_number}
                            helperText={errors.phone_number?.message}
                        />
                    </Grid2>
                </Grid2>
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