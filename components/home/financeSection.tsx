import { Box, Button, Card, CardContent, CardHeader, Container, Grid2, Typography } from "@mui/material"
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

                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            fontSize={32}
                            color="#333"
                        >
                            Flexible Financing For Every Budget
                        </Typography>

                        <Typography
                            variant="h2"
                            component="h2"
                            fontWeight="bold"
                            fontSize={16}
                            color="#333"
                        >
                            We have options for every type of budget
                        </Typography>
                    </Grid2>
                </Grid2>

                <Grid2 mt={20} container spacing={2}>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    fontWeight="bold"
                                    fontSize={28}
                                >Explore financing Options</Typography>
                                <Typography>Pay once, and you’re done! Our outright purchases are fair, competitive and transparent. Because going solar should be simple.</Typography>
                                <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" fullWidth>
                                    Explore Pricing
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    fontWeight="bold"
                                    fontSize={28}
                                >
                                    Installment Plans
                                </Typography>
                                <Typography>Spread your payments over time with our flexible financing options, designed to make solar accesible for everyone.</Typography>


                                <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" fullWidth>
                                    Explore financing Options
                                </Button>
                            </CardContent>
                        </Card>


                    </Grid2>
                </Grid2>

            </Container>
        </Box>
    )
}

export default HomeFinanceSection