let a = ['A', 'B', 'C'];

a.forEach(function (element, index, array) {
	// element: 指向当前元素的值
	// index: 指向当前索引
	// array: 指向Array对象本身
	console.log(element + ', index =' + index + ", " + array);
})

a.forEach(function (element, index) {
	// element: 指向当前元素的值
	// index: 指向当前索引
	// array: 指向Array对象本身
	console.log(element + ', index =' + index);
})

a.forEach(function (element) {
	// element: 指向当前元素的值
	// index: 指向当前索引
	// array: 指向Array对象本身
	console.log(element);
})
