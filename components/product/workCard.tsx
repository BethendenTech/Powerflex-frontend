import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

type WorkDataType = {
    heading: string;
    title: string;
    description: string;
    image: string;
};

const WorkCard: React.FC<WorkDataType> = ({ heading, title, description, image }) => {

    return (
        <Card sx={{
            mt: 2,
            height: '100%',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid #ccc',
            padding: '10px 15px',
            alignItems: "center",
            justifyContent: 'center',
            textAlign: "center"
        }}>
            <CardContent sx={{
                "&.MuiCardContent-root": {
                    height: "100%",
                },
            }}>
                <Typography color="#676767" textAlign="center" fontSize={20} pb={2}>{heading}</Typography>
                <Typography color="#000000" textAlign="center" fontSize={20}>{title}</Typography>

                <Box textAlign="center" justifyItems='center' p={2}>
                    <Box
                        component="img"
                        src={image}
                        sx={{ width: '250px', height: '100px' }}
                    />
                </Box>
                <Typography color="#000000" textAlign="center" fontSize={16}>{description}</Typography>
            </CardContent>
        </Card>
    );
}


export default WorkCard