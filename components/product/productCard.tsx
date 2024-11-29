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
                display: 'flex',
                mt: 2,
                padding: {
                    lg: '0px 12px',
                    md: '0px 12px',
                    sm: '0px 0px',
                    xs: '0px 0px',
                },
                height: '100%',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid #ccc',
                alignItems: 'center',
                flexDirection: {
                    lg: 'row',
                    md: 'row',
                    sm: 'column',
                    xs: 'column'
                }
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
                        <Typography component="div" variant="h6" fontSize={26} color='#191919' fontWeight='bold'>
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="p"
                            sx={{ color: 'text.secondary' }}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                        <Button
                            variant='outlined'
                            sx={{ mt: 3, width: 200, color: '#595959', borderColor: '#595959' }}>
                            Learn More</Button>
                    </Box>
                </Box>
                <Box p={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: 'auto', borderRadius: '12px' }}
                        image={image}
                        alt={title}
                    />
                </Box>
            </Card>
        </>
    );
}


export default ProductCard