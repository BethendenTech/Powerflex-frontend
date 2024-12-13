"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import React from 'react';
import Image from 'next/image';
import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, OutlinedInput, Radio, RadioGroup } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { NextButton } from '@/components/button/style';

export default function Page() {
  const { actions, state } = useStateMachine({ updateAction });

  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      electricity_spend: "",
      price_band: "A"
    }
  });

  React.useEffect(() => {
    if (state) {
      setValue("electricity_spend", state.electricity_spend || "");
      setValue("price_band", state.price_band || "A");
    }
  }, [state])

  const onSubmit = async (formData: any) => {
    try {
      formData['user_id'] = state.user_id
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-quote-step-1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        formData["quote_number"] = data.quote.quote_number
        actions.updateAction(formData);
        router.push(`/quotation/breakdown`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/quotation/details`);
  }

  return (
    <Box>
      <Button
        color='secondary'
        variant="text"
        startIcon={<Image
          src="/images/collaps-arrow-right.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />}
        onClick={() => onBack()}
      >
        Back
      </Button>

      <StatusImage status={2} />

      <CustomizedSteppers activeStep={2} />


      <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl
          fullWidth
          error={!!errors.electricity_spend}
        >
          <FormLabel>
            How much do you spend on electricity each month?
          </FormLabel>
          <OutlinedInput
            type='text'
            {...register('electricity_spend', {
              required: 'Please enter a valid monthly spend amount',
              valueAsNumber: true, // Converts the input to a number
              validate: {
                positive: (value: any) => value > 0 || 'Electricity Spend must be a positive number',
                // You can add more custom validations here if needed
              }
            })}
          />
          <FormHelperText>{errors?.electricity_spend?.message}</FormHelperText>
        </FormControl>



        <FormControl
          fullWidth
        >
          <FormLabel>Select your electricity band group</FormLabel>

          <RadioGroup
            row
            onChange={(e) => {
              setValue("price_band", e.target.value)
            }}
            defaultValue={watch("price_band")}
            sx={{
              justifyContent: 'space-between',
              mt: 1,
              backgroundColor: "white",
              borderRadius: 2,
              borderColor: "#ccc",
              borderWidth: 1,
              paddingTop: 1
            }}
          >
            <FormControlLabel
              value="A"
              control={<Radio />}
              label="Band A"
              labelPlacement="top"
              sx={{ flex: 1, textAlign: 'center' }} // Ensure each option takes equal width
            />
            <FormControlLabel
              value="B"
              control={<Radio />}
              label="Band B"
              labelPlacement="top"
              sx={{ flex: 1, textAlign: 'center' }}
            />
            <FormControlLabel
              value="C"
              control={<Radio />}
              label="Band C"
              labelPlacement="top"
              sx={{ flex: 1, textAlign: 'center' }}
            />
          </RadioGroup>
        </FormControl>

        <Box position="sticky" bottom={0} mt={2}>
          <NextButton
            fullWidth
            type="submit"
            variant='contained'
          >
            Select coverage/autonomy
          </NextButton>
        </Box>
      </form>

    </Box>
  );
}
