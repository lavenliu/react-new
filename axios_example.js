const axios = require('axios');

const URL = 'http://localhost:5000/users/'

function getUsers() {
	axios.get(URL).then(res => {
		console.log(res.data)
		res.data.map((item) => {
			console.log(item.id + ": " + item.username + ", " + item.email);
		});
	});
}

function addUser(userInfo) {
	axios.post(URL, userInfo).then(response => {
		console.log(response.data);
	});
}

getUsers();
addUser({username: 'james', email: 'james@qq.com'})
getUsers();
