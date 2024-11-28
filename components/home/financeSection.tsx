import { Box, Button, Card, CardContent, Container, Grid2, Stack, Typography } from "@mui/material"
import Link from "next/link"

const backgroundImage = "/images/home/bg-financing.svg";

const HomeFinanceSection = () => {

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

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            fontSize={32}
                            color="#191919"
                            sx={{ pb: 4 }}
                        >
                            Flexible Financing For Every Budget
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontSize={16}
                            color="#191919"
                        >
                            We have options for every type of budget
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 mt={20} container spacing={2}>

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
                                            fontWeight="bold"
                                            fontSize={26}
                                            color="#191919"
                                            mb={2}
                                        >
                                            Outright Payment
                                        </Typography>
                                        <Typography>
                                            Pay once, and you’re done! Our outright purchases are fair, competitive and transparent. Because going solar should be simple.
                                        </Typography>
                                    </Box>
                                    <Box textAlign='right'>
                                        <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary">
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
                                            fontWeight="bold"
                                            fontSize={28}
                                            mb={2}
                                        >
                                            Installment Plans
                                        </Typography>
                                        <Typography>Spread your payments over time with our flexible financing options, designed to make solar accesible for everyone.</Typography>
                                    </Box>

                                    <Box textAlign='right'>
                                        <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary">
                                            Explore financing Options
                                        </Button>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>

            </Container>
        </Box>
    )
}

export default HomeFinanceSection