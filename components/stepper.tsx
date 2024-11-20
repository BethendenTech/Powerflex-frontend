import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Check } from '@mui/icons-material';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 18,
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
        height: 6,
        border: 0,
        backgroundColor: '#979797',
        borderRadius: 1,
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
    width: 42,
    height: 42,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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
                <Check />
            ) : (
                props.icon
            )}
        </ColorlibStepIconRoot>
    );
}

const steps = ['1', '2', '3', '4', '5'];

export interface ComponentProps {
    activeStep: number;
}

export default function CustomizedSteppers({ activeStep }: ComponentProps) {
    return (
        <Stack sx={{ width: '100%' }} mb={2}>
            <Stepper alternativeLabel activeStep={activeStep - 1} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon} />
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
