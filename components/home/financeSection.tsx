import { Box, Button, Card, CardContent, Container, Grid2, Stack, Typography } from "@mui/material"
import Link from "next/link"

const backgroundImage = "/images/home/bg-financing.svg";
const backgroundImage2 = "/images/home/mb-finance.svg";

const HomeFinanceSection = () => {

    return (
        <>
            <Box
                id="financing"
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
                    <Grid2 container spacing={2} justifyContent="center">
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
                                    sx={{ px: 4, py: 2, textAlign: 'center' }}
                                >
                                    Flexible Financing For Every Budget
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
                                    We have options for every type of budget
                                </Typography>
                            </Box>
                        </Grid2>
                    </Grid2>

                    <Grid2 mt={20} container spacing={4}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <Card sx={{
                                mt: 2,
                                height: '100%',
                                borderRadius: '12px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}>
                                <CardContent sx={{
                                    "&.MuiCardContent-root": {
                                        height: "100%",
                                    },
                                }}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        spacing={3}
                                        sx={{
                                            "&.MuiStack-root": {
                                                height: "100%",
                                            },
                                        }}>
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                component="h1"
                                                fontWeight="bold"
                                                fontSize={28}
                                                color="#2755EB"
                                                mb={2}
                                            >
                                                Outright Payment
                                            </Typography>
                                            <Typography component="p"
                                                sx={{ color: '#191919' }}>
                                                Pay once, and you’re done! Our outright purchases are fair, competitive and transparent. Because going solar should be simple.
                                            </Typography>
                                        </Box>
                                        <Box textAlign='right'>
                                            <Button variant="outlined" LinkComponent={Link} href="/quotation/details" sx={{ width: 250, color: '#595959', borderColor: '#595959' }}>
                                                Explore Pricing
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <Card sx={{
                                mt: 2,
                                height: '100%',
                                borderRadius: '12px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}>
                                <CardContent sx={{
                                    "&.MuiCardContent-root": {
                                        height: "100%",
                                    },
                                }}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        spacing={3}
                                        sx={{
                                            "&.MuiStack-root": {
                                                height: "100%",
                                            },
                                        }}>
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                component="h1"
                                                fontWeight="bold"
                                                fontSize={28}
                                                color="#2755EB"
                                                mb={2}
                                            >
                                                Installment Plans
                                            </Typography>
                                            <Typography>Spread your payments over time with our flexible financing options, designed to make solar accesible for everyone.</Typography>
                                        </Box>

                                        <Box textAlign='right'>
                                            <Button variant="outlined" LinkComponent={Link} href="/quotation/details" sx={{ width: 250, color: '#595959', borderColor: '#595959' }}>
                                                Explore financing
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            <Box
                id="financing"
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
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
                    top: '-38px',
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
                        Flexible Financing For Every Budget
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        component="h2"
                        fontSize={16}
                        color="#191919"
                    >
                        We have options for every type of budget
                    </Typography>
                </Box>
            </Container>

            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    display: {
                        lg: 'none',
                        md: 'none',
                        sm: 'block',
                        xs: 'block'
                    },
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${backgroundImage2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: 0,
                    }}
                />
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        paddingTop: 50,
                        paddingBottom: "50px",
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                        },
                    }}
                >
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <Card sx={{
                                mt: 2,
                                height: '100%',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}>
                                <CardContent sx={{
                                    "&.MuiCardContent-root": {
                                        height: "100%",
                                    },
                                }}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        spacing={3}
                                        sx={{
                                            "&.MuiStack-root": {
                                                height: "100%",
                                            },
                                        }}>
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                component="h1"
                                                fontSize={26}
                                                color="#191919"
                                                mb={2}
                                            >
                                                Outright Payment
                                            </Typography>
                                            <Typography component="p"
                                                sx={{ color: '#191919' }}>
                                                Pay once, and you’re done! Our outright purchases are fair, competitive and transparent. Because going solar should be simple.
                                            </Typography>
                                        </Box>
                                        <Box textAlign='center'>
                                            <Button variant="outlined" LinkComponent={Link} href="/quotation/details" sx={{ width: 250, color: '#595959', borderColor: '#595959' }}>
                                                Explore Pricing
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <Card sx={{
                                mt: 2,
                                height: '100%',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid #ccc',
                                padding: '10px 15px',
                            }}>
                                <CardContent sx={{
                                    "&.MuiCardContent-root": {
                                        height: "100%",
                                    },
                                }}>
                                    <Stack
                                        direction="column"
                                        justifyContent="space-between"
                                        spacing={3}
                                        sx={{
                                            "&.MuiStack-root": {
                                                height: "100%",
                                            },
                                        }}>
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                component="h1"
                                                fontSize={28}
                                                mb={2}
                                            >
                                                Installment Plans
                                            </Typography>
                                            <Typography component="p"
                                                sx={{ color: '#191919' }}>Spread your payments over time with our flexible financing options, designed to make solar accesible for everyone.</Typography>
                                        </Box>

                                        <Box textAlign='center'>
                                            <Button variant="outlined" LinkComponent={Link} href="/quotation/details" sx={{ width: 250, color: '#595959', borderColor: '#595959' }}>
                                                Explore financing
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
        </>
    )
}

export default HomeFinanceSection