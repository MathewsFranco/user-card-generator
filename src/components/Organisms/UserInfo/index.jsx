import React from 'react';
import Field from '../../Molecules/Field';

const index = ({
  name,
  setName,
  age,
  setAge,
  address,
  setAddress,
  email,
  setEmail,
  accNum,
  setAccNum,
  cashier,
  setCashier,
  disabled,
  // setDisabled,
}) => {
  return (
    <>
      <Field
        label="Name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={disabled}
      />
      <Field
        label="Age:"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        disabled={disabled}
      />
      <Field
        label="Address:"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        disabled={disabled}
      />
      <Field
        label="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled}
      />
      <Field
        label="Acc number:"
        value={accNum}
        onChange={(e) => setAccNum(e.target.value)}
        disabled={disabled}
      />
      <Field
        label="Cashier:"
        value={cashier}
        onChange={(e) => setCashier(e.target.value)}
        disabled={disabled}
      />
    </>
  );
};

export default index;
