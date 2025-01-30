import { Card, CardContent, Container, Typography } from "@mui/material";
import React from "react";

const ContactDetailPage = () => {
  return (
    <>
      <Container>
        <Card sx={{ borderRadius: "16px" }}>
          <Typography
            variant="h5"
            fontWeight={700}
            fontSize={26}
            sx={{
              textAlign: "center",
              backgroundColor: "primary.main",
              p: 1,
              color: "white",
            }}
          >
            Contact Us
          </Typography>
          <CardContent>
            <Typography variant="h6" fontSize={18} fontWeight={600} mt={2}>
              Head Office:
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              No 33 Ike Asogwa Street, Off Bush Street, Maryland, Ikeja, Lagos
            </Typography>
            <Typography variant="h6" fontSize={18} fontWeight={600} mt={2}>
              PowerFlex Experience Outlet:
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              No 2b Medical Road, Computer Village, Ikeja, Lagos
            </Typography>
            <Typography variant="h6" fontSize={18} fontWeight={600} mt={2}>
              Contact Details:
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              09087482330
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              sales@powerflexng.com
            </Typography>
            <Typography variant="h6" fontSize={18} fontWeight={600} mt={2}>
              Working Hours:
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              Mon-Fri: 8:00 AM- 5:00 PM
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              Sat-Sun: 9:00 AM- 5:00 PM
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ContactDetailPage;
