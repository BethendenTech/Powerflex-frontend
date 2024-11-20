"use client"; // This is a client component

import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';

export default function Page() {
  const { state } = useStateMachine({ updateAction });

  return (
    <Box>
      <StatusImage status={6} />
      <CustomizedSteppers activeStep={6} />
      <Card>
        <CardHeader title="Payment Successfull" sx={{ textAlign: "center" }} />
        <CardContent>
          <Box textAlign="center" padding={2}>
            <Typography>Installer will call you within the next few hours...</Typography>
            <Typography mt={2} paddingLeft={10} paddingRight={10}>Please continue to create your PowerFlex Customer account.</Typography>
          </Box>
        </CardContent>
      </Card>
      <Box position="sticky" bottom={0} mt={2}>
        <Button variant='contained' fullWidth>Create Account</Button>
      </Box>
    </Box>
  );
}
