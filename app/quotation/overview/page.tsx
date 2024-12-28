"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { OutRightPurchase } from '@/components/overview/outright/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing/financing';
import Image from 'next/image';
import { OverviewData } from '@/components/overview/overview';
import { EstimatedEnergyRequirement } from '@/components/overview/estimatedEnergyRequirement';
import React from 'react';
import { Box, Button, ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomizedSteppers from '@/components/stepper';
import { Heading } from '@/components/form/style';

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

        <ToggleButtonGroup
          sx={{
            boxShadow: "0px 2px 8px 0px #00000040 inset",
            border: 'none'
          }}
          color="primary"
          value={state.is_finance}
          exclusive
          onChange={(e, value) => handleToggle(value)}
          fullWidth
          size='small'
        >
          <ToggleButton sx={{
            fontFamily: "'Harmonia Sans Pro', sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            textTransform: 'capitalize',
            color: (theme) => (state.is_finance === false ? theme.palette.common.white : theme.palette.common.black),
            "&.Mui-selected": {
              color: "#FFFFFF",
            },
            "&:hover": {
              background: "transparent"
            }
          }}
            value={false}>
            Outright Purchase
          </ToggleButton>
          <ToggleButton sx={{
            fontFamily: "'Harmonia Sans Pro', sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            textTransform: 'capitalize',
            color: (theme) => (state.is_finance === true ? theme.palette.common.white : theme.palette.common.black),
            "&.Mui-selected": {
              color: "#FFFFFF",
            },
            "&:hover": {
              background: "transparent"
            }
          }}
            value={true}
          >
            Financing
          </ToggleButton>
        </ToggleButtonGroup>

        {!state.is_finance && <OutRightPurchase />}
        {state.is_finance && <FinancingPurchase />}
      </Box>

    </Box >
  );
}
