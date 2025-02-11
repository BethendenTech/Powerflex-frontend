import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "Phone number must be only numbers and between 10 digits"
    )
    .required("Phone No. is required"),
  subject: yup.string().notRequired(),
  message: yup.string().required("Message is required"),
});
const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/support/create-contact/`,
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
        console.log("data", data)
      } else {
        console.error("Failed to save user details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Card
          sx={{
            background: "#F1F7FE",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
            backdropFilter: "blur(11.8px)",
            webkitBackdropFilter: "blur(11.8px)",
            border: "3px solid #FFFFFF",
            px: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight={700}
              fontSize={26}
              pb={2}
              sx={{
                color: "primary.main",
              }}
            >
              Contact Form
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  size="small"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...register("first_name")}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.first_name}
                  helperText={errors.first_name?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  size="small"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...register("last_name")}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.last_name}
                  helperText={errors.last_name?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  size="small"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  size="small"
                  label="Phone No."
                  variant="outlined"
                  fullWidth
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Phone number must be only numbers and between 10 digits",
                    },
                  })}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12 }}>
                <TextField
                  size="small"
                  label="Subject (Optional)"
                  variant="outlined"
                  fullWidth
                  {...register("subject")}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12 }}>
                <TextField
                  size="small"
                  multiline
                  rows={6}
                  label="Message"
                  variant="outlined"
                  fullWidth
                  {...register("message")}
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12 }}>
                <Stack direction="row" mt={2} justifyContent="center">
                  <Button
                    size="small"
                    type="submit"
                    variant="contained"
                    sx={{ width: "282px" }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Container>
    </form>
  );
};

export default FormPage;
