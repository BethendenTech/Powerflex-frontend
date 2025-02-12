import { Box, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { BannerGlowingButton } from "../button/style";

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
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={{ sm: 6, xs: 12 }}>
              <Stack alignItems="center" p={4}>
                <Typography pb={1} color="common.white">
                  Check out Packages section
                </Typography>
                <Typography pb={1} color="common.white">
                  Select the button for Tailored Energy Solution For Every Need!
                </Typography>
                <BannerGlowingButton
                  variant="contained"
                  sx={{ width: "200px" }}
                >
                  Solar Packages
                </BannerGlowingButton>
              </Stack>
            </Grid2>
            <Grid2 size={{ sm: 6, xs: 12 }}>
              <Stack alignItems="center" p={4}>
                <Typography pb={1} color="common.white">
                  Customise your energy needs to your usage.
                </Typography>
                <Typography pb={1} color="common.white">
                  Select the button and lets get your home powered!
                </Typography>
                <BannerGlowingButton
                  variant="contained"
                  sx={{ width: "200px" }}
                >
                  Get a quote
                </BannerGlowingButton>
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default ContactFooter;
