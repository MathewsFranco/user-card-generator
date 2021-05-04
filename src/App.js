import React, { useState } from 'react';
import Header from './Header';
import faker from 'faker';

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getUserData() {
  return {
    userName: faker.fake(
      '{{name.prefix}} {{name.firstName}} {{name.lastName}}',
    ),
    userAge: randomNum(21, 103),
    userAddress: faker.fake(
      '{{address.streetAddress}}, {{address.cityName}}, {{address.country}}',
    ),
    userEmail: faker.internet.email(),
    userAccNum: faker.finance.account(),
    userCashier: `$${faker.finance.amount()}`,
    userAvatar: faker.image.avatar(),
  };
}

let user = getUserData();

function UserCard() {
  function handleNewUser() {
    const newUser = getUserData();
    setName(newUser.userName);
    setAvatar(newUser.userAvatar);
    setAge(newUser.userAge);
    setAddress(newUser.userAddress);
    setEmail(newUser.userEmail);
    setAccNum(newUser.userAccNum);
    setCashier(newUser.userCashier);
  }

  const [name, setName] = useState(user.userName);
  const [avatar, setAvatar] = useState(user.userAvatar);
  const [age, setAge] = useState(user.userAge);
  const [address, setAddress] = useState(user.userAddress);
  const [email, setEmail] = useState(user.userEmail);
  const [accNum, setAccNum] = useState(user.userAccNum);
  const [cashier, setCashier] = useState(user.userCashier);
  return (
    <div className="container">
      <img
        src={avatar}
        style={{ borderRadius: '50%' }}
        alt="user-avatar"
        onChange={setAvatar}
      />
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
      <button onClick={() => handleNewUser()}>New</button>
      <button>Save</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <UserCard />
    </div>
  );
}

export default App;
