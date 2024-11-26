import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid2 } from '@mui/material';

type ProductDataType = {
    title: string;
    description: string;
    image: string;
};

const ProductCard: React.FC<ProductDataType> = ({ title, description, image }) => {
    const theme = useTheme();

    return (
        <Card sx={{ mt: 2 }}>

            <CardContent>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Typography component="div" variant="h6">
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            sx={{ color: 'text.secondary' }}
                        >
                            {description}
                        </Typography>

                        <Button variant='outlined' color='secondary' sx={{ mt: 2, width: 200 }}>Learn More</Button>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: "100%", height: 200 }}
                            image={image}
                            alt={title}
                        />
                    </Grid2>
                </Grid2>
            </CardContent>

        </Card>
    );
}


export default ProductCard