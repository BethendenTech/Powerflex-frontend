"use client"; // This is a client component

import Breakdown from '@/components/breakdown/breakdown';
import Summary from '@/components/breakdown/summary';
import StatusImage from '@/components/StatusImage';
import CustomizedSteppers from '@/components/stepper';
import Tooltip from '@/components/Tooltip';
import updateAction from '@/little-state/action';
import { Box, Button, Card, CardContent, CardHeader, Switch } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useResizeObserver from "use-resize-observer";

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      additional_info: false,
      solar_load: 50,
      battery_autonomy_hours_only: 12,
      battery_autonomy_days: 0,
      battery_autonomy_hours: 0,
      breakdowns: {},
    }
  });

  const allValues = watch();
  const solar_load = watch("solar_load");
  const breakdowns = watch("breakdowns");
  const battery_autonomy_hours_only = watch("battery_autonomy_hours_only");
  const battery_autonomy_days = watch("battery_autonomy_days");
  const battery_autonomy_hours = watch("battery_autonomy_hours");

  const onSubmit = async (formData: any) => {
    try {
      console.log('formData', formData)
      actions.updateAction(formData);

      router.push(`/quotation/overview`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { width } = useResizeObserver<HTMLDivElement>();

  const [quote, setQuote] = useState({
    number_of_panels: 0,
    number_of_batteries: 3,
    number_of_inverters: 18,
    total_cost_with_profit_financing: 0,
    total_load_kwh: 0,
    load_covered_by_solar: 0,
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleBreakdownChange = (breakdowns: any) => {
    setValue("breakdowns", breakdowns)
  };

  React.useEffect(() => {
    if (state) {
      setValue("additional_info", state.additional_info || false);
      setValue("solar_load", state.solar_load || 50);
      setValue("battery_autonomy_hours_only", state.battery_autonomy_hours_only || 12);
      setValue("battery_autonomy_days", state.battery_autonomy_days || 0);
      setValue("battery_autonomy_hours", state.battery_autonomy_hours || 0);
      setValue("breakdowns", state.breakdowns || {});

      if (state.breakdowns && Object.keys(state.breakdowns).length > 0) {
        setIsChecked(true)
      }
    }
  }, [state])

  //Show estimate on load
  useEffect(() => {
    calculateQuote();
  }, [solar_load, battery_autonomy_hours_only, battery_autonomy_days, breakdowns, battery_autonomy_hours]);

  const calculateQuote = async () => {
    const quoteData = {
      electricity_spend: state.electricity_spend,
      price_band: state.price_band,
      solar_load: solar_load,
      battery_autonomy_hours: Number(battery_autonomy_hours_only) + Number(battery_autonomy_days * 24),
      breakdowns: breakdowns
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (response.ok) {
        const data = await response.json();
        setQuote(data);
      } else {
        console.error('Failed to save user details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

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

      <StatusImage status={3} />

      <CustomizedSteppers activeStep={3} />


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
              <Breakdown onBreakdownChange={handleBreakdownChange} breakdowns={state.breakdowns} />
            )}

          </CardContent>
        </Card>


        <Box position="sticky" bottom={0} mt={2}>
          <Summary solar_panels={quote.number_of_panels} cost={quote.total_cost_with_profit_financing} energy={quote.total_load_kwh} load_covered_by_solar={quote.load_covered_by_solar}/>

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
