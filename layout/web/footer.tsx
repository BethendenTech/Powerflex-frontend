import React from 'react'
import { Box, Container, Stack, Typography, } from '@mui/material'
import { FooterSection } from '../style'
import Grid from '@mui/material/Grid2';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const gridItemStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
};

const WebFooter = () => {
    return (
        <>
            <FooterSection>
                <Container maxWidth="lg"
                    sx={{
                        maxWidth: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                        },
                    }}>
                    <Grid container spacing={1} alignItems="center" textAlign="center">
                        <Grid size={{ lg: 1.5, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px" }}>
                            <Box
                                component="img"
                                src="/images/logo-white.png"
                                sx={{
                                    width: "100px",
                                    height: "50px",
                                }}
                            />
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#ffffff"
                                fontWeight={400}
                            >
                                Home
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                About Us
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                mb={2}
                            >
                                Products
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Solar Panels Inverters Batteries
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                mb={2}
                            >
                                Financing
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                mb={2}
                            >
                                Outright Pament
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Instalment Plans
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                How it works
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                mb={2}
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Phone
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Email
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Address
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 2, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Solar Business Suite
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 2.5, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, minHeight: "150px", mt: 2.5 }}>
                            <Stack direction="row" spacing={3}>
                                <FacebookIcon />
                                <XIcon />
                                <YouTubeIcon />
                                <InstagramIcon />
                                <WhatsAppIcon />
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </FooterSection>
        </>
    )
}

export default WebFooter