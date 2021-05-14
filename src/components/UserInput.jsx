import React from 'react';
import SecondaryButton from './SecondaryButton';

function UserInput({ id, label, disabled, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} disabled={disabled} {...props} />
      <SecondaryButton>test</SecondaryButton>
    </>
  );
}

export default UserInput;
