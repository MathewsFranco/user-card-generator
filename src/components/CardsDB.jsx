import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const CardsDB = () => {
  const [data, setData] = useState([]);
  async function getUsers() {
    try {
      const res = await axios.get('http://localhost:3004/users');
      const data = res.data;
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {data.map((user) => (
        <div
          style={{ border: 'solid black 1px', margin: '10px' }}
          key={user.id}
        >
          <UserCard
            avatar={user.avatar}
            name={user.name}
            setName
            age={user.age}
            setAge
            address={user.age}
            setAddress
            email={user.email}
            setEmail
            accNum={user.accNum}
            setAccNum
            cashier={user.cashier}
            setCashier
          />
        </div>
      ))}
    </>
  );
};

export default CardsDB;
