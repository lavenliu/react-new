let foo = {name: "foo", one: 1, two: 2};

let bar = {three: 3};

bar.__proto__ = foo;

console.log(bar.name);
console.log(bar.one);
console.log(bar.two);
console.log(bar.three);
