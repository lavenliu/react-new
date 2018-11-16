# ES6 基础

## 箭头函数

ES6 允许使用“箭头” (`=>`) 定义函数。

```js
let f = v => v;

// 等同于
let f = function(v) {
	return v;
}
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```js
let f = () => 6;
// 等同于
let f = function() { return 5 };

let sum = (num1, num2) => num1 + num2;
// 等同于
let sum = function(num1, num2) {
	return num1 + num2;
}
```

如果箭头函数的代码块部分多于一条语句，就要用大括号将它们括起来，并且使用 `return` 语句返回。

```javascript
let sum = (num1, num2) => { return num1 + num2; }
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

```javascript
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```

下面是一种特殊情况，虽然可以运行，但会得到错误的结果。

```javascript
let foo = () => { a: 1 };
foo() // undefined
```

上面代码中，原始意图是返回一个对象`{ a: 1 }`，但是由于引擎认为大括号是代码块，所以执行了一行语句`a: 1`。这时，`a`可以被解释为语句的标签，因此实际执行的语句是`1;`，然后函数就结束了，没有返回值。

如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

```javascript
let fn = () => void doesNotReturn();
```


```js
// 箭头函数
let value = 2
let value2 = x => 2 * x
let triple = x => {
	return 3 * x
}

console.log('double value', value2(value))  // 4
console.log('triple value', triple(value))  // 6

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

console.log(commonFn.prototype)  // commonFn {}
console.log(arrowFn.prototype)   // undefined
```

## 遍历数组

```js
let a = [2, 3, 4, 6, 7, 8, 9];

[2, 3, 5, 4, 5, 2, 2].forEach(x => console.log(x));

for (let i of a) {
    console.log(i);
}
```

## Promise

通过封装 `Promise` 公共代码，然后可以在组件中使用其 `then` 方法了。

The `Promise` constructor takes one argument, a callback with two parameters, `resolve` and `reject`. Do something within the callback, perhaps async, then call `resolve` if everything worked, otherwise call `reject`.

```js
let promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

我们怎么使用上面定义的 `promise` 呢：

```js
promise.then(function(result) {
    console.log(result)   // Stuff worked
}, function(err) {
    console.log(err)      // Error: "It broke"
})
```

`then()` takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so we can add a callback for the success or failure case only.

上述完整的例子为：

```js
// keyword: resolve, reject, then

let promise = new Promise(function(resolve, reject) {
	if (1 > 0) {
		console.log('Promise');
		resolve('Stuff worked!');
	} else {
		reject(Error('It broke'));
	}
});

promise.then(function(result) {
	console.log(result);
}, function(err) {
	console.log(err);
});

console.log('Hi!');
```

执行结果为：

```sh
$ node promise02.js
Promise
Hi!
Stuff worked!
```

`then()` isn't the end of the story, we can chain `then`s together to transform values or run additional async actions one after another. **We can stransform values simply by returning the new value:**

```js
// keyword: resolve, reject, then

let promise = new Promise(function(resolve, reject) {
	resolve(1);
});

promise.then(function(val) {
	console.log(val);  // 1
	return val + 2;
}).then(function(val) {
	console.log(val);  // 3
	return val + 2;
}).then(function(val) {
	console.log(val);  // 5
});

console.log('Hi!');
```

运行结果为：

```sh
$ node promise03.js
Hi!
1
3
5
```

## JsonP 插件使用

