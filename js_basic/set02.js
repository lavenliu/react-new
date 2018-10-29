let set = new Set(['red', 'green', 'blue']);

for (const item of set.keys()) {
    console.log(item);
}

for (const item of set.values()) {
    console.log(item);
}

for (const item of set.entries()) {
    console.log(item);
}

for (const item of set) {
    console.log(item);
}

let set1 = new Set([1, 2, 3]);
set1.forEach((value, key) => console.log(value * 2));

// 遍历的应用
// ...扩展运算符内部使用for...of循环，所以也可以用于Set结构
let set2 = new Set(['red', 'green', 'blue']);
let arr = [...set2];
console.log(arr);

let arr2 = [2, 3, 2, 5, 5];
let unique = [...new Set(arr2)];
console.log(unique);

// 数组的map和filter也可用于Set
let set3 = new Set([1, 2, 3]);
set3 = new Set([...set3].map(x => x * 2));
for (const item of set3) {
    console.log(item);
}
set3 = new Set([1, 2, 3, 4, 5].filter(x => (x % 2) == 0));
for (const item of set3) {
    console.log(item);
}

