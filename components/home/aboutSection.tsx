import { Box, Card, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material"

const backgroundImage = "/images/home/bg-about-us.svg";

const HomeAboutSection = () => {

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
                            Powering Nigeria One home at a Time
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="bold"
                            fontSize={16}
                            color="#333"
                        >
                            At PowerFlexNG, we’re dedicated to delivering sustainable energy solutions tailored for Nigerian homes and businesses. From advanced technology to exceptional customer service. We’re redefining how you experiance energy.
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 mt={20} container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>

                                <CardMedia
                                    component="img"
                                    image="/images/about/nigeria-4.svg"
                                />
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>

            </Container>
        </Box>
    )
}

export default HomeAboutSection