import { Box, Container, Grid2, Typography } from "@mui/material"
import ProductCard from "../product/productCard";

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

                    <Grid2 size={{ xs: 12, md: 4 }}>
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



                <Box>
                    <ProductCard title="Solar Panels" description="Durable and efficient panels to capture maximum energy." image="/images/products/solar-panels.svg" />
                    
                    <ProductCard title="Inverters" description="Reliable power conversion for seamless energy use" image="/images/products/inverters.svg" />
                    
                    <ProductCard title="Batteries" description="Energy storage solutions tailored for all-day power." image="/images/products/batteries.svg" />
                </Box>
            </Container>
        </Box>
    )
}


export default HomeProductSection
