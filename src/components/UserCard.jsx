import React from 'react';
import UserInput from './UserInput';

export default function UserCard({
  avatar,
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
}) {
  return (
    <div className="container">
      <img src={avatar} style={{ borderRadius: '50%' }} alt="user-avatar" />
      <div
        className="user-data"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <UserInput
          id="name"
          label="Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UserInput
          id="age"
          label="Age:"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <UserInput
          id="address"
          label="Address:"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <UserInput
          id="email"
          label="Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UserInput
          id="acc-number"
          label="Acc number:"
          value={accNum}
          onChange={(e) => setAccNum(e.target.value)}
        />
        <UserInput
          id="cashier"
          label="Cashier:"
          value={cashier}
          onChange={(e) => setCashier(e.target.value)}
        />
      </div>
    </div>
  );
}
