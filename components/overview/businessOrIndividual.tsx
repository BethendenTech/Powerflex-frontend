import React, { useState } from 'react';

export const BusinessOrIndividualCheckBox = () => {
  // Define the available roles (can be replaced with dynamic data)
  const roles = [
    { id: 1, title: 'Business' },
    { id: 2, title: 'Individual' },
  ];

  // State to manage selected roles
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Handle checkbox toggle
  const handleToggle = (id) => {
    setSelectedRoles(prevSelected => 
      prevSelected.includes(id)
        ? prevSelected.filter(roleId => roleId !== id) // Remove from selected if already checked
        : [...prevSelected, id] // Add to selected if unchecked
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="font-harmonia text-[16px] font-normal leading-[20.8px] text-left text-black">Are you a business or individual?</h2>
      <div className="grid grid-cols-2 gap-4 pt-2 mt-2">
        {roles.map((role) => (
          <label key={role.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={role.id}
              checked={selectedRoles.includes(role.id)}
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

