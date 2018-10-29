
// 箭头函数
let value = 2
let value2 = x => 2 * x
let trible = x => {
	return 3 * x
}

console.log('double value', value2(value))
console.log('trible value', trible(value))

// 没有独立作用域
var obj = {
	commonFn: function() {
		console.log(this)
	},
	arrowFn: () => {
		console.log(this)
	}
}

obj.commonFn()  // this 指向 obj 作用域
obj.arrowFn()   // this 指向 obj 所在的作用域。如果在浏览器中执行就会输出window

// 不能用作构造函数
let commonFn = function() {}
let arrowFn = () => {}

console.log(commonFn.prototype)
console.log(arrowFn.prototype) // undefined
