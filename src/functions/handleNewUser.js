import getUserData from './getUserData';

export default function handleNewUser({
  setName,
  setAvatar,
  setAge,
  setAddress,
  setEmail,
  setAccNum,
  setCashier,
}) {
  const newUser = getUserData();
  setName(newUser.name);
  setAvatar(newUser.avatar);
  setAge(newUser.age);
  setAddress(newUser.address);
  setEmail(newUser.email);
  setAccNum(newUser.accNum);
  setCashier(newUser.cashier);
}
