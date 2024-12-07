"use client"; // This is a client component

import Breakdown from '@/components/breakdown/breakdown';
import Summary from '@/components/breakdown/summary';
import StatusImage from '@/components/StatusImage';
import CustomizedSteppers from '@/components/stepper';
import updateAction from '@/little-state/action';
import { Box, Button, Card, CardContent, CardHeader, Switch } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const {
    handleSubmit,
    setValue,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      breakdowns: [],
    }
  });

  const onSubmit = async (formData: any) => {
    try {
      formData['quote_number'] = state.quote_number
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-quote-step-3/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        actions.updateAction(formData);
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
    if (state) {
      setValue("breakdowns", state.breakdowns || []);

      if (state.breakdowns && Object.keys(state.breakdowns).length > 0) {
        setIsChecked(true)
      }
    }
  }, [state])


  const onBack = () => {
    router.push(`/quotation/breakdown`);
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

      <StatusImage status={4} />

      <CustomizedSteppers activeStep={4} />


      <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

        <Card>
          <CardHeader
            title="Include Appliance Data"
            action={
              <Switch
                checked={isChecked}
                onChange={(e) => handleToggle(e)}
                size='small'
              />
            }
            sx={{
              '.MuiCardHeader-title': {
                fontSize: '1rem',
                fontWeight: "bold"
              },
            }}
          />
          <CardContent>

            {isChecked && (
              <Breakdown register={register} watch={watch} errors={errors} setValue={setValue} />
            )}

          </CardContent>
        </Card>


        <Box position="sticky" bottom={0} mt={2}>
          <Summary showCalculate={true} />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            Next
          </Button>
        </Box>

      </form>

    </Box>
  );
}
