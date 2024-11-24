import React from 'react';
import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const TimeDropdown = ({
    name,
    label,
    value,
    onChange,
    disabled,
}: {
    name: string;
    label: string;
    value: string | number;
    onChange: (event: SelectChangeEvent<string | number>) => void; // Use SelectChangeEvent
    disabled: boolean;
}) => {
    // Generate options for 5-min intervals up to 1 hour, then hours up to 24.
    const generateTimeOptions = () => {
        const options = [];

        // Add 5-min intervals up to 1 hour
        for (let i = 5; i <= 60; i += 5) {
            options.push({ label: `${i} mins`, value: i });
        }

        // Add hourly intervals up to 24 hours
        for (let i = 1; i <= 24; i++) {
            options.push({ label: `${i} hour${i > 1 ? 's' : ''}`, value: i * 60 }); // Store in minutes
        }

        return options;
    };

    const timeOptions = generateTimeOptions();

    return (
        <FormControl fullWidth size="small" disabled={disabled}>
            {label && <InputLabel id={`${name}-time-label`}>{label}</InputLabel>}
            <Select
                labelId={`${name}-time-label`}
                name={name}
                value={value}
                onChange={onChange} // Correct type of event
                IconComponent={UnfoldMoreIcon}
            >
                {timeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default TimeDropdown;
