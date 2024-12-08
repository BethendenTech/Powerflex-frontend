"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAction from '@/little-state/action';
import React from 'react';
import { Box, Button, FormControl, FormHelperText, FormLabel, OutlinedInput } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';

export default function Page() {
  const { actions, state } = useStateMachine({ updateAction });

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      is_finance: false,
    }
  });

  React.useEffect(() => {
    if (state) {
      setValue("name", state.name || "");
      setValue("email", state.email || "");
      setValue("phone_number", state.phone_number || "");
    }
  }, [state])

  const onSubmit = async (formData: any) => {
    try {

      actions.updateAction(formData);
      router.push(`/quotation/monthly-spend`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submit-details/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        const data = await response.json();
        actions.updateAction({ "user_id": data?.user?.id });
        router.push(`/quotation/monthly-spend`);
      } else {
        console.error('Failed to save user details');
      }

      if (response.status == 400) {
        const data = await response.json();

        Object.entries(data).forEach(([key, value]: any) => {
          setError(key, { type: "manual", message: value });
        });
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box>
      <StatusImage status={1} />

      <CustomizedSteppers activeStep={1} />

      <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl
          fullWidth
          error={!!errors.name}
        >
          <FormLabel>
            Name
          </FormLabel>
          <OutlinedInput
            type='text'
            {...register('name', { required: 'Name is required' })}
          />
          <FormHelperText>{errors?.name?.message}</FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          error={!!errors.email}
        >
          <FormLabel>
            Email
          </FormLabel>
          <OutlinedInput
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          <FormHelperText>{errors?.email?.message}</FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          error={!!errors.phone_number}
        >
          <FormLabel>
            Phone number
          </FormLabel>
          <OutlinedInput
            type="tel"
            {...register('phone_number', { required: 'Phone Number is required' })}
          />
          <FormHelperText>{errors?.phone_number?.message}</FormHelperText>
        </FormControl>

        <Box position="sticky" bottom={0} mt={2}>
          <Button
            fullWidth
            type="submit"
            variant='contained'
          >
            Continue to quote
          </Button>
        </Box>
      </form>

    </Box>
  );
}
