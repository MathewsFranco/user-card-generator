import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CardsDB from './components/CardsDB';
import Header from './components/Organisms/Header';
import PrimaryButton from './components/Atoms/PrimaryButton/PrimaryButton';
import UserCard from './components/Organisms/UserCard';
import handleNewUser from './functions/handleNewUser';
import saveUser from './functions/saveUser';

function App() {
  // should i remove this useState from here? 💩
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/128');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [accNum, setAccNum] = useState('');
  const [cashier, setCashier] = useState('');
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <UserCard
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
            <PrimaryButton
              onClick={() => {
                saveUser({
                  name,
                  avatar,
                  age,
                  address,
                  email,
                  accNum,
                  cashier,
                });
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
            </PrimaryButton>
          </Route>
          <Route path="/cards">
            <Header />
            <CardsDB />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
