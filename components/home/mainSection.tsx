import { Box, Grid2, Typography } from "@mui/material"
import Link from "next/link"
import { BannerGlowingButton, BannerNormalButton } from "../button/style";

const backgroundImage = "/images/home/bg-banner.svg";

const HomeMainSection = () => {

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Box textAlign="center"
                sx={{
                    pt: {
                        xs: 20,
                        md: 20
                    },
                    pb: {
                        xs: 10,
                        md: 20,
                    },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight="bold"
                    color="#fff"
                    sx={{
                        textShadow: '2px 2px 5px #000000',
                        fontSize: "56.81px",
                        fontWeight: 700,
                        lineHeight: "68.17px",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
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
                        textShadow: '2px 2px 5px #000000',
                        fontSize: "42.67px",
                        fontWeight: 700,
                        lineHeight: "51.2px",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >
                    with clean energy solutions
                </Typography>

                <Typography
                    color="#fff"
                    mt={4}
                    sx={{
                        textShadow: '2px 2px 5px #000',
                        fontSize: "25.25px",
                        fontWeight: 400,
                        lineHeight: "30.3px",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >
                    Affordable, reliable and tailored solar solutions for every home and business
                </Typography>
            </Box>

            <Box pb={6} sx={{
                px: {
                    xs: 2
                }
            }}>
                <Grid2 mt={20} container spacing={2}>
                    <Grid2 size={{ xs: 6, md: 3 }} offset={{ md: 3 }}>
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
                    <Grid2 size={{ xs: 6, md: 3 }}>
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
        </Box >
    )
}

export default HomeMainSection