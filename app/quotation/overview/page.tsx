"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { OutRightPurchase } from '@/components/overview/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing';
import Image from 'next/image';
import { OverviewData } from '@/components/overview/overview';
import { EstimatedEnergyRequirement } from '@/components/overview/estimatedEnergyRequirement';
import useQuotation from '@/hooks/quotation';
import React from 'react';
import { Button, ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BackHandOutlined } from '@mui/icons-material';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });
  const { quote } = useQuotation();


  const handleToggle = (id: any) => {
    const formData = {
      finance: id
    }
    actions.updateAction(formData);
  };

  const onBack = () => {
    router.push(`/quotation/breakdown`);
  }

  return (
    <div>

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
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <div className="w-full flex gap-4 items-center flex-col sm:flex-row">
          <div className="w-full pt-4 pb-4 mb-2">
            <h4 className="heading text-center">Overview</h4>
            <div className="w-full container mx-auto flex flex-col gap-4">


              <OverviewData />

              <EstimatedEnergyRequirement quote={quote} />

              <ToggleButtonGroup
                color="primary"
                value={state.finance}
                exclusive
                onChange={(e, value) => handleToggle(value)}
                fullWidth

              >
                <ToggleButton value={false}>Outright Purchase</ToggleButton>
                <ToggleButton value={true}>Financing</ToggleButton>
              </ToggleButtonGroup>

              {!state.finance && <OutRightPurchase quote={quote} />}
              {state.finance && <FinancingPurchase quote={quote} />}


            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
