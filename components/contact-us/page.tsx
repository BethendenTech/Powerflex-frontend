import React from "react";
import ContactDetailPage from "./contactDetail";
import FormPage from "./form";
import { Box, Grid2 } from "@mui/material";
import ContactFooter from "./contactFooter";

const ContactUsMainPage = () => {
  return (
    <>
      <Box
        id="contact-us"
        sx={{ backgroundColor: "#DCECFF", position: "relative" }}
        py={5}
      >
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ContactDetailPage />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <FormPage />
          </Grid2>
        </Grid2>
      </Box>
      <ContactFooter />
    </>
  );
};

export default ContactUsMainPage;
