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
                    <Grid container spacing={2} justifyContent="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{
                                background: '#2755EB',
                                borderTopLeftRadius: '20px',
                                borderTopRightRadius: '20px',
                            }}>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    fontSize={32}
                                    color="#FFFFFF"
                                    sx={{ px: 4, py: 2, textAlign: 'center' }}
                                >
                                    How it Works
                                </Typography>
                            </Box>

                            <Box sx={{
                                background: '#F1F7FE',
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                            }}>
                                <Typography
                                    component="h2"
                                    fontSize={16}
                                    color="#191919"
                                    sx={{ px: 4, py: 2, textAlign: 'center' }}
                                >
                                    Simplified solar installation in 3 steps
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid mt={20} container spacing={5}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 1"
                                title="Consultation & Quote"
                                image="/images/how-it-works/step-1-image.svg"
                                description="Get a personalised quote based on your energy needs using our state-of-the-art solar calculator."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 2"
                                title="Installation"
                                image="/images/how-it-works/step-2-image.svg"
                                description="Professionally installed solar systems tailored to your property"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <WorkCard
                                heading="STEP 3"
                                title="Power Up"
                                image="/images/how-it-works/step-3-image.svg"
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
                    top: '-100px',
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
                <Box sx={{
                    background: '#2755EB',
                    borderBottomRightRadius: '12px',
                    borderTopRightRadius: '12px',
                    position: "relative",
                    top: {
                        sm: '-20px',
                        xs: '-22px'
                    },
                    left: {
                        sm: '-60px',
                        xs: '-55px'
                    },
                }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontSize={32}
                        sx={{
                            color: "#FFFFFF",
                            fontWeight: 700,
                            lineHeight: "38.4px",
                            textAlign: "left",
                            padding: '10px 20px 10px 60px'
                        }}
                    >
                        How it Works
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        component="h2"
                        fontSize={16}
                        color="#191919"
                    >
                        Simplified solar installation in 3 steps
                    </Typography>
                </Box>

                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 1"
                            title="Consultation & Quote"
                            image="/images/how-it-works/step-1-image.svg"
                            description="Get a personalised quote based on your energy needs using our state-of-the-art solar calculator."
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 2"
                            title="Installation"
                            image="/images/how-it-works/step-2-image.svg"
                            description="Professionally installed solar systems tailored to your property"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} px={{ xs: 4, sm: 4 }}>
                        <WorkCard
                            heading="STEP 3"
                            title="Power Up"
                            image="/images/how-it-works/step-3-image.svg"
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