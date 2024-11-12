"use client";

import updateAction from '@/little-state/action';
import { businessRoles } from '@/utils/formData';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import React from 'react';

export const BusinessOrIndividualCheckBox = () => {
  const { actions, state } = useStateMachine({ updateAction });

  const handleToggle = (id: any) => {
    actions.updateAction({ business_role: id });
  };

  return (
    <FormControl fullWidth>
      <FormLabel>Are you a business or individual?</FormLabel>
      <FormGroup
        row
      >
        {businessRoles && businessRoles.map((role) => (
          <FormControlLabel
            control={
              <Checkbox checked={role.id == state.business_role} onChange={() => handleToggle(role.id)} value={role.id} />
            }
            label={role.title}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

