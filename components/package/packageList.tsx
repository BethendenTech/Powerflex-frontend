import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography } from "@mui/material";
import React from "react";

export const PackageList = () => {
    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/package/packages/`);

        if (response.ok) {
            const data = await response.json();
            setData(data);
        }
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
                                    image={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
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
                                    <Button variant="outlined">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid2>
                    ))}

                </Grid2>
            </Container>
        </Box>
    );
}