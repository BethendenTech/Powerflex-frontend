import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';

type ProductDataType = {
    title: string;
    description: string;
    image: string;
};

const ProductCard: React.FC<ProductDataType> = ({ title, description, image }) => {

    return (
        <>
            <Card sx={{
                mt: 2,
                height: '100%',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #ccc',
            }}>

                <CardContent sx={{
                    flex: 1,
                    "&.MuiCardContent-root": {
                        height: "100%",
                        padding: '10px 15px',
                    },
                }}>

                    <Typography component="div" variant="h2" fontSize={26} color="#2755EB" fontWeight='bold' textAlign="center" mb={1}>
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{ color: '#191919', px: 3.4, }}
                    >
                        {description}
                    </Typography>
                    <Box textAlign="center">
                        <Button
                            variant='outlined'
                            sx={{ mt: 2, mb: 2, width: 230, color: '#595959', borderColor: '#595959' }}>
                            Learn More</Button>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: 250, borderRadius: '12px' }}
                        image={image}
                        alt="Product-image"
                    />
                </CardContent>
            </Card>
        </>
    );
}


export default ProductCard