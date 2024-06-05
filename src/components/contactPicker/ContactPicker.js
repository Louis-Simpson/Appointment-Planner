import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {

  return (
    <div>
      <select 
      onChange={onChange}
      value={value}
      name={name}
      >
        <option  value={""} key={-1}>No Contact Selected</option>
        {contacts.map((contact) => {
          return (
          <option key={contact} value={contact}>
            {contact}
          </option>
        );
        })}
     </select>

    </div>
  );
};
