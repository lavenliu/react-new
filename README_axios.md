
# Axios

Promise based HTTP client for the brower and node.js.

使用文档：`https://github.com/axios/axios`

# 基本使用

```js
// import JSONP from 'jsonp';
// import axios from 'axios';

// let JSONP = require('jsonp');
let axios = require('axios');
axios.get('http://localhost:5000/users/').then(res => {console.log(res.data)});


// let promise = new Promise((resolve, reject) => {
// 	JSONP('http://localhost:5000/users/', {
// 		param: 'callback'
// 	}, function(err, response) {
// 		if (1 > 0) {
// 			resolve(response);
// 		} else {
// 			reject(err.message);
// 		}
// 	})
// });

// promise.then((data) => console.log(data));
```
