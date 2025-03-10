import { Box, Container, Grid2, Typography } from "@mui/material"

const backgroundImage = "/images/home/about-us.png";
const backgroundImage2 = "/images/home/mb-nigeria.svg";

const HomeAboutSection = () => {

    return (
        <>
            <Box
                id="about"
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
                                    sx={{ px: 4, py: 2 }}
                                >
                                    Powering Nigeria One Home & Business at time
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
                                    sx={{ px: 4, py: 3 }}
                                >
                                    At PowerFlex, we’re dedicated to delivering sustainable energy solutions tailored for Nigerian homes and businesses. From advanced technology to exceptional customer service. We’re redefining how you experience energy.
                                </Typography>
                            </Box>
                        </Grid2>
                    </Grid2>

                    <Grid2 mt={4} container spacing={2}>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box p={2}>
                                <Box
                                    component="img"
                                    src="/images/about/nigeria-3.svg"
                                />
                            </Box>
                        </Grid2>
                    </Grid2>

                </Container>
            </Box>

            <Box
                id="about"
                sx={{
                    position: "relative",
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
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "30%",
                        background: `linear-gradient(to top, #fff, transparent)`,
                        zIndex: 1,
                    }}
                />
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
                        Powering Nigeria One Home & Business at time
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        component="h2"
                        fontSize={16}
                        color="#191919"
                        sx={{
                            fontWeight: 400,
                            lineHeight: "19.2px",
                            color: '#191919'
                        }}
                    >
                        At PowerFlex, we’re dedicated to delivering sustainable energy solutions tailored for Nigerian homes and businesses.
                    </Typography>
                </Box>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Box p={2}>
                            <Box
                                component="img"
                                src="/images/about/nigeria-3.svg"
                            />
                        </Box>
                    </Grid2>
                </Grid2>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            component="h2"
                            fontSize={16}
                            sx={{
                                fontWeight: 400,
                                lineHeight: "19.2px",
                                color: '#191919'
                            }}
                        >
                            From advanced technology to exceptional customer service. We’re redefining how you experience energy.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Container >

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
                    marginTop: '-200px'
                }}
            >
            </Box>
        </>
    )
}

export default HomeAboutSection