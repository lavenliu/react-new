// keyword: resolve, reject, then

// promise结构
// 浏览器打开http://happymmall.com/
// 在浏览器的控制台上输入如下代码
// new Promise((resolve, reject) => {
// 	$.ajax({
// 		url: 'http://happymmall.com/user/get_user_info.do',
// 		type: 'post',
// 		success(res) {
// 			resolve(res);
// 		},
// 		error(err) {
// 			reject(err);
// 		}
// 	});
// }).then((res) => {
// 	// resolve
// 	console.log('success: ', res);
// }, (err) => {
// 	// reject
// 	// reject(err);
// 	console.log('error: ', err);
// });

let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('Resolved.');
});

console.log('Hi!');

// promise链式调用
// 浏览器打开http://happymmall.com/
// 在浏览器的控制台上输入如下代码
let promiseFn1 = new Promise((resolve, reject) => {
	$.ajax({
		url: 'http://happymmall.com/user/get_user_info.do',
		type: 'post',
		success(res) {
			resolve(res);
		},
		error(err) {
			reject(err);
		}
	});
});

let promiseFn2 = new Promise((resolve, reject) => {
	$.ajax({
		url: 'http://happymmall.com/cart/get_cart_product_count.do',
		type: 'post',
		success(res) {
			resolve(res);
		},
		error(err) {
			reject(err);
		}
	});
});

promiseFn1.then(() => {
	console.log('promiseFn1');
	return promiseFn2;
}).then(() => {
	console.log('promiseFn2');
});
