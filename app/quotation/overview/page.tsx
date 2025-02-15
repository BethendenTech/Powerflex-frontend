"use client"; // This is a client component

import { FinanceSelectToggle } from '@/components/financeSelectToggle';
import { Heading } from '@/components/form/style';
import { EstimatedEnergyRequirement } from '@/components/overview/estimatedEnergyRequirement';
import { FinancingPurchase } from '@/components/overview/financing/financing';
import { OutRightPurchase } from '@/components/overview/outright/outrightPurchase';
import { OverviewData } from '@/components/overview/overview';
import StatusImage from '@/components/StatusImage';
import CustomizedSteppers from '@/components/stepper';
import updateAction from '@/little-state/action';
import { Box, Button } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const handleToggle = (id: any) => {
    const formData = {
      is_finance: id
    }
    actions.updateAction(formData);
  };

  const onBack = () => {
    router.push(`/quotation/appliances`);
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


      <StatusImage status={5} />

      <CustomizedSteppers activeStep={5} />


      <Box>

        <Heading>
          Overview
        </Heading>

        <OverviewData />

        <EstimatedEnergyRequirement />

        <FinanceSelectToggle handleChange={handleToggle} is_finance={state.is_finance} />

        {!state.is_finance && <OutRightPurchase />}
        {state.is_finance && <FinancingPurchase />}
      </Box>

    </Box >
  );
}
