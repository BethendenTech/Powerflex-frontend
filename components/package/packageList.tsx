import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Skeleton, Typography } from "@mui/material";
import React from "react";
import { ShowPrice } from "./showPrice";
import { PackageDetail } from "./packageDetail";

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


                {selected && <PackageDetail item={selected} />}
            </Container>
        </Box>
    );
}