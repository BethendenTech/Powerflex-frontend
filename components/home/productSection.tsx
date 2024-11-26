import { Box, Typography } from "@mui/material"

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

            <Box textAlign="center"
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
            </Box>
        </Box>
    )
}


export default HomeProductSection
