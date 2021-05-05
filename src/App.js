import React, { useState } from 'react';
import Header from './Header';
import faker from 'faker';
import axios from 'axios';

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getUserData() {
  return {
    name: faker.fake('{{name.prefix}} {{name.firstName}} {{name.lastName}}'),
    age: randomNum(21, 103),
    address: faker.fake(
      '{{address.streetAddress}}, {{address.cityName}}, {{address.country}}',
    ),
    email: faker.internet.email(),
    accNum: faker.finance.account(),
    cashier: `$${faker.finance.amount()}`,
    avatar: faker.image.avatar(),
  };
}

function UserCard() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [accNum, setAccNum] = useState('');
  const [cashier, setCashier] = useState('');

  function handleNewUser() {
    const newUser = getUserData();
    setName(newUser.name);
    setAvatar(newUser.avatar);
    setAge(newUser.age);
    setAddress(newUser.address);
    setEmail(newUser.email);
    setAccNum(newUser.accNum);
    setCashier(newUser.cashier);
    console.log(newUser);
  }

  async function createUser() {
    const curUser = {
      name,
      avatar,
      age,
      address,
      email,
      accNum,
      cashier,
    };
    // TODO: validate obj function
    if (name && age && address && email && accNum && cashier) {
      const res = await axios.post('http://localhost:3004/users', {
        ...curUser,
      });
      console.log(`🚀 ~ res`, res);
    }
    handleNewUser();
  }

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
      <button onClick={() => handleNewUser()}>New</button>
      <button onClick={() => createUser()}>Save</button>
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
