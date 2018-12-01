

在 `Node.js` 中使用：

```js
const faker = require('faker');

let randomName = faker.name.findName(); // Rowan Nikolaus
let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
let randomCard = faker.helpers.createCard(); // random contact card containing many properties
let randomCity = faker.address.city();

console.log(randomName);
console.log(randomEmail);
console.log(randomCard.name);
console.log(randomCity);
```
