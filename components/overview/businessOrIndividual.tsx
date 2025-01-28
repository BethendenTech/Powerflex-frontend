"use client";

import updateAction from '@/little-state/action';
import { businessRoles } from '@/utils/formData';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import React from 'react';
import { FormTitle } from '../form/style';

export const BusinessOrIndividualCheckBox = () => {
  const { actions, state } = useStateMachine({ updateAction });

  const handleToggle = (id: any) => {
    actions.updateAction({ business_role: id });
  };

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
              <Checkbox checked={role.id == state.business_role} onChange={() => handleToggle(role.id)} value={role.id} />
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

