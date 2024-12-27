"use client"; // This is a client component

import Summary from '@/components/breakdown/summary';
import { NextButton } from '@/components/button/style';
import { FormTitle } from '@/components/form/style';
import StatusImage from '@/components/StatusImage';
import CustomizedSteppers from '@/components/stepper';
import Tooltip from '@/components/Tooltip';
import useQuotation from '@/hooks/quotation';
import updateAction from '@/little-state/action';
import { Box, Button } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useResizeObserver from "use-resize-observer";

export default function Page() {
  const { calculateQuote } = useQuotation()

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      additional_info: false,
      solar_load: 50,
      battery_autonomy_hours_only: 12,
      battery_autonomy_days: 0,
      battery_autonomy_hours: 0,
    }
  });

  const allValues = watch();
  const solar_load = watch("solar_load");
  const battery_autonomy_hours_only = watch("battery_autonomy_hours_only");
  const battery_autonomy_days = watch("battery_autonomy_days");
  const battery_autonomy_hours = watch("battery_autonomy_hours");

  const onSubmit = async (formData: any) => {
    try {
      formData['quote_number'] = state.quote_number
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-quote-step-2/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        actions.updateAction(formData);
        router.push(`/quotation/appliances`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { width } = useResizeObserver<HTMLDivElement>();

  React.useEffect(() => {
    if (state) {
      setValue("additional_info", state.additional_info || false);
      setValue("solar_load", state.solar_load || 50);
      setValue("battery_autonomy_hours_only", state.battery_autonomy_hours_only || 12);
      setValue("battery_autonomy_days", state.battery_autonomy_days || 0);
      setValue("battery_autonomy_hours", state.battery_autonomy_hours || 0);
    }
  }, [state])

  const onBack = () => {
    router.push(`/quotation/monthly-spend`);
  }

  useEffect(() => {
    const filter = {
      electricity_spend: state.electricity_spend,
      price_band: state.price_band,
      solar_load: solar_load,
      battery_autonomy_hours_only: battery_autonomy_hours_only,
      battery_autonomy_days: battery_autonomy_days,
      battery_autonomy_hours: battery_autonomy_hours,
      breakdowns: {},
      is_finance: false
    }
    calculateQuote(filter)
  }, [solar_load, battery_autonomy_hours_only, battery_autonomy_days, battery_autonomy_hours])

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

      <StatusImage status={3} />

      <CustomizedSteppers activeStep={3} />


      <form className="w-full details-form flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

        {/* <FormControl
          fullWidth
          error={!!errors.solar_load}
        >
          <FormLabel>
            Solar load coverage
          </FormLabel>


          <Slider
            aria-label="Solar load coverage"
            defaultValue={allValues.solar_load}
            slots={{
              valueLabel: ValueLabelComponent,
            }}
            step={1}
            valueLabelDisplay="auto"
            marks={solarLoadCoverageMarks}
            onChange={(e: any) => {
              if (e?.target?.value) {
                setValue("solar_load", e.target.value)
              }
            }}
          />

          <FormHelperText>{errors?.solar_load?.message}</FormHelperText>
        </FormControl> */}

        <div className='flex input-group'>
          <FormTitle htmlFor="solar_load" className="label">
            Solar load coverage
          </FormTitle>
          <div className='input-group input-group-background'>
            <div className='flex input-group'>
              <Tooltip
                content={`${allValues.solar_load}%`}
                isAlwaysOpen={false}
                left={`${((width ?? 0) - 20) * allValues.solar_load / 100 + 20}px`}
                position="top"
              >
                <div className='slider-container'>
                  <input
                    id="solar_load"
                    className="input w-full slider-input"
                    type="range"
                    style={{ backgroundSize: `${allValues.solar_load}% 100%` }}
                    {...register('solar_load', { required: 'Solar load is required' })}
                  />
                  {errors.solar_load && <p className="text-red-500 text-xs italic">{errors?.solar_load?.message}</p>}
                </div>
              </Tooltip>
              <div className='flex flex-row justify-between calibration-container'>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={`calibration-${i}`} className='text-sm text-black font-bold calibration-line-container'>{i * 25}%</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex input-group'>
          <FormTitle htmlFor="battery_autonomy_hours_only" className="label">
            Battery autonomy in days and hours
          </FormTitle>
          <div className='input-group input-group-background'>

            <div className='input-group'>
              <FormTitle sx={{ fontSize: "14px", fontWeight: "bold" }} htmlFor="battery_autonomy_hours_only" className="label !font-bold">
                Hours
              </FormTitle>
              <Tooltip
                content={`${allValues.battery_autonomy_hours_only} h`}
                isAlwaysOpen={false}
                left={`${((width ?? 0) - 20) * allValues.battery_autonomy_hours_only / 24 + 20}px`}
                position="top"
              >
                <div className='slider-container'>
                  <input
                    id="battery_autonomy_hours_only"
                    className="input w-full slider-input"
                    type="range"
                    {...register('battery_autonomy_hours_only', { required: 'Battery Autonomy Hours Only is required' })}
                    min="0"
                    max="24"
                    style={{ backgroundSize: `${100 * allValues.battery_autonomy_hours_only / 24}% 100%` }}
                  />

                  {errors.battery_autonomy_hours_only && <p className="text-red-500 text-xs italic">{errors?.battery_autonomy_hours_only?.message}</p>}
                </div>
              </Tooltip>
              <div className='flex flex-row justify-between calibration-container'>
                {Array.from({ length: 25 }, (_, i) => (
                  <div key={`calibration-${i}`} className='calibration-line-container'>
                    <div className={`calibration-line ${i % 6 === 0 ? 'active' : ''}`}></div>
                    <span className='text-sm font-bold text-black'>
                      {i % 12 === 0 ? i : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='input-group'>
              <FormTitle sx={{ fontSize: "14px", fontWeight: "bold" }} htmlFor="battery_autonomy_hours_only" className="label !font-bold mt-[10px]">
                Days
              </FormTitle>
              <Tooltip
                content={`${allValues.battery_autonomy_days} d`}
                isAlwaysOpen={false}
                left={`${((width ?? 0) - 20) * allValues.battery_autonomy_days / 5 + 20}px`}
                position="top"
              >
                <div className='slider-container'>
                  <input
                    // ref={ref}
                    id="battery_autonomy_days"
                    className="input w-full slider-input"
                    type="range"
                    {...register('battery_autonomy_days', { required: 'Battery Autonomy Days is required' })}
                    min="0"
                    max="5"
                    style={{ backgroundSize: `${100 * allValues.battery_autonomy_days / 5}% 100%` }}
                  />
                </div>
              </Tooltip>
              <div className='flex flex-row justify-between calibration-container'>
                {Array.from({ length: 6 }, (_, i) => (
                  <span key={`calibration-${i}`} className='text-sm text-black font-bold calibration-line-container'>{i}</span>
                ))}
              </div>
            </div>
            <div className='m-auto pt-[10px] font-bold text-black'>
              {allValues.battery_autonomy_days && allValues.battery_autonomy_days != 0 ? `${allValues.battery_autonomy_days} Day(s)` : ""}
              {" "}

              {allValues.battery_autonomy_hours_only && allValues.battery_autonomy_hours_only != 0 ? `${allValues.battery_autonomy_hours_only} Hour(s)` : ""}
            </div>
          </div>
        </div>

        <Box position="sticky" bottom={0} mt={2}>
          <Summary showCalculate={false} />

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
