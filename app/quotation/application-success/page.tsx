"use client"; // This is a client component

import StatusImage from '@/components/StatusImage';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';

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
          <CardHeader title="Application Submit Successfully" sx={{ textAlign: "center" }} />
          <CardContent>
            <Box textAlign="center" padding={2}>
              <Typography>Installer will call you within the next few hours...</Typography>
              <Typography mt={2} paddingLeft={10} paddingRight={10}>Please continue to create your PowerFlex Customer account.</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box position="sticky" bottom={0} mt={2}>
        <Button variant='contained' fullWidth>Create Account</Button>
      </Box>
    </Box>
  );
}
