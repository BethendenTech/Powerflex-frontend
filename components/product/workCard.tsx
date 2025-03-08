import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';

type WorkDataType = {
    heading: string;
    title: string;
    description: string;
    image: string;
};

const WorkCard: React.FC<WorkDataType> = ({ heading, title, description, image }) => {

    return (
        <>
            <Box mb={2} justifyContent="center">
                <Typography color="#676767" textAlign="center" fontSize={20} pb={2}>{heading}</Typography>
                <Typography color="#000000" textAlign="center" fontSize={20}>{title}</Typography>
            </Box>
            <Card sx={{
                mt: 2,
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                padding: 0,
                textAlign: "center",
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: 'flex-start',
                minHeight: '273px',
            }}>
                <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "auto" }}
                    image={image}
                    alt="dhsj"
                />
                <CardContent sx={{
                    flex: 1
                }}>
                    <Typography color="#000000" textAlign="center" fontSize={16}>{description}</Typography>
                </CardContent>
            </Card>
        </>
    );
}


export default WorkCard