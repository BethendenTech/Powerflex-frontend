import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const PackageList = () => {
    const [data, setData] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [selected, setSelected] = React.useState<any>(null);


    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/package/packages/`);

        if (response.ok) {
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        setLoading(false);
    };


    const ShowPrice = (props: any) => {

        const { item } = props

        if (item.discount_price) {
            return (
                <Box>
                    <Typography sx={{ textDecoration: 'line-through' }}>₦{item.price}</Typography>
                    <Typography>₦{item.discount_price}</Typography>
                </Box>
            )
        } else {
            return (
                <Typography>₦{item.price}</Typography>
            )
        }
    }


    return (
        <Box pt={2} pb={5}>
            <Container maxWidth="lg">

                <Box mb={5} textAlign="center">
                    <Typography gutterBottom variant="h3" fontWeight="bold" color="#2755EB">Tailored Energy Solutions for Every Need!</Typography>
                    <Typography color="#2755EB">Explore our packages designed to meet your energy requirements and help you save on costs.</Typography>
                </Box>


                {loading &&
                    <Grid2 container spacing={3}>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>
                            <Card>
                                <CardContent>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardContent>
                                <CardActions>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardActions>
                            </Card>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>
                            <Card>
                                <CardContent>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardContent>
                                <CardActions>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardActions>
                            </Card>
                        </Grid2>
                        <Grid2 size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>
                            <Card>
                                <CardContent>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardContent>
                                <CardActions>
                                    <Skeleton animation="wave" height={100} width="100%" />
                                </CardActions>
                            </Card>
                        </Grid2>
                    </Grid2>
                }

                <Grid2 container spacing={3}>
                    {data && data.map((item) => (
                        <Grid2 key={item.id} size={{
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            xl: 4,
                        }}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 150 }}
                                    image={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                                    title={item.name}
                                />

                                <CardContent>
                                    <ShowPrice item={item} />

                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="#2755EB">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button variant="outlined" onClick={() => setSelected(item)}>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                    ))}

                </Grid2>


                {selected && <Box>
                    <Card>
                        <CardHeader
                            title={selected.name}
                        />
                        <CardContent>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{
                                    xs: 12,
                                    sm: 12,
                                    md: 3,
                                    lg: 3,
                                    xl: 3,
                                }}>
                                    <Card>
                                        <CardHeader title="Powered Appliances" />
                                    </Card>
                                </Grid2>
                                <Grid2 size={{
                                    xs: 12,
                                    sm: 12,
                                    md: 3,
                                    lg: 3,
                                    xl: 3,
                                }}>
                                    <Card>
                                        <CardHeader title="Runtime" />
                                        <CardContent>
                                            {selected.runtime}
                                        </CardContent>
                                    </Card>
                                </Grid2>
                                <Grid2 size={{
                                    xs: 12,
                                    sm: 12,
                                    md: 6,
                                    lg: 6,
                                    xl: 6,
                                }}>
                                    <Card sx={{ textAlign: "center", alignItems: "center", alignContent: "center" }}>
                                        <CardHeader title="Save up to 50% on power bills" />
                                        <CardContent>
                                            <ShowPrice item={selected} />

                                            <Button variant="contained">Buy Now</Button>

                                            <Stack direction="row" spacing={1}>
                                                <Typography gutterBottom>Power up sustainably</Typography>
                                                <Image src="/images/package/green.svg" alt="solar-panel" width={50} height={50} />
                                                <Typography gutterBottom>cut your carbon footprint</Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid2>
                            </Grid2>
                        </CardContent>
                    </Card>
                </Box>}
            </Container>
        </Box>
    );
}