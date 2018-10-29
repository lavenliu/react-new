let a = ['A', 'B', 'C'];
let s = new Set(['A', 'B', 'C']);
let m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);

for (const x of a) { // 遍历Array
    console.log(x);
}

for (const x of s) { // 遍历Set
    console.log(x);
}

for (const x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
