import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Check } from '@mui/icons-material';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 11,
        left: 'calc(-50% + 10px)',
        right: 'calc(50% + 10px)',
        [theme.breakpoints.up('sm')]: {
            top: 18,
            left: 'calc(-50% + 21px)',
            right: 'calc(50% + 21px)'
        }
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#40912A"
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#40912A"
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 4,
        border: 0,
        backgroundColor: '#979797',
        borderRadius: 1,
        [theme.breakpoints.up('sm')]: {
            height: 6
        },
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
    backgroundColor: '#979797',
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    fontSize: 13,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        width: 42,
        height: 42,
        fontSize: 16
    },
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[100],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundColor: "#40912A"
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                backgroundColor: "#40912A"
            },
        },
    ],
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {completed ? (
                <Check sx={{ 
                    fontSize: {
                        xs: '16px',
                        sm: '24px'
                    }
                }} />
            ) : (
                <span style={{ fontSize: 'inherit' }}>{props.icon}</span>
            )}
        </ColorlibStepIconRoot>
    );
}

const steps = ['1', '2', '3', '4', '5', '6'];

export interface ComponentProps {
    activeStep: number;
}

export default function CustomizedSteppers({ activeStep }: ComponentProps) {
    const theme = useTheme();
    
    return (
        <Stack sx={{ width: '100%' }} mb={2}>
            <Stepper 
                alternativeLabel 
                activeStep={activeStep - 1} 
                className='stepper-custom' 
                connector={<ColorlibConnector />}
                sx={{
                    '& .MuiStepConnector-root': {
                        marginLeft: 0,
                        marginRight: 0
                    }
                }}
            >
                {steps.map((label) => (
                    <Step key={label} sx={{
                        '&.MuiStep-root': {
                            padding: 0,
                            [theme.breakpoints.up('sm')]: {
                                padding: '0 8px'
                            }
                        }
                    }}>
                        <StepLabel StepIconComponent={ColorlibStepIcon} />
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
