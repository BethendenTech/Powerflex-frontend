"use client";

import updateAction from '@/little-state/action';
import { businessRoles } from '@/utils/formData';
import { useStateMachine } from 'little-state-machine';
import React from 'react';

export const BusinessOrIndividualCheckBox = () => {
  const { actions, state } = useStateMachine({ updateAction });

  const handleToggle = (id: any) => {
    actions.updateAction({ business_role: id });
  };

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="font-harmonia text-[16px] font-normal leading-[20.8px] text-left text-black">Are you a business or individual?</h2>
      <div className="grid grid-cols-2 gap-4 pt-2 mt-2">
        {businessRoles && businessRoles.map((role) => (
          <label key={role.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={role.id}
              checked={state.business_role == role.id}
              onChange={() => handleToggle(role.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="font-harmonia text-[16px] font-normal leading-[20.8px] text-left text-black">{role.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

