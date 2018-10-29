const s = new Set();  // 这个分号是必须的，不然下面的语句会报错

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
	console.log(i);
}
