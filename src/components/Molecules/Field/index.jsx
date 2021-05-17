import React from 'react';
import Label from '../../Atoms/Label';
import Input from '../../Atoms/Input';

const Field = ({ label, ...props }) => {
  return (
    <Label>
      {label}
      <Input type="text" {...props} />
    </Label>
  );
};

export default Field;
