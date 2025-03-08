import React from 'react'
import { Box, Container, IconButton, Stack, Typography, } from '@mui/material'
import { FooterSection } from '../style'
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const gridItemStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    height: "100%",

};

const WebFooter = () => {
    const CallNumber = "+2347074109549";
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
                        <Grid size={{ lg: 1.5, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles }}>
                            <Box
                                component="img"
                                src="/images/logo-white.png"
                                sx={{
                                    width: "100px",
                                    height: "50px",
                                }}
                            />
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component={Link}
                                href='/'
                                fontSize={16}
                                color="#ffffff"
                                fontWeight={400}
                                sx={{ textDecoration: 'none' }}
                            >
                                Home
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component={Link}
                                href='/#about'
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                sx={{ textDecoration: 'none' }}
                            >
                                About Us
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component={Link}
                                href='/#products'
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                              
                                sx={{ textDecoration: 'none' }}
                            >
                                Products
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component={Link}
                                href='/#financing'
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                                
                                sx={{ textDecoration: 'none' }}
                            >
                                Financing
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component={Link}
                                href='/#how-it-works'
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                               
                                sx={{ textDecoration: 'none' }}
                            >
                                How it works
                            </Typography>
                        </Grid>
                        <Grid size={{ lg: 1, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                              
                                href='/#contact-us'
                                component={Link}
                            >
                                Contact Us
                            </Typography>
                        </Grid>
                        {/* <Grid size={{ lg: 2, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Typography
                                component="h1"
                                fontSize={16}
                                color="#fff"
                                fontWeight={400}
                            >
                                Solar Business Suite
                            </Typography>
                        </Grid> */}
                        <Grid size={{ lg: 2.5, md: 4, sm: 6, xs: 12 }} sx={{ ...gridItemStyles, mt: 2.5 }}>
                            <Stack direction="row" spacing={3}>
                                <IconButton sx={{
                                    background: 'transparent',
                                    color: '#FFFFFF'
                                }}
                                    LinkComponent={Link} href="https://www.facebook.com/share/1875UYbCMW/?mibextid=wwXIfr" target="_blank">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton sx={{
                                    background: 'transparent',
                                    color: '#FFFFFF'
                                }} LinkComponent={Link} href="https://www.instagram.com/powerflex_ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton LinkComponent={Link} href={`https://wa.me/${CallNumber}`} target="_blank" sx={{
                                    background: 'transparent',
                                    color: '#FFFFFF'
                                }}>
                                    <WhatsAppIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </FooterSection>
        </>
    )
}

export default WebFooter