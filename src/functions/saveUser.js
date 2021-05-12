import axios from 'axios';

export default async function saveUser({
  name,
  avatar,
  age,
  address,
  email,
  accNum,
  cashier,
}) {
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
}
