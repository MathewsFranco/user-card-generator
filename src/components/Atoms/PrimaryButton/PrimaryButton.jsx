import React from 'react';

const PrimaryButton = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

export default PrimaryButton;
