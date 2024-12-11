import { Box, Grid2, Typography } from "@mui/material"
import Link from "next/link"
import { BannerGlowingButton, BannerNormalButton } from "../button/style";

const backgroundImage = "/images/home/bg-banner.svg";
const backgroundImage2 = "/images/home/mb-banner.svg";

const HomeMainSection = () => {
    return (
        <Box
            sx={{
                backgroundImage: {
                    lg: `url(${backgroundImage})`,
                    md: `url(${backgroundImage})`,
                    sm: `url(${backgroundImage2})`,
                    xs: `url(${backgroundImage2})`
                },
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: {
                    xs: '10px',
                    md: '30px',
                },
            }}
        >
            {/* Text Section */}
            <Box
                textAlign="center"
                sx={{
                    pt: {
                        xs: 20,
                        md: 20
                    },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight="bold"
                    color="#fff"
                    sx={{
                        textShadow: {
                            md: '2px 2px 5px #000000',
                            xs: 'none'
                        },
                        fontSize: {
                            md: "56.81px",
                            xs: "38.72px",
                        },
                        fontWeight: 700,
                        lineHeight: {
                            md: "68.17px",
                            xs: "46.47px",
                        },
                        textAlign: "center",
                        WebkitTextStroke: "0.68px #A2978E",
                    }}
                >
                    Powering your world
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight="bold"
                    color="#fff"
                    sx={{
                        textShadow: {
                            md: '2px 2px 5px #000000',
                            xs: 'none'
                        },
                        fontSize: {
                            md: "42.67px",
                            xs: "29.09px",
                        },
                        fontWeight: 600,
                        lineHeight: {
                            md: "51.2px",
                            xs: "34.9px",
                        },
                        textAlign: "center",
                        WebkitTextStroke: "0.68px #A2978E",
                    }}
                >
                    with clean energy solutions
                </Typography>

                <Typography
                    color="#fff"
                    mt={4}
                    sx={{
                        textShadow: {
                            md: '2px 2px 5px #000000',
                            xs: 'none'
                        },
                        fontSize: {
                            md: "25.25px",
                            xs: "17.21px"
                        },
                        fontWeight: 400,
                        lineHeight: {
                            md: "30.3px",
                            xs: "20.65px"
                        },
                        textAlign: "center",
                    }}
                >
                    Affordable, reliable and tailored solar solutions for every home and business
                </Typography>
            </Box>

            {/* Button Section */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    pb: {
                        xs: 3,
                        md: 2,
                    },
                }}
            >
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 6, md: 6 }}>
                        <BannerNormalButton
                            variant="outlined"
                            LinkComponent={Link}
                            href="/#products"
                            color="secondary"
                            fullWidth
                        >
                            Explore Products
                        </BannerNormalButton>
                    </Grid2>
                    <Grid2 size={{ xs: 6, md: 6 }}>
                        <BannerGlowingButton
                            variant="outlined"
                            LinkComponent={Link}
                            href="/quotation/details"
                            color="secondary"
                            fullWidth
                        >
                            Get a quote
                        </BannerGlowingButton>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );
};

export default HomeMainSection;
