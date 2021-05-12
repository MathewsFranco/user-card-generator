import React, { useState } from 'react';
import saveUser from '../functions/saveUser';

import handleNewUser from '../functions/handleNewUser';

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
        <label htmlFor="full-name">Name:</label>
        <input
          type="text"
          name="name"
          id="full-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="acc-number">Acc number:</label>
        <input
          type="text"
          name="acc-number"
          id="acc-number"
          value={accNum}
          onChange={(e) => setAccNum(e.target.value)}
        />

        <label htmlFor="cashier">Cashier:</label>
        <input
          type="text"
          name="cashier"
          id="cashier"
          value={cashier}
          onChange={(e) => setCashier(e.target.value)}
        />
      </div>
      <button
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
        New
      </button>
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
