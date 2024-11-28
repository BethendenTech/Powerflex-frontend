import { Box, Container, Grid2, Typography } from "@mui/material"
import WorkCard from "../product/workCard";

const backgroundImage = "/images/home/bg-how-it-works.svg";

const HomeWorkSection = () => {

    return (
        <Box
            id="how-it-works"
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
                    </Grid2>
                </Grid2>

                <Grid2 mt={20} container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <WorkCard
                            heading="STEP 1"
                            title="Consultation & Quote"
                            image="/images/how-it-works/how-it-works-01.svg"
                            description="Get a personalised quote based on your energy needs using our state-of-the-art solar calculator."
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <WorkCard
                            heading="STEP 2"
                            title="Installation"
                            image="/images/how-it-works/how-it-works-02.svg"
                            description="Professionally installed solar systems tailored to your property"
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <WorkCard
                            heading="STEP 3"
                            title="Power Up"
                            image="/images/how-it-works/how-it-works-03.svg"
                            description="Enjoy clean, renewable energy and reduced electricity bills"
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default HomeWorkSection