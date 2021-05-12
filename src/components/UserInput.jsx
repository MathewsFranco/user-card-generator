import React from 'react';

function UserInput({ id, label, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input type="text" id={id} {...props} />
    </>
  );
}

export default UserInput;
