"use client"; // This is a client component

import StatusImage from '@/components/StatusImage';
import { Box, Card, CardContent } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { NextButton } from '@/components/button/style';
import { Description, Heading } from '@/components/form/style';

export default function Page() {

  return (
    <Box>
      <StatusImage status={6} />
      <CustomizedSteppers activeStep={6} />
      <Box sx={{
        borderRadius: 2,
        padding: 3,
        position: "relative",
        textAlign: "center",
        mt: 10,
        pt: 5,
        background: '#ffffff',
        '&:before': {
          content: '""',
          position: "absolute",
          top: "1px",
          left: "1px",
          right: "1px",
          bottom: "1px",
          border: "6px solid #FFFFFF4D",
          borderRadius: "inherit",
          boxShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.1) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        },
      }}>
        <Card sx={{ boxShadow: 'none' }}>
          {/* Top Middle Image */}
          <Box
            component="img"
            src="/images/quotation/payment-success.svg"
            alt="Top Image"
            sx={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "130px",
              height: "130px",
            }}
          />

          <Heading sx={{ mt: 2 }}>
            Payment Successful
          </Heading>
          <CardContent>
            <Box textAlign="center">
              <Description>Installer will call you within the next few hours...</Description>
              <Description mt={2} paddingLeft={12} paddingRight={12}>Please continue to create your PowerFlex Customer account.</Description>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box position="sticky" bottom={0} mt={2}>
        <NextButton variant='contained' fullWidth>Create Account</NextButton>
      </Box>
    </Box>
  );
}
