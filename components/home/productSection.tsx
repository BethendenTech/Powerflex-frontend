import { Box, Grid2, Typography } from "@mui/material"

const backgroundImage = "/images/home/bg-products.svg";


const HomeProductSection = () => {
    return (
        <Box
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <Box
                sx={{
                    pt: {
                        xs: 20,
                        md: 20,
                    },
                    pb: {
                        xs: 10,
                        md: 20,
                    },
                }}
            >

                <Grid2 container spacing={2}>

                    <Grid2 size={{ xs: 12, md: 4 }} offset={{ md: 2 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            fontSize={32}
                            color="#333"
                        >
                            Find the Right Solar Solution for Your Needs
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="bold"
                            fontSize={16}
                            color="#333"
                        >
                            Our products are designed to meet a variety of needs, whether you’re powering a small home or a large business
                        </Typography>


                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}


export default HomeProductSection
