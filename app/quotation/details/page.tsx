"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAction from '@/little-state/action';
import React from 'react';
import { Box, FormHelperText, OutlinedInput } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { NextButton } from '@/components/button/style';
import { FormInputField, FormTitle } from '@/components/form/style';

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

        <FormInputField
          fullWidth
          error={!!errors.name}
        >
          <FormTitle>
            Name
          </FormTitle>
          <OutlinedInput
            type='text'
            {...register('name', { required: 'Name is required' })}
          />
          <FormHelperText>{errors?.name?.message}</FormHelperText>
        </FormInputField>

        <FormInputField
          fullWidth
          error={!!errors.email}
        >
          <FormTitle>
            Email
          </FormTitle>
          <OutlinedInput
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          <FormHelperText>{errors?.email?.message}</FormHelperText>
        </FormInputField>

        <FormInputField
          fullWidth
          error={!!errors.phone_number}
        >
          <FormTitle>
            Phone number
          </FormTitle>
          <OutlinedInput
            type="tel"
            {...register('phone_number', { required: 'Phone Number is required' })}
          />
          <FormHelperText>{errors?.phone_number?.message}</FormHelperText>
        </FormInputField>

        <Box position="sticky" bottom={0} mt={2}>
          <NextButton
            fullWidth
            type="submit"
            variant='contained'
          >
            Continue to quote
          </NextButton>
        </Box>
      </form>

    </Box>
  );
}
