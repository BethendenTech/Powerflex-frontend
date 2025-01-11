"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAction from '@/little-state/action';
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, OutlinedInput } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { NextButton } from '@/components/button/style';
import { Description, FormInputField, FormTitle, FormValidation, Heading, Title } from '@/components/form/style';
import { DialogContext } from '@/contexts/dialogContext';

export default function Page() {
  const { actions, state } = useStateMachine({ updateAction });

  const { openDialog, closeDialog } = useContext(DialogContext);
  const [termsData, setTermsData] = useState("");

  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      is_finance: true,
      agree_terms: false,
    }
  });

  React.useEffect(() => {
    if (state) {
      setValue("name", state.name || "");
      setValue("email", state.email || "");
      setValue("phone_number", state.phone_number || "");
    }
  }, [state])

  const onSubmit = async (formData: any) => {
    try {

      actions.updateAction(formData);
      router.push(`/quotation/monthly-spend`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submit-details/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        const data = await response.json();
        actions.updateAction({ "user_id": data?.user?.id });
        router.push(`/quotation/monthly-spend`);
      } else {
        console.error('Failed to save user details');
      }

      if (response.status == 400) {
        const data = await response.json();

        Object.entries(data).forEach(([key, value]: any) => {
          setError(key, { type: "manual", message: value });
        });
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getTermsData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms/content/terms/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTermsData(data.description);
      } else {
        console.error('Failed to get terms and conditions');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getTermsData();
  }, []);

  // useEffect(() => {
  //   if (!state?.terms_and_conditions) {
  //     if (termsData) {
  //       openDialog({
  //         title: "Terms and Conditions",
  //         content: (
  //           <Box>

  //             <p>{termsData}</p>
  //           </Box>
  //         ),
  //         actions: (
  //           <Box>
  //             <Button
  //               variant='contained'
  //               onClick={() => {
  //                 actions.updateAction({ "terms_and_conditions": true });
  //                 closeDialog();
  //               }}
  //             >
  //               Accept
  //             </Button>

  //           </Box>
  //         )
  //       });
  //     }
  //   }
  // }, [state?.terms_and_conditions, termsData])

  const openTermsPopup = () => {
    openDialog({
      title: (
        <Box>
          <Title sx={{ fontSize: "20px" }}>
            Powerflex Energy Calculator - Terms and Conditions
          </Title>
        </Box>
      ),
      content: (
        <Box>
          <Heading sx={{ fontSize: "18px", color: "#424242", mb: 2, textAlign: "left" }}>
            Welcome to Powerflex! Please review the terms before proceeding:
          </Heading>
          <ul style={{
            margin: 0,
            paddingLeft: "1.2em",
            listStyleType: "disc",
            fontFamily: "'Harmonia Sans Pro', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            color: "#424242",
          }}>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Estimate Purpose:</b> The calculator provides a <b>final estimate</b> of energy system requirements and costs basedon your provided data.
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Data Accuracy:</b> Estimates rely on the <b>accuracy of your provided data</b>
              (usage, location, preferences).
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Factors Affecting Implementation:</b> Location, energy patterns, cabling, installation complexity,, and site-specific findings may affect system setup.
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Estimate Validity:</b> The estimate is <b>final</b>, but adjustments may arise after a detailed <b>site assessment</b>.
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Financing:</b> Approval depends on <b>eligibity checks</b> and may require additional documentation.
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>Privacy:</b> Your data is securely processed per our <b>Privacy Policy</b>
            </li>
            <li style={{ fontSize: "0.9em", lineHeight: "1.5", paddingBottom: "10px" }}>
              <b>User Agreement:</b> By proceeding, you confirm your {`data's`} accuracy, understand adjustment may occur after.
            </li>
          </ul>
          <Description sx={{ fontSize: "18px", textAlign: 'left' }}>{termsData}</Description>
        </Box>
      ),
      actions: (
        <Box>
          <Button
            sx={{ padding: "2px 10px" }}
            variant='contained'
            onClick={() => {
              actions.updateAction({ "terms_and_conditions": true });
              closeDialog();
            }}
          >
            Done
          </Button>
        </Box>
      ),
    });
  };

  return (
    <Box>
      <StatusImage status={1} />

      <CustomizedSteppers activeStep={1} />

      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInputField
          fullWidth
          error={!!errors.name}
        >
          <FormTitle>
            Name
          </FormTitle>
          <OutlinedInput
            type='text'
            {...register('name', { required: 'Name is required' })}
          />
          <FormValidation>{errors?.name?.message}</FormValidation>
        </FormInputField>

        <FormInputField
          fullWidth
          error={!!errors.email}
        >
          <FormTitle>
            Email
          </FormTitle>
          <OutlinedInput
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          <FormValidation>{errors?.email?.message}</FormValidation>
        </FormInputField>

        <FormInputField
          fullWidth
          error={!!errors.phone_number}
        >
          <FormTitle>
            Phone number
          </FormTitle>
          <OutlinedInput
            type="tel"
            {...register('phone_number', { required: 'Phone number is required' })}
          />
          <FormValidation>{errors?.phone_number?.message}</FormValidation>
        </FormInputField>

        <FormInputField
          fullWidth
          error={!!errors.agree_terms}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...register('agree_terms', { required: 'You must agree to the Terms and Conditions.' })}
                color="primary"
              />
            }
            label={
              <span style={{
                fontFamily: "'Harmonia Sans Pro', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#424242",
              }}>
                Please check this box to confirm that you have read, understood, and agree to the{' '}
                <Button
                  variant="text"
                  onClick={openTermsPopup}
                  sx={{
                    textDecoration: 'underline', cursor: 'pointer', padding: 0, background: 'transparent', fontFamily: "'Harmonia Sans Pro', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  Terms and Conditions
                </Button>
              </span>
            }
          />
          <FormValidation>{errors?.agree_terms?.message}</FormValidation>
        </FormInputField>

        <Box position="sticky" bottom={0} mt={2}>
          <NextButton
            fullWidth
            type="submit"
            variant='contained'
          >
            Continue to quote
          </NextButton>
        </Box>
      </form>

    </Box>
  );
}
