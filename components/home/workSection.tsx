import { Box, Container, Typography } from "@mui/material"
import WorkCard from "../product/workCard";
import Grid from '@mui/material/Grid2';

const backgroundImage = "/images/home/bg-how-it-works.svg";
const backgroundImage2 = "/images/home/mb-work-section.svg";

const HomeWorkSection = () => {

    return (
        <>
            <Box
                id="how-it-works"
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
                    maxWidth="lg"
                    sx={{
                        pt: {
                            xs: 20,
                            md: 20,
                        },
                        pb: {
                            xs: 10,
                            md: 20,
                        },
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                        },
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight="bold"
                                fontSize={32}
                                color="#191919"
                                mb={2}
                            >
                                How it Works
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                fontSize={16}
                                color="#191919"
                            >
                                Simplified solar installation in 3 steps
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid mt={20} container spacing={5}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 1"
                                title="Consultation & Quote"
                                image="/images/how-it-works/how-it-works-01.svg"
                                description="Get a personalised quote based on your energy needs using our state-of-the-art solar calculator."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 2"
                                title="Installation"
                                image="/images/how-it-works/how-it-works-02.svg"
                                description="Professionally installed solar systems tailored to your property"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 3"
                                title="Power Up"
                                image="/images/how-it-works/how-it-works-03.svg"
                                description="Enjoy clean, renewable energy and reduced electricity bills"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box
                id="how-it-works"
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
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    top: '-80px',
                    background: "transparent",
                    display: {
                        lg: 'none',
                        md: 'none',
                        sm: 'block',
                        xs: 'block'
                    },
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                    },
                }}
            >
                <Grid container spacing={2} mb={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            fontSize={32}
                            color="#191919"
                            mb={2}
                        >
                            How it Works
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontSize={16}
                            color="#191919"
                        >
                            Simplified solar installation in 3 steps
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 1"
                            title="Consultation & Quote"
                            image="/images/how-it-works/how-it-works-01.svg"
                            description="Get a personalised quote based on your energy needs using our state-of-the-art solar calculator."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 2"
                            title="Installation"
                            image="/images/how-it-works/how-it-works-02.svg"
                            description="Professionally installed solar systems tailored to your property"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 3"
                            title="Power Up"
                            image="/images/how-it-works/how-it-works-03.svg"
                            description="Enjoy clean, renewable energy and reduced electricity bills"
                        />
                    </Grid>
                </Grid>
            </Container>

            <Box
                sx={{
                    backgroundImage: `url(${backgroundImage2})`,
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
                    position: 'relative',
                    marginTop: '-147px'
                }}
            >
            </Box>
        </>
    )
}

export default HomeWorkSection