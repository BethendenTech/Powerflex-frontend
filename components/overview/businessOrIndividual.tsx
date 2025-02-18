"use client";

import { businessRoles } from '@/utils/formData';
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { FormTitle } from '../form/style';

export const BusinessOrIndividualCheckBox = (props) => {
  const { value, handleToggle } = props

  return (
    <FormControl fullWidth>
      <FormTitle sx={{ color: '#424242' }}>Are you a business or individual?</FormTitle>
      <FormGroup
        row
      >
        {businessRoles && businessRoles.map((role, index) => (
          <FormControlLabel
            key={`role-${index}`}
            control={
              <Checkbox checked={role.id == value} onChange={() => handleToggle(role.id)} value={role.id} />
            }
            label={role.title}
            sx={{
              "&.MuiFormControlLabel-root span": {
                fontFamily: "'Harmonia Sans Pro', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
              }
            }}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

