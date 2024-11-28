import { Box, Grid2, Typography } from "@mui/material"
import Link from "next/link"
import { BannerGlowingButton } from "../button/style";

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
                    fontSize={36}
                    color="#fff"
                    sx={{
                        textShadow: '2px 2px 5px #000',
                    }}
                >
                    Powering your world
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight="bold"
                    fontSize={33}
                    color="#fff"
                    sx={{
                        textShadow: '2px 2px 5px #000',
                    }}
                >
                    with clean energy solutions
                </Typography>

                <Typography
                    color="#fff"
                    mt={4}
                    sx={{
                        textShadow: '1px 1px 5px #000',
                    }}
                >
                    Affordable, reliable and tailored solar solutions for every home and business
                </Typography>


                <Grid2 mt={20} container spacing={2}>

                    <Grid2 size={{ xs: 12, md: 3 }} offset={{ md: 3 }}>
                        <BannerGlowingButton
                            variant="outlined"
                            LinkComponent={Link}
                            href="/quotation/details"
                            color="secondary"
                            fullWidth
                        >
                            Explore Products
                        </BannerGlowingButton>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
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