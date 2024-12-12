import { Box, Container, Grid2, Typography } from "@mui/material"
import ProductCard from "../product/productCard";

const backgroundImage = "/images/home/bg-products.svg";


const HomeProductSection = () => {
    return (
        <>
            <Box
                id="products"
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    display: {
                        lg: 'block',
                        md: 'block',
                        sm: 'none',
                        xs: 'none'
                    },
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >

                <Container
                    maxWidth="md"
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
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontSize={32}
                                color="#191919"
                                sx={{ pb: 4 }}
                            >
                                Find the Right Solar Solution for Your Needs
                            </Typography>

                            <Typography
                                component="h2"
                                fontSize={16}
                                color="#191919"
                            >
                                Our products are designed to meet a variety of needs, whether you’re powering a small home or a large business
                            </Typography>
                        </Grid2>
                    </Grid2>

                    <Box pt={20}>
                        <ProductCard title="Solar Panels" description="Durable and efficient panels to capture maximum energy." image="/images/products/solar-panels.svg" />

                        <ProductCard title="Inverters" description="Reliable power conversion for seamless energy use" image="/images/products/inverters.svg" />

                        <ProductCard title="Batteries" description="Energy storage solutions tailored for all-day power." image="/images/products/batteries.svg" />
                    </Box>
                </Container>
            </Box>
            <Box
                id="products"
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    display: {
                        lg: 'none',
                        md: 'none',
                        sm: 'block',
                        xs: 'block'
                    },
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
            </Box>
            <Container
                maxWidth="md"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    top: '-38px',
                    background: "transparent",
                    pb: 4,
                    display: {
                        lg: 'none',
                        md: 'none',
                        sm: 'block',
                        xs: 'block'
                    },
                }}
            >

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontSize={32}
                            sx={{
                                pb: 4,
                                color: "#191919",
                                fontWeight: 700,
                                lineHeight: "38.4px",
                                textAlign: "left",
                            }}
                        >
                            Find the Right Solar Solution for Your Needs
                        </Typography>

                        <Typography
                            component="h2"
                            fontSize={16}
                            sx={{
                                color: "#191919",
                                fontWeight: 400,
                                lineHeight: "19.2px",
                                textAlign: "left",
                            }}
                        >
                            Our products are designed to meet a variety of needs, whether you’re powering a small home or a large business
                        </Typography>
                    </Grid2>
                </Grid2>

                <Box pt={4}>
                    <ProductCard title="Solar Panels" description="Durable and efficient panels to capture maximum energy." image="/images/products/solar-panels.svg" />

                    <ProductCard title="Inverters" description="Reliable power conversion for seamless energy use" image="/images/products/inverters.svg" />

                    <ProductCard title="Batteries" description="Energy storage solutions tailored for all-day power." image="/images/products/batteries.svg" />
                </Box>
            </Container>
        </>
    )
}


export default HomeProductSection
