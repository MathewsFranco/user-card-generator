import faker from 'faker';

export default function getUserData() {
  return {
    name: faker.fake('{{name.prefix}} {{name.firstName}} {{name.lastName}}'),
    age: faker.datatype.number({ min: 21, max: 72 }),
    address: faker.fake(
      '{{address.streetAddress}}, {{address.cityName}}, {{address.country}}',
    ),
    email: faker.internet.email(),
    accNum: faker.finance.account(),
    cashier: `$${faker.finance.amount()}`,
    avatar: faker.image.avatar(),
  };
}
