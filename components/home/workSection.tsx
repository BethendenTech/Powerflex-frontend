import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Grid2, Typography } from "@mui/material"
import Link from "next/link"

const backgroundImage = "/images/home/bg-how-it-works.svg";

const HomeWorkSection = () => {

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
                            How it Works
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="bold"
                            fontSize={16}
                            color="#333"
                        >
                            Simplified solar installation in 3 steps
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 mt={20} container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography>STEP 1</Typography>
                                <Typography>Consultation & Quote</Typography>

                                <CardMedia
                                    component="img"
                                    image="/images/how-it-works/how-it-works-01.svg"
                                />
                                <Typography>Get a personalised quote based on your energy needs using our state-of-the-art solar calculator.</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography>STEP 2</Typography>
                                <Typography>Installation</Typography>

                                <CardMedia
                                    component="img"
                                    image="/images/how-it-works/how-it-works-02.svg"
                                />

                                <Typography>Professionally installed solar systems tailored to your property</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent>
                                <Typography>STEP 3</Typography>
                                <Typography>Power Up</Typography>

                                <CardMedia
                                    component="img"
                                    image="/images/how-it-works/how-it-works-03.svg"
                                />
                                <Typography>Enjoy clean, renewable energy and reduced electricity bills</Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>

            </Container>
        </Box>
    )
}

export default HomeWorkSection