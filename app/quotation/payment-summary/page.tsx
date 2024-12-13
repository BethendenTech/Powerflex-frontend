"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import PaymentSummaryCard from '@/components/payment/paymentSummary';
import useQuotation from '@/hooks/quotation';
import { Box, Button, Typography } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { NextButton } from '@/components/button/style';

export default function Page() {

  const router = useRouter();
  const { actions } = useStateMachine({ updateAction });

  const { handleSubmit } = useForm({
    defaultValues: {
    }
  });

  const onSubmit = async (formData: any) => {
    try {
      console.log('formData', formData)
      actions.updateAction(formData);

      router.push(`/quotation/payment-process`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onBack = () => {
    router.push(`/quotation/overview`);
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

      <StatusImage status={6} />
      <CustomizedSteppers activeStep={6} />

      <Box>
        <Typography textAlign="center" variant="h6">
          Payment Summary
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>

          <PaymentSummaryCard />


          <Box position="sticky" bottom={0} mt={2}>
            <NextButton
              fullWidth
              type="submit"
              variant='contained'
            >
              Confirm
            </NextButton>
          </Box>

        </form>

      </Box>
    </Box>
  );
}
