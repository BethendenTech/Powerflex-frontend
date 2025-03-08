import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";

const ContactFooter = () => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          backgroundImage: "url('/images/home/about-us.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 255, 0.5)",

          }}
        >
          <Box
            className="container footerPackageEnergy"
            sx={{
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",

            }}
          >

            <Grid2 size={{ sm: 6, xs: 12 }} className="footerPackageEnergyCard">
              <Stack alignItems="center" p={4}>
                <Typography pb={2} color="common.white">
                  Check out Packages section
                </Typography>
                {/* <Typography pb={1} color="common.white">
                  Select the button for Tailored Energy Solution For Every Need!
                </Typography> */}
                <Button href="/#packages" variant="contained" color="primary" sx={{ width: "200px" }}>Solar Packages</Button>
              </Stack>
            </Grid2>
            <Grid2 size={{ sm: 6, xs: 12 }}>
              <Stack alignItems="center" p={4}>
                <Typography pb={2} color="common.white">
                  Customise your energy needs
                </Typography>
                {/* <Typography pb={1} color="common.white">
                  Customize your energy needs to your usage.
                </Typography> */}
                {/* <Typography pb={1} color="common.white">
                  Select the button and lets get your home powered!
                </Typography> */}
                 <Button href="/quotation/details" variant="contained" color="primary" sx={{ width: "200px" }}> Get a quote</Button>
              </Stack>
            </Grid2>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactFooter;
