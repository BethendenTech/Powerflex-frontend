"use client"; // This is a client component

import Breakdown from '@/components/breakdown/breakdown';
import Summary from '@/components/breakdown/summary';
import { NextButton } from '@/components/button/style';
import StatusImage from '@/components/StatusImage';
import CustomizedSteppers from '@/components/stepper';
import updateAction from '@/little-state/action';
import { updateApplianceArray } from '@/utils/formData';
import { Box, Button, Card, CardContent, CardHeader, Switch } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const {
    handleSubmit,
    setValue,
    watch,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      breakdowns: [],
    }
  });

  useEffect(() => {
    const subscription = watch((value) => {
      console.log('Updated breakdowns:', value.breakdowns);
      actions.updateAction({ breakdowns: value.breakdowns });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (formData: any) => {
    try {
      formData['quote_number'] = state.quote_number

      actions.updateAction(formData);

      const breakdownArray = updateApplianceArray(formData['breakdowns']);
      formData['breakdowns'] = breakdownArray

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-quote-step-3/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(`/quotation/overview`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  React.useEffect(() => {
    setValue("breakdowns", state.breakdowns || []);

    if (state.breakdowns && Object.keys(state.breakdowns).length > 0) {
      setIsChecked(true)
    }

  }, [])

  const onBack = () => {
    router.push(`/quotation/breakdown`);
  }

  return (
    <Box>
      <Button
        variant="text"
        startIcon={<Image
          src="/images/collaps-arrow-right.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />}
        onClick={() => onBack()}
        sx={{
          fontWeight: 'bold',
          color: '#AEAEAE'
        }}
      >
        Back
      </Button>

      <StatusImage status={4} />

      <CustomizedSteppers activeStep={4} />


      <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

        <Card sx={{
          boxShadow: 'none',
          borderRadius: '12px',
          paddingRight: '20px',
          paddingLeft: '20px'
        }}>
          <CardHeader
            title="Include Appliance Data"
            action={
              <Switch
                checked={isChecked}
                onChange={(e) => handleToggle(e)}
                size='small'
                sx={{
                  borderRadius: '12px',
                }}
              />
            }
            sx={{
              '.MuiCardHeader-title': {
                fontSize: '1rem',
                fontWeight: "bold",
                fontFamily: "'Harmonia Sans Pro', sans-serif",
              },
            }}
          />
          <CardContent>

            {isChecked && (
              <Breakdown register={register} watch={watch} errors={errors} setValue={setValue} />
            )}

            <Box textAlign="right" pt={2}>
              <Button
                variant="contained"
                size='small'
                sx={{
                  pt: 0,
                  pb: 0,
                  fontSize: '16px'
                }}
                onClick={() => {
                  reset({
                    breakdowns: [],
                  });
                  setIsChecked(false);
                }}
              >
                Clear All
              </Button>
            </Box>

          </CardContent>
        </Card>


        <Box position="sticky" bottom={0} mt={2}>
          <Summary showCalculate={true} />

          <NextButton
            type='submit'
            fullWidth
            variant='contained'
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            Next
          </NextButton>
        </Box>

      </form>

    </Box>
  );
}
