import React from 'react';
import UserInfo from '../Organisms/UserInfo';

export default function UserCard({
  avatar,
  name,
  setName,
  setAvatar,
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
  setDisabled,
}) {
  return (
    <div className="container">
      <img src={avatar} style={{ borderRadius: '50%' }} alt="user-avatar" />
      <div
        className="user-data"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <UserInfo
          name={name}
          setName={setName}
          avatar={avatar}
          setAvatar={setAvatar}
          age={age}
          setAge={setAge}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
          accNum={accNum}
          setAccNum={setAccNum}
          cashier={cashier}
          setCashier={setCashier}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      </div>
    </div>
  );
}
