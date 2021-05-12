import React, { useState } from 'react';
import saveUser from '../functions/saveUser';

import handleNewUser from '../functions/handleNewUser';
import UserInput from './UserInput';
import PrimaryButton from './PrimaryButton';

export default function UserCard() {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('https://via.placeholder.com/128');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [accNum, setAccNum] = useState('');
  const [cashier, setCashier] = useState('');

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
      <PrimaryButton
        onClick={() =>
          handleNewUser({
            setName,
            setAvatar,
            setAge,
            setAddress,
            setEmail,
            setAccNum,
            setCashier,
          })
        }
      >
        New User
      </PrimaryButton>
      <button
        onClick={() => {
          saveUser({ name, avatar, age, address, email, accNum, cashier });
          handleNewUser({
            setName,
            setAvatar,
            setAge,
            setAddress,
            setEmail,
            setAccNum,
            setCashier,
          });
        }}
      >
        Save
      </button>
    </div>
  );
}
