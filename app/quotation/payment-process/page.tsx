"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import PaymentMethodCard from '@/components/payment/paymentMethodCard';
import PaymentSummaryCard from '@/components/payment/paymentSummary';
import PaymentCardDetails from '@/components/payment/paymentCardDetails';
import Image from 'next/image';
import useQuotation from '@/hooks/quotation';
import PayStackPayment from '@/components/payment/payStack';
import { Box, Button, Typography } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';

export default function Page() {

  const router = useRouter();
  const { state } = useStateMachine({ updateAction });

  const { quote } = useQuotation();

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

        <Typography textAlign="center" variant="h6" fontWeight="bold">
          Payment Summary
        </Typography>

        <PaymentSummaryCard quote={quote} />
        <PaymentMethodCard />
        {state.payment_method == "credit_debit_card" && (
          <PaymentCardDetails quote={quote} />
        )}
        {state.payment_method == "paystack" && (
          <PayStackPayment quote={quote} />
        )}

      </Box>
    </Box>
  );
}
